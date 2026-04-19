import * as React from "react";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

/**
 * FeatureIcon — icon inside a colored round chip, used at the top
 * of feature cells for a friendly editorial feel.
 */
export function FeatureIcon({
  icon: Icon,
  tone = "butter",
  className,
}: {
  icon: LucideIcon;
  tone?: "butter" | "coral" | "sage" | "ochre" | "ink";
  className?: string;
}) {
  const toneMap = {
    butter: "bg-butter text-ink",
    coral: "bg-coral text-ink",
    sage: "bg-sage text-ink",
    ochre: "bg-ochre text-cream",
    ink: "bg-ink text-cream",
  };
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink",
        toneMap[tone],
        className
      )}
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}

/**
 * FeatureCell — single icon + heading + description row or tile.
 */
export interface FeatureCellProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  tone?: "butter" | "coral" | "sage" | "ochre" | "ink";
  title: React.ReactNode;
  description: React.ReactNode;
  orientation?: "row" | "col";
}

export function FeatureCell({
  className,
  icon,
  tone = "butter",
  title,
  description,
  orientation = "col",
  ...props
}: FeatureCellProps) {
  return (
    <div
      className={cn(
        orientation === "row" ? "flex gap-5 items-start" : "flex flex-col gap-4",
        className
      )}
      {...props}
    >
      {icon && <FeatureIcon icon={icon} tone={tone} />}
      <div>
        <h3 className="font-display text-xl md:text-2xl text-ink mb-1.5 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-ink-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/**
 * FeatureGrid — responsive grid of FeatureCell.
 */
export function FeatureGrid({
  children,
  columns = 3,
  className,
}: {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const colMap = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };
  return (
    <div className={cn("grid gap-8 md:gap-12", colMap[columns], className)}>
      {children}
    </div>
  );
}

/**
 * BigStat — giant numeral + label, for social proof strips.
 */
export function BigStat({
  value,
  label,
  tone = "ink",
  className,
}: {
  value: string;
  label: string;
  tone?: "ink" | "coral" | "ochre";
  className?: string;
}) {
  const toneMap = {
    ink: "text-ink",
    coral: "text-coral",
    ochre: "text-ochre",
  };
  return (
    <div className={cn("flex flex-col", className)}>
      <span
        className={cn(
          "font-display italic font-bold leading-none text-5xl md:text-6xl",
          toneMap[tone]
        )}
      >
        {value}
      </span>
      <span className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-muted">
        {label}
      </span>
    </div>
  );
}
