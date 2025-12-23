"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GUI } from "dat.gui"; // dat.gui kurulu olduğundan emin olun (npm i dat.gui)

// GLSL Shader kodlarını string olarak tutuyoruz
const vertexShader = `
// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Birçok noise fonksiyonu burada olduğu gibi direkt gömülü...
// (Aynı şekilde kopyalıyoruz)

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise
float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;
  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010),
                                  dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011),
                                  dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;
  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.y, Pf0.z));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.x, Pf1.y, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.x, Pf0.y, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.y, Pf1.z));
  float n111 = dot(g111, Pf1);
  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110),
                 vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep) {
  vec3 Pi0 = mod(floor(P), rep);
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;
  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010),
                                  dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011),
                                  dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;
  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.y, Pf0.z));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.x, Pf1.y, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.x, Pf0.y, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.y, Pf1.z));
  float n111 = dot(g111, Pf1);
  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110),
                 vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 1.5 * n_xyz;
}

// Turbulence fonksiyonu
float turbulence(vec3 p) {
  float t = -0.1;
  for (float f = 1.0; f <= 3.0; f++) {
    float power = pow(2.0, f);
    t += abs(pnoise(vec3(power * p), vec3(10.0)) / power);
  }
  return t;
}

varying vec2 vUv;
varying float noise;
varying float qnoise;
varying float displacement;

uniform float time;
uniform float pointscale;
uniform float decay;
uniform float complex;
uniform float waves;
uniform float eqcolor;
uniform bool fragment;

void main() {
  vUv = uv;
  noise = (1.0 * -waves) * turbulence(decay * abs(normal + time));
  qnoise = (2.0 * -eqcolor) * turbulence(decay * abs(normal + time));
  float b = pnoise(complex * (position) + vec3(1.0 * time), vec3(100.0));
  
  if (fragment == true) {
    displacement = - sin(noise) + normalize(b * 0.5);
  } else {
    displacement = - sin(noise) + cos(b * 0.5);
  }
  
  vec3 newPosition = position + (normal * displacement);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  gl_PointSize = pointscale;
}
`;

const fragmentShader = `
varying float qnoise;
uniform float time;
uniform bool redhell; // Bu örnekte kullanılmıyor

void main() {
  // qnoise -1..+1 aralığından 0..1 aralığına ölçekleniyor
  float t = (qnoise * 0.5) + 0.5;
  
  // Renk tanımları (RGB değerleri 0-1 aralığında)
  vec3 startColor = vec3(163.0/255.0, 87.0/255.0, 207.0/255.0); // #a357cf
  vec3 midColor   =  vec3(118.0/255.0, 109.0/255.0, 207.0/255.0); // #756dce
  vec3 endColor   = vec3(84.0/255.0, 124.0/255.0, 207.0/255.0);  // #547CCF

  //   vec3 startColor = vec3(85.0/255.0, 144.0/255.0, 207.0/255.0); // #5590cf
  // vec3 midColor   = vec3(84.0/255.0, 185.0/255.0, 207.0/255.0);  // #54B9CF
  // vec3 endColor   = vec3(84.0/255.0, 124.0/255.0, 207.0/255.0);  // #547CCF
  
  vec3 finalColor;
  
  if (t < 0.5) {
    // 0.0 - 0.2 aralığında startColor -> midColor geçişi
    float localT = smoothstep(0.0, 0.2, t);
    finalColor = mix(startColor, midColor, localT);
  } else {
    // 0.5 - 1.0 aralığında midColor -> endColor geçişi
    float localT = smoothstep(0.5, 1.0, t);
    finalColor = mix(midColor, endColor, localT);
  }
  
  gl_FragColor = vec4(finalColor, 1.0);
}

`;

