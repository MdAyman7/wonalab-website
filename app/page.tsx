"use client";

import { useEffect, useState } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Stats } from "@/components/Stats";
import { Approach } from "@/components/Approach";
import { Process } from "@/components/Process";
import { Quote } from "@/components/Quote";
import { Journal } from "@/components/Journal";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ContactDrawer } from "@/components/ContactDrawer";

export default function Home() {
  const [active, setActive] = useState("work");
  const [contact, setContact] = useState(false);

  const onNav = (id: string) => {
    if (id === "contact") {
      setContact(true);
      return;
    }
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const ids = ["work", "services", "about", "journal"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav active={active} onNav={onNav} />
      <Hero onContact={() => setContact(true)} onSeeWork={() => onNav("work")} />
      <TrustBar />
      <section id="services"><Services /></section>
      <section id="work"><CaseStudies /></section>
      <Stats />
      <section id="about"><Approach /></section>
      <Process />
      <Quote />
      <section id="journal"><Journal /></section>
      <CTA onContact={() => setContact(true)} />
      <Footer />
      <ContactDrawer open={contact} onClose={() => setContact(false)} />
    </>
  );
}
