import { motion } from 'motion/react';
import { Github, ExternalLink, Code2, Layers, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Taskmate',
    subtitle: 'AI Task Management System',
    description: 'A robust task management platform with AI-driven prioritization, Docker containerization, and automated CI/CD pipelines.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['MERN Stack', 'Docker', 'AWS', 'GitHub Actions', 'JWT'],
    github: 'https://github.com/PoojaKanagaraj06/mindflow.git',
    live: 'https://demo.com',
    category: 'Full Stack'
  },
  {
    title: 'SmartUzhavan',
    subtitle: 'AI Farming Assistant',
    description: 'An innovative AI assistant for farmers featuring crop disease detection and a multilingual voice interface.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['React', 'Node.js', 'Firebase', 'GCP', 'AI'],
    github: 'https://github.com/PoojaKanagaraj06/',
    live: 'https://demo.com',
    category: 'AI & Cloud'
  },
  {
    title: 'Expense Tracker',
    subtitle: 'Financial Visualization Tool',
    description: 'Real-time expense monitoring with interactive data visualization using Chart.js and role-based authentication.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['MERN', 'Chart.js', 'REST API', 'Auth'],
    github: 'https://github.com/PoojaKanagaraj06/',
    live: 'https://demo.com',
    category: 'Full Stack'
  },
  {
    title: 'Image-to-Text Converter',
    subtitle: 'OCR Processing Engine',
    description: 'High-accuracy text extraction from images using Tesseract OCR and OpenCV with a Flask backend.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Python', 'Flask', 'Tesseract', 'OpenCV'],
    github: 'https://github.com/PoojaKanagaraj06/Img_txt_cnt',
    live: 'https://demo.com',
    category: 'AI & Tools'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white">
              Featured <span className="text-emerald-500">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 max-w-xl">
              A selection of my recent work, ranging from full-stack applications to AI-powered tools and cloud-native solutions.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 rounded-full glass text-sm font-medium text-emerald-400 border-emerald-500/30">
              All Projects
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass border-white/5 hover:border-emerald-500/30 transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-emerald-500/80 font-medium text-sm">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full glass hover:bg-emerald-500 hover:text-black transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full glass hover:bg-emerald-500 hover:text-black transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-zinc-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 text-slate-600 dark:text-zinc-400 text-xs font-medium border border-black/5 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
