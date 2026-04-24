"use client";

import { motion, useReducedMotion } from "framer-motion";

const PILLARS = [
  { num: "01", title: "Senior-only pods", body: "No juniors learning on your budget. Every teammate has shipped regulated systems before." },
  { num: "02", title: "Compliance on day one", body: "We read RBI circulars and SAMA rulebooks. Legal framing shapes the first sprint, not the last." },
  { num: "03", title: "Ship in weeks", body: "Our first commit is in your repo by end of week one. Working software, not slide decks." },
  { num: "04", title: "Stay past launch", body: "We cover you through the first scale crisis. Then we hand over, cleanly." },
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
            Four principles. <em>Non-negotiable.</em>
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
