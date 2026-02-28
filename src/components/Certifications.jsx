import { motion } from 'motion/react';
import { ShieldCheck, Cloud, Database, Code } from 'lucide-react';

const certifications = [
  {
    title: 'Google Cloud Arcade',
    issuer: 'Google Cloud',
    description: 'Earned multiple skill badges for cloud infrastructure and data analytics.',
    icon: Cloud,
    color: 'text-blue-400'
  },
  {
    title: 'AWS Deployment Experience',
    issuer: 'Amazon Web Services',
    description: 'Hands-on experience in deploying and managing scalable applications on AWS.',
    icon: ShieldCheck,
    color: 'text-orange-400'
  },
  {
    title: 'MongoDB Certification',
    issuer: 'MongoDB University',
    description: 'Certified in MongoDB data modeling and application development.',
    icon: Database,
    color: 'text-emerald-400'
  },
  {
    title: 'Full Stack Development',
    issuer: 'Industry Standard',
    description: 'Comprehensive certification covering modern web development technologies.',
    icon: Code,
    color: 'text-purple-400'
  }
];

export default function Certifications() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white">
            Professional <span className="text-emerald-500">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Validating my skills through industry-recognized certifications and hands-on training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl glass hover:bg-white/10 transition-all border-white/5 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${cert.color}`}>
                <cert.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">{cert.title}</h3>
              <p className="text-emerald-500 text-xs font-bold mb-3 uppercase tracking-widest">{cert.issuer}</p>
              <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
