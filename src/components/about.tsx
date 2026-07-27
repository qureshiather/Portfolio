"use client";

import { motion } from "framer-motion";
import { portfolio } from "@data/resume";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border/70 py-24">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="font-heading text-3xl font-semibold tracking-tight md:text-4xl"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg"
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
