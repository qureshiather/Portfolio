"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@data/resume";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-border/70 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="font-heading text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Fun projects
        </motion.h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Side experiments and playful builds.
        </p>

        <div className="mt-12 space-y-4">
          {portfolio.projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-border/80 bg-gradient-to-br from-background to-muted/40 p-6 transition-colors hover:border-teal-700/30 dark:from-card dark:to-teal-950/20 dark:hover:border-teal-500/30 md:p-8"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-teal-600/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-teal-400/10" />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-xl">
                  <h3 className="font-heading text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground md:text-base">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "gap-1.5 rounded-md",
                    )}
                  >
                    Open
                    <ArrowUpRight className="size-3.5" />
                  </a>
                  {project.code ? (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "rounded-md",
                      )}
                    >
                      Code
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
