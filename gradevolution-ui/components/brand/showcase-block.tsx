import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * ShowcaseBlock — documents a component with a label strip + rendered demo.
 * Used exclusively on the showcase page. Not a brand building block.
 */
export interface ShowcaseBlockProps {
  id: string;
  name: string;
  description?: string;
  group: string;
  children: React.ReactNode;
  span?: "full" | "half";
  bgTone?: "cream" | "paper" | "ink";
}

export function ShowcaseBlock({
  id,
  name,
  description,
  group,
  children,
  span = "full",
  bgTone = "paper",
}: ShowcaseBlockProps) {
  const bg =
    bgTone === "paper"
      ? "bg-cream-50"
      : bgTone === "ink"
        ? "bg-ink"
        : "bg-cream";

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 rounded-3xl border border-ink/10 overflow-hidden",
        span === "half" ? "md:col-span-1" : "md:col-span-2"
      )}
    >
      <header className="flex items-start justify-between gap-6 px-6 md:px-8 py-5 border-b border-ink/10 bg-cream">
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            {group}
          </div>
          <h3 className="font-display text-xl md:text-2xl italic text-ink mt-1">
            {name}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-ink-muted max-w-xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <a
          href={`#${id}`}
          className="text-xs text-ink-muted hover:text-ink whitespace-nowrap"
        >
          #{id}
        </a>
      </header>
      <div className={cn("px-6 md:px-10 py-10 md:py-14", bg)}>{children}</div>
    </section>
  );
}

/**
 * ShowcaseGrid — 2-column grid for ShowcaseBlocks.
 */
export function ShowcaseGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid md:grid-cols-2 gap-6", className)}>{children}</div>
  );
}

/**
 * ShowcaseHeading — large section divider between component groups.
 */
export function ShowcaseHeading({
  children,
  eyebrow,
  description,
  className,
}: {
  children: React.ReactNode;
  eyebrow?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mt-20 mb-8 md:mt-28", className)}>
      {eyebrow && (
        <div className="text-[11px] uppercase tracking-[0.24em] text-coral mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl italic text-ink leading-tight">
        {children}
      </h2>
      {description && (
        <p className="mt-3 text-ink-muted max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
