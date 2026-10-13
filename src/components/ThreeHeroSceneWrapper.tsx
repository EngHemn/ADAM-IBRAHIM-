"use client";

import dynamic from "next/dynamic";

const ThreeHeroScene = dynamic(() => import("./ThreeHeroScene"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,rgba(187,233,219,0.1)_0%,transparent_70%)]"
      aria-hidden="true"
    />
  ),
});

export default function ThreeHeroSceneWrapper() {
  return <ThreeHeroScene />;
}
