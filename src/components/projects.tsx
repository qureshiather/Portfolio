"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@data/resume";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 border-t border-border/70 pt-12 pb-20 md:pt-14 md:pb-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="05"
          title="Fun projects"
          description="Side experiments and playful builds."
        />

        <div className="mt-12 space-y-5">
          {portfolio.projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-sm border border-border/80 bg-panel/50 transition-colors hover:border-signal/35 hover:bg-panel"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1 bg-signal/70 transition-colors group-hover:bg-signal"
              />
              <div className="flex flex-col gap-6 px-6 py-7 pl-7 sm:px-8 sm:py-8 sm:pl-9 md:flex-row md:items-center md:justify-between md:gap-10">
                <div className="min-w-0 max-w-2xl">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-signal">
                    Project
                  </p>
                  <h3 className="mt-2 font-heading text-balance text-2xl font-semibold tracking-tight md:text-[1.7rem]">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-pretty text-muted-foreground md:text-base">
                    {project.description}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "gap-2 rounded-sm px-5",
                    )}
                  >
                    Open
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                  {project.code ? (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "rounded-sm px-5",
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
