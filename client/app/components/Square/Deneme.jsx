"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { STLExporter } from "three/examples/jsm/exporters/STLExporter.js";
import { GUI } from "lil-gui";

// Örnek olarak, Analytcis.jsx'teki <svg> içeriğini bir string olarak tanımlayalım.
// (dilerseniz bu SVG'yi bir .svg dosyasında saklayıp fetch ile de alabilirsiniz)
const analyticsSvg = `
<svg width={width} height={height} viewBox="0 0 67 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6484 7.60805L15.8584 10.5981C16.4384 11.0081 16.4884 11.6481 15.9784 12.0181L6.69844 18.7581C6.18844 19.1281 5.29844 19.0981 4.71844 18.6881L0.478436 15.7181C-0.111564 15.3081 -0.171564 14.6681 0.348436 14.2981L9.65844 7.53805C10.1684 7.16805 11.0584 7.19805 11.6484 7.60805Z" fill="#140F25"/>
            <path d="M29.5484 9.68805L33.6984 12.6581C34.2684 13.0681 34.3184 13.6981 33.8084 14.0681L17.1884 26.1281C16.6784 26.4981 15.7984 26.4681 15.2184 26.0681L11.0284 23.1281C10.4484 22.7181 10.3884 22.0881 10.9084 21.7181L27.5784 9.61805C28.0884 9.24805 28.9684 9.27805 29.5484 9.68805Z" fill="#140F25"/>
            <path d="M36.2084 19.7681L40.3184 22.6981C40.8884 23.0981 40.9284 23.7281 40.4284 24.0981L27.5784 33.4281C27.0684 33.7981 26.1984 33.7681 25.6284 33.3681L21.4784 30.4581C20.9084 30.0581 20.8484 29.4281 21.3584 29.0581L34.2584 19.6981C34.7684 19.3281 35.6384 19.3581 36.2084 19.7681Z" fill="#140F25"/>
            <path d="M51.9584 23.0881L56.0184 25.9981C56.5784 26.3981 56.6184 27.0181 56.1184 27.3881L37.8584 40.6481C37.3584 41.0181 36.4884 40.9881 35.9184 40.5981L31.8184 37.7181C31.2484 37.3181 31.1984 36.6981 31.7084 36.3281L50.0284 23.0281C50.5384 22.6581 51.3984 22.6881 51.9584 23.0881Z" fill="#140F25"/>
            <path d="M64.9584 16.5681C63.2884 15.3581 60.6984 15.2681 59.1784 16.3681C58.8784 16.5881 58.6484 16.8481 58.4784 17.1281L50.6584 15.4381C50.6284 14.4881 49.9684 13.5581 48.8784 12.9481C47.7884 12.3281 46.4084 12.1081 45.1684 12.3381L42.6484 7.59805C42.7884 7.52805 42.9184 7.44805 43.0484 7.36805C44.1684 6.55805 44.4284 5.27806 43.7084 4.12806C42.9784 2.97806 41.4084 2.18805 39.7284 2.11805C38.0484 2.04805 36.5784 2.72805 36.0284 3.82805L26.0984 2.41805C25.8784 1.89805 25.4684 1.40805 24.9184 1.00805C23.1784 -0.241945 20.5184 -0.341945 18.9784 0.778055C17.4384 1.89805 17.5984 3.81805 19.3384 5.05805C21.0784 6.29805 23.7284 6.39806 25.2684 5.28805C25.5984 5.03805 25.8584 4.74805 26.0384 4.42805L36.0584 5.84805C36.6484 7.11805 38.2784 8.03805 40.0684 8.12805L42.9484 13.5181C41.9184 14.7581 42.4384 16.4681 44.1484 17.4681C45.8584 18.4681 48.2084 18.4581 49.6184 17.4381C49.6884 17.3881 49.7384 17.3281 49.7984 17.2781L58.2984 19.1081C58.4984 19.6481 58.9084 20.1581 59.4784 20.5681C61.1484 21.7781 63.7284 21.8581 65.2484 20.7681C66.7684 19.6781 66.6384 17.7981 64.9684 16.5881L64.9584 16.5681Z" fill="#140F25"/>
</svg>
`;

