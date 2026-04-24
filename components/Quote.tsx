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
          We don't ship slide decks. We ship <em>systems</em> — running in production
          from day one, owned by your team by day ninety.
        </motion.blockquote>
        <motion.div
          className="wn-quote-attr"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="wn-quote-name">The Wonalab team</div>
          <div className="wn-quote-role">Engineering principle №1</div>
        </motion.div>
      </div>
    </section>
  );
}
