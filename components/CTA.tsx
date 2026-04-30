"use client";

import { motion, useReducedMotion } from "framer-motion";

export function CTA({ onContact }: { onContact: () => void }) {
  const reduce = useReducedMotion();
  return (
    <section className="wn-cta-section">
      <motion.div
        className="wn-container wn-cta-inner"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="wn-cta-title">
          Building something at the edge? <em>Tell us.</em>
        </h2>
        <p className="wn-cta-body">
          AI agent, fintech tool, SaaS web or mobile app. If you're building it, we want to see it. First call within 48 hours.
        </p>
        <a className="wn-btn wn-btn-primary wn-btn-lg" onClick={onContact}>
          Start a project <span className="wn-arrow">→</span>
        </a>
      </motion.div>
    </section>
  );
}
