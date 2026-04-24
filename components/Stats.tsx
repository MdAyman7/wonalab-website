"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type Stat = { num: string; unit?: string; label: string };

const STATS: Stat[] = [
  { num: "9", unit: "yrs", label: "Shipping regulated software" },
  { num: "46", label: "Engineers, designers, PMs" },
  { num: "3", label: "Offices across IN & GCC" },
  { num: "$2B", unit: "+", label: "Transacted on our platforms" },
];

function StatCell({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const final = stat.num;

  useEffect(() => {
    if (!inView || !numRef.current) return;
    if (reduce) {
      numRef.current.textContent = final;
      return;
    }
    const match = final.match(/^([^\d]*)([\d.]+)([^$]*)$/);
    if (!match) {
      numRef.current.textContent = final;
      return;
    }
    const prefix = match[1];
    const target = parseFloat(match[2]);
    const suffix = match[3];
    const isFloat = match[2].includes(".");

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (!numRef.current) return;
        numRef.current.textContent =
          prefix + (isFloat ? v.toFixed(1) : Math.floor(v)) + suffix;
      },
      onComplete: () => {
        if (numRef.current) numRef.current.textContent = final;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, final]);

  return (
    <div
      ref={ref}
      className={`wn-stat-cell ${inView ? "is-in" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="wn-stat-big">
        <span ref={numRef} className="wn-stat-big-num">
          {reduce ? final : "0"}
        </span>
        {stat.unit && <span className="wn-stat-big-unit">{stat.unit}</span>}
      </div>
      <div className="wn-stat-label">{stat.label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="wn-section">
      <div className="wn-container wn-stats">
        {STATS.map((s, i) => (
          <StatCell key={s.label} stat={s} index={i} />
        ))}
      </div>
    </section>
  );
}
