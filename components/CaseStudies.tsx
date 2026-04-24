"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type CaseItem = {
  eye: string;
  title: string;
  stat: string;
  statLabel: string;
  name: string;
};

const CASES: CaseItem[] = [
  {
    eye: "Fintech · 2024",
    title: "Cross-border settlement for an NBFC",
    stat: "₹240Cr",
    statLabel: "Monthly volume",
    name: "Finhaven",
  },
  {
    eye: "AI Agents · 2025",
    title: "Arabic voice agent for a GCC bank",
    stat: "71%",
    statLabel: "First-contact resolution",
    name: "Bayan",
  },
  {
    eye: "Web3 · 2023",
    title: "Self-custody wallet for a top L2",
    stat: "11wk",
    statLabel: "Design to App Store",
    name: "Chainroot",
  },
  {
    eye: "Fintech · 2025",
    title: "KYC re-platform for a Gulf super-app",
    stat: "4.2M",
    statLabel: "Users onboarded",
    name: "Noor",
  },
];

export function CaseStudies() {
  const reduce = useReducedMotion();

  return (
    <section className="wn-section wn-section-alt">
      <div className="wn-container">
        <motion.div
          className="wn-section-head"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="wn-eyebrow">Selected work</div>
          <h2 className="wn-section-title">Recent case studies</h2>
        </motion.div>
        <div className="wn-cases">
          {CASES.map((c, i) => (
            <motion.a
              key={c.title}
              className="wn-case"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: Math.min(i * 0.08, 0.32), ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="wn-case-meta">
                <div className="wn-case-eye">{c.eye}</div>
                <h3 className="wn-case-title">{c.title}</h3>
              </div>
              <div className="wn-case-stat">
                <div className="wn-stat-num">{c.stat}</div>
                <div className="wn-stat-label">{c.statLabel}</div>
              </div>
              <div className="wn-case-arrow">
                <ArrowUpRight size={20} strokeWidth={1.6} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
