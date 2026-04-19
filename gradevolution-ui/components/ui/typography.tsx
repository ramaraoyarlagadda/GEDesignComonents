import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * DisplayHeadline — oversized hero serif headline with optional italic accent.
 * Pairs a display serif with tight letter-spacing and an italic accent word.
 */
export function DisplayHeadline({
  children,
  className,
  as: Tag = "h1",
  size = "hero",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "display" | "xl";
}) {
  const sizeClass =
    size === "hero"
      ? "text-hero"
      : size === "display"
        ? "text-display"
        : "text-4xl md:text-5xl";
  const Component = Tag as any;
  return (
    <Component
      className={cn(
        "font-display font-normal text-ink leading-[1.05] tracking-tight",
        sizeClass,
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Eyebrow — small uppercase label above headlines.
 */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-[11px] uppercase tracking-[0.22em] font-medium text-ink-soft",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Lead — larger intro paragraph below headline.
 */
export function Lead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-lg md:text-xl text-ink-soft max-w-2xl leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}

/**
 * Prose — body text cluster with standard reading rhythm.
 */
export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-base text-ink-soft leading-relaxed max-w-prose [&>p+p]:mt-4",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * ItalicAccent — inline display serif italic used inside headlines.
 */
export function ItalicAccent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <em className={cn("font-display italic text-ink", className)}>
      {children}
    </em>
  );
}

/**
 * Underline — hand-drawn-style underline decoration for an inline word.
 */
export function HandUnderline({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("hand-underline", className)}>{children}</span>
  );
}

/**
 * GiantNumeral — oversized italic serif numeral for list counters.
 */
export function GiantNumeral({
  n,
  className,
  color,
}: {
  n: number | string;
  className?: string;
  color?: string;
}) {
  return (
    <span
      className={cn(
        "font-display italic font-bold leading-none tracking-tighter text-[96px] md:text-[128px]",
        className
      )}
      style={color ? { color } : undefined}
    >
      {n}
    </span>
  );
}
