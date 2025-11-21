"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useTranslations } from 'next-intl';

export default function MyThreeScene() {
  const mountRef = useRef(null);
  const t = useTranslations("Homepage.Hero")

  useEffect(() => {
    if (!mountRef.current) return;

    // Container ve boyutlar
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // === SCENE ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x160016);

    // === CAMERA ===
    // Burada z değerini 21 yerine 35 yapıyoruz
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.set(0, 4, 35);

    // === RENDERER ===
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // === ORBIT CONTROLS ===
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false; // Tekerlek olayını yakalamıyor

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

    // Animasyon
        const clock = new THREE.Clock();
        const zoomDuration = 2.0;   // 2 saniyede yaklaşma
        const startZ = 60;
        const endZ = 35;
        function animate() {
      requestAnimationFrame(animate);
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

    // Zoom + Scroll
    let isInside = false;
    function handleEnter() {
      isInside = true;
    }
    function handleLeave() {
      isInside = false;
    }
    renderer.domElement.addEventListener("mouseenter", handleEnter);
    renderer.domElement.addEventListener("mouseleave", handleLeave);

    function handleWheel(event) {
      if (isInside) {
        const zoomFactor = 0.02;
        camera.position.z += event.deltaY * zoomFactor;
      }
    }
    renderer.domElement.addEventListener("wheel", handleWheel, { passive: true });

    // Resize
    function handleResize() {
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      renderer.setSize(newW, newH);
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
    }

    if (typeof window !== "undefined") {
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mouseenter", handleEnter);
      renderer.domElement.removeEventListener("mouseleave", handleLeave);
      renderer.domElement.removeEventListener("wheel", handleWheel);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      g.dispose();
      m.dispose();
    };
  }
  }, []);

  return (
    <div className="" style={{ position: "relative", width: "100vw", height: "80vh" }}>
      {/* 3D Canvas */}
      <div
        ref={mountRef}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      />

      {/* Yazılar + Button */}
      <div
        className="flex left-[4%] lg:left-[9%] xl:left-[12%] top-[28%] lg:top-[32%] flex-col gap-4 justify-center text-start bg-black/40 lg:bg-transparent"
        style={{
          position: "absolute",
          color: "#fff",
          zIndex: 50,
        }}
      >
        <h1
          className="lg:w-[60%] xl:w-[55%] font-inter28 -tracking-[0.48px] lg:tracking-[-1.12px] leading-[120%] lg:leading-[130%] text-[24px] lg:text-[26px] font-bold "
        >
         {t("title")}
        </h1>
        <p className="w-[95%] lg:w-[40%] font-inter28 text-[14px] lg:text-[16px] font-medium leading-[115%] lg:leading-[120%] -tracking-[0.28px]">
      {t.rich("subtitle", {
        strong: (chunks) => (
          <span className="font-extrabold">
            {chunks}
          </span>
        ),
      })}
    </p>

    <p className="w-[95%] lg:w-[40%] font-inter28 text-[14px] lg:text-[16px] font-medium leading-[115%] lg:leading-[120%] -tracking-[0.28px]">
      {t.rich("subtitle2", {
        strong: (chunks) => (
          <span className="font-extrabold">
            {chunks}
          </span>
        ),
      })}
    </p>
    
        <ul className="lg:w-[40%] font-inter28 text-[14px] lg:text-[16px] font-medium leading-[130%] lg:leading-[25.2px] -tracking-[0.28px] list-disc ml-8">
          <li > Otel & turizm odaklı 360° dijital pazarlama</li>
          <li>Next.js & React tabanlı, hızlı ve SEO uyumlu web siteleri</li>
          <li>TR–EN–DE–RU çok dilli çağrı merkezi ve mesaj yönetimi</li>
          <li>Looker Studio ile şeffaf, gerçek zamanlı performans raporlama</li>
        </ul>
        
        
       <div className="flex gap-4">
         <Link href="/antalya-dijital-pazarlama-hizmetleri" className="flex items-center gradient-border-button w-[184px] h-[42px] text-[14px] ml-3 font-bold justify-center font-inter leading-[16.8px] tracking-[-0.28px] "> {t("button")}</Link>
        <style jsx>{`
        .gradient-border-button {
          position: relative;
          padding: 3px 0px;
          font-size: 14px;
          font-weight: 600;
          background: transparent;
          color: #fff;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          z-index: 1;
          overflow: hidden;
        }
        .gradient-border-button::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: inherit;
          padding: 3px;
          background: linear-gradient(
            90deg, 
            #A754CF, /* pembe ton */
            #54B9CF, /* altın ton */
            #547DCF, /* açık yeşil ton */
            #A754CF  /* tekrar pembe */
          );
          background-size: 300%;
          /* "Maskeleme" tekniği: sadece kenarlarda renk gözüksün */
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          transition: background-position 0.1s;
        }

        /* Hover'da gradientin akışını animasyonla */
        .gradient-border-button:hover::before {
          animation: moveBorder 3s linear infinite;
        }

        @keyframes moveBorder {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>

       <Link href="/contact" className="flex items-center gradient-border-button w-[130px] h-[42px] text-[14px] ml-3 font-bold justify-center font-inter leading-[16.8px] tracking-[-0.28px] "> {t("button2")}</Link>
        <style jsx>{`
        .gradient-border-button {
          position: relative;
          padding: 3px 0px;
          font-size: 14px;
          font-weight: 600;
          background: transparent;
          color: #fff;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          z-index: 1;
          overflow: hidden;
        }
        .gradient-border-button::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: inherit;
          padding: 3px;
          background: linear-gradient(
            90deg, 
            #A754CF, /* pembe ton */
            #54B9CF, /* altın ton */
            #547DCF, /* açık yeşil ton */
            #A754CF  /* tekrar pembe */
          );
          background-size: 300%;
          /* "Maskeleme" tekniği: sadece kenarlarda renk gözüksün */
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          transition: background-position 0.1s;
        }

        /* Hover'da gradientin akışını animasyonla */
        .gradient-border-button:hover::before {
          animation: moveBorder 3s linear infinite;
        }

        @keyframes moveBorder {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
       </div>
      </div>
    </div>
  );
}
