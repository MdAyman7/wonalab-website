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
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const CONTACT_URL = "https://hdyo5tv97om.typeform.com/to/JFRPq3gK";

export default function Home() {
  const [active, setActive] = useState("work");

  const openContact = () => {
    window.open(CONTACT_URL, "_blank", "noopener,noreferrer");
  };

  const onNav = (id: string) => {
    if (id === "contact") {
      openContact();
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
    const ids = ["work", "services", "about"];
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
      <Hero onContact={openContact} onSeeWork={() => onNav("work")} />
      <TrustBar />
      <section id="services"><Services /></section>
      <section id="work"><CaseStudies /></section>
      <Stats />
      <section id="about"><Approach /></section>
      <Process />
      <Quote />
      <CTA onContact={openContact} />
      <Footer />
    </>
  );
}
