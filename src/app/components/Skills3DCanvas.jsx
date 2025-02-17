"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Skills3DCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 2);
    scene.add(directionalLight);

    // Sphere Geometry and Material
    const geometry = new THREE.SphereGeometry(1, 100, 200);
    const material = new THREE.MeshStandardMaterial({
      color: "#4ade80",
      metalness: 0.5,
      roughness: 0.5,
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.scale.set(2.5, 2.5, 2.5);
    scene.add(sphere);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01; // Rotation Animation
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="absolute top-0 left-0 w-full h-full z-0" ref={mountRef}></div>;
};

export default Skills3DCanvas;
