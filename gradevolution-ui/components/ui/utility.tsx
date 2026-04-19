"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";

/**
 * LoadingSkeleton — cream shimmer placeholder card used while content
 * streams in. Uses subtle gradient animation.
 */
export function LoadingSkeleton({
  className,
  lines = 3,
}: {
  className?: string;
  lines?: number;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-ink/10 bg-cream-50 p-6 animate-pulse",
        className
      )}
    >
      <div className="h-4 w-1/3 bg-ink/10 rounded mb-4" />
      <div className="flex flex-col gap-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-3 bg-ink/10 rounded"
            style={{ width: `${92 - i * 7}%` }}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * EmptyState — friendly placeholder for zero-data views.
 */
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  description?: React.ReactNode;
  cta?: { label: string; href?: string; onClick?: () => void };
  icon?: React.ReactNode;
}

export function EmptyState({
  className,
  title,
  description,
  cta,
  icon,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border-2 border-dashed border-ink/25 bg-cream p-10 text-center flex flex-col items-center",
        className
      )}
      {...props}
    >
      <div className="h-16 w-16 rounded-full bg-butter border-2 border-ink flex items-center justify-center mb-5 text-2xl">
        {icon ?? "✻"}
      </div>
      <div className="font-display text-2xl italic mb-2">{title}</div>
      {description && (
        <p className="text-ink-muted max-w-sm mb-6">{description}</p>
      )}
      {cta && (
        <Button
          asChild={!!cta.href}
          onClick={cta.onClick}
          variant="primary"
          size="md"
        >
          {cta.href ? <a href={cta.href}>{cta.label}</a> : cta.label}
        </Button>
      )}
    </div>
  );
}

/**
 * ScrollReveal — fade+rise as element enters viewport (Framer Motion).
 * Use as a wrapper around cards, sections, grids.
 */
export function ScrollReveal({
  children,
  delay = 0,
  className,
  y = 18,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Tooltip — minimal inline tooltip using CSS; for hover affordance.
 */
export function Tooltip({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("relative inline-flex group", className)}>
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap rounded-pill bg-ink text-cream text-[11px] px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {label}
      </span>
    </span>
  );
}

/**
 * Kbd — inline keyboard shortcut indicator.
 */
export function Kbd({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center rounded-md border border-ink/25 bg-cream-50 px-1.5 py-0.5 text-[11px] font-mono text-ink",
        className
      )}
    >
      {children}
    </kbd>
  );
}

/**
 * Callout — highlighted aside used in content blocks.
 */
export function Callout({
  children,
  tone = "butter",
  title,
  className,
}: {
  children: React.ReactNode;
  tone?: "butter" | "sage" | "coral";
  title?: React.ReactNode;
  className?: string;
}) {
  const toneMap = {
    butter: "bg-butter/40 border-butter",
    sage: "bg-sage/30 border-sage",
    coral: "bg-coral/20 border-coral",
  };
  return (
    <div
      className={cn(
        "rounded-2xl border-l-4 pl-5 pr-6 py-4",
        toneMap[tone],
        className
      )}
    >
      {title && (
        <div className="font-display italic text-lg mb-1">{title}</div>
      )}
      <div className="text-sm text-ink-soft leading-relaxed">{children}</div>
    </div>
  );
}
