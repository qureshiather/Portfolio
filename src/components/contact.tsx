"use client";

import { motion } from "framer-motion";
import { resume } from "@data/resume";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border/70 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-slate-950 px-8 py-14 text-slate-50 md:px-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,118,110,0.35),transparent_55%)]" />
          <div className="relative">
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              Let&apos;s build something.
            </h2>
            <p className="mt-4 max-w-lg text-slate-300">
              Reach out for roles, collaborations, or just to say hello.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${resume.email}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-md bg-teal-600 px-5 text-white hover:bg-teal-500",
                )}
              >
                {resume.email}
              </a>
              {resume.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-md border-slate-700 bg-transparent px-5 text-slate-100 hover:bg-slate-900 hover:text-white",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <footer className="mt-10 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {resume.name}
          </p>
        </footer>
      </div>
    </section>
  );
}
