import { motion } from 'motion/react';
import { 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  Terminal,
  CheckCircle2
} from 'lucide-react';

// SkillItem Component
const SkillItem = ({ name, level = 85 }) => (
  <div className="space-y-2 group/item">
    <div className="flex items-center justify-between text-slate-600 dark:text-zinc-400 group-hover/item:text-slate-900 dark:group-hover/item:text-zinc-300 transition-colors">
      <div className="flex items-center gap-3">
        <CheckCircle2 className="w-4 h-4 text-emerald-500/50" />
        <span className="text-sm font-medium">{name}</span>
      </div>
      <span className="text-[10px] font-mono text-emerald-500/50 opacity-0 group-hover/item:opacity-100 transition-opacity">
        {level}%
      </span>
    </div>
    <div className="h-1 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-emerald-500/50 to-emerald-500"
      />
    </div>
  </div>
);

// SkillCategory Component
const SkillCategory = ({ 
  title, 
  icon: Icon, 
  children, 
  highlight = false,
  index = 0
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`p-8 rounded-3xl glass group hover:border-emerald-500/50 transition-all ${
      highlight ? 'ring-2 ring-emerald-500/20 bg-emerald-500/5' : ''
    }`}
  >
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-3 rounded-2xl ${highlight ? 'bg-emerald-500 text-black' : 'bg-emerald-500/10 text-emerald-500'}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      {highlight && (
        <span className="ml-auto text-[10px] font-bold uppercase tracking-widest bg-emerald-500 text-black px-2 py-1 rounded-md">
          Primary
        </span>
      )}
    </div>
    <div className="grid grid-cols-1 gap-5">
      {children}
    </div>
  </motion.div>
);

export default function TechStack() {
  return (
    <section id="skills" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white">
            Technical <span className="text-emerald-500">Stack</span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Category */}
          <SkillCategory title="Frontend" icon={Layout} index={0}>
            <SkillItem name="React.js" level={95} />
            <SkillItem name="HTML5" level={98} />
            <SkillItem name="CSS3" level={92} />
            <SkillItem name="Responsive Design" level={95} />
            <SkillItem name="JavaScript" level={90} />
            <SkillItem name="Tailwind CSS" level={94} />
          </SkillCategory>

          {/* Backend Category */}
          <SkillCategory title="Backend" icon={Server} index={1}>
            <SkillItem name="Node.js" level={88} />
            <SkillItem name="Express.js" level={90} />
            <SkillItem name="REST APIs" level={95} />
            <SkillItem name="JWT Authentication" level={85} />
            <SkillItem name="Socket.io" level={80} />
          </SkillCategory>

          {/* Database Category */}
          <SkillCategory title="Database" icon={Database} index={2}>
            <SkillItem name="MongoDB" level={90} />
            <SkillItem name="MySQL" level={85} />
            <SkillItem name="Firebase Realtime DB" level={88} />
            <SkillItem name="PostgreSQL" level={82} />
          </SkillCategory>

          {/* Cloud & DevOps Category - Highlighted */}
          <SkillCategory title="Cloud & DevOps" icon={Cloud} highlight index={3}>
            <SkillItem name="Docker" level={92} />
            <SkillItem name="GitHub Actions (CI/CD)" level={88} />
            <SkillItem name="AWS (EC2, S3)" level={85} />
            <SkillItem name="Google Cloud Platform" level={82} />
            <SkillItem name="Linux" level={90} />
            <SkillItem name="Git & GitHub" level={95} />
          </SkillCategory>

          {/* AI & Tools Category */}
          <SkillCategory title="AI & Tools" icon={Cpu} index={4}>
            <SkillItem name="Python" level={85} />
            <SkillItem name="OpenAI API" level={88} />
            <SkillItem name="Tesseract OCR" level={80} />
            <SkillItem name="Web Speech API" level={82} />
            <SkillItem name="Postman" level={90} />
          </SkillCategory>

          {/* Languages Category */}
          <SkillCategory title="Languages" icon={Terminal} index={5}>
            <SkillItem name="JavaScript (ES6+)" level={95} />
            <SkillItem name="TypeScript" level={90} />
            <SkillItem name="Python" level={85} />
            <SkillItem name="C++" level={80} />
            <SkillItem name="Java" level={75} />
          </SkillCategory>
        </div>
      </div>
    </section>
  );
}
