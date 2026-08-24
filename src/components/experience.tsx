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

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[7px] top-2 hidden w-px bg-border md:block"
          />
          <div className="space-y-0">
            {resume.experience.map((role, index) => (
              <motion.article
                key={`${role.company}-${role.title}-${role.start}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="relative grid gap-3 py-8 md:grid-cols-[220px_1fr] md:gap-12"
              >
                <div className="md:pl-8">
                  <span
                    aria-hidden="true"
                    className="absolute left-0.5 top-10 hidden size-2.5 rotate-45 border border-signal bg-signal/30 md:block"
                  />
                  <p className="font-mono text-xs text-muted-foreground tabular-nums">
                    {role.start} – {role.end}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {role.location}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-signal">
                    {role.company}
                  </p>
                  <h3 className="mt-1.5 font-heading text-balance text-xl font-semibold tracking-tight md:text-[1.35rem]">
                    {role.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-pretty text-muted-foreground md:text-[0.95rem]">
                    {role.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-px w-3.5 shrink-0 bg-signal/80"
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
      </div>
    </section>
  );
}
