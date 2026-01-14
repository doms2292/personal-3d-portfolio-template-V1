
import React, { useState, useMemo } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useMotionValue } from 'framer-motion';
import { 
  Github, Linkedin, Instagram, Twitter, Cpu, Layers, Zap, Terminal, Rocket, 
  ShieldCheck, FileCode, Activity, Database, Smartphone, Eye, Command, Globe, 
  Share2, Mail, ExternalLink, Code2, Youtube, MapPin, MessageCircle, GraduationCap, Bitcoin
} from 'lucide-react';

/**
 * NABORAJ SARKAR | NS CODEX AUTHORITY NODE v12.6
 * MISSION: FREE EDUCATION & AUTOMATION EXCELLENCE
 */
const CONFIG = {
  identity: {
    name: "Naboraj Sarkar",
    tagline: "Systems Architect & Tech Innovator",
    location: "West Bengal, India",
    logo: "/logo.png",
    repo: "https://github.com/naborajs/personal-3d-portfolio-template",
    whatsapp: "https://wa.me/918900653250",
    email: "nishant.ns.business@gmail.com"
  },
  socials: [
    { name: 'Github', icon: <Github size={20} />, url: "https://github.com/naborajs" },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: "https://linkedin.com/in/naboraj-sarkar" },
    { name: 'Instagram', icon: <Instagram size={20} />, url: "https://instagram.com/naborajs" },
    { name: 'X', icon: <Twitter size={20} />, url: "https://x.com/NSGAMMING699" },
    { name: 'YouTube', icon: <Youtube size={20} />, url: "https://youtube.com/@Nishant_sarkar" }
  ]
};

const CATEGORIES = ["All", "Automation", "Systems", "Interface"];

const PROTOCOL_REGISTRY = [
  { id: "SYS-01", category: "Systems", title: "Enterprise Logic", description: "Architecting zero-latency backends for global distribution. Specializing in highly distributed database clusters and secure authentication protocols that govern massive user traffic.", icon: <Database className="text-cyan-400" size={24} />, purpose: "Reliable foundation for modern enterprise-grade solutions.", tags: ["Node.js", "K8s", "Redis"] },
  { id: "AUT-02", category: "Automation", title: "Intelligent Bots", description: "Engineering neuro-mimetic automation for Telegram and WhatsApp. These aren't simple scripts; they are intelligent agents capable of managing inventory, CRM sync, and dynamic customer support.", icon: <Cpu className="text-[#00BFA6]" size={24} />, purpose: "Scaling business operations through algorithmic efficiency.", tags: ["Python", "OpenAI", "Webhooks"] },
  { id: "INT-03", category: "Interface", title: "Spatial Experiences", description: "Moving beyond flat design. Utilizing 3D math and advanced physics engines to create immersive web portals that respond to user presence and intent.", icon: <Eye className="text-violet-500" size={24} />, purpose: "Elevating digital brand identity to cinematic heights.", tags: ["Three.js", "React", "Shaders"] },
  { id: "AUT-04", category: "Automation", title: "Global Pipeline", description: "Connecting the disconnected. Building unified data highways between marketing tools, payment gateways, and logistics trackers to eliminate human error.", icon: <Zap className="text-amber-400" size={24} />, purpose: "Total digital transformation for creator-led agencies.", tags: ["Node-RED", "Stripe", "CRMs"] },
  { id: "SYS-05", category: "Systems", title: "Security Forge", description: "Hardening digital assets against modern threats. Implementing end-to-end encryption and robust firewall configurations at the network edge.", icon: <Globe className="text-[#00BFA6]" size={24} />, purpose: "Protecting user data in an increasingly volatile web.", tags: ["CyberSec", "Infra", "TLS"] },
  { id: "INT-06", category: "Interface", title: "Mobile Synapse", description: "Developing mobile apps that feel like native extensions of the user. Focus on 60fps animations, intuitive gesture control, and offline-first persistence.", icon: <Smartphone className="text-pink-500" size={24} />, purpose: "Portable utility for the high-speed modern user.", tags: ["Swift", "Flutter", "Kotlin"] }
];

