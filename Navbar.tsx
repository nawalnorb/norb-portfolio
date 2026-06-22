"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Phone, Send, CheckCircle, Camera, Globe, AtSign, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const contactMethods = [
  { icon: Mail, label: "Email", value: "hello@norbmarketing.com", href: "mailto:hello@norbmarketing.com" },
  { icon: Phone, label: "WhatsApp", value: "+91 98765 43210", href: "https://wa.me/919876543210" },
  { icon: MessageSquare, label: "Camera DM", value: "@norbmarketing", href: "https://instagram.com" },
];

const socials = [
  { icon: Camera, href: "#", label: "Camera" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: AtSign, href: "#", label: "Twitter" },
];

const budgetOptions = [
  "Under ₹10,000/mo",
  "₹10k – ₹30k/mo",
  "₹30k – ₹75k/mo",
  "₹75k+/mo",
  "One-time project",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-radial from-accent/[0.06] via-transparent to-transparent" />
        <AnimatedSection>
          <p className="text-xs uppercase tracking-widest text-mist/60 mb-4 font-semibold">Contact</p>
          <h1
            className="text-5xl md:text-7xl font-extrabold gradient-text mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Let&apos;s build
            <br />
            <span className="gradient-text-accent">something real.</span>
          </h1>
          <p className="text-mist max-w-xl mx-auto text-base leading-relaxed">
            Whether you have a brief, a budget, or just an ambition — reach out. Every great result starts with a conversation.
          </p>
        </AnimatedSection>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-5">
            <AnimatedSection direction="left">
              {/* Response time */}
              <div className="glass border border-white/[0.07] rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center">
                  <Clock size={18} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-platinum text-sm font-semibold">Fast response</p>
                  <p className="text-mist text-xs">Typically within 4 hours</p>
                </div>
              </div>
            </AnimatedSection>

            {contactMethods.map((method, i) => (
              <AnimatedSection key={method.label} direction="left" delay={i * 0.1}>
                <motion.a
                  href={method.href}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="flex items-center gap-4 glass border border-white/[0.07] rounded-2xl p-5 group transition-all hover:border-accent/30"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 border border-accent/20 flex items-center justify-center">
                    <method.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-mist text-xs">{method.label}</p>
                    <p className="text-platinum text-sm font-medium group-hover:text-white transition-colors">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}

            <AnimatedSection direction="left" delay={0.3}>
              <div className="glass border border-white/[0.07] rounded-2xl p-5">
                <p className="text-xs text-mist/60 uppercase tracking-widest mb-3 font-semibold">Follow the journey</p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 rounded-xl glass border border-white/[0.08] flex items-center justify-center text-mist hover:text-white transition-colors"
                    >
                      <Icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Quote */}
            <AnimatedSection direction="left" delay={0.4}>
              <div className="glass border border-accent/20 rounded-2xl p-5 bg-gradient-to-br from-accent/5 to-transparent">
                <p className="text-mist text-xs leading-relaxed italic">
                  &ldquo;The best marketing investment you&apos;ll make is a clear strategy before spend. That&apos;s what I provide.&rdquo;
                </p>
                <p className="text-accent text-xs mt-2 font-semibold">— Muhammad Nawal</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <AnimatedSection direction="right">
              <div className="glass border border-white/[0.08] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-transparent" />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="relative z-10 text-center py-16"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center mx-auto mb-6 shadow-[0_0_60px_rgba(108,99,255,0.5)]"
                      >
                        <CheckCircle size={36} className="text-white" />
                      </motion.div>
                      <h3
                        className="text-2xl font-bold gradient-text mb-2"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        Message received!
                      </h3>
                      <p className="text-mist text-sm">
                        I&apos;ll review your project details and get back to you within 4 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="relative z-10 space-y-5"
                    >
                      <h2 className="text-xl font-bold text-platinum mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                        Tell me about your project
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { name: "name", label: "Full Name", placeholder: "Riya Sharma", type: "text" },
                          { name: "email", label: "Email", placeholder: "riya@brand.com", type: "email" },
                          { name: "company", label: "Company / Brand", placeholder: "LuxeHome", type: "text" },
                        ].map((field) => (
                          <div key={field.name} className={field.name === "company" ? "md:col-span-2" : ""}>
                            <label className="block text-xs text-mist/70 mb-2 uppercase tracking-wider">
                              {field.label}
                            </label>
                            <input
                              type={field.type}
                              placeholder={field.placeholder}
                              value={form[field.name as keyof typeof form]}
                              onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                              required
                              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-platinum placeholder:text-mist/40 focus:outline-none focus:border-accent/50 focus:bg-white/[0.06] transition-all duration-200"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-xs text-mist/70 mb-2 uppercase tracking-wider">
                          Monthly Budget
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {budgetOptions.map((opt) => (
                            <motion.button
                              key={opt}
                              type="button"
                              whileHover={{ scale: 1.04 }}
                              whileTap={{ scale: 0.96 }}
                              onClick={() => setForm({ ...form, budget: opt })}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                                form.budget === opt
                                  ? "bg-gradient-to-r from-accent to-accent-2 text-white"
                                  : "glass border border-white/[0.07] text-mist hover:text-white"
                              }`}
                            >
                              {opt}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs text-mist/70 mb-2 uppercase tracking-wider">
                          Project Details
                        </label>
                        <textarea
                          placeholder="Tell me about your brand, current challenges, and what success looks like..."
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          required
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-platinum placeholder:text-mist/40 focus:outline-none focus:border-accent/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(108,99,255,0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-accent-2 text-white font-semibold text-sm disabled:opacity-70 transition-all duration-300"
                      >
                        {loading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            <Send size={15} />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
