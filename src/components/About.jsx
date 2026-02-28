import { motion } from 'motion/react';
import { GraduationCap, Award, Code2, Rocket } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech Information Technology',
    institution: 'College of Engineering',
    period: '2022 - 2026',
    description: 'Current CGPA: 8.76. Focusing on software engineering, cloud computing, and data structures.',
    icon: GraduationCap
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'State Board',
    period: '2020 - 2022',
    description: 'Completed with distinction in Computer Science and Mathematics.',
    icon: Award
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              About <span className="text-emerald-500">Me</span>
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-zinc-400 text-lg leading-relaxed">
              <p>
                I am a dedicated IT undergraduate with a strong passion for building scalable 
                web applications and optimizing cloud infrastructure. My journey in tech is driven 
                by curiosity and a desire to solve real-world problems through code.
              </p>
              <p>
                With a solid foundation in the MERN stack and an ever-growing interest in 
                DevOps and AI, I strive to create efficient, user-centric solutions. 
                I actively participate in hackathons and contribute to open-source projects 
                 to stay at the forefront of technology.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-4 rounded-2xl glass border-emerald-500/20">
                  <Code2 className="w-8 h-8 text-emerald-500 mb-3" />
                  <h3 className="text-slate-900 dark:text-white font-bold mb-1">Development</h3>
                  <p className="text-sm">Full Stack MERN Specialist</p>
                </div>
                <div className="p-4 rounded-2xl glass border-emerald-500/20">
                  <Rocket className="w-8 h-8 text-emerald-500 mb-3" />
                  <h3 className="text-slate-900 dark:text-white font-bold mb-1">DevOps</h3>
                  <p className="text-sm">Cloud & Automation Focus</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-emerald-500" />
              Education Journey
            </h3>
            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-500/20">
              {education.map((item, index) => (
                <div key={index} className="relative pl-12 group">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-black border-2 border-emerald-500 flex items-center justify-center z-10 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="p-6 rounded-2xl glass hover:bg-black/5 dark:hover:bg-white/10 transition-all">
                    <span className="text-emerald-500 text-sm font-mono font-bold">{item.period}</span>
                    <h4 className="text-xl font-bold mt-1 text-slate-900 dark:text-white">{item.degree}</h4>
                    <p className="text-slate-500 dark:text-zinc-500 text-sm mb-3">{item.institution}</p>
                    <p className="text-slate-600 dark:text-zinc-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
