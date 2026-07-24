"use client";
import { useEffect, useRef, useState } from "react";

// ─── Types only — no Three.js imported at module level ───────────────────────
export type GlobeConfig = {
    pointSize?: number;
    globeColor?: string;
    showAtmosphere?: boolean;
    atmosphereColor?: string;
    atmosphereAltitude?: number;
    emissive?: string;
    emissiveIntensity?: number;
    shininess?: number;
    polygonColor?: string;
    ambientLight?: string;
    directionalLeftLight?: string;
    directionalTopLight?: string;
    pointLight?: string;
    arcTime?: number;
    arcLength?: number;
    rings?: number;
    maxRings?: number;
    initialPosition?: { lat: number; lng: number };
    autoRotate?: boolean;
    autoRotateSpeed?: number;
};

type Position = {
    order: number;
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    arcAlt: number;
    color: string;
};

interface WorldProps {
    globeConfig: GlobeConfig;
    data: Position[];
}

const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;

// ─── Helpers (pure — no Three.js needed) ─────────────────────────────────────
function hexToRgb(hex: string) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
        : null;
}

function genRandomNumbers(min: number, max: number, count: number) {
    const arr: number[] = [];
    while (arr.length < count) {
        const r = Math.floor(Math.random() * (max - min)) + min;
        if (!arr.includes(r)) arr.push(r);
    }
    return arr;
}

