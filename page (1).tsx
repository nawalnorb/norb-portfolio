"use client";

import { motion } from "framer-motion";
import { BarChart3, Globe, Megaphone, Sparkles, TrendingUp, Video, CheckCircle2, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const services = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    subtitle: "Ads that pay for themselves — and then some",
    color: "from-accent to-accent-2",
    features: [
      "Meta & Google Ads strategy and management",
      "Full-funnel campaign architecture",
      "Creative testing and iteration",
      "ROAS optimization and scaling",
      "Weekly reporting with insights",
    ],
    starting: "₹15,000/month",
  },
  {
    icon: Globe,
    title: "Brand Strategy",
    subtitle: "Own your category before someone else does",
    color: "from-accent-2 to-accent-3",
    features: [
      "Competitive positioning analysis",
      "Brand messaging framework",
      "Visual identity direction",
      "Target audience persona development",
      "Go-to-market strategy",
    ],
    starting: "₹25,000 (one-time)",
  },
  {
    icon: BarChart3,
    title: "SEO & Organic Growth",
    subtitle: "Traffic that compounds while you sleep",
    color: "from-accent-3 to-accent",
    features: [
      "Technical SEO audit and fixes",
      "Keyword strategy and mapping",
      "Content briefs and publishing",
      "Link building and authority growth",
      "Monthly ranking reports",
    ],
    starting: "₹12,000/month",
  },
  {
    icon: Sparkles,
    title: "Content Creation",
    subtitle: "Content that earns attention, not begs for it",
    color: "from-ember to-accent-2",
    features: [
      "Social media content strategy",
      "Copy and creative direction",
      "Reels, carousels, and static posts",
      "Brand voice development",
      "Monthly content calendar",
    ],
    starting: "₹10,000/month",
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    subtitle: "Consistent presence, measurable growth",
    color: "from-accent to-accent-3",
    features: [
      "Platform strategy (IG, LinkedIn, Twitter)",
      "Daily/weekly posting and scheduling",
      "Community management and engagement",
      "Influencer identification and outreach",
      "Growth analytics dashboard",
    ],
    starting: "₹18,000/month",
  },
  {
    icon: Video,
    title: "Video Marketing",
    subtitle: "The format the algorithm rewards most",
    color: "from-accent-2 to-ember",
    features: [
      "YouTube SEO and channel strategy",
      "Short-form video production briefs",
      "Script writing and storyboarding",
      "Distribution and promotion",
      "View and conversion tracking",
    ],
    starting: "₹20,000/month",
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "30 min to understand your brand, goals, and current state." },
  { step: "02", title: "Audit & Strategy", desc: "Deep-dive analysis of your market, competitors, and opportunities." },
  { step: "03", title: "Proposal & Onboarding", desc: "Custom growth plan, pricing, and timeline presented clearly." },
  { step: "04", title: "Execute & Scale", desc: "We run the playbook, iterate fast, and report with full transparency." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-radial from-accent-3/[0.05] via-transparent to-transparent" />
        <AnimatedSection>
          <p className="text-xs uppercase tracking-widest text-mist/60 mb-4 font-semibold">Services</p>
          <h1
            className="text-5xl md:text-7xl font-extrabold gradient-text mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Growth, from
            <br />
            <span className="gradient-text-accent">every angle.</span>
          </h1>
          <p className="text-mist max-w-2xl mx-auto text-base leading-relaxed">
            Whether you need one thing done exceptionally well, or a full-stack growth partner — NORB has a solution built for you.
          </p>
        </AnimatedSection>
      </section>

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass border border-white/[0.07] rounded-2xl p-7 h-full flex flex-col group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <svc.icon size={22} className="text-white" />
                </div>
                <h3
                  className="text-lg font-bold text-platinum mb-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {svc.title}
                </h3>
                <p className="text-mist/70 text-xs mb-5 italic">{svc.subtitle}</p>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs text-mist">
                      <CheckCircle2 size={13} className="text-accent mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-mist/50 uppercase tracking-wider">Starting from</p>
                    <p className="text-sm font-bold text-platinum" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {svc.starting}
                    </p>
                  </div>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      className={`w-9 h-9 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center`}
                    >
                      <ArrowRight size={15} className="text-white" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-mist/60 mb-3 font-semibold">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text" style={{ fontFamily: "'Syne', sans-serif" }}>
            Simple process, serious results
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {process.map((p, i) => (
            <AnimatedSection key={p.step} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass border border-white/[0.07] rounded-2xl p-6 text-center relative"
              >
                <div
                  className="text-4xl font-extrabold gradient-text-accent mb-3 leading-none"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {p.step}
                </div>
                <h3 className="font-bold text-platinum text-sm mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {p.title}
                </h3>
                <p className="text-mist text-xs leading-relaxed">{p.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-mist/30 text-lg z-10">
                    →
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pt-10">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl glass border border-white/[0.1] p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent-2/10 to-accent-3/10" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                Not sure which service you need?
              </h2>
              <p className="text-mist text-sm mb-6 max-w-md mx-auto">
                Tell me your goals. I&apos;ll tell you exactly what will move the needle for your specific situation.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(108,99,255,0.4)" }}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-2 text-white font-semibold text-sm"
                >
                  Get a Free Consultation
                </motion.button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
