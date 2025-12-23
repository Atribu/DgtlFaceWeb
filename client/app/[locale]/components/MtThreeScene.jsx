"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function MyThreeScene() {
  const mountRef = useRef(null);

  const rendererRef = useRef(null);
  const recorderRef = useRef(null);
  const chunksRef = useRef([]);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    container.innerHTML = "";
    
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x160016);

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.set(0, 4, 35);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });

    // Kalite/performans dengesi:
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;

    // ... senin particle / shader kodların aynen burada ...
     // === PARTİKÜLLER ===
    const gu = { time: { value: 0 } };
    let sizes = [];
    let shift = [];

    function pushShift() {
      shift.push(
        Math.random() * Math.PI,
        Math.random() * Math.PI * 2,
        (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
        Math.random() * 0.9 + 0.1
      );
    }

    // 50k küresel
    let pts = new Array(50000).fill().map(() => {
      sizes.push(Math.random() * 1.5 + 0.5);
      pushShift();
      return new THREE.Vector3()
        .randomDirection()
        .multiplyScalar(Math.random() * 0.5 + 9.5);
    });

    // 100k silindirik
    for (let i = 0; i < 100000; i++) {
      let r = 10;
      let R = 40;
      let rand = Math.pow(Math.random(), 1.5);
      let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
      pts.push(
        new THREE.Vector3().setFromCylindricalCoords(
          radius,
          Math.random() * 2 * Math.PI,
          (Math.random() - 0.5) * 2
        )
      );
      sizes.push(Math.random() * 1.5 + 0.5);
      pushShift();
    }

    const g = new THREE.BufferGeometry().setFromPoints(pts);
    g.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1));
    g.setAttribute("shift", new THREE.Float32BufferAttribute(shift, 4));

    const m = new THREE.PointsMaterial({
      size: 0.125,
      sizeAttenuation: true,
      alphaTest: 0.5,
      transparent: true,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      onBeforeCompile: (shader) => {
        shader.uniforms.time = gu.time;
        // Vertex Shader
        shader.vertexShader = `
          uniform float time;
          attribute float sizes;
          attribute vec4 shift;
          varying vec3 vColor;
          ${shader.vertexShader}
        `
          .replace("gl_PointSize = size;", "gl_PointSize = size * sizes;")
          .replace(
            "#include <color_vertex>",
            `#include <color_vertex>
             float dd = length(abs(position) / vec3(27., 15., 27));
             dd = clamp(dd, 0., 1.);
             
             vec3 c1 = vec3(84., 124., 207.) / 255.0 * 0.9;  
             vec3 c2 = vec3(167., 84., 207.) / 255.0 * 0.1; 
             vColor = mix(c1, c2, dd);
            `
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
             float t = time;
             float moveT = mod(shift.x + shift.z * t, PI2);
             float moveS = mod(shift.y + shift.z * t, PI2);
             transformed += vec3(
               cos(moveS) * sin(moveT),
               cos(moveT),
               sin(moveS) * sin(moveT)
             ) * shift.w;
            `
          );
        // Fragment Shader
        shader.fragmentShader = `
          varying vec3 vColor;
          ${shader.fragmentShader}
        `
          .replace(
            /void main\(\)\s*\{/,
            `void main() {
             float d = length(gl_PointCoord.xy - 0.5);
             if (d > 0.5) discard;

             float ringThickness = 0.02;
             float ringStart = 0.5 - ringThickness;
             float ringFactor = smoothstep(ringStart, 0.5, d);
             vec3 borderColor = vec3(0.1, 0.1, 0.3);
             vec3 finalColor = mix(vColor, borderColor, ringFactor);

             float alpha = smoothstep(0.5, 0.1, d) * 0.5 + 0.5;
        `
          )
          .replace(
            "vec4 diffuseColor = vec4( diffuse, opacity );",
            `vec4 diffuseColor = vec4(finalColor, alpha);`
          );
      },
    });

    const p = new THREE.Points(g, m);
    p.rotation.order = "ZYX";
    p.rotation.z = 0.2;
    p.position.x = 15;
    scene.add(p);
    //-------------

    let rafId;
    const clock = new THREE.Clock();
       const zoomDuration = 2.0;   // 2 saniyede yaklaşma
        const startZ = 60;
        const endZ = 35;
        
    function animate() {
      rafId = requestAnimationFrame(animate);
      // render loop...
      let elapsed = clock.getElapsedTime();
      let t = elapsed * 0.5;
      let a = clock.getElapsedTime() * 0.5;
      gu.time.value = t * Math.PI;
      p.rotation.y = t * 0.15;
      gu.time.valuee = a * Math.PI;
      p.rotation.y = a * 0.15;
      if (elapsed < zoomDuration) {
        // 0 .. 1 arası interpolation
        let factor = elapsed / zoomDuration;
        // lineer interpolasyon: z = startZ * (1-factor) + endZ * factor
        camera.position.z = startZ * (1 - factor) + endZ * factor;
      } else {
        // 2sn sonrası sabit endZ
        camera.position.z = endZ;
      }

      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    function handleResize() {
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      renderer.setSize(newW, newH);
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      renderer.dispose();
        rendererRef.current = null; 
    };
  }, []);

const startRecording = () => {
  try {
    const renderer = rendererRef.current;
    if (!renderer) {
      console.log("rendererRef.current is null");
      return;
    }

    const canvas = renderer.domElement;
    if (!canvas.captureStream) {
      console.log("captureStream not supported");
      return;
    }

    const stream = canvas.captureStream(60);

    const mimeCandidates = [
      "video/webm;codecs=vp9",
      "video/webm;codecs=vp8",
      "video/webm",
    ];
    const mimeType = mimeCandidates.find((m) => MediaRecorder.isTypeSupported(m)) || "";

    chunksRef.current = [];

    const rec = new MediaRecorder(stream, {
      mimeType,
      videoBitsPerSecond: 12_000_000,
    });

    rec.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
    };

    rec.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: mimeType || "video/webm" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "three-canvas.webm";
      a.click();
      URL.revokeObjectURL(url);
    };

    recorderRef.current = rec;
    rec.start(1000);
    setIsRecording(true);

    console.log("Recording started", mimeType);
  } catch (err) {
    console.error("Recording error:", err);
  }
};

const stopRecording = () => {
  recorderRef.current?.stop();
  setIsRecording(false);
};


  return (
    <div className="relative w-screen h-[90vh]">
      <div ref={mountRef} style={{ width: "100%", height: "100%", overflow: "hidden" }} />

      {/* Kaydet Butonu (test amaçlı) */}
      <div className="absolute top-4 right-4 z-[999] flex gap-2">
        {!isRecording ? (
          <button onClick={startRecording} className="px-3 py-2 rounded-lg bg-white/80">
            REC
          </button>
        ) : (
          <button onClick={stopRecording} className="px-3 py-2 rounded-lg bg-red-500 text-white">
            STOP
          </button>
        )}
      </div>
    </div>
  );
}
