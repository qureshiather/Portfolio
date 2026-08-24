"use client";

import { motion } from "framer-motion";
import { resume } from "@data/resume";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 border-t border-border/70 pt-12 pb-20 md:pt-14 md:pb-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="04"
          title="Skills"
          description="Tools I reach for across product, platform, and data work."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {resume.skills.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-sm border border-border/80 bg-panel/40 px-5 py-6"
            >
              <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-signal">
                {group.label}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border/50 pb-2 text-sm text-foreground/90 last:border-b-0 last:pb-0 md:text-[0.95rem]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
