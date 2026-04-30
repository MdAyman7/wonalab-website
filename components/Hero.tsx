"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

const WORDS = ["ship", "scale", "endure"];
const LONGEST = WORDS.reduce((a, b) => (b.length > a.length ? b : a));

function Typewriter() {
  const reduce = useReducedMotion();
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const word = WORDS[wi];
    if (!deleting && ci < word.length) {
      const t = setTimeout(() => setCi(ci + 1), 110);
      return () => clearTimeout(t);
    }
    if (!deleting && ci === word.length) {
      const t = setTimeout(() => setDeleting(true), 1500);
      return () => clearTimeout(t);
    }
    if (deleting && ci > 0) {
      const t = setTimeout(() => setCi(ci - 1), 55);
      return () => clearTimeout(t);
    }
    if (deleting && ci === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setWi((wi + 1) % WORDS.length);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [ci, deleting, wi, reduce]);

  const shown = reduce ? WORDS[0] : WORDS[wi].slice(0, ci);

  return (
    <span className="wn-tw">
      <span className="wn-tw-sizer" aria-hidden="true">
        <em>{LONGEST}</em>
      </span>
      <span className="wn-tw-slot" aria-hidden="true">
        <em className="wn-tw-word">{shown}</em>
        {!reduce && <span className="wn-tw-cursor" aria-hidden="true" />}
      </span>
      <span className="wn-tw-rule" aria-hidden="true" />
      <span className="sr-only">{WORDS[wi]}</span>
    </span>
  );
}

type Service = {
  name: string;
  Icon: LucideIcon;
  desc: string;
  stat: string;
  statLabel: string;
  tags: string[];
};

const SERVICES: Service[] = [
  {
    name: "AI Agents",
    Icon: Sparkles,
    desc: "Voice · chat · copilots",
    stat: "20+",
    statLabel: "in production",
    tags: ["Multi-LLM", "Vision", "Voice", "Tool-use"],
  },
  {
    name: "Bots",
    Icon: Bot,
    desc: "Workflow · automation · ops",
    stat: "24/7",
    statLabel: "always-on",
    tags: ["Telegram", "Discord", "Slack", "Workflows"],
  },
  {
    name: "Fintech",
    Icon: ShieldCheck,
    desc: "Payments · ledgers · KYC",
    stat: "Real-time",
    statLabel: "settlement",
    tags: ["Stripe", "ACH", "KYC", "Ledgers"],
  },
  {
    name: "SaaS",
    Icon: LayoutDashboard,
    desc: "Web · mobile · APIs",
    stat: "30+",
    statLabel: "apps shipped",
    tags: ["Next.js", "iOS", "Android", "APIs"],
  },
];

const ROTATE_MS = 4500;

function ServiceSpotlight() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % SERVICES.length), ROTATE_MS);
    return () => clearTimeout(t);
  }, [active, paused, reduce]);

  const svc = SERVICES[active];
  const Icon = svc.Icon;

  return (
    <div
      className="wn-spot"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="wn-spot-card">
        <div className="wn-spot-corner" aria-hidden="true" />

        <div className="wn-spot-head">
          <AnimatePresence mode="wait">
            <motion.div
              key={`icon-${svc.name}`}
              className="wn-spot-icon"
              initial={reduce ? false : { opacity: 0, scale: 0.85, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.85, rotate: 8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Icon size={24} strokeWidth={1.6} />
            </motion.div>
          </AnimatePresence>

          <div className="wn-spot-eye">
            <span className="wn-spot-eye-dot" />
            <span>now showing · {String(active + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={svc.name}
            className="wn-spot-body"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="wn-spot-stat">
              <span className="wn-spot-stat-num">{svc.stat}</span>
              <span className="wn-spot-stat-label">{svc.statLabel}</span>
            </div>

            <div className="wn-spot-name">{svc.name}</div>
            <div className="wn-spot-desc">{svc.desc}</div>

            <div className="wn-spot-tags">
              {svc.tags.map((t, i) => (
                <motion.span
                  key={t}
                  className="wn-spot-tag"
                  initial={reduce ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.08 + i * 0.05 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="wn-spot-foot">
          <div className="wn-spot-dots" role="tablist" aria-label="Services">
            {SERVICES.map((s, i) => (
              <button
                key={s.name}
                role="tab"
                aria-selected={i === active}
                aria-label={s.name}
                className={`wn-spot-dot ${i === active ? "is-on" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="wn-spot-dot-fill" />
              </button>
            ))}
          </div>
          <div className="wn-spot-hint">{paused ? "paused" : "auto · hover to pause"}</div>
        </div>

        <div
          className="wn-spot-progress"
          aria-hidden="true"
          key={`p-${active}-${paused}`}
        >
          {!reduce && !paused && (
            <motion.span
              className="wn-spot-progress-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

type HeroProps = {
  onContact: () => void;
  onSeeWork: () => void;
};

export function Hero({ onContact, onSeeWork }: HeroProps) {
  const reduce = useReducedMotion();
  return (
    <section className="wn-hero">
      <motion.div
        className="wn-hero-orb"
        animate={reduce ? undefined : { scale: [1, 1.12, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="wn-hero-pattern" />
      <div className="wn-container wn-hero-grid">
        <div className="wn-hero-text">
          <motion.div
            className="wn-hero-chip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="dot" /> Accepting Q2 · 2 slots open
          </motion.div>

          <motion.h1
            className="wn-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Digital products <br />
            that <Typewriter />.
          </motion.h1>

          <motion.p
            className="wn-hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            AI agents, fintech tools, and SaaS web &amp; mobile apps, engineered by a small, senior team.
          </motion.p>

          <motion.div
            className="wn-hero-cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42 }}
          >
            <a className="wn-btn wn-btn-primary wn-btn-lg" onClick={onContact}>
              Start a project{" "}
              <ArrowUpRight size={18} strokeWidth={1.8} className="wn-arrow-icon" />
            </a>
            <a className="wn-btn wn-btn-ghost wn-btn-lg" onClick={onSeeWork}>
              See our work
            </a>
          </motion.div>
        </div>

        <ServiceSpotlight />
      </div>
    </section>
  );
}
