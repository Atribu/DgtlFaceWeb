"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;
// Lighthouse karşılaştırması için geçici poster-only ölçüm anahtarı.
const ENABLE_THREE_SCENE = false;

export default function MyThreeScene() {
  const mountRef = useRef(null);
  const [isCanvasReady, setIsCanvasReady] = useState(false);
  const t = useTranslations("Homepage.Hero");

  useEffect(() => {
    if (!ENABLE_THREE_SCENE) return;

    const isMobileViewport = window.innerWidth < MOBILE_BREAKPOINT;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const saveDataEnabled = Boolean(navigator.connection?.saveData);

    // Mobil, veri tasarrufu ve azaltılmış hareket tercihlerinde poster korunur.
    if (isMobileViewport || prefersReducedMotion || saveDataEnabled) return;

    let sceneCleanup;
    let isSetupCancelled = false;
    let idleCallbackId = null;
    let fallbackTimeoutId = null;

    async function yieldToMainThread() {
      await new Promise((resolve) => window.setTimeout(resolve, 0));
    }

    async function setupScene() {
      const THREE = await import("three");
      if (isSetupCancelled || !mountRef.current) return;

      const container = mountRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;

      const isTabletViewport = window.innerWidth < TABLET_BREAKPOINT;
      const deviceMemory = navigator.deviceMemory || 8;
      const hardwareConcurrency = navigator.hardwareConcurrency || 8;
      const isLowPowerDevice =
        isTabletViewport || deviceMemory <= 4 || hardwareConcurrency <= 4;

      // Tek draw call içinde cihaz gücüne göre 12K veya 24K parçacık.
      const sphereParticleCount = isLowPowerDevice ? 4000 : 8000;
      const cylinderParticleCount = isLowPowerDevice ? 8000 : 16000;
      const totalParticleCount =
        sphereParticleCount + cylinderParticleCount;
      const targetFps = isLowPowerDevice ? 24 : 30;
      const frameInterval = 1000 / targetFps;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x160016);

      const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
      camera.position.set(0, 4, 60);

      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio || 1, isLowPowerDevice ? 1 : 1.25)
      );
      renderer.setSize(width, height);
      renderer.domElement.setAttribute("aria-hidden", "true");
      renderer.domElement.setAttribute("role", "presentation");
      container.appendChild(renderer.domElement);

      function disposePartialScene() {
        renderer.dispose();
        renderer.forceContextLoss();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }

      const positions = new Float32Array(totalParticleCount * 3);
      const sizes = new Float32Array(totalParticleCount);
      const shifts = new Float32Array(totalParticleCount * 4);
      const generationChunkSize = 4000;

      function setParticleAttributes(index) {
        const shiftOffset = index * 4;
        sizes[index] = Math.random() * 1.5 + 0.5;
        shifts[shiftOffset] = Math.random() * Math.PI;
        shifts[shiftOffset + 1] = Math.random() * Math.PI * 2;
        shifts[shiftOffset + 2] =
          (Math.random() * 0.9 + 0.1) * Math.PI * 0.1;
        shifts[shiftOffset + 3] = Math.random() * 0.9 + 0.1;
      }

      // Hesaplama küçük parçalara bölünür; tek bir uzun ana-thread görevi oluşmaz.
      for (let index = 0; index < sphereParticleCount; index += 1) {
        const positionOffset = index * 3;
        const y = Math.random() * 2 - 1;
        const angle = Math.random() * Math.PI * 2;
        const horizontalRadius = Math.sqrt(1 - y * y);
        const radius = Math.random() * 0.5 + 9.5;

        positions[positionOffset] = horizontalRadius * Math.cos(angle) * radius;
        positions[positionOffset + 1] = y * radius;
        positions[positionOffset + 2] =
          horizontalRadius * Math.sin(angle) * radius;
        setParticleAttributes(index);

        if ((index + 1) % generationChunkSize === 0) {
          await yieldToMainThread();
          if (isSetupCancelled) {
            disposePartialScene();
            return;
          }
        }
      }

      for (
        let index = sphereParticleCount;
        index < totalParticleCount;
        index += 1
      ) {
        const positionOffset = index * 3;
        const innerRadius = 10;
        const outerRadius = 40;
        const randomRadius = Math.pow(Math.random(), 1.5);
        const radius = Math.sqrt(
          outerRadius * outerRadius * randomRadius +
            (1 - randomRadius) * innerRadius * innerRadius
        );
        const angle = Math.random() * Math.PI * 2;

        positions[positionOffset] = radius * Math.sin(angle);
        positions[positionOffset + 1] = (Math.random() - 0.5) * 2;
        positions[positionOffset + 2] = radius * Math.cos(angle);
        setParticleAttributes(index);

        if ((index + 1) % generationChunkSize === 0) {
          await yieldToMainThread();
          if (isSetupCancelled) {
            disposePartialScene();
            return;
          }
        }
      }

      if (isSetupCancelled) {
        disposePartialScene();
        return;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("sizes", new THREE.BufferAttribute(sizes, 1));
      geometry.setAttribute("shift", new THREE.BufferAttribute(shifts, 4));

      const animationUniforms = { time: { value: 0 } };
      const material = new THREE.PointsMaterial({
        size: isLowPowerDevice ? 0.18 : 0.17,
        sizeAttenuation: true,
        alphaTest: 0.5,
        transparent: true,
        depthTest: false,
        blending: THREE.AdditiveBlending,
        onBeforeCompile: (shader) => {
          shader.uniforms.time = animationUniforms.time;
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
               float dd = length(abs(position) / vec3(27., 15., 27.));
               dd = clamp(dd, 0., 1.);

               vec3 c1 = vec3(84., 124., 207.) / 255.0 * 0.9;
               vec3 c2 = vec3(167., 84., 207.) / 255.0 * 0.1;
               vColor = mix(c1, c2, dd);
              `
            )
            .replace(
              "#include <begin_vertex>",
              `#include <begin_vertex>
               float moveT = mod(shift.x + shift.z * time, PI2);
               float moveS = mod(shift.y + shift.z * time, PI2);
               transformed += vec3(
                 cos(moveS) * sin(moveT),
                 cos(moveT),
                 sin(moveS) * sin(moveT)
               ) * shift.w;
              `
            );
          shader.fragmentShader = `
            varying vec3 vColor;
            ${shader.fragmentShader}
          `
            .replace(
              /void main\(\)\s*\{/,
              `void main() {
               float d = length(gl_PointCoord.xy - 0.5);
               if (d > 0.5) discard;

               float ringFactor = smoothstep(0.48, 0.5, d);
               vec3 borderColor = vec3(0.1, 0.1, 0.3);
               vec3 finalColor = mix(vColor, borderColor, ringFactor);
               float alpha = smoothstep(0.5, 0.1, d) * 0.5 + 0.5;
              `
            )
            .replace(
              "vec4 diffuseColor = vec4( diffuse, opacity );",
              "vec4 diffuseColor = vec4(finalColor, alpha);"
            );
        },
      });

      const particles = new THREE.Points(geometry, material);
      particles.rotation.order = "ZYX";
      particles.rotation.z = 0.2;
      particles.position.x = 15;
      scene.add(particles);

      const zoomDuration = 2;
      const startZ = 60;
      const endZ = 35;
      let animationElapsed = 0;
      let animationFrameId = null;
      let previousRenderTime = null;
      let isHeroVisible = true;
      let isPageVisible = document.visibilityState === "visible";
      let isDisposed = false;
      let hasRenderedFirstFrame = false;

      function renderFrame() {
        const animationTime = animationElapsed * 0.5;
        animationUniforms.time.value = animationTime * Math.PI;
        particles.rotation.y = animationTime * 0.15;

        if (animationElapsed < zoomDuration) {
          const zoomProgress = animationElapsed / zoomDuration;
          camera.position.z =
            startZ * (1 - zoomProgress) + endZ * zoomProgress;
        } else {
          camera.position.z = endZ;
        }

        renderer.render(scene, camera);

        if (!hasRenderedFirstFrame) {
          hasRenderedFirstFrame = true;
          window.requestAnimationFrame(() => {
            if (!isSetupCancelled) setIsCanvasReady(true);
          });
        }
      }

      function stopAnimation() {
        if (animationFrameId !== null) {
          window.cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
        previousRenderTime = null;
      }

      function animate(frameTime) {
        animationFrameId = null;
        if (isDisposed || !isHeroVisible || !isPageVisible) return;

        if (
          previousRenderTime === null ||
          frameTime - previousRenderTime >= frameInterval
        ) {
          if (previousRenderTime !== null) {
            animationElapsed += Math.min(
              (frameTime - previousRenderTime) / 1000,
              0.1
            );
          }
          previousRenderTime = frameTime;
          renderFrame();
        }

        animationFrameId = window.requestAnimationFrame(animate);
      }

      function startAnimation() {
        if (
          isDisposed ||
          animationFrameId !== null ||
          !isHeroVisible ||
          !isPageVisible
        ) {
          return;
        }
        previousRenderTime = null;
        animationFrameId = window.requestAnimationFrame(animate);
      }

      function updateAnimationState() {
        if (isHeroVisible && isPageVisible) startAnimation();
        else stopAnimation();
      }

      renderFrame();
      startAnimation();

      const visibilityObserver = new IntersectionObserver(
        ([entry]) => {
          isHeroVisible = entry.isIntersecting;
          updateAnimationState();
        },
        { threshold: 0.01 }
      );
      visibilityObserver.observe(container);

      function handlePageVisibility() {
        isPageVisible = document.visibilityState === "visible";
        updateAnimationState();
      }

      function handleResize() {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        if (!newWidth || !newHeight) return;
        renderer.setSize(newWidth, newHeight);
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        if (animationFrameId === null) renderFrame();
      }

      document.addEventListener("visibilitychange", handlePageVisibility);
      window.addEventListener("resize", handleResize);

      sceneCleanup = () => {
        isDisposed = true;
        stopAnimation();
        visibilityObserver.disconnect();
        document.removeEventListener("visibilitychange", handlePageVisibility);
        window.removeEventListener("resize", handleResize);
        scene.remove(particles);
        geometry.dispose();
        material.dispose();
        renderer.renderLists.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    }

    const startSceneSetup = () => {
      setupScene().catch(() => {
        // WebGL desteklenmiyorsa poster ve hero içeriği kullanılabilir kalır.
      });
    };

    if ("requestIdleCallback" in window) {
      idleCallbackId = window.requestIdleCallback(startSceneSetup, {
        timeout: 1200,
      });
    } else {
      fallbackTimeoutId = window.setTimeout(startSceneSetup, 250);
    }

    return () => {
      isSetupCancelled = true;
      if (idleCallbackId !== null) window.cancelIdleCallback(idleCallbackId);
      if (fallbackTimeoutId !== null) window.clearTimeout(fallbackTimeoutId);
      sceneCleanup?.();
    };
  }, []);

  return (
    <div
      className="bg-[#160016]"
      style={{ position: "relative", width: "100vw", height: "82vh" }}
    >
      {/* İlk görüntü ve mobil fallback */}
      <picture className="absolute inset-0" aria-hidden="true">
        <source
          media="(max-width: 767px)"
          srcSet="/images/homepage/three-hero-poster-mobile.webp"
        />
        <img
          src="/images/homepage/three-hero-poster.webp"
          alt=""
          width="1600"
          height="867"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </picture>

      {/* Tablet ve masaüstü için optimize edilmiş canlı 3D canvas */}
      <div
        ref={mountRef}
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-500 ${
          isCanvasReady ? "opacity-100" : "opacity-0"
        }`}
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
        <h1 className="lg:w-[60%] xl:w-[55%] font-inter28 -tracking-[0.48px] lg:tracking-[-1.12px] leading-[120%] lg:leading-[130%] text-[24px] lg:text-[26px] font-bold ">
          {t("title")}
        </h1>
        <p className="w-[95%] lg:w-[40%] font-inter28 text-[14px] lg:text-[16px] font-medium leading-[115%] lg:leading-[120%] -tracking-[0.28px]">
          {t.rich("subtitle", {
            strong: (chunks) => <span className="font-extrabold">{chunks}</span>,
          })}
        </p>

        <p className="w-[95%] lg:w-[40%] font-inter28 text-[14px] lg:text-[16px] font-medium leading-[115%] lg:leading-[120%] -tracking-[0.28px]">
          {t.rich("subtitle2", {
            strong: (chunks) => <span className="font-extrabold">{chunks}</span>,
          })}
        </p>

        <ul className="lg:w-[40%] font-inter28 text-[14px] lg:text-[16px] font-medium leading-[130%] lg:leading-[25.2px] -tracking-[0.28px] list-disc ml-8">
          <li> Otel & turizm odaklı 360° dijital pazarlama</li>
          <li>Next.js & React tabanlı, hızlı ve SEO uyumlu web siteleri</li>
          <li>TR–EN–DE–RU çok dilli çağrı merkezi ve mesaj yönetimi</li>
          <li>Looker Studio ile şeffaf, gerçek zamanlı performans raporlama</li>
        </ul>

        <div className="flex gap-4">
          <Link
            href="/antalya-dijital-pazarlama-hizmetleri"
            className="flex items-center gradient-border-button w-[184px] h-[42px] text-[14px] ml-3 font-bold justify-center font-inter leading-[16.8px] tracking-[-0.28px] "
          >
            {t("button")}
          </Link>
          <Link
            href="/contact"
            className="flex items-center gradient-border-button w-[130px] h-[42px] text-[14px] ml-3 font-bold justify-center font-inter leading-[16.8px] tracking-[-0.28px] "
          >
            {t("button2")}
          </Link>
        </div>

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
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 3px;
            background: linear-gradient(
              90deg,
              #a754cf,
              #54b9cf,
              #547dcf,
              #a754cf
            );
            background-size: 300%;
            -webkit-mask:
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
          }
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
  );
}
