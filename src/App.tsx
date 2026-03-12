import { useState, useRef } from "react";
import { Hero } from "./components/Hero";
import { Memories } from "./components/Memories";
import { Decode } from "./components/Decode";
import { Timeline } from "./components/Timeline";
import { Footer } from "./components/Footer";

export default function App() {
  const [started, setStarted] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStart = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    
    // Scroll down to memories section after state updates
    setTimeout(() => {
      const memoriesSection = document.getElementById("memories");
      if (memoriesSection) {
        memoriesSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-pink-500/30">
      {/* Background Music - Using a placeholder royalty free soft piano track */}
      <audio 
        ref={audioRef} 
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=soft-piano-100-bpm-121529.mp3" 
        loop 
      />

      <Hero onStart={handleStart} />
      
      {started && (
        <>
          <Memories />
          <Decode onUnlock={() => setIsUnlocked(true)} />
          {isUnlocked && (
            <>
              <Timeline />
              <Footer />
            </>
          )}
        </>
      )}
    </main>
  );
}
