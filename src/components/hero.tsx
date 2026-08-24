"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, FileText } from "lucide-react";
import { resume } from "@data/resume";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          aria-hidden="true"
          className="absolute -right-4 top-24 hidden select-none font-heading text-[clamp(7rem,24vw,15rem)] font-semibold leading-none tracking-tighter text-ink/[0.035] dark:text-foreground/[0.04] sm:block"
        >
          AQ
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-signal"
        >
          Portfolio · {resume.location}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="signal-rule mt-5"
        />

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-7 font-heading text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {resume.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="mt-6 max-w-2xl"
        >
          <p className="text-lg text-foreground md:text-xl">
            {resume.title}
            <span className="text-muted-foreground"> · Senpilot</span>
          </p>
          <p className="mt-3 text-base text-pretty text-muted-foreground md:text-lg">
            I build platforms and product systems—and dig into the thorny
            problems in between.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="/api/resume"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 rounded-sm px-5",
            )}
          >
            <FileText className="size-4" aria-hidden="true" />
            View resume
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 rounded-sm px-5",
            )}
          >
            Get in touch
            <ArrowDownRight className="size-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
