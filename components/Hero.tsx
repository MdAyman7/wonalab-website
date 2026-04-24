"use client";

import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Layers,
  Link2,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";

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

const NODE_SIZE = 38;
const NODE_HALF = NODE_SIZE / 2;

type Service = {
  name: string;
  Icon: LucideIcon;
  ring: number;
  angle: number;
  desc: string;
};

const ORBITS = [
  { r: 92, dur: 22, dir: 1 as const },
  { r: 150, dur: 34, dir: -1 as const },
  { r: 212, dur: 52, dir: 1 as const },
];

const SERVICES: Service[] = [
  { name: "Fintech", Icon: ShieldCheck, ring: 0, angle: 20, desc: "Payments · ledgers · cards" },
  { name: "Web3", Icon: Link2, ring: 1, angle: 60, desc: "Wallets · protocols · L2" },
  { name: "AI Agents", Icon: Sparkles, ring: 1, angle: 220, desc: "Voice · chat · copilots" },
  { name: "Applications", Icon: Layers, ring: 2, angle: 140, desc: "Web & mobile at scale" },
];

function Ring({ r, dur, dir }: { r: number; dur: number; dir: 1 | -1 }) {
  const reduce = useReducedMotion();
  const rotate = useMotionValue(0);

  useEffect(() => {
    if (reduce) return;
    const ctrl = animate(rotate, dir * 360, {
      duration: dur * 1.5,
      repeat: Infinity,
      ease: "linear",
    });
    return () => ctrl.stop();
  }, [dir, dur, reduce, rotate]);

  return (
    <motion.span
      className="wn-ring-circle"
      style={{
        width: r * 2,
        height: r * 2,
        marginLeft: -r,
        marginTop: -r,
        rotate,
      }}
    >
      <span className="wn-ring-blip" />
    </motion.span>
  );
}

function OrbitNode({
  service,
  index,
  radius,
  duration,
  direction,
  isActive,
  onEnter,
  onLeave,
}: {
  service: Service;
  index: number;
  radius: number;
  duration: number;
  direction: 1 | -1;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const reduce = useReducedMotion();
  const angle = useMotionValue(service.angle);

  useEffect(() => {
    if (reduce) return;
    const ctrl = animate(angle, service.angle + direction * 360, {
      duration,
      repeat: Infinity,
      ease: "linear",
    });
    return () => ctrl.stop();
  }, [angle, direction, duration, reduce, service.angle]);

  const x = useTransform(
    angle,
    (a) => Math.cos(((a - 90) * Math.PI) / 180) * radius - NODE_HALF,
  );
  const y = useTransform(
    angle,
    (a) => Math.sin(((a - 90) * Math.PI) / 180) * radius - NODE_HALF,
  );

  const Icon = service.Icon;

  return (
    <motion.button
      type="button"
      className={`wn-orbit-node ${isActive ? "is-active" : ""}`}
      style={{
        x,
        y,
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      whileHover={{ scale: 1.22 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      aria-label={service.name}
      data-index={index}
    >
      <Icon size={16} strokeWidth={1.8} />
      <AnimatePresence>
        {isActive && (
          <motion.span
            key="ping"
            className="wn-orbit-ping"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function Orbit() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-1, 1], [6, -6]), {
    stiffness: 60,
    damping: 18,
  });
  const rotY = useSpring(useTransform(mx, [-1, 1], [-8, 8]), {
    stiffness: 60,
    damping: 18,
  });
  const glowX = useSpring(useTransform(mx, [-1, 1], [-16, 16]), {
    stiffness: 40,
    damping: 22,
  });
  const glowY = useSpring(useTransform(my, [-1, 1], [-16, 16]), {
    stiffness: 40,
    damping: 22,
  });
  const coreScale = useSpring(1, { stiffness: 160, damping: 18 });

  useEffect(() => {
    coreScale.set(active !== null ? 1.08 : 1);
  }, [active, coreScale]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
    setActive(null);
  };

  const activeSvc = active !== null ? SERVICES[active] : null;

  return (
    <div
      ref={wrapRef}
      className="wn-orbit-wrap"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-hidden="true"
    >
      <motion.span
        className="wn-orbit-glow"
        style={reduce ? undefined : { x: glowX, y: glowY }}
      />

      <motion.div
        className="wn-orbit-stage"
        style={
          reduce
            ? undefined
            : { rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }
        }
      >
        <div className="wn-orbit-stars" />

        {ORBITS.map((o, i) => (
          <Ring key={i} r={o.r} dur={o.dur} dir={o.dir} />
        ))}

        {SERVICES.map((s, i) => {
          const ring = ORBITS[s.ring];
          return (
            <OrbitNode
              key={s.name}
              service={s}
              index={i}
              radius={ring.r}
              duration={ring.dur}
              direction={ring.dir}
              isActive={active === i}
              onEnter={() => setActive(i)}
              onLeave={() => setActive(null)}
            />
          );
        })}

        <motion.div className="wn-orbit-core" style={{ scale: coreScale }}>
          <motion.span
            className="wn-orbit-core-mark"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          />
          <span className="wn-orbit-core-frame" />
          <AnimatePresence mode="wait">
            <motion.span
              key={activeSvc?.name ?? "brand"}
              className="wn-orbit-core-label"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {activeSvc?.name ?? "wonalab"}
            </motion.span>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.span
              key={activeSvc?.desc ?? "tag"}
              className="wn-orbit-core-sub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeSvc?.desc ?? "digital, crafted"}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </motion.div>
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
            Senior-only teams for fintech, web3, and AI — built for India &amp; the Middle East.
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

        <Orbit />
      </div>
    </section>
  );
}
