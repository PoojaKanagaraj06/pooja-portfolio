import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, ArrowRight, Download, Code, Cpu, Cloud, Database } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const FloatingIcon = ({ icon: Icon, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.2, 0.5, 0.2],
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    className={cn("absolute hidden lg:block text-emerald-500/20", className)}
  >
    <Icon size={48} />
  </motion.div>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <FloatingIcon icon={Code} className="top-1/4 left-1/4" delay={0} />
      <FloatingIcon icon={Cpu} className="top-1/3 right-1/4" delay={1} />
      <FloatingIcon icon={Cloud} className="bottom-1/4 left-1/3" delay={2} />
      <FloatingIcon icon={Database} className="bottom-1/3 right-1/3" delay={3} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium tracking-wider uppercase">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight"
          >
            I'm <span className="text-gradient">Pooja K</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-3xl font-mono text-slate-600 dark:text-zinc-400 mb-8 h-12"
          >
            <Typewriter
              words={[
                'Full Stack Developer',
                'Cloud & DevOps Enthusiast',
                'Open Source Contributor',
                'AI Project Builder'
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-slate-600 dark:text-zinc-400 text-lg mb-10 leading-relaxed"
          >
            Building scalable applications and automating cloud infrastructure. 
            Passionate about MERN stack, DevOps, and AI-driven solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all flex items-center gap-2 group shadow-lg shadow-emerald-500/20"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              className="px-8 py-4 rounded-xl glass hover:bg-black/5 dark:hover:bg-white/10 transition-all flex items-center gap-2 font-bold text-slate-900 dark:text-white"
            >
              Download Resume
              <Download className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/PoojaKanagaraj06/', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/pooja-k-551955281/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:pooja.kkamakshi2006@gmail.com', label: 'Email' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:text-emerald-500 hover:border-emerald-500/50 transition-all text-slate-600 dark:text-zinc-400"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-500 flex justify-center pt-2">
          <div className="w-1 h-2 bg-zinc-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}
