"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@data/resume";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border/70 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="font-heading text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Elsewhere
        </motion.h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          A few places I publish, ship, and experiment.
        </p>

        <div className="mt-12 divide-y divide-border/80 border-y border-border/80">
          {portfolio.interests.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex items-center justify-between gap-6 py-7 transition-colors hover:bg-teal-700/[0.03] dark:hover:bg-teal-400/[0.05]"
            >
              <div>
                <h3 className="font-heading text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground md:text-base">
                  {item.description}
                </p>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-800 dark:group-hover:text-teal-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