export default function Deneme() {
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;
    let exporter;
    let mesh;
    let gui;

    const params = {
      exportASCII,
      exportBinary
    };

    // 1) Kamera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(4, 2, 6); 
    camera.lookAt(2, 1, 0); // Kameranın bakacağı nokta

    // 2) Sahne
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa0a0a0);
    scene.fog = new THREE.Fog(0xa0a0a0, 4, 20);

    // 3) Exporter
    exporter = new STLExporter();

    // 4) Işıklar
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 3);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(0, 20, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // 5) Zemin
    const groundGeo = new THREE.PlaneGeometry(40, 40);
    const groundMat = new THREE.MeshPhongMaterial({
      color: 0xbbbbbb,
      depthWrite: false
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // GridHelper
    const grid = new THREE.GridHelper(40, 20, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add(grid);

    // 6) KÜP: 6 yüzü var, index 4 = "Ön" yüzü SVG ile kaplayacağız
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Geçici olarak index 4 = null veya basit bir material
    // (Sonra createMaterialFromSVG ile async yükleyip değiştireceğiz)
    const materials = [
      createFaceMaterial("Sağ", "#ffadad"),  // index 0
      createFaceMaterial("Sol", "#ffd6a5"),  // index 1
      createFaceMaterial("Üst", "#fdffb6"),  // index 2
      createFaceMaterial("Alt", "#caffbf"),  // index 3
      null,                                  // index 4 (Ön) => SVG gelecek
      createFaceMaterial("Arka", "#a0c4ff"), // index 5
    ];

    mesh = new THREE.Mesh(geometry, materials);
    mesh.castShadow = true;

    // Konum & Rotasyon
    mesh.position.set(2, 1, 0);
    mesh.rotation.y = THREE.MathUtils.degToRad(60);

    scene.add(mesh);

    // (A) BURADA ÖN YÜZE SVG MATERYALİNİ YÜKLÜYORUZ
    createMaterialFromSVG(analyticsSvg, 256, 256).then((svgMat) => {
      mesh.material[4] = svgMat;         // 4 = "Ön" yüz
      mesh.material.needsUpdate = true;  
    });

    // 7) Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    if (canvasContainerRef.current) {
      canvasContainerRef.current.appendChild(renderer.domElement);
    }

    // 8) Resize
    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // 9) Render döngüsü
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });

    // 10) GUI (STL Export butonları)
    gui = new GUI();
    gui.add(params, "exportASCII").name("Export STL (ASCII)");
    gui.add(params, "exportBinary").name("Export STL (Binary)");
    gui.open();

    // STL Export
    function exportASCII() {
      const result = exporter.parse(mesh);
      saveString(result, "box-ascii.stl");
    }
    function exportBinary() {
      const result = exporter.parse(mesh, { binary: true });
      saveArrayBuffer(result, "box-binary.stl");
    }

    // Kaydetme fonksiyonları
    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);
    function save(blob, filename) {
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    }
    function saveString(text, filename) {
      save(new Blob([text], { type: "text/plain" }), filename);
    }
    function saveArrayBuffer(buffer, filename) {
      save(new Blob([buffer], { type: "application/octet-stream" }), filename);
    }

    // Temizlik
    return () => {
      gui.destroy();
      renderer.dispose();
      window.removeEventListener("resize", onWindowResize);
      if (canvasContainerRef.current) {
        canvasContainerRef.current.removeChild(renderer.domElement);
      }
    };

    // Yardımcı Fonksiyonlar

    // (1) CanvasTexture üstüne metin yazı basan basit materyal
    function createFaceMaterial(text, bgColor = "#ffffff") {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.font = "40px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      const texture = new THREE.CanvasTexture(canvas);
      return new THREE.MeshPhongMaterial({ map: texture });
    }

    // (2) SVG'den asenkron şekilde materyal oluşturma
    async function createMaterialFromSVG(svgCode, width = 256, height = 256) {
      return new Promise((resolve, reject) => {
        const blob = new Blob([svgCode], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const image = new Image();

        image.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          // SVG'yi canvas'a çiz
          ctx.drawImage(image, 0, 0, width, height);

          // Canvas'tan Texture
          const texture = new THREE.CanvasTexture(canvas);
          texture.needsUpdate = true;

          const material = new THREE.MeshPhongMaterial({ map: texture });
          URL.revokeObjectURL(url);
          resolve(material);
        };

        image.onerror = (err) => {
          URL.revokeObjectURL(url);
          reject(err);
        };

        image.src = url; // SVG'yi yükle
      });
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-900">
      <div className="absolute top-2 left-2 text-white font-semibold">
        three.js STL Export (No OrbitControls)
      </div>
      <div ref={canvasContainerRef} className="w-full h-full" />
    </div>
  );
}
