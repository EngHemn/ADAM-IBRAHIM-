"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function ThreeHeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Palette Colors
    const COLOR_FIRST = new THREE.Color("#bbe9db");
    const COLOR_SECOND = new THREE.Color("#aeccc6");
    const COLOR_THIRD = new THREE.Color("#9ba6a5");
    const COLOR_FOURTH = new THREE.Color("#757a79");

    const isMobile = window.innerWidth < 768;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a100f, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.75));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Group for mouse and scroll reactions
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Floating Central Polyhedron (Icosahedron Wireframe + Translucent faces)
    const icoRadius = isMobile ? 1.4 : 1.75;
    const icoGeo = new THREE.IcosahedronGeometry(icoRadius, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: COLOR_FIRST,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    mainGroup.add(icoMesh);

    // Inner geometric nucleus
    const innerGeo = new THREE.OctahedronGeometry(icoRadius * 0.55, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: COLOR_SECOND,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // Orbiting rings in palette colors
    const ringGeo1 = new THREE.TorusGeometry(icoRadius * 1.35, 0.015, 8, 80);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: COLOR_SECOND,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(icoRadius * 1.5, 0.01, 8, 80);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: COLOR_THIRD,
      transparent: true,
      opacity: 0.3,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 2. Interactive Particle Constellation
    const particleCount = isMobile ? 200 : 550;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const colorChoices = [COLOR_FIRST, COLOR_SECOND, COLOR_THIRD, COLOR_FOURTH];

    for (let i = 0; i < particleCount; i++) {
      // Disperse in spherical volume
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * (isMobile ? 5.5 : 7.5) + 1.2;
      const sinPhi = Math.sin(phi);

      positions[i * 3] = r * sinPhi * Math.cos(theta);
      positions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const chosenColor = colorChoices[i % colorChoices.length];
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 0.045 : 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particleField = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particleField);

    // Mouse and scroll variables
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (event.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp mouse & scroll
      const lerpFactor = prefersReduced ? 0.02 : 0.05;
      mouseX += (targetMouseX - mouseX) * lerpFactor;
      mouseY += (targetMouseY - mouseY) * lerpFactor;
      scrollY += (targetScrollY - scrollY) * 0.06;

      const motionScale = prefersReduced ? 0.2 : 1.0;

      // Rotate geometries
      icoMesh.rotation.x = elapsedTime * 0.15 * motionScale;
      icoMesh.rotation.y = elapsedTime * 0.2 * motionScale;

      innerMesh.rotation.x = -elapsedTime * 0.3 * motionScale;
      innerMesh.rotation.z = elapsedTime * 0.25 * motionScale;

      ring1.rotation.z = elapsedTime * 0.12 * motionScale;
      ring2.rotation.x = -elapsedTime * 0.1 * motionScale;

      particleField.rotation.y = elapsedTime * 0.04 * motionScale;
      particleField.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1 * motionScale;

      // Mouse parallax reaction
      mainGroup.rotation.y = mouseX * 0.45 * motionScale;
      mainGroup.rotation.x = -mouseY * 0.35 * motionScale;

      // Scroll reaction (movement and dynamic tilt along scroll progress)
      const scrollRatio = scrollY / 1000;
      mainGroup.position.y = -scrollRatio * 1.8;
      mainGroup.position.z = -scrollRatio * 0.8;
      camera.position.z = 7.5 + scrollRatio * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up all instances on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      icoGeo.dispose();
      icoMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [prefersReduced]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
