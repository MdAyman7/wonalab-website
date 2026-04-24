"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const ITEMS = ["Ethereum", "Solana", "Polygon", "Arbitrum", "Base", "OpenAI", "Anthropic", "Telegram", "Discord", "OpenClaw"];

export function TrustBar() {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="wn-trustbar">
      <div className="wn-container wn-trustbar-inner">
        <span className="wn-caption">Engineered with</span>
        <div
          className="wn-trustbar-marquee"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="wn-trustbar-track"
            animate={reduce || paused ? { x: 0 } : { x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {doubled.map((item, idx) => (
              <span key={idx} className="wn-trustbar-logo">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
