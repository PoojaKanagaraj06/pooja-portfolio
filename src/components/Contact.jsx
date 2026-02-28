import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MessageSquare, Send, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'pooja.kkamakshi2006@gmail.com', href: 'mailto:pooja.kkamakshi2006@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/pooja-k-551955281/', href: 'https://linkedin.com/in/pooja-k-551955281/' },
  { icon: Github, label: 'GitHub', value: 'github.com/PoojaKanagaraj06/', href: 'https://github.com/PoojaKanagaraj06/' },
  { icon: MapPin, label: 'Location', value: 'Tamil Nadu, India', href: '#' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white">
            Get in <span className="text-emerald-500">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <MessageSquare className="text-emerald-500" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl glass hover:bg-black/5 dark:hover:bg-white/10 transition-all group"
                >
                  <item.icon className="w-6 h-6 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-slate-500 dark:text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-slate-900 dark:text-white font-medium break-all">{item.value}</p>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass border-white/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-zinc-400">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors text-slate-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-zinc-400">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors text-slate-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-zinc-400">Subject</label>
                <input
                  type="text"
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors text-slate-900 dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-zinc-400">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors resize-none text-slate-900 dark:text-white"
                  placeholder="Tell me more about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
