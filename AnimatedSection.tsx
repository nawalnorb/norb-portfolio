"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, TrendingUp, Eye } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const categories = ["All", "Performance", "Brand", "SEO", "Social"];

const projects = [
  {
    id: 1,
    title: "LuxeHome Decor",
    category: "Performance",
    tags: ["Meta Ads", "Google Ads", "ROAS 6.2x"],
    result: "₹1.2Cr revenue in 90 days",
    metric: "+380%",
    metricLabel: "Revenue Growth",
    desc: "Full-funnel performance campaign across Meta and Google, scaling from ₹30k/month ad spend to ₹3L/month with consistent ROAS.",
    gradient: "from-accent/20 to-accent-2/20",
    accentColor: "text-accent",
  },
  {
    id: 2,
    title: "GreenRoots Organic",
    category: "Brand",
    tags: ["Brand Strategy", "Visual Identity", "Positioning"],
    result: "Category recognition in 4 months",
    metric: "4x",
    metricLabel: "Brand Recall",
    desc: "Complete brand repositioning from generic health brand to premium wellness authority, including messaging framework and identity overhaul.",
    gradient: "from-accent-2/20 to-emerald-500/20",
    accentColor: "text-accent-2",
  },
  {
    id: 3,
    title: "TechFlow SaaS",
    category: "SEO",
    tags: ["Technical SEO", "Content Strategy", "Link Building"],
    result: "Top 3 rankings for 40+ keywords",
    metric: "+520%",
    metricLabel: "Organic Traffic",
    desc: "12-month SEO engagement that turned a domain-authority-20 site into a thought leadership hub with 50k+ monthly organic visits.",
    gradient: "from-accent-3/20 to-accent/20",
    accentColor: "text-accent-3",
  },
  {
    id: 4,
    title: "StyleVault Fashion",
    category: "Social",
    tags: ["Instagram", "Influencer Strategy", "Reels"],
    result: "0 to 180k followers in 8 months",
    metric: "180k",
    metricLabel: "Followers Gained",
    desc: "Built a social presence from scratch with a consistent aesthetic, creator partnerships, and viral content strategy.",
    gradient: "from-ember/20 to-accent-2/20",
    accentColor: "text-ember",
  },
  {
    id: 5,
    title: "MediCore Healthcare",
    category: "Performance",
    tags: ["Google Ads", "Lead Gen", "Healthcare"],
    result: "Cost-per-lead reduced by 65%",
    metric: "-65%",
    metricLabel: "CPL Reduction",
    desc: "Restructured and optimized a legacy Google Ads account, dramatically reducing costs while tripling lead volume.",
    gradient: "from-accent/20 to-accent-3/20",
    accentColor: "text-accent",
  },
  {
    id: 6,
    title: "Crispy Bites F&B",
    category: "Social",
    tags: ["Content", "Paid Social", "Community"],
    result: "3x order volume in 60 days",
    metric: "+200%",
    metricLabel: "Online Orders",
    desc: "Launched digital-first marketing for a local F&B chain, driving measurable footfall and online order uplift.",
    gradient: "from-accent-2/20 to-accent/20",
    accentColor: "text-accent-2",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-radial from-accent-2/[0.05] via-transparent to-transparent" />
        <AnimatedSection>
          <p className="text-xs uppercase tracking-widest text-mist/60 mb-4 font-semibold">Portfolio</p>
          <h1
            className="text-5xl md:text-7xl font-extrabold gradient-text mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Results that
            <br />
            <span className="gradient-text-accent">speak volumes.</span>
          </h1>
          <p className="text-mist max-w-xl mx-auto text-base leading-relaxed">
            Real brands. Real numbers. Every case study below is a growth story built on strategy, execution, and obsessive optimization.
          </p>
        </AnimatedSection>
      </section>

      {/* Filter tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <AnimatedSection>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-gradient-to-r from-accent to-accent-2 text-white shadow-[0_0_20px_rgba(108,99,255,0.3)]"
                    : "glass border border-white/[0.07] text-mist hover:text-platinum hover:border-white/15"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ y: -8, scale: 1.01 }}
                className="relative glass border border-white/[0.07] rounded-2xl overflow-hidden cursor-pointer group"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 p-6">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <p className="text-xs text-mist/60 uppercase tracking-widest mb-1">{project.category}</p>
                      <h3
                        className="text-lg font-bold text-platinum"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={hovered === project.id ? { rotate: 0, opacity: 1 } : { rotate: -45, opacity: 0.4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight size={18} className="text-mist" />
                    </motion.div>
                  </div>

                  {/* Metric highlight */}
                  <div className="glass border border-white/[0.06] rounded-xl p-4 mb-5">
                    <div
                      className={`text-3xl font-extrabold ${project.accentColor} mb-1`}
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {project.metric}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-mist">
                      <TrendingUp size={12} />
                      {project.metricLabel}
                    </div>
                  </div>

                  <p className="text-mist text-xs leading-relaxed mb-5">{project.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.06] text-mist border border-white/[0.05]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Result footer */}
                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                    <Eye size={12} className="text-mist/60" />
                    <span className="text-xs text-mist/70">{project.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <AnimatedSection className="text-center">
          <p className="text-mist text-sm mb-6">
            Want results like these for your brand?
          </p>
          <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(108,99,255,0.4)" }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-2 text-white font-semibold text-sm"
            >
              Start Your Growth Story
            </motion.button>
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
}
