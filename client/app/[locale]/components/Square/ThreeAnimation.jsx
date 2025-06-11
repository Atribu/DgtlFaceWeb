"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GUI } from "dat.gui";
import dynamic from "next/dynamic";


const DatGUI = dynamic(
  () => import("dat.gui").then((mod) => mod.GUI),
  { ssr: false }
);

const ThreeAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // localStorage erişim kontrolü (örnek kullanım)
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        const storedValue = localStorage.getItem("myKey");
        console.log("Stored value:", storedValue);
      } catch (error) {
        console.error("localStorage'a erişim sağlanamıyor:", error);
      }
   

    let animationId;
    let scene, camera, renderer, group, raycaster;
    const mouse = new THREE.Vector2();

    function init() {
      // Sahne ve kamera ayarları
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        40,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        1,
        1000
      );
      camera.position.set(20, 100, -50);
      camera.lookAt(scene.position);

      // Grup oluşturma
      group = new THREE.Group();
      scene.add(group);

      // Texture yükleyici
      const textureLoader = new THREE.TextureLoader();

      // Örnek olarak 9 farklı resim yolu tanımlıyoruz (3x3 grid için)
      const imagePaths = [
        "/analysis.png",
        "/analysis.png",
        "/analysis.png",
        "/analysis.png",
        "/Vector2.png",
        "/analysis.png",
        "/analysis.png",
        "/analysis.png",
        "/analysis.png",
      ];

      // Ortak malzemeler (diğer yüzler için)
      const whiteMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const coloredMaterial = new THREE.MeshBasicMaterial({ color: "#7268ae" });

      // Diğer yüzlerde varsayılan "/analysis.png" resmi kullanılacak
      const analyticsTexture = textureLoader.load("/analysis.png", () => {
        console.log("Analytics Texture loaded");
      });
      analyticsTexture.center.set(0.5, 0.5);
      analyticsTexture.rotation = Math.PI / 4;
      const coloredMaterial2 = new THREE.MeshBasicMaterial({
        map: analyticsTexture,
        color: "#7268ae",
        transparent: true,
      });

      // Küp geometrisi ve UV ölçeklendirme (tüm küpler için ortak base geometry)
      const geometry = new THREE.BoxGeometry(7, 7, 50);
      const scaleFactor = 1.32; // Tüm yüzler için genel ölçeklendirme
      const baseGeometry = geometry.clone();
      const uvAttribute = baseGeometry.attributes.uv;
      for (let i = 0; i < uvAttribute.count; i++) {
        const u = uvAttribute.getX(i);
        const v = uvAttribute.getY(i);
        uvAttribute.setXY(i, u * scaleFactor, v * scaleFactor);
      }
      uvAttribute.needsUpdate = true;

      // 3x3 grid küpler oluşturma
      const rowCount = 3;
      const colCount = 3;
      const spacingX = 9;
      const spacingY = 9;

      for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
          // Her küp için baseGeometry'nin klonunu alıyoruz:
          const customGeometry = baseGeometry.clone();
          const uv = customGeometry.attributes.uv;

          // Eğer bu küpün 6. yüzüne özel bir ayarlama yapmak istiyorsak:
          // BoxGeometry, her yüz için 4 vertex üretir. 6. yüzün (index 5) vertexleri, 
          // dizide 5*4 = 20. indeksten başlayarak 4 elemandır (20,21,22,23).
          const faceIndex = 5;
          const startIndex = faceIndex * 4;
          const uniqueScale = 0.8; // 6. yüz üzerindeki texture boyutunu değiştirme oranı
          for (let i = startIndex; i < startIndex + 4; i++) {
            const u = uv.getX(i);
            const v = uv.getY(i);
            uv.setXY(i, u * uniqueScale, v * uniqueScale);
          }
          uv.needsUpdate = true;

          // Her küp için 6. yüzeye (index 5) farklı resim atamak için:
          const cubeIndex = row * colCount + col; // 0'dan 8'e kadar index
          const cubeTexture = textureLoader.load(imagePaths[cubeIndex], () => {
            console.log(`Texture for cube ${cubeIndex} loaded`);
          });
          cubeTexture.center.set(0.5, 0.5);
          cubeTexture.rotation = Math.PI / 4;
          // NOT: repeat kullanmıyoruz, UV'ler ile kontrol ediliyor.

          // O küp için 6. yüzeye özel malzeme oluşturuyoruz:
          const uniqueMaterial = new THREE.MeshBasicMaterial({
            map: cubeTexture,
            transparent: true,
            opacity: 1,
            color: "#4B0082" // Mor renk
          });

          // Malzeme dizisi: diğer yüzler ortak, 6. yüz ise uniqueMaterial
          const materials = [
            whiteMaterial,    // Face 0
            whiteMaterial,    // Face 1
            whiteMaterial,    // Face 2
            whiteMaterial,    // Face 3
            coloredMaterial,  // Face 4
            uniqueMaterial,   // Face 5
          ];

          const cube = new THREE.Mesh(customGeometry, materials);
          cube.position.x = (col - (colCount - 1) / 2) * spacingX;
          cube.position.y = (row - (rowCount - 1) / 2) * spacingY;
          cube.position.z = 0;
          group.add(cube);
        }
      }

      // Grup rotasyonu
      group.rotation.x = Math.PI / 3.4;
      group.rotation.y = Math.PI / 9;
      group.rotation.z = Math.PI / 2.72;

      // Renderer ayarları
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      containerRef.current.appendChild(renderer.domElement);

      // Raycaster ve event listener'lar
      raycaster = new THREE.Raycaster();
      containerRef.current.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", onWindowResize);
    }

    function onMouseMove(event) {
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    }

    function onWindowResize() {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    function animate() {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(group.children, false);

      group.children.forEach((cube) => {
        let targetScale = new THREE.Vector3(1, 1, 1);
        if (intersects.length > 0 && intersects[0].object === cube) {
          targetScale.set(1, 1, 1.5);
        }
        cube.scale.lerp(targetScale, 0.1);
      });

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onWindowResize);
      containerRef.current.removeEventListener("mousemove", onMouseMove);
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
  }
  }, []);

  return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default ThreeAnimation;
