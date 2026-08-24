"use client";

import { motion } from "framer-motion";
import { portfolio } from "@data/resume";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-border/70 pt-12 pb-20 md:pt-14 md:pb-24">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <SectionHeading index="01" title="About" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground text-pretty md:text-lg"
        >
          <p>{portfolio.about}</p>
          <p>
            Open to conversations about platforms, product engineering, and
            thoughtful systems work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
