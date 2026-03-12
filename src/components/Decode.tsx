import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export function Decode({ onUnlock }: { onUnlock?: () => void }) {
  const [code, setCode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (code.trim() === "7/3") {
      setIsUnlocked(true);
      setError(false);
      fireConfetti();
      if (onUnlock) {
        onUnlock();
      }
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const fireConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#f472b6", "#fbbf24", "#38bdf8"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#f472b6", "#fbbf24", "#38bdf8"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.05)_0%,transparent_70%)] pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-md w-full p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-slate-800 shadow-2xl"
          >
            <h2 className="font-serif text-3xl text-center text-pink-200 mb-6">
              Giải mã
            </h2>
            <p className="text-center text-slate-400 mb-8 font-light">
              "Ngày đầu yêu nhau ?"
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Nhập mã..."
                className={`w-full px-6 py-4 rounded-xl bg-slate-950/50 border ${
                  error ? "border-red-500" : "border-slate-700 focus:border-pink-500"
                } text-slate-200 text-center text-xl tracking-widest outline-none transition-colors`}
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm text-center"
                >
                  Sai rồi, thử lại nhé!
                </motion.p>
              )}
              <button
                type="submit"
                className="mt-4 w-full py-4 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/50 text-pink-100 font-medium tracking-wide transition-all hover:shadow-[0_0_20px_rgba(244,114,182,0.3)]"
              >
                Mở khóa
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-10 max-w-2xl w-full p-10 md:p-16 rounded-3xl bg-pink-50/5 backdrop-blur-2xl border border-pink-200/20 shadow-[0_0_50px_rgba(244,114,182,0.1)]"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20 pointer-events-none rounded-3xl" />
            
            <h3 className="font-serif text-2xl text-pink-300 mb-8 text-center italic">
              Gửi em,
            </h3>
            
            <div className="font-script text-2xl md:text-4xl text-slate-200 leading-relaxed space-y-6">
              <p>
                Cảm ơn em vì đã đến và làm cho thế giới của anh trở nên rực rỡ hơn.
              </p>
              <p>
                Mỗi ngày bên em đều là một ngày đặc biệt, nhưng hôm nay, anh muốn dành riêng một góc nhỏ này để lưu giữ lại những khoảnh khắc của chúng ta.
              </p>
              <p>
                Chúc em ngày 8/3 thật nhiều niềm vui. Anh luôn ở đây.
              </p>
            </div>
            
            <div className="mt-12 text-right font-script text-3xl text-pink-400">
              - Anh -
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
