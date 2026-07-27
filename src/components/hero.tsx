"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, FileDown } from "lucide-react";
import { resume, portfolio } from "@data/resume";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_-10%,rgba(15,118,110,0.18),transparent_55%),radial-gradient(ellipse_70%_50%_at_90%_10%,rgba(15,23,42,0.08),transparent_50%),linear-gradient(180deg,#f3f6f8_0%,#eef2f4_45%,#f8fafb_100%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_15%_-5%,rgba(45,212,191,0.14),transparent_50%),radial-gradient(ellipse_60%_50%_at_90%_0%,rgba(15,118,110,0.12),transparent_45%),linear-gradient(180deg,#070b0f_0%,#0b1218_50%,#0a0f14_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)",
          }}
        />
        <div
          className="absolute inset-0 hidden opacity-[0.25] dark:block"
          style={{
            backgroundImage:
              "linear-gradient(rgba(94,234,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)",
          }}
        />
        <motion.div
          aria-hidden
          className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-teal-700/10 blur-3xl dark:bg-teal-400/15"
          animate={{ x: [0, 24, 0], y: [0, 16, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute right-0 top-40 h-80 w-80 rounded-full bg-slate-900/5 blur-3xl dark:bg-cyan-500/10"
          animate={{ x: [0, -20, 0], y: [0, 12, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {resume.name}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-6 max-w-2xl"
        >
          <p className="text-lg text-teal-800 dark:text-teal-300 md:text-xl">
            {resume.title}
            <span className="text-muted-foreground"> · Senpilot</span>
          </p>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            {portfolio.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="/atherqureshi_resume.pdf"
            download
            className={cn(buttonVariants({ size: "lg" }), "gap-2 rounded-md px-5")}
          >
            <FileDown className="size-4" />
            Download resume
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 rounded-md px-5",
            )}
          >
            Get in touch
            <ArrowDownRight className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
