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

        <div className="mt-14">
          {portfolio.projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group border-t border-border/80 py-9 transition-colors hover:bg-panel/60"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0 max-w-xl">
                  <h3 className="font-heading text-balance text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-pretty text-muted-foreground md:text-base">
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
                      "gap-1.5 rounded-sm",
                    )}
                  >
                    Open
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                  {project.code ? (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "rounded-sm",
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
