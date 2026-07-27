"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const toggleClassName = cn(
  buttonVariants({ variant: "ghost", size: "icon-sm" }),
  "rounded-md text-muted-foreground hover:text-foreground",
);

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Render a stable placeholder until mount so SSR HTML matches the client.
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={toggleClassName}
        disabled
      >
        <span className="size-4" aria-hidden />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={toggleClassName}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
