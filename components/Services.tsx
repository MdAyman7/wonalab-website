"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Link2, Sparkles, Layers, type LucideIcon } from "lucide-react";
import type { CSSProperties, MouseEvent } from "react";

type Service = {
  icon: LucideIcon;
  eye: string;
  title: string;
  body: string;
};

const SERVICES: Service[] = [
  {
    icon: ShieldCheck,
    eye: "Fintech",
    title: "Payments, ledgers, cards",
    body: "Regulated-grade backends. Real-time settlement. From RBI sandboxes to GCC licenses.",
  },
  {
    icon: Link2,
    eye: "Web3",
    title: "On-chain products",
    body: "Wallets, marketplaces, and protocol UX. Solidity, Solana, and L2 integrations.",
  },
  {
    icon: Sparkles,
    eye: "AI Agents",
    title: "Customer & back-office agents",
    body: "Voice, chat, and copilots in English, Hindi, and Arabic. Production-ready.",
  },
  {
    icon: Layers,
    eye: "Applications",
    title: "Web & mobile at scale",
    body: "Design-led iOS, Android, and Next.js apps. From 0→1 and 1→100.",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const reduce = useReducedMotion();
  const Icon = service.icon;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      className="wn-service"
      onMouseMove={onMove}
      style={{ "--mx": "50%", "--my": "50%" } as CSSProperties}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="wn-service-icon">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <div className="wn-service-eye">{service.eye}</div>
      <h3 className="wn-service-title">{service.title}</h3>
      <p className="wn-service-body">{service.body}</p>
      <a className="wn-link">
        Learn more <span className="wn-arrow">→</span>
      </a>
    </motion.article>
  );
}

export function Services() {
  return (
    <section className="wn-section">
      <div className="wn-container">
        <div className="wn-section-head">
          <motion.div
            className="wn-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What we build
          </motion.div>
          <motion.h2
            className="wn-section-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Four practices. <em>One team.</em>
          </motion.h2>
        </div>
        <div className="wn-grid-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
