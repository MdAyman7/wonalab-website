"use client";

import { motion, useReducedMotion } from "framer-motion";

const PILLARS = [
  { num: "01", title: "Web3-native team", body: "Every engineer has shipped on-chain. We've lived through bear markets, exploits, and L2 migrations — the system isn't theory." },
  { num: "02", title: "Edge-first engineering", body: "We build where the docs run out. AI, on-chain, and integration work most teams quote out of scope." },
  { num: "03", title: "Ship in weeks, not quarters", body: "First commit is in your repo by end of week one. Working code in staging by week three. No slide decks." },
  { num: "04", title: "Stay past launch", body: "We run the first 90 days in production with you, then hand over a system your team can actually own." },
];

export function Approach() {
  const reduce = useReducedMotion();
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
            How we work
          </motion.div>
          <motion.h2
            className="wn-section-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            How we work. <em>Non-negotiable.</em>
          </motion.h2>
        </div>
        <div className="wn-pillars">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.num}
              className="wn-pillar"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="wn-pillar-num">{p.num}</div>
              <div className="wn-pillar-body">
                <h3 className="wn-pillar-title">{p.title}</h3>
                <p className="wn-pillar-text">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
