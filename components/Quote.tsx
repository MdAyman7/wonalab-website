"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Quote() {
  const reduce = useReducedMotion();
  return (
    <section className="wn-section wn-section-alt">
      <div className="wn-container wn-quote">
        <motion.div
          className="wn-quote-mark"
          initial={reduce ? false : { opacity: 0, y: 20, scale: 0.8 }}
          whileInView={{ opacity: 0.5, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          “
        </motion.div>
        <motion.blockquote
          className="wn-quote-text"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Wonalab shipped our ledger in <em>eleven weeks</em>. It's been running clean
          for fourteen months. Their team thinks like operators, not vendors.
        </motion.blockquote>
        <motion.div
          className="wn-quote-attr"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="wn-quote-name">Rhea Kapoor</div>
          <div className="wn-quote-role">CTO, Finhaven NBFC</div>
        </motion.div>
      </div>
    </section>
  );
}
