"use client";

import { motion } from "framer-motion";
import { resume } from "@data/resume";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-16 border-t border-border/70 pt-12 pb-20 md:pt-14 md:pb-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="03" title="Education" />

        <div className="mt-14">
          {resume.education.map((item, index) => (
            <motion.article
              key={item.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="grid gap-4 border-t border-border/80 py-9 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <div className="font-mono text-xs text-muted-foreground tabular-nums">
                <p>
                  {item.start} – {item.end}
                </p>
              </div>
              <div>
                <h3 className="font-heading text-balance text-xl font-semibold tracking-tight">
                  {item.school}
                </h3>
                <p className="mt-1 text-pretty text-muted-foreground">
                  {item.degree}
                </p>
                {item.notes?.length ? (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.notes.map((note) => (
                      <li key={note} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-px w-3 shrink-0 bg-signal"
                        />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
