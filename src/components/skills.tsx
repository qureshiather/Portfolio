"use client";

import { motion } from "framer-motion";
import { resume } from "@data/resume";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border/70 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="font-heading text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Skills
        </motion.h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {resume.skills.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-teal-800 dark:text-teal-300">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="rounded-md px-2.5 py-1 text-xs font-normal"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
