import { motion } from 'motion/react';
import { Trophy, Star, Users, Award } from 'lucide-react';

const achievements = [
  {
    title: 'Smart India Hackathon 2024',
    role: 'National Finalist',
    description: 'Recognized as a national finalist for developing innovative solutions for real-world problems.',
    icon: Trophy,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10'
  },
  {
    title: 'AI Hackathon',
    role: '2nd Place Winner',
    description: 'Achieved second place in a competitive AI hackathon for building a crop disease detection system.',
    icon: Star,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    title: 'GirlScript Summer of Code',
    role: 'Open Source Contributor',
    description: 'Contributed to various open-source projects, enhancing features and fixing critical bugs.',
    icon: Users,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10'
  },
  {
    title: 'Winter of Code',
    role: 'Contributor',
    description: 'Actively participated in the Winter of Code program, focusing on full-stack development.',
    icon: Award,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white">
            Achievements & <span className="text-emerald-500">Open Source</span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Milestones and contributions that define my professional growth and community involvement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl glass group hover:border-emerald-500/30 transition-all flex gap-6 items-start"
            >
              <div className={`p-4 rounded-2xl ${achievement.bg} ${achievement.color} shrink-0 group-hover:scale-110 transition-transform`}>
                <achievement.icon className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{achievement.title}</h3>
                </div>
                <p className="text-emerald-500 font-mono text-sm font-bold mb-3 uppercase tracking-wider">
                  {achievement.role}
                </p>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
