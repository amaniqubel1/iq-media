/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  ArrowRight, 
  BarChart3, 
  Target, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Mail, 
  MessageSquare, 
  Globe,
  Award,
  Sparkles,
  Users
} from 'lucide-react';

// --- Navigation ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-gold-400/20 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 bg-gold-400 rounded-none flex items-center justify-center p-2">
            <span className="font-display font-bold text-black text-xl">IQ</span>
          </div>
          <span className="font-display text-2xl font-bold tracking-[4px] text-gold-400">MEDIA</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] uppercase tracking-[2px] font-medium text-white/60 hover:text-gold-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 border border-gold-400/30 text-gold-400 text-[11px] uppercase tracking-[2px] font-bold hover:bg-gold-400 hover:text-black transition-all duration-300"
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-gold-400/20 px-6 py-8 flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg uppercase tracking-widest font-medium text-white hover:text-gold-400"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-widest font-bold text-gold-400"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-400/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold-500/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left w-full h-full flex flex-col justify-center"
        >
          <span className="inline-block mb-6 text-gold-400 text-[10px] uppercase tracking-[3px] font-bold">
            Elite Acquisition Agency
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-light mb-8 leading-[0.95] tracking-[-2px] text-white">
            Scale Your Business With <br />
            <span className="text-gold-400">Predictable</span> Client Growth.
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-lg mb-12 font-light leading-relaxed">
            We engineer high-converting paid advertising systems that turn marketing spend into measurable revenue scaling. No guesswork, just data-driven elite results.
          </p>

          <div className="flex flex-row gap-12 mb-12">
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-gold-400 leading-none">98%</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 mt-2">Client Retention</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-gold-400 leading-none">$42M+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 mt-2">Ad Spend Managed</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-gold-400 leading-none">4.2x</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 mt-2">Avg. ROI</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-gold-400 text-[#050505] font-bold uppercase tracking-[2px] text-[12px] flex items-center justify-center"
            >
              Book Strategy Call
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-gold-400 to-transparent animate-bounce opacity-30" />
      </motion.div>
    </section>
  );
};

