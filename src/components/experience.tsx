"use client";

import { motion } from "framer-motion";
import { resume } from "@data/resume";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-border/70 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="font-heading text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Experience
        </motion.h2>

        <div className="mt-12 space-y-0">
          {resume.experience.map((role, index) => (
            <motion.article
              key={`${role.company}-${role.title}-${role.start}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="grid gap-4 border-t border-border/80 py-8 md:grid-cols-[220px_1fr]"
            >
              <div className="text-sm text-muted-foreground">
                <p>
                  {role.start} – {role.end}
                </p>
                <p className="mt-1">{role.location}</p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold tracking-tight">
                  {role.title}
                </h3>
                <p className="mt-1 text-teal-800 dark:text-teal-300">{role.company}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-700/70 dark:bg-teal-400/80" />
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