const TEMPORAL_LOGS = [
  { year: "2021", title: "The Awakening", text: "Decoded the architecture of digital systems. My first terminal session was more than code—it was the birth of a philosophy centered on precision and speed.", icon: <Terminal /> },
  { year: "2022", title: "ICSE & Foundations", text: "Successfully completed ICSE board education with a deep focus on computer science. Mastered the core logic of programming while building my first automation scripts.", icon: <GraduationCap /> },
  { year: "2023", title: "NS CODEX Genesis", text: "Forged the 'Dark Modern' aesthetic and officially launched NS CODEX. Shifted focus toward building proper intelligent bots and AI agents for the global market.", icon: <Command /> },
  { year: "2024", title: "Crypto & Education", text: "Expanded into the crypto investment landscape while launching a mission to provide free, high-quality coding education to everyone across India.", icon: <Bitcoin /> }
];

const ProtocolCard = ({ item }: { item: typeof PROTOCOL_REGISTRY[0] }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000, willChange: 'transform' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - (rect.left + rect.width / 2));
        mouseY.set(e.clientY - (rect.top + rect.height / 2));
      }}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="glass p-8 rounded-[2rem] group hover:border-[#00BFA6]/40 transition-colors duration-300 flex flex-col h-full relative"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-4 rounded-xl bg-[#00BFA6]/5 text-[#00BFA6] group-hover:bg-[#00BFA6]/20 transition-all duration-500">
          {item.icon}
        </div>
        <span className="mono text-[9px] text-gray-700 font-bold uppercase tracking-widest">{item.id}</span>
      </div>
      <h3 className="text-xl font-black uppercase mb-3 text-white">{item.title}</h3>
      <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 flex-grow">{item.description}</p>
      <div className="pt-6 border-t border-white/5 space-y-4">
        <div className="flex items-center gap-2">
          <Activity size={12} className="text-[#00BFA6]" />
          <p className="text-[10px] font-bold text-gray-500 uppercase">{item.purpose}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="text-[8px] mono px-2 py-1 rounded bg-white/5 text-gray-600">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const filteredRegistry = useMemo(() => 
    activeFilter === "All" ? PROTOCOL_REGISTRY : PROTOCOL_REGISTRY.filter(i => i.category === activeFilter),
  [activeFilter]);

  return (
    <div className="relative min-h-screen text-white selection:bg-[#00BFA6]/30 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00BFA6] via-cyan-400 to-violet-600 origin-left z-[200]" style={{ scaleX }} />

      <header className="fixed top-0 left-0 right-0 z-[150] py-6 px-6">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center glass rounded-full px-6 py-3 border-white/5">
          <a href="#" className="flex items-center gap-4 group">
            <img src={CONFIG.identity.logo} className="w-8 h-8 object-contain hover:rotate-12 transition-transform" alt="Logo" />
            <span className="font-black uppercase tracking-tighter text-xs">
              NABORAJ <span className="text-[#00BFA6]">SARKAR</span>
            </span>
          </a>
          <nav className="flex items-center gap-8">
            <div className="hidden sm:flex gap-8 text-[9px] font-black uppercase tracking-widest text-gray-400">
              <a href="#about" className="hover:text-white transition-colors">Biography</a>
              <a href="#registry" className="hover:text-white transition-colors">Protocols</a>
              <a href="#history" className="hover:text-white transition-colors">History</a>
            </div>
            <div className="flex items-center gap-2">
              <a href={CONFIG.identity.repo} target="_blank" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Code2 size={16} />
              </a>
              <a href={CONFIG.identity.whatsapp} target="_blank" className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#00BFA6] text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors">
                <MessageCircle size={12} /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 space-y-64 pt-48 pb-32">
        {/* HERO */}
        <section className="relative min-h-[80vh] flex flex-col justify-center text-center md:text-left">
          <motion.div style={{ opacity, scale }} className="space-y-12">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border-[#00BFA6]/30 mx-auto md:mx-0">
              <ShieldCheck size={14} className="text-[#00BFA6]" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase mono text-[#00BFA6]">V12.6_NS_CODEX_AUTH</span>
            </div>
            <h1 className="text-7xl md:text-[13rem] font-black tracking-tighter leading-[0.75]">
              NABORAJ<br/><span className="text-gradient">SARKAR</span>
            </h1>
            <p className="text-2xl md:text-5xl text-gray-500 font-light max-w-5xl leading-tight">
              A <span className="text-white font-medium italic underline underline-offset-8 decoration-[#00BFA6]">Systems Architect</span> empowering India with free education and advanced AI logic.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-8">
              <a href={CONFIG.identity.whatsapp} target="_blank" className="px-10 py-5 bg-white text-black rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-[#00BFA6] hover:text-white transition-all text-center">Establish Connection</a>
              <div className="flex gap-2">
                {CONFIG.socials.map(s => (
                  <a key={s.name} href={s.url} target="_blank" className="w-14 h-14 glass rounded-xl flex items-center justify-center hover:bg-[#00BFA6]/20 transition-all text-white/70 hover:text-[#00BFA6]">{s.icon}</a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT / STORY */}
        <section id="about" className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <span className="text-[#00BFA6] mono text-[10px] font-black tracking-[0.6em] uppercase">// The_NS_CODEX_Mission</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Who is<br/>Naboraj Sarkar?</h2>
            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
              <p>
                Operating as a multi-disciplinary architect within <span className="text-white font-bold">NS CODEX</span>, my core mission is to bridge the digital divide. I believe that <span className="text-gradient font-bold uppercase">Coding is the Future</span>, and my primary target is providing <span className="text-white font-bold italic">Free Education</span> to everyone to ensure they can navigate the automated landscape of tomorrow properly.
              </p>
              <p>
                Educated under the <span className="text-white font-bold">ICSE board</span>, I have synthesized traditional academic rigour with modern technical mastery. From engineering intelligent bots and AI agents to navigating the volatility of <span className="text-white font-bold">Crypto Investment</span>, my approach is defined by precision and global perspective.
              </p>
              <p>
                Based in <span className="text-[#00BFA6] font-bold">India</span>, I am dedicated to building systems that aren't just powerful, but also educational. Through NS CODEX, I deploy tools that solve business problems while teaching the next generation of engineers the "proper way" to build.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex flex-col">
                <span className="text-xs font-black text-[#00BFA6]">ICSE BOARD</span>
                <span className="text-[10px] text-gray-600 tracking-widest uppercase font-bold">Education</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-xs font-black text-[#00BFA6]">FREE_ED</span>
                <span className="text-[10px] text-gray-600 tracking-widest uppercase font-bold">Target_Goal</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-xs font-black text-[#00BFA6]">CRYPTO</span>
                <span className="text-[10px] text-gray-600 tracking-widest uppercase font-bold">Asset_Class</span>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="aspect-square glass rounded-[4rem] flex items-center justify-center p-12 overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <img src={CONFIG.identity.logo} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 scale-75 group-hover:scale-100" alt="Identity Logo" />
            </div>
            <div className="absolute -bottom-10 -right-10 glass px-10 py-6 rounded-3xl">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="mono text-[10px] font-bold uppercase tracking-widest">Node: NS_CODEX_Educator</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* REGISTRY */}
        <section id="registry" className="space-y-16 scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
              <span className="text-[#00BFA6] mono text-[10px] font-black tracking-[0.6em] uppercase flex items-center gap-3">
                <div className="w-10 h-[1px] bg-[#00BFA6]" /> Capability_Registry
              </span>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Protocols</h2>
            </motion.div>
            <div className="flex gap-2 bg-white/5 p-1.5 rounded-2xl glass">
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setActiveFilter(cat)} className={`px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeFilter === cat ? 'bg-white text-black shadow-xl shadow-white/5' : 'text-gray-500 hover:text-white'}`}>{cat}</button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredRegistry.map(item => (
                <motion.div layout key={item.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
                  <ProtocolCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* HISTORY */}
        <section id="history" className="space-y-24 scroll-mt-32 relative">
          <div className="text-center space-y-4">
            <span className="text-[#00BFA6] mono text-[10px] font-black tracking-[0.6em] uppercase">/// Temporal_Logs</span>
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter">Timeline</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative px-4">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] timeline-line hidden lg:block opacity-20" />
            
            {TEMPORAL_LOGS.map((log, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2.5rem] group hover:bg-[#00BFA6]/5 transition-all duration-500 relative z-10 border-white/5"
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[#00BFA6] font-black text-3xl mono italic group-hover:translate-x-1 transition-transform">{log.year}</span>
                  <div className="p-4 rounded-xl bg-white/5 text-gray-500 group-hover:text-[#00BFA6] group-hover:scale-110 transition-all duration-500">{log.icon}</div>
                </div>
                <h4 className="text-xl font-black uppercase mb-4 text-white group-hover:tracking-widest transition-all">{log.title}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors">{log.text}</p>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-[#00BFA6]/40 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT / CTA */}
        <section id="contact" className="py-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="glass rounded-[4rem] p-12 md:p-24 text-center space-y-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00BFA6]/5 via-transparent to-[#7C3AED]/5 pointer-events-none" />
            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Direct<br/><span className="text-[#00BFA6]">Inquiry</span></h2>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">Available for educational consulting, AI agent deployment, and investment synergy.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-8">
              <a href={`mailto:${CONFIG.identity.email}`} className="flex items-center gap-3 px-12 py-6 bg-white text-black rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#00BFA6] hover:text-white transition-all w-full md:w-auto text-center justify-center">
                <Mail size={16} /> Email Sync
              </a>
              <a href={CONFIG.identity.whatsapp} target="_blank" className="flex items-center gap-3 px-12 py-6 glass border-[#00BFA6]/30 text-[#00BFA6] rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all w-full md:w-auto text-center justify-center">
                <MessageCircle size={16} /> WhatsApp Business
              </a>
            </div>
            <div className="pt-8 mono text-[10px] text-gray-600 tracking-widest">
              BUSINESS ADDR: +91 89006 53250 | {CONFIG.identity.email}
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="pt-32 pb-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-gray-700 mono">
          <div className="space-y-8 max-w-xs">
            <div className="flex items-center gap-6">
              <img src={CONFIG.identity.logo} className="w-12 h-12 object-contain grayscale opacity-30 hover:opacity-100 transition-opacity" alt="Logo" />
              <div>
                <p className="text-white text-xs tracking-widest">NABORAJ SARKAR</p>
                <p className="text-[#00BFA6]/40 mt-1">NS CODEX Node v12.6</p>
              </div>
            </div>
            <p className="normal-case tracking-normal text-xs text-gray-500 font-light leading-relaxed">
              Global systems architect and ICSE-trained engineer from India. Specialized in AI automation, crypto investment, and providing free digital education worldwide.
            </p>
            <div className="flex items-center gap-3 text-gray-800">
              <MapPin size={12} className="text-[#00BFA6]" />
              <span>22.98° N, 87.85° E</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 w-full md:w-auto">
             <div className="space-y-4">
               <h5 className="text-white text-[9px] tracking-[0.6em]">Navigation</h5>
               <nav className="flex flex-col gap-3">
                 <a href="#about" className="hover:text-white transition-colors">Biography</a>
                 <a href="#registry" className="hover:text-white transition-colors">Protocols</a>
                 <a href="#history" className="hover:text-white transition-colors">History</a>
               </nav>
             </div>
             <div className="space-y-4">
               <h5 className="text-white text-[9px] tracking-[0.6em]">Connect</h5>
               <nav className="flex flex-col gap-3">
                 {CONFIG.socials.map(s => (
                   <a key={s.name} href={s.url} target="_blank" className="hover:text-white transition-colors">{s.name}</a>
                 ))}
                 <a href={CONFIG.identity.whatsapp} target="_blank" className="text-[#00BFA6] hover:text-white transition-colors">WhatsApp</a>
               </nav>
             </div>
             <div className="space-y-4 col-span-2 md:col-span-1">
               <h5 className="text-white text-[9px] tracking-[0.6em]">Status</h5>
               <div className="flex flex-col gap-3">
                 <span className="flex items-center gap-2 text-green-500/50"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Operational</span>
                 <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Education_Live</span>
                 <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00BFA6]" /> ICSE_Node</span>
               </div>
             </div>
          </div>
        </footer>
        
        <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-[1em] text-gray-800 pt-12 pb-6 border-t border-white/5 mt-32">
          <span>© 2025 NABORAJ SARKAR</span>
          <span className="hidden md:inline">FREE_EDUCATION_MISSION_INDIA</span>
          <a href="https://github.com/naborajs" target="_blank" className="text-[#00BFA6]/40 hover:text-[#00BFA6] transition-colors">Architectural_Source</a>
        </div>
      </main>
    </div>
  );
}
