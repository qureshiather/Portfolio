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
      className="relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Light: cool mist + teal wash. Dark: deep ink + teal glow. */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_0%_0%,rgba(13,148,136,0.22),transparent_55%),radial-gradient(ellipse_70%_55%_at_100%_10%,rgba(56,189,248,0.14),transparent_50%),radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(15,23,42,0.06),transparent_55%),linear-gradient(165deg,#e8eef2_0%,#f4f7f9_40%,#eef5f4_100%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_15%_-5%,rgba(45,212,191,0.14),transparent_50%),radial-gradient(ellipse_60%_50%_at_90%_0%,rgba(15,118,110,0.12),transparent_45%),linear-gradient(180deg,#070b0f_0%,#0b1218_50%,#0a0f14_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 85% 75% at 35% 20%, black, transparent)",
          }}
        />
        <div
          className="absolute inset-0 hidden opacity-[0.25] dark:block"
          style={{
            backgroundImage:
              "linear-gradient(rgba(94,234,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)",
          }}
        />
        <motion.div
          aria-hidden
          className="absolute -left-16 top-16 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl dark:bg-teal-400/15"
          animate={{ x: [0, 20, 0], y: [0, 14, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute right-[-10%] top-24 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl dark:bg-cyan-500/10"
          animate={{ x: [0, -18, 0], y: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          aria-hidden
          className="absolute -right-8 top-20 hidden select-none font-heading text-[clamp(6rem,22vw,14rem)] font-semibold leading-none tracking-tighter text-slate-900/[0.04] dark:text-teal-200/[0.04] sm:block"
        >
          AQ
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.55 }}
          className="mb-6 h-1 w-14 origin-left rounded-full bg-teal-600 dark:bg-teal-400"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {resume.name}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-5 max-w-2xl"
        >
          <p className="text-lg text-teal-700 dark:text-teal-300 md:text-xl">
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
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="/api/resume"
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