// ─── Globe component — Three.js loaded lazily inside useEffect ───────────────
export function Globe({ globeConfig, data }: WorldProps) {
    const mountRef = useRef<HTMLDivElement>(null);
    const cleanupRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        if (!mountRef.current) return;
        const container = mountRef.current;

        let cancelled = false;

        // Dynamic import — Three.js only loaded when this component mounts
        Promise.all([
            import("three"),
            import("three-globe"),
            import("@react-three/fiber"),
            import("@react-three/drei"),
            import("@/data/globe.json"),
        ]).then(([THREE, { default: ThreeGlobe }, { Canvas }, { OrbitControls }, countriesModule]) => {
            if (cancelled || !container) return;

            const countries = countriesModule.default ?? countriesModule;

            // ── Setup renderer via Three.js directly (avoid fiber overhead) ──
            const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "low-power" });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setClearColor(0x000000, 0);
            container.appendChild(renderer.domElement);

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 180, 1800);
            camera.position.set(0, 0, cameraZ);

            // Lighting
            const ambientLight = new THREE.AmbientLight(globeConfig.ambientLight || "#ffffff", 0.6);
            scene.add(ambientLight);
            const dirLight1 = new THREE.DirectionalLight(globeConfig.directionalLeftLight || "#ffffff");
            dirLight1.position.set(-400, 100, 400);
            scene.add(dirLight1);
            const dirLight2 = new THREE.DirectionalLight(globeConfig.directionalTopLight || "#ffffff");
            dirLight2.position.set(-200, 500, 200);
            scene.add(dirLight2);
            const pointLight = new THREE.PointLight(globeConfig.pointLight || "#ffffff", 0.8);
            pointLight.position.set(-200, 500, 200);
            scene.add(pointLight);
            // Fog is not an Object3D — assigned directly to scene.fog
            scene.fog = new THREE.Fog(0x000000, 400, 2000);

            // Globe
            const globe = new ThreeGlobe();
            const group = new THREE.Group();
            group.add(globe);
            scene.add(group);

            const defaultProps = {
                pointSize: 1,
                atmosphereColor: "#ffffff",
                showAtmosphere: true,
                atmosphereAltitude: 0.1,
                polygonColor: "rgba(255,255,255,0.7)",
                globeColor: "#1d072e",
                emissive: "#000000",
                emissiveIntensity: 0.1,
                shininess: 0.9,
                arcTime: 2000,
                arcLength: 0.9,
                rings: 1,
                maxRings: 3,
                ...globeConfig,
            };

            // Material
            const { Color: ThreeColor } = THREE;
            const globeMaterial = globe.globeMaterial() as unknown as {
                color: InstanceType<typeof ThreeColor>;
                emissive: InstanceType<typeof ThreeColor>;
                emissiveIntensity: number;
                shininess: number;
            };
            globeMaterial.color = new ThreeColor(defaultProps.globeColor);
            globeMaterial.emissive = new ThreeColor(defaultProps.emissive);
            globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
            globeMaterial.shininess = defaultProps.shininess;

            // Build points
            const points: { size: number; order: number; color: string; lat: number; lng: number }[] = [];
            for (const arc of data) {
                hexToRgb(arc.color); // validate
                points.push({ size: defaultProps.pointSize, order: arc.order, color: arc.color, lat: arc.startLat, lng: arc.startLng });
                points.push({ size: defaultProps.pointSize, order: arc.order, color: arc.color, lat: arc.endLat, lng: arc.endLng });
            }
            const filteredPoints = points.filter(
                (v, i, a) => a.findIndex(v2 => v2.lat === v.lat && v2.lng === v.lng) === i
            );

            globe
                .hexPolygonsData((countries as { features: object[] }).features)
                .hexPolygonResolution(2) // reduced from 3 → faster
                .hexPolygonMargin(0.7)
                .showAtmosphere(defaultProps.showAtmosphere)
                .atmosphereColor(defaultProps.atmosphereColor)
                .atmosphereAltitude(defaultProps.atmosphereAltitude)
                .hexPolygonColor(() => defaultProps.polygonColor)
                .arcsData(data)
                .arcStartLat((d) => (d as Position).startLat)
                .arcStartLng((d) => (d as Position).startLng)
                .arcEndLat((d) => (d as Position).endLat)
                .arcEndLng((d) => (d as Position).endLng)
                .arcColor((d: object) => (d as Position).color)
                .arcAltitude((d: object) => (d as Position).arcAlt)
                .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
                .arcDashLength(defaultProps.arcLength)
                .arcDashInitialGap((d) => (d as Position).order)
                .arcDashGap(15)
                .arcDashAnimateTime(() => defaultProps.arcTime)
                .pointsData(filteredPoints)
                .pointColor((d) => (d as { color: string }).color)
                .pointsMerge(true)
                .pointAltitude(0.0)
                .pointRadius(2)
                .ringsData([])
                .ringColor(() => defaultProps.polygonColor)
                .ringMaxRadius(defaultProps.maxRings)
                .ringPropagationSpeed(RING_PROPAGATION_SPEED)
                .ringRepeatPeriod((defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings);

            // Orbit controls (manual without drei to keep it light)
            let isDragging = false;
            let prevMouse = { x: 0, y: 0 };
            let rotY = 0;

            const onMouseDown = (e: MouseEvent) => { isDragging = true; prevMouse = { x: e.clientX, y: e.clientY }; };
            const onMouseMove = (e: MouseEvent) => {
                if (!isDragging) return;
                const dx = e.clientX - prevMouse.x;
                rotY += dx * 0.005;
                prevMouse = { x: e.clientX, y: e.clientY };
            };
            const onMouseUp = () => { isDragging = false; };
            renderer.domElement.addEventListener("mousedown", onMouseDown);
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);

            // Rings interval
            const ringInterval = setInterval(() => {
                if (cancelled) return;
                const nums = genRandomNumbers(0, data.length, Math.floor((data.length * 4) / 5));
                globe.ringsData(data.filter((_, i) => nums.includes(i)).map(d => ({ lat: d.startLat, lng: d.startLng, color: d.color })));
            }, 2000);

            // Resize
            const onResize = () => {
                const w = container.clientWidth;
                const h = container.clientHeight;
                renderer.setSize(w, h);
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
            };
            const resizeObs = new ResizeObserver(onResize);
            resizeObs.observe(container);

            // Render loop
            let animId: number;
            const autoSpeed = (globeConfig.autoRotateSpeed || 0.8) * 0.002;
            const animate = () => {
                if (cancelled) return;
                animId = requestAnimationFrame(animate);
                if (!isDragging && globeConfig.autoRotate !== false) rotY += autoSpeed;
                group.rotation.y = rotY;
                renderer.render(scene, camera);
            };
            animate();

            cleanupRef.current = () => {
                cancelled = true;
                cancelAnimationFrame(animId);
                clearInterval(ringInterval);
                resizeObs.disconnect();
                renderer.domElement.removeEventListener("mousedown", onMouseDown);
                window.removeEventListener("mousemove", onMouseMove);
                window.removeEventListener("mouseup", onMouseUp);
                renderer.dispose();
                if (container.contains(renderer.domElement)) {
                    container.removeChild(renderer.domElement);
                }
            };
        }).catch(console.error);

        return () => {
            cancelled = true;
            cleanupRef.current?.();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div ref={mountRef} className="w-full h-full" />;
}

// ─── World wrapper — kept for API compatibility ───────────────────────────────
export function World(props: WorldProps) {
    return (
        <div className="w-full h-full absolute inset-0 flex items-center justify-center">
            <Globe {...props} />
        </div>
    );
}

export { hexToRgb, genRandomNumbers };
