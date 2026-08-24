"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  index,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="max-w-2xl"
    >
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-signal">
        {index}
      </p>
      <h2 className="mt-3 font-heading text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-xl text-pretty text-muted-foreground">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
