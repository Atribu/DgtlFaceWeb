"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";

const ThreeAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let stats;
    let scene, camera, renderer;
    let animationId;
    let group;
    let raycaster;
    const mouse = new THREE.Vector2();

    function init() {
      // Sahne
      scene = new THREE.Scene();

      // Kamera
      camera = new THREE.PerspectiveCamera(
        40,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        1,
        1000
      );
      camera.position.set(20, 100, -50);
      camera.lookAt(scene.position);

      // Grup oluşturuluyor.
      group = new THREE.Group();
      scene.add(group);

      // Geometri ve malzeme tanımları:
      const geometry = new THREE.BoxGeometry(7, 7, 50);
      const whiteMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
      });
      const coloredMaterial = new THREE.MeshBasicMaterial({
        color: "#7268ae",
        transparent: true,
      });
      const coloredMaterial2 = new THREE.MeshBasicMaterial({
        color: "#7268ae",
        transparent: true,
      });
      // Malzeme dizisi: Ön (4) ve arka (5) yüzler renkli, diğerleri beyaz.
      const materials = [
        whiteMaterial,    // Right
        whiteMaterial,    // Left
        whiteMaterial,    // Top
        whiteMaterial,    // Bottom
        coloredMaterial,  // Front
        coloredMaterial2, // Back
      ];

      // 3x3 grid şeklinde 9 adet küp oluşturuluyor.
      const rowCount = 3;
      const colCount = 3;
      const spacingX = 9;
      const spacingY = 9;
      for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
          const cube = new THREE.Mesh(geometry, materials);
          cube.position.x = (col - (colCount - 1) / 2) * spacingX;
          cube.position.y = (row - (rowCount - 1) / 2) * spacingY;
          cube.position.z = 0;
          group.add(cube);
        }
      }

      // Manuel olarak x, y, z ekseni rotasyonlarını ayarlıyoruz:
      group.rotation.x = Math.PI / 3.4;
      group.rotation.y = Math.PI / 9;
      group.rotation.z = Math.PI / 2.72;

      // Renderer kurulumu
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      containerRef.current.appendChild(renderer.domElement);

      // Stats kurulumu
      stats = new Stats();
      document.body.appendChild(stats.dom);

      // Raycaster kurulumu
      raycaster = new THREE.Raycaster();

      // Fare hareketlerini dinlemek için event listener
      containerRef.current.addEventListener("mousemove", onMouseMove);

      // Pencere yeniden boyutlandırma
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

    function renderScene() {
      // İlk önce tüm küplerin ölçeğini varsayılan değere çekiyoruz.
      group.children.forEach((cube) => {
        // Mevcut ölçek ile hedef ölçek arasında yavaşça geçiş yapıyoruz.
        // Hedef ölçek: Hover edilen küp için 1.5, diğerleri için 1.
        let targetScale = new THREE.Vector3(1, 1, 1);
        const intersects = raycaster.intersectObjects(group.children, false);
        if (intersects.length > 0 && intersects[0].object === cube) {
          targetScale.set(1, 1, 1.5);
        }
        cube.scale.lerp(targetScale, 0.1); // 0.1 lerp faktörü ile yavaş geçiş
      });

      // Raycaster'ı güncelliyoruz:
      raycaster.setFromCamera(mouse, camera);

      renderer.render(scene, camera);
      stats.update();
      animationId = requestAnimationFrame(renderScene);
    }

    init();
    renderScene();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onWindowResize);
      containerRef.current.removeEventListener("mousemove", onMouseMove);
      if (stats && stats.dom && stats.dom.parentNode) {
        stats.dom.parentNode.removeChild(stats.dom);
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

  return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default ThreeAnimation;
