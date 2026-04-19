import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Section — vertical rhythm container.
 * Sets consistent padding, max-width, and optional tonal background.
 */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: "cream" | "paper" | "ink" | "butter" | "coral" | "sage";
  spacing?: "sm" | "md" | "lg" | "xl";
  container?: boolean;
  as?: "section" | "div" | "main" | "article" | "header" | "footer";
}

const toneMap = {
  cream: "bg-cream text-ink",
  paper: "bg-cream-50 text-ink",
  ink: "bg-ink text-cream",
  butter: "bg-butter/70 text-ink",
  coral: "bg-coral/80 text-ink",
  sage: "bg-sage/40 text-ink",
};

const spacingMap = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-28 md:py-40",
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      tone = "cream",
      spacing = "md",
      container = true,
      as: Tag = "section",
      children,
      ...props
    },
    ref
  ) => {
    const Component = Tag as any;
    return (
      <Component
        ref={ref}
        className={cn(toneMap[tone], spacingMap[spacing], className)}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-6 md:px-8">{children}</div>
        ) : (
          children
        )}
      </Component>
    );
  }
);
Section.displayName = "Section";

/**
 * SectionLabel — small uppercase eyebrow above a section heading.
 * Often accompanied by a hand-drawn arrow or bullet.
 */
export function SectionLabel({
  children,
  className,
  symbol = "◆",
}: {
  children: React.ReactNode;
  className?: string;
  symbol?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-medium text-ink-soft",
        className
      )}
    >
      <span className="text-coral">{symbol}</span>
      {children}
    </div>
  );
}

/**
 * Divider — thin editorial rule.
 */
export function Divider({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "cream";
}) {
  return (
    <hr
      className={cn(
        "border-0 h-px w-full",
        tone === "ink" ? "bg-ink/15" : "bg-cream/20",
        className
      )}
    />
  );
}
