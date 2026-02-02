"use client";

import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal"
import { useRef, useState, useEffect } from "react";

export function TerminalDemo() {
    const ref = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;
            // Get normalized mouse position (-1 to 1) relative to window center
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            mouseRef.current = { x, y };
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        let animationFrameId: number;
        let time = 0;

        const animate = () => {
            time += 0.05; // speed of ambient motion

            // Ambient motion (floating effect)
            const ambientX = Math.sin(time * 0.5) * 2; // +/- 2 degrees
            const ambientY = Math.cos(time * 0.3) * 2; // +/- 2 degrees

            // Mouse influence (follow mouse)
            // Target rotation based on mouse position
            // Max rotation: 10 degrees
            const targetX = mouseRef.current.y * -10; // Invert Y for natural tilt
            const targetY = mouseRef.current.x * 10;

            // Combine ambient + mouse
            // Smooth lerp could be better but simple state update is fine for this demo if component is light
            setRotation({
                x: targetX + ambientX,
                y: targetY + ambientY
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div
            className="relative w-full max-w-[600px] mx-auto py-4"
            style={{ perspective: "1000px" }}
        >
            <style jsx>{`
                @keyframes pulse-glow-bold {
                    0%, 100% { box-shadow: 0 0 30px -5px rgba(255, 255, 255, 0.3); }
                    50% { box-shadow: 0 0 60px -5px rgba(255, 255, 255, 0.5); }
                }
            `}</style>
            <div
                ref={ref}
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transition: "transform 0.1s ease-out",
                }}
                className="w-full transition-transform duration-100 ease-out"
            >
                <Terminal
                    className="border-[#333] text-gray-200 min-h-[225px] overflow-hidden bg-gradient-to-br from-[#050505] via-[#1e1e1e] to-[#050505] animate-gradient bg-[length:200%_200%]"
                    style={{ animation: 'gradient-shift 8s ease infinite, pulse-glow-bold 3s ease-in-out infinite' }}
                >
                    <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>

                    <AnimatedSpan className="text-green-500">
                        ✔ Preflight checks.
                    </AnimatedSpan>

                    <AnimatedSpan className="text-green-500">
                        ✔ Verifying framework. Found Next.js.
                    </AnimatedSpan>

                    <AnimatedSpan className="text-green-500">
                        ✔ Validating Tailwind CSS.
                    </AnimatedSpan>

                    <AnimatedSpan className="text-green-500">
                        ✔ Validating import alias.
                    </AnimatedSpan>

                    <AnimatedSpan className="text-green-500">
                        ✔ Writing components.json.
                    </AnimatedSpan>

                    <AnimatedSpan className="text-green-500">
                        ✔ Checking registry.
                    </AnimatedSpan>

                    <AnimatedSpan className="text-green-500">
                        ✔ Updating tailwind.config.ts
                    </AnimatedSpan>

                    <AnimatedSpan className="text-green-500">
                        ✔ Updating app/globals.css
                    </AnimatedSpan>

                    <AnimatedSpan className="text-green-500">
                        ✔ Installing dependencies.
                    </AnimatedSpan>

                    <AnimatedSpan className="text-blue-500">
                        <span>ℹ Updated 1 file:</span>
                        <span className="pl-2">- lib/utils.ts</span>
                    </AnimatedSpan>

                    <TypingAnimation className="text-gray-500">
                        Success! Project initialization completed.
                    </TypingAnimation>

                    <TypingAnimation className="text-gray-500">
                        You may now add components.
                    </TypingAnimation>
                </Terminal>
            </div>
        </div>
    )
}
