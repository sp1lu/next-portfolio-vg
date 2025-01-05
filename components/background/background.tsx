'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function Background() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        const amountX = 50;
        const amountY = 50;
        const particlesNum = amountX * amountY;
        const positions = new Float32Array(particlesNum * 3);
        let count = 0;
        let separation = window.innerWidth / amountX;
        let particles: THREE.Points;

        const initWaves = () => {
            let i = 0;
            const aspectRatio = window.innerWidth / window.innerHeight;

            for (let ix = 0; ix < amountX; ix++) {
                for (let iy = 0; iy < amountY; iy++) {
                    positions[i] = ix * separation - (amountX * separation) / 2;
                    positions[i + 1] = 0;
                    positions[i + 2] = iy * separation / aspectRatio - (amountY * separation / aspectRatio) / 2;
                    i += 3;
                }
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

            const material = new THREE.PointsMaterial({
                size: 5.1,
                opacity: 0.5,
                transparent: true,
                depthWrite: false,
                map: createCircleTexture('#ffe600', 256),
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);
        };

        const createCircleTexture = (color: string, size: number): THREE.Texture => {
            const canvas = document.createElement('canvas');
            canvas.width = canvas.height = size;

            const context = canvas.getContext('2d');
            const texture = new THREE.Texture(canvas);

            if (!context) return texture;

            const center = size / 2;
            context.beginPath();
            context.arc(center, center, size / 2, 0, 2 * Math.PI, false);
            context.closePath();
            context.fillStyle = color;
            context.fill();

            texture.needsUpdate = true;

            return texture;
        };

        const render = () => {
            camera.lookAt(scene.position);

            const positionsArray = particles.geometry.attributes['position'].array as Float32Array;
            let i = 0;
            const waveFrequency = 0.2;
            const waveLength = 0.5;
            const waveHeightFTB = 50;
            const waveHeightRTL = 50;

            for (let ix = 0; ix < amountX; ix++) {
                for (let iy = 0; iy < amountY; iy++) {
                    positionsArray[i + 1] =
                        Math.sin((ix + count) * waveFrequency) * waveHeightRTL +
                        Math.sin((iy + count) * waveLength) * waveHeightFTB;
                    i += 3;
                }
            }

            particles.geometry.attributes['position'].needsUpdate = true;
            renderer.render(scene, camera);

            count += 0.025;
        };

        const animate = () => {
            requestAnimationFrame(animate);
            render();
        };

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);

            const aspectRatio = window.innerWidth / window.innerHeight;
            separation = window.innerWidth / amountX;

            let i = 0;
            for (let ix = 0; ix < amountX; ix++) {
                for (let iy = 0; iy < amountY; iy++) {
                    positions[i] = ix * separation - (amountX * separation) / 2;
                    positions[i + 1] = 0;
                    positions[i + 2] = iy * separation / aspectRatio - (amountY * separation / aspectRatio) / 2;
                    i += 3;
                }
            }

            particles.geometry.attributes['position'].needsUpdate = true;
            renderer.render(scene, camera);
        };

        camera.position.set(250, 250, 1000);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000);
        containerRef.current.appendChild(renderer.domElement);

        initWaves();
        animate();

        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('resize', onWindowResize);
            renderer.dispose();
            scene.clear();
        };
    }, []);

    return <div ref={containerRef} className='background' />;
}

export default Background