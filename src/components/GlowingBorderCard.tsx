"use client";

import { motion, useTime, useTransform } from "framer-motion";


export default function GlowingBorderCard() {
  const time = useTime();

  // Rotating animation
  const rotate = useTransform(time, [0, 1000], [0, 90], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, transparent, transparent, transparent, transparent, white`;
  });



  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-20 p-24 bg-bg-gradient text-neutral-100">
      {/* Rotating gradient */}
      <div className="relative">
        <div className="relative bg-[#00001c] px-3 py-2 rounded-md hover:bg-neutral-800 transition-colors duration-200 z-10">
          <ul className="font-semibold px-12 py-8 space-y-8">
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Studio</li>
            <li>Foundation</li>
          </ul>
        </div>
        <motion.div
          className="absolute -inset-[1px] rounded-md"
          style={{
            background: rotatingBg,
          }}
        />
      </div>
    </main>
  );
}