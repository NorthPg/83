import { motion } from "framer-motion";
import { Particles } from "./Particles";

interface HeroProps {
  onStart: () => void;
}

export function Hero({ onStart }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      <Particles />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/20 to-slate-950 z-10 pointer-events-none" />

      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-slate-100 mb-6 tracking-tight"
        >
          Digital Museum
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-pink-200/80 font-light mb-12 max-w-lg"
        >
          Nơi lưu giữ những ký ức đẹp nhất của chúng mình.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(244, 114, 182, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-8 py-4 rounded-full bg-slate-900/50 border border-pink-500/30 text-pink-100 backdrop-blur-md shadow-[0_0_15px_rgba(244,114,182,0.2)] transition-all duration-300 uppercase tracking-widest text-sm font-medium"
        >
          Bắt đầu hành trình
        </motion.button>
      </div>
    </section>
  );
}
