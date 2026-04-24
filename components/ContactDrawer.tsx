"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";

type Props = { open: boolean; onClose: () => void };

export function ContactDrawer({ open, onClose }: Props) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", brief: "" });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="wn-drawer-root">
          <motion.div
            className="wn-drawer-scrim"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.aside
            className="wn-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="wn-drawer-close" onClick={onClose} aria-label="Close">
              <X size={20} strokeWidth={1.5} />
            </button>
            {step === 0 && (
              <>
                <div className="wn-eyebrow">Start a project</div>
                <h2 className="wn-drawer-title">Tell us what you're building.</h2>
                <div className="wn-field">
                  <label className="wn-label">Name</label>
                  <input
                    className="wn-input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Aarav Mehta"
                  />
                </div>
                <div className="wn-field">
                  <label className="wn-label">Work email</label>
                  <input
                    type="email"
                    className="wn-input"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                  />
                </div>
                <div className="wn-field">
                  <label className="wn-label">Brief</label>
                  <textarea
                    className="wn-input"
                    rows={4}
                    value={form.brief}
                    onChange={(e) => setForm({ ...form, brief: e.target.value })}
                    placeholder="A few sentences — product, market, timeline."
                  />
                </div>
                <button className="wn-btn wn-btn-primary wn-btn-lg" onClick={() => setStep(1)}>
                  Send brief <span className="wn-arrow">→</span>
                </button>
              </>
            )}
            {step === 1 && (
              <div className="wn-drawer-done">
                <div className="wn-check">
                  <Check size={24} strokeWidth={2} />
                </div>
                <h2 className="wn-drawer-title">Received.</h2>
                <p className="wn-body">
                  We'll reply within 48 hours, usually sooner. If urgent, write{" "}
                  <span className="wn-mono">priority@wonalab.co</span>.
                </p>
                <button className="wn-btn wn-btn-ghost" onClick={onClose}>
                  Close
                </button>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