function FireballExplosionBlack() {
  const containerRef = useRef(null);
  const guiRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, animationId;
    let _primitive, mat;

    // Tema: beyaz arka plan
    const Theme = { _darkred: 0x080612 }; 

    scene = new THREE.Scene();
    scene.background = new THREE.Color(Theme._darkred);

    // Kamera; başlangıçta geçici boyutlar kullanıyoruz (sonra setRendererSize güncelleyecek)
    camera = new THREE.PerspectiveCamera(55, 1, 1, 1000);
    camera.position.z = 12;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });

    // Container'ın içine canvas'ı ekliyoruz
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Canvas boyutunu container'ın boyutlarına göre ayarlayan fonksiyon
    function setRendererSize() {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    }
    setRendererSize();

    // Pencere yeniden boyutlandığında container boyutlarını güncelle
    const onWindowResize = () => {
      setRendererSize();
    };
    window.addEventListener("resize", onWindowResize);

    // SHADER MATERIAL
    mat = new THREE.ShaderMaterial({
      wireframe: false,
      uniforms: {
        time: { value: 0.0 },
        pointscale: { value: 0.0 },
        decay: { value: 0.0 },
        complex: { value: 0.0 },
        waves: { value: 0.0 },
        eqcolor: { value: 0.0 },
        fragment: { value: true },
        redhell: { value: true },
      },
      vertexShader,
      fragmentShader,
    });

    // GEOMETRY: IcosahedronGeometry(3.5, 150)
    const geo = new THREE.IcosahedronGeometry(3.5, 50);
    const mesh = new THREE.Points(geo, mat);
    _primitive = new THREE.Object3D();
    _primitive.add(mesh);
    scene.add(_primitive);

    // OPTIONS & GUI (dat.GUI)
    const options = {
      perlin: {
        vel: 0.002,
        speed: 0.0005,
        perlins: 1.0,
        decay: 0.1,
        complex: 0.3,
        waves: 20.0,
        eqcolor: 11.0,
        fragment: true,
        redhell: true,
      },
      spin: {
        sinVel: 0.0,
        ampVel: 80.0,
      },
    };

    guiRef.current = new GUI({ autoPlace: false });
    const camGUI = guiRef.current.addFolder("Camera");
    camGUI.add(camera.position, "z", 3, 20).name("Zoom").listen();
    camGUI.add(options.perlin, "vel", 0.0, 0.02).name("Velocity").listen();

    const mathGUI = guiRef.current.addFolder("Math Options");
    mathGUI.add(options.spin, "sinVel", 0.0, 0.5).name("Sine").listen();
    mathGUI.add(options.spin, "ampVel", 0.0, 90.0).name("Amplitude").listen();

    const perlinGUI = guiRef.current.addFolder("Setup Perlin Noise");
    perlinGUI.add(options.perlin, "perlins", 1.0, 5.0).name("Size").step(1);
    perlinGUI.add(options.perlin, "speed", 0.0, 0.0005).name("Speed").listen();
    perlinGUI.add(options.perlin, "decay", 0.0, 1.0).name("Decay").listen();
    perlinGUI.add(options.perlin, "waves", 0.0, 20.0).name("Waves").listen();
    perlinGUI.add(options.perlin, "fragment", true).name("Fragment");
    perlinGUI.add(options.perlin, "complex", 0.1, 1.0).name("Complex").listen();
    perlinGUI.add(options.perlin, "redhell", true).name("Electroflow");
    perlinGUI.add(options.perlin, "eqcolor", 0.0, 15.0).name("Hue").listen();
    perlinGUI.open();

    const start = Date.now();
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const performance = Date.now() * 0.003;

      _primitive.rotation.y += options.perlin.vel;
      _primitive.rotation.x =
        (Math.sin(performance * options.spin.sinVel) * options.spin.ampVel) *
        (Math.PI / 180);

      mat.uniforms["time"].value =
        options.perlin.speed * (Date.now() - start);
      mat.uniforms["pointscale"].value = options.perlin.perlins;
      mat.uniforms["decay"].value = options.perlin.decay;
      mat.uniforms["complex"].value = options.perlin.complex;
      mat.uniforms["waves"].value = options.perlin.waves;
      mat.uniforms["eqcolor"].value = options.perlin.eqcolor;
      mat.uniforms["fragment"].value = options.perlin.fragment;
      mat.uniforms["redhell"].value = options.perlin.redhell;

      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onWindowResize);

      if (guiRef.current) {
        guiRef.current.destroy();
      }

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div
      ref={containerRef}
      className="
      relative
      flex items-center justify-center
      w-[200px] h-[200px]
      lg:w-[380px] lg:h-[380px]
      bg-transparent m-0 p-0"
    >

      <div style={{
          position: "absolute",
          zIndex: 10,
          color: "#ffffff", // İstediğiniz renk
          fontSize: "22px",
          fontWeight: "bold",
          pointerEvents: "none", // Metne tıklamaları engeller, arka plan ile etkileşim sağlar
        }}>
            DGTLFACE
      </div>
    </div>
    
    </>
  );
}

export default FireballExplosionBlack;