// --- Section Component ---
const Section = ({ id, children, className = "" }: { id?: string; children: any; className?: string }) => (
  <section id={id} className={`py-24 px-6 md:py-32 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

// --- About Section ---
const About = () => {
  return (
    <Section id="about" className="bg-zinc-950 border-y border-gold-400/10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-400 text-[10px] uppercase tracking-[3px] font-bold mb-4 block">The Agency</span>
          <h2 className="text-4xl md:text-5xl font-display font-light mb-8 leading-[1] text-white">
            We Don't Just Run Ads. <br />
            We Engineer <span className="text-gold-400 italic">Growth</span>.
          </h2>
          <div className="space-y-6 text-white/70 font-light leading-relaxed text-base">
            <p>
              IQ Media is a results-driven growth agency focused on helping high-ticket businesses acquire more clients through strategic paid advertising and scalable campaign systems.
            </p>
            <p className="border-l-2 border-gold-400 pl-6 text-white/90">
              "Our philosophy is simple: If we don't deliver, we don't get paid. We are partners in your success, risk-takers for your results."
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square md:aspect-auto h-full max-h-[500px]"
        >
          <div className="absolute inset-0 border border-gold-400/20 translate-x-4 translate-y-4" />
          <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
              alt="Strategy session" 
              className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-gold-400 text-black p-8 font-display">
            <p className="text-5xl font-bold leading-none">FREE</p>
            <p className="text-sm uppercase tracking-widest mt-2 border-t border-black/20 pt-2">Until we deliver</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

// --- Services Component ---
const Services = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Paid Advertising",
      desc: "Meta, Google and multi-platform ad campaigns engineered for maximum conversion and efficiency."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Lead Generation",
      desc: "High-quality client acquisition systems that fill your pipeline with qualified, ready-to-buy leads."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Campaign Optimization",
      desc: "Continuous data-driven improvements to lower your acquisition costs and increase lifetime value."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Scaling",
      desc: "Infrastructure designed to help businesses grow sustainably from six to seven figures and beyond."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Conversion Strategy",
      desc: "Turning cold traffic into loyal paying clients through psychology-based funnel design."
    }
  ];

  return (
    <Section id="services">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Core Prowess</h2>
        <div className="w-24 h-1 bg-gold-400 mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-10 bg-white/2 border border-gold-400/15 transition-all duration-300 relative overflow-hidden"
          >
            <div className="text-gold-400 mb-6 font-bold text-sm">
              {item.title}
            </div>
            <p className="text-white/50 text-[13px] font-light leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// --- Stats / Quality Section ---
const WhyChooseUs = () => {
  const stats = [
    { label: "Approach", val: "Results-First" },
    { label: "Guarantee", val: "Risk-Free" },
    { label: "Data Quality", val: "High Fidelity" },
    { label: "Focus", val: "Measurable ROI" },
    { label: "Scaling", val: "Long-Term" },
  ];

  return (
    <Section className="bg-black py-0">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-0 border-y border-white/10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 border-r border-white/10 last:border-r-0 flex flex-col items-center justify-center text-center group"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 mb-2 group-hover:text-gold-400 transition-colors">
              {stat.label}
            </span>
            <span className="text-sm md:text-base font-display font-bold uppercase tracking-widest text-white/80">
              {stat.val}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// --- Guarantee ---
const Guarantee = () => {
  return (
    <Section className="relative overflow-hidden py-0">
      <div className="relative z-10 bg-gradient-to-r from-gold-400/10 to-transparent border-l-4 border-gold-400 p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-left max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-display font-light mb-6 text-white leading-tight">
            No Results? We Work Free Until We Deliver.
          </h2>
          <p className="text-sm md:text-base text-gold-400/80 font-light max-w-2xl">
            Our confidence comes from our systems. If we don’t achieve the agreed results, we continue working at no cost until we do. Total transparency, zero risk.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 bg-gold-400 text-black font-bold uppercase tracking-[2px] text-[12px] flex-shrink-0"
        >
          Book Strategy Call
        </motion.button>
      </div>
    </Section>
  );
};

// --- How It Works ---
const Process = () => {
  const steps = [
    { title: "Strategy Analysis", desc: "We dive deep into your business model, goals, and market positioning." },
    { title: "Campaign Launch", desc: "Deployment of high-converting creative assets and precise targeting." },
    { title: "Optimization", desc: "Rigorous split-testing and refinement based on real-world data." },
    { title: "Scale & Growth", desc: "Scaling budgets and expansion of high-ROI systems." }
  ];

  return (
    <Section id="process">
      <div className="text-center mb-20">
        <span className="text-gold-400 text-sm uppercase tracking-widest font-bold mb-2 block">Our Blueprint</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold px-4">Engineering Success</h2>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/10" />
        <div className="grid md:grid-cols-4 gap-12 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="w-24 h-24 rounded-full bg-zinc-900 border border-gold-400/20 flex items-center justify-center font-display text-4xl font-bold text-gold-400 mb-8 group-hover:bg-gold-400 group-hover:text-black transition-all duration-500 mx-auto md:mx-0">
                0{i + 1}
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-center md:text-left">{step.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed text-center md:text-left">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// --- Testimonials ---
const Testimonials = () => {
  const reviews = [
    { name: "Julian Thorne", role: "CEO, Lux Interior", text: "IQ Media transformed our acquisition pipeline. We've scaled from $20k to $150k monthly revenue in just 4 months. The transparency is unlike any other agency." },
    { name: "Sophia Elara", role: "Founder, Zenith HR", text: "Working with Aman and his team was the best decision for our growth. They don't just provide leads—they provide high-intent clients that actually close." },
    { name: "Marcus Vane", role: "Marketing Director, V-Logic", text: "The guarantee gave us confidence, but the results made us stay. Predictable growth is exactly what they delivered." }
  ];

  return (
    <Section id="testimonials" className="bg-zinc-950">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold mb-4">Client Outcomes</h2>
        <div className="w-16 h-1 bg-gold-400 mx-auto" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="p-8 bg-black border border-white/5 rounded-2xl">
            <div className="flex mb-6 space-x-1">
              {[...Array(5)].map((_, i) => <Sparkles key={i} className="w-4 h-4 text-gold-400" />)}
            </div>
            <p className="text-gray-400 italic font-light mb-8 leading-relaxed">"{r.text}"</p>
            <div>
              <p className="font-display font-bold text-lg">{r.name}</p>
              <p className="text-xs gold-text-gradient uppercase tracking-widest font-bold">{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

// --- Contact Section ---
const Contact = () => {
  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to <span className="italic gold-text-gradient">Ascend</span>?</h2>
          <p className="text-gray-400 text-lg mb-12 font-light">
            Take the first step towards predictable scaling. Fill out the form below or reach out directly to our founding concierge.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full border border-gold-400/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-black transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <a href="mailto:aman.iqmedia@gmail.com" className="text-lg font-medium hover:text-gold-400 transition-colors font-display">aman.iqmedia@gmail.com</a>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full border border-gold-400/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-black transition-all">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-lg font-medium font-display">Global Digital HQ</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[2rem] space-y-6"
        >
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-400">Full Name</label>
            <input 
              type="text" 
              className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 focus:border-gold-400 outline-none transition-all font-light" 
              placeholder="e.g. Johnathan Smith"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-400">Business Name</label>
              <input 
                type="text" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 focus:border-gold-400 outline-none transition-all font-light" 
                placeholder="Your Company"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-400">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 focus:border-gold-400 outline-none transition-all font-light" 
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-400">Growth Goal / Challenge</label>
            <textarea 
              rows={4}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 focus:border-gold-400 outline-none transition-all font-light resize-none" 
              placeholder="Tell us about where you want to go..."
            />
          </div>
          <button className="w-full py-5 bg-gold-400 text-black font-bold uppercase tracking-[0.2em] text-xs rounded-xl hover:bg-gold-500 transition-all luxury-shadow">
            Submit Inquiry
          </button>
        </motion.form>
      </div>
    </Section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="meta-item flex flex-col">
            <div className="meta-label text-[9px] uppercase tracking-[2px] text-white/40 mb-2">Founder</div>
            <div className="meta-value text-sm text-white font-display">Aman Iqubel</div>
          </div>
          <div className="meta-item flex flex-col">
            <div className="meta-label text-[9px] uppercase tracking-[2px] text-white/40 mb-2">Headquarters</div>
            <div className="meta-value text-sm text-white font-display">Strategic Growth Center</div>
          </div>
          <div className="meta-item flex flex-col">
            <div className="meta-label text-[9px] uppercase tracking-[2px] text-white/40 mb-2">Mission</div>
            <div className="meta-value text-sm text-white/60 font-light">Turning campaigns into measurable growth systems.</div>
          </div>
      </div>
    </footer>
  );
};

// --- Loading Screen ---
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-24 h-24 border-2 border-gold-400/20 rounded-full flex items-center justify-center p-4 mb-4 relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-t-2 border-gold-400 rounded-full"
          />
          <span className="font-display font-bold text-gold-400 text-4xl">IQ</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gold-400 text-[10px] uppercase tracking-[0.5em] font-bold"
        >
          Engineering Growth
        </motion.p>
      </div>
    </motion.div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-sans">
      <LoadingScreen />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gold-400 z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <Hero />
      <WhyChooseUs />
      <About />
      <Services />
      <Guarantee />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
