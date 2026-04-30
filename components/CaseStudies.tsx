"use client";

import { motion, useReducedMotion } from "framer-motion";

type CaseItem = {
  eye: string;
  title: string;
  stat: string;
  statLabel: string;
  name: string;
};

const CASES: CaseItem[] = [
  {
    eye: "AI",
    title: "Chatbots, voice agents & copilots",
    stat: "Multi-LLM",
    statLabel: "Model-agnostic",
    name: "Agents",
  },
  {
    eye: "Fintech",
    title: "Payments, ledgers & KYC",
    stat: "Real-time",
    statLabel: "Sandbox to scale",
    name: "Fintech",
  },
  {
    eye: "SaaS",
    title: "Web dashboards & mobile apps",
    stat: "Web · iOS · Android",
    statLabel: "End-to-end",
    name: "SaaS",
  },
  {
    eye: "Bots",
    title: "Telegram, Discord & Slack: ops and automation",
    stat: "Always-on",
    statLabel: "Built where users live",
    name: "Bots",
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
          <div className="wn-eyebrow">Capabilities</div>
          <h2 className="wn-section-title">What we ship.</h2>
        </motion.div>
        <div className="wn-cases">
          {CASES.map((c, i) => (
            <motion.div
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
