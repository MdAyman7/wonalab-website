"use client";

import { motion } from "framer-motion";

type NavProps = {
  active: string;
  onNav: (id: string) => void;
};

const links = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "journal", label: "Journal" },
];

export function Nav({ active, onNav }: NavProps) {
  return (
    <motion.nav
      className="wn-nav"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="wn-logo" onClick={() => onNav("home")}>
        <span className="wn-diamond" />
        <span>wonalab</span>
      </a>
      <div className="wn-nav-links">
        {links.map((l) => (
          <button
            key={l.id}
            className={`wn-nav-link ${active === l.id ? "is-active" : ""}`}
            onClick={() => onNav(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>
      <div className="wn-nav-spacer" />
      <a className="wn-btn wn-btn-primary wn-btn-sm" onClick={() => onNav("contact")}>
        Start a project <span className="wn-arrow">→</span>
      </a>
    </motion.nav>
  );
}
