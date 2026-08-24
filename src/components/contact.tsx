"use client";

import { motion } from "framer-motion";
import { resume } from "@data/resume";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactLinks = resume.links.filter((link) => link.label !== "Website");

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-border/70 pt-12 pb-20 md:pt-14 md:pb-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-sm border border-border/80 bg-panel px-8 py-14 text-foreground md:px-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 size-72 rounded-full bg-signal/20 blur-3xl dark:bg-signal/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(color-mix(in oklch, var(--foreground) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklch, var(--foreground) 8%, transparent) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage:
                "radial-gradient(ellipse 70% 80% at 30% 40%, black, transparent)",
            }}
          />
          <div className="relative">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-signal">
              06
            </p>
            <div className="signal-rule mt-4" />
            <h2 className="mt-6 font-heading text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Let&apos;s build something.
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
              Reach out for roles, collaborations, or just to say hello.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${resume.email}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-sm bg-signal px-5 text-signal-foreground hover:bg-signal/90",
                )}
              >
                Email me
              </a>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-sm px-5",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-5 font-mono text-xs text-muted-foreground">
              <a
                href={`mailto:${resume.email}`}
                className="rounded-sm underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {resume.email}
              </a>
            </p>
          </div>
        </motion.div>

        <footer className="mt-10 font-mono text-xs text-muted-foreground">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} {resume.name}
          </p>
        </footer>
      </div>
    </section>
  );
}
