"use client";

import { motion } from "framer-motion";
import { resume } from "@data/resume";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-border/70 pt-12 pb-20 md:pt-14 md:pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="04"
          title="Skills"
          description="Tools I reach for across product, platform, and data work."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {resume.skills.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="border-t border-border/80 pt-6"
            >
              <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-signal">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-foreground/90 md:text-[0.95rem]"
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
