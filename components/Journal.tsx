"use client";

import { motion, useReducedMotion } from "framer-motion";

const POSTS = [
  {
    eye: "Engineering",
    date: "Mar 2026",
    title: "Why we switched our ledger from Postgres to a purpose-built append-only store",
    read: "8 min",
  },
  {
    eye: "Design",
    date: "Feb 2026",
    title: "Designing KYC for 14 languages: lessons from four GCC markets",
    read: "6 min",
  },
  {
    eye: "Opinion",
    date: "Jan 2026",
    title: "The case against staff augmentation for regulated products",
    read: "5 min",
  },
];

const PATH_D = [
  "M12 0 L24 12 L12 24 L0 12 Z",
  "M0 0 L24 24 M24 0 L0 24",
  "M12 2 L22 12 L12 22 L2 12 Z M12 6 L18 12 L12 18 L6 12 Z",
];

export function Journal() {
  const reduce = useReducedMotion();
  return (
    <section className="wn-section">
      <div className="wn-container">
        <div
          className="wn-section-head"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            maxWidth: "none",
          }}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="wn-eyebrow">Journal</div>
            <h2 className="wn-section-title">Writing from the studio</h2>
          </motion.div>
          <motion.a
            className="wn-link"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Read all posts <span className="wn-arrow">→</span>
          </motion.a>
        </div>
        <div className="wn-posts">
          {POSTS.map((p, i) => (
            <motion.a
              key={p.title}
              className="wn-post"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="wn-post-visual">
                <svg viewBox="0 0 400 120" fill="none" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id={`pp${i}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d={PATH_D[i]} stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6" />
                    </pattern>
                  </defs>
                  <rect width="400" height="120" fill={`url(#pp${i})`} />
                </svg>
              </div>
              <div className="wn-post-meta">
                <span className="wn-post-eye">{p.eye}</span>
                <span className="wn-post-dot">·</span>
                <span className="wn-post-date">{p.date}</span>
              </div>
              <h3 className="wn-post-title">{p.title}</h3>
              <div className="wn-post-foot">
                <span className="wn-post-read">{p.read} read</span>
                <span className="wn-arrow">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
