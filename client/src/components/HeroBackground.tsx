import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x0a0e27, 1);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 50;

    // Create particles
    const particleCount = 100;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200;
      positions[i + 1] = (Math.random() - 0.5) * 200;
      positions[i + 2] = (Math.random() - 0.5) * 200;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00d9ff,
      size: 2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Create animated lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(6);
    linePositions[0] = -50;
    linePositions[1] = 0;
    linePositions[2] = 0;
    linePositions[3] = 50;
    linePositions[4] = 0;
    linePositions[5] = 0;

    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.3,
    });

    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);

    // Add more decorative lines
    const createDecorativeLine = (x: number, y: number, z: number, rotation: number) => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(6);
      pos[0] = -30;
      pos[1] = 0;
      pos[2] = 0;
      pos[3] = 30;
      pos[4] = 0;
      pos[5] = 0;
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

      const mat = new THREE.LineBasicMaterial({
        color: Math.random() > 0.5 ? 0x00d9ff : 0xa855f7,
        transparent: true,
        opacity: 0.2,
      });

      const l = new THREE.Line(geo, mat);
      l.position.set(x, y, z);
      l.rotation.z = rotation;
      scene.add(l);
      return l;
    };

    const decorativeLines = [
      createDecorativeLine(-40, 30, 0, Math.PI / 4),
      createDecorativeLine(40, -30, 0, Math.PI / 3),
      createDecorativeLine(0, 40, 0, Math.PI / 6),
    ];

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotate particles
      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0002;

      // Animate lines
      line.rotation.z += 0.001;
      decorativeLines.forEach((l, i) => {
        l.rotation.z += 0.0005 * (i + 1);
        l.position.y += Math.sin(Date.now() * 0.0005 + i) * 0.01;
      });

      // Update particle opacity
      const positionAttribute = geometry.getAttribute('position');
      const positions = positionAttribute.array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += (Math.random() - 0.5) * 0.5;
        positions[i + 1] += (Math.random() - 0.5) * 0.5;
        positions[i + 2] += (Math.random() - 0.5) * 0.5;

        // Keep particles in bounds
        if (Math.abs(positions[i]) > 100) positions[i] *= -0.5;
        if (Math.abs(positions[i + 1]) > 100) positions[i + 1] *= -0.5;
        if (Math.abs(positions[i + 2]) > 100) positions[i + 2] *= -0.5;
      }
      positionAttribute.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #0f1535 50%, #1a1f3a 100%)' }}
    />
  );
};

export default HeroBackground;
