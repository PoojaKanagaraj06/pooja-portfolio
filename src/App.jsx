import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import { Terminal } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-emerald-500/30">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-6"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center"
            >
              <Terminal className="text-black w-10 h-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-emerald-500 font-mono text-sm tracking-widest uppercase font-bold"
            >
              Initializing System...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      <Background3D />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
