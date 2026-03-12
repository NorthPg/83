import { motion } from "framer-motion";
import { useState } from "react";

export function Footer() {
  const [hearts, setHearts] = useState<{ id: number; x: number; delay: number }[]>([]);

  const handleGiftClick = () => {
    const newHearts = Array.from({ length: 50 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100, // percentage
      delay: Math.random() * 0.5,
    }));
    setHearts((prev) => [...prev, ...newHearts]);

    // Clean up hearts after animation
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => !newHearts.find((nh) => nh.id === h.id)));
    }, 3000);
  };

  return (
    <footer className="relative min-h-[50vh] bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-slate-950 pointer-events-none" />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleGiftClick}
        className="relative z-10 px-12 py-6 rounded-full bg-pink-500 text-white font-serif text-2xl md:text-3xl shadow-[0_0_40px_rgba(244,114,182,0.6)] hover:shadow-[0_0_60px_rgba(244,114,182,0.8)] transition-shadow duration-300"
      >
        Nhấn để nhận quà thật
      </motion.button>

      <p className="mt-12 text-slate-500 font-light text-sm tracking-widest uppercase">
        Happy Women's Day 8/3
      </p>

      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 1, y: "100vh", x: `${heart.x}vw`, scale: 0.5 }}
          animate={{ opacity: 0, y: "-100vh", x: `${heart.x + (Math.random() * 20 - 10)}vw`, scale: Math.random() * 1.5 + 0.5 }}
          transition={{ duration: 2 + Math.random() * 2, delay: heart.delay, ease: "easeOut" }}
          className="absolute bottom-0 text-pink-500 text-2xl md:text-4xl pointer-events-none"
          style={{ left: 0 }}
        >
          ❤
        </motion.div>
      ))}
    </footer>
  );
}
