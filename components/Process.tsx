"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { FileText, Hammer, Rocket, Users, type LucideIcon } from "lucide-react";
import { useRef, useState } from "react";

type Step = {
  num: string;
  wk: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    num: "01",
    wk: "Wk 1",
    title: "Brief & scoping",
    body: "Senior partner reads your brief, runs a 45-minute call, and returns a written shape the next day.",
    icon: FileText,
  },
  {
    num: "02",
    wk: "Wk 2",
    title: "Team assembly",
    body: "We assemble a 3–6 person pod from our bench. You meet the exact humans who will build.",
    icon: Users,
  },
  {
    num: "03",
    wk: "Wk 3–N",
    title: "Design & build",
    body: "Weekly demos. Working software in your staging environment from week three.",
    icon: Hammer,
  },
  {
    num: "04",
    wk: "Launch",
    title: "Ship & stabilize",
    body: "We own the launch, the first production incident, and the handover.",
    icon: Rocket,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Process() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [reached, setReached] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 85%", "end 55%"],
  });

  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(STEPS.length, Math.floor(v * (STEPS.length + 0.4)) + 1);
    setReached((prev) => (next > prev ? next : prev));
  });

  const activeIndex = hovered ?? reached - 1;

  return (
    <section className="wn-section wn-section-alt">
      <div className="wn-container">
        <div className="wn-section-head">
          <motion.div
            className="wn-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Engagement
          </motion.div>
          <motion.h2
            className="wn-section-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            From first call to production.
          </motion.h2>
        </div>

        <div ref={wrapRef} className="wn-timeline-v2">
          <div className="wn-rail">
            <div className="wn-rail-track" />
            <motion.div
              className="wn-rail-fill"
              style={reduce ? { width: "100%" } : { width: fillWidth }}
            />
          </div>

          <div className="wn-steps-v2">
            {STEPS.map((s, i) => {
              const isReached = i < reached;
              const isActive = activeIndex === i;
              const isDim = hovered !== null && hovered !== i;
              const Icon = s.icon;

              return (
                <motion.div
                  key={s.num}
                  className={`wn-step-v2 ${isActive ? "is-active" : ""} ${isDim ? "is-dim" : ""}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
                >
                  <div className="wn-step-row">
                    <motion.span
                      className="wn-node"
                      animate={
                        reduce
                          ? undefined
                          : {
                              scale: isActive ? 1.15 : 1,
                              backgroundColor: isReached
                                ? "var(--fg-accent)"
                                : "var(--bg-page)",
                              boxShadow: isActive
                                ? "0 0 0 6px rgba(255,153,102,0.14), 0 0 20px rgba(255,153,102,0.45)"
                                : isReached
                                  ? "0 0 10px rgba(255,153,102,0.35)"
                                  : "0 0 0 0 rgba(255,153,102,0)",
                            }
                      }
                      transition={{ duration: 0.4, ease: EASE }}
                    >
                      {!reduce && isActive && (
                        <motion.span
                          className="wn-node-ring"
                          initial={{ scale: 1, opacity: 0.6 }}
                          animate={{ scale: 1.8, opacity: 0 }}
                          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                    </motion.span>

                    <span className="wn-step-num">{s.num}</span>

                    <AnimatePresence mode="wait">
                      <motion.span
                        key={isActive ? "wk-active" : "wk-idle"}
                        className="wn-step-wk"
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 4 }}
                        transition={{ duration: 0.25 }}
                      >
                        {isActive ? (
                          <span className="wn-wk-badge">
                            <Icon size={12} strokeWidth={1.8} />
                            <span>{s.wk}</span>
                          </span>
                        ) : (
                          s.wk
                        )}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  <div className="wn-step-body">
                    <h3 className="wn-step-title">{s.title}</h3>
                    <p className="wn-step-text">{s.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
