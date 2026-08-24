"use client";

import { motion } from "framer-motion";
import { resume } from "@data/resume";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-t border-border/70 pt-12 pb-20 md:pt-14 md:pb-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="02"
          title="Experience"
          description="A path through platforms, product, and data systems."
        />

        <div className="mt-14">
          {resume.experience.map((role, index) => (
            <motion.article
              key={`${role.company}-${role.title}-${role.start}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="grid gap-4 border-t border-border/80 py-9 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <div className="font-mono text-xs leading-relaxed text-muted-foreground tabular-nums">
                <p>
                  {role.start} – {role.end}
                </p>
                <p className="mt-2">{role.location}</p>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-heading text-balance text-xl font-semibold tracking-tight">
                    {role.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
                    {role.company}
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground text-pretty md:text-base">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-3 shrink-0 bg-signal"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
