"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, TrendingUp, Zap, Globe, BarChart3, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useRef } from "react";

const stats = [
  { value: "120+", label: "Brands Scaled" },
  { value: "₹4Cr+", label: "Revenue Generated" },
  { value: "98%", label: "Client Retention" },
  { value: "5★", label: "Average Rating" },
];

const services = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    desc: "Data-driven ad campaigns on Meta, Google, and beyond that deliver measurable ROI.",
    color: "from-accent to-accent-2",
  },
  {
    icon: Globe,
    title: "Brand Strategy",
    desc: "Positioning your brand as a category leader with a narrative that resonates and converts.",
    color: "from-accent-2 to-accent-3",
  },
  {
    icon: BarChart3,
    title: "SEO & Organic Growth",
    desc: "Compounding visibility through technical excellence and authority-building content.",
    color: "from-accent-3 to-accent",
  },
  {
    icon: Sparkles,
    title: "Content Creation",
    desc: "Scroll-stopping visuals and copy that tell your brand story with intention.",
    color: "from-ember to-accent-2",
  },
];

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Founder, LuxeHome",
    text: "NORB transformed our online presence. Revenue from digital channels tripled in 6 months.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "CMO, TechFlow",
    text: "Muhammad doesn't just run ads — he builds growth systems. The best marketing investment we've made.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "CEO, GreenRoots",
    text: "The brand strategy work was exceptional. We went from unknown to industry-recognized in 4 months.",
    rating: 5,
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/[0.07] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-hero-glow" />

        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(108,99,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-accent-2/10 blur-[100px]"
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-2 text-xs text-mist mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for new projects · Based in India</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span className="gradient-text">Marketing that</span>
            <br />
            <span className="gradient-text-accent">moves the needle.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-mist max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I&apos;m <strong className="text-platinum font-medium">Muhammad Nawal</strong>, founder of NORB Marketing.
            I build growth systems that turn ambitious brands into category leaders.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(108,99,255,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-2 text-white font-semibold text-sm transition-all duration-300"
              >
                View My Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-2xl glass border border-white/10 text-platinum font-semibold text-sm hover:border-white/20 transition-all duration-300"
              >
                Start a Project
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 rounded-full bg-white/30" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div
                  className="text-4xl md:text-5xl font-extrabold gradient-text-accent mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-mist text-sm">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-mist/60 mb-3 font-semibold">What I Do</p>
          <h2
            className="text-4xl md:text-5xl font-bold gradient-text"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Full-spectrum growth
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass border border-white/[0.07] rounded-2xl p-8 group cursor-default h-full"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <svc.icon size={22} className="text-white" />
                </div>
                <h3
                  className="text-xl font-bold text-platinum mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {svc.title}
                </h3>
                <p className="text-mist text-sm leading-relaxed">{svc.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10" delay={0.4}>
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 text-sm text-mist hover:text-white transition-colors border-b border-mist/30 hover:border-white/50 pb-0.5"
            >
              Explore all services <ArrowRight size={14} />
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-32 bg-gradient-to-b from-transparent via-ink/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-mist/60 mb-3 font-semibold">Social Proof</p>
            <h2
              className="text-4xl md:text-5xl font-bold gradient-text"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Clients who scaled
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass border border-white/[0.07] rounded-2xl p-7 h-full flex flex-col"
                >
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-platinum/80 text-sm leading-relaxed flex-1 mb-5">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-platinum text-sm font-semibold">{t.name}</div>
                      <div className="text-mist text-xs">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-3xl glass border border-white/[0.1] p-12 md:p-16 text-center"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent-2/10 to-accent-3/10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/20 blur-[80px]" />

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-flex mb-6"
              >
                <Zap size={32} className="text-accent-2" />
              </motion.div>
              <h2
                className="text-3xl md:text-5xl font-bold gradient-text mb-4"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Ready to scale?
              </h2>
              <p className="text-mist max-w-md mx-auto mb-8 text-sm leading-relaxed">
                Book a free 30-minute strategy call. No fluff, no pitch — just a clear plan for your growth.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(108,99,255,0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-2 text-white font-semibold"
                >
                  Book Free Strategy Call
                  <ArrowRight size={16} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>
    </div>
  );
}
