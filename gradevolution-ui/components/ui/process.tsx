import * as React from "react";
import { cn } from "@/lib/utils";
import { GiantNumeral } from "./typography";

/**
 * ProcessStep — numbered step with display numeral, title, and body.
 * Pairs with ProcessSteps for a vertically-rhythmic "how it works" block.
 */
export interface ProcessStepProps {
  n: number | string;
  title: React.ReactNode;
  description: React.ReactNode;
  tone?: "coral" | "butter" | "sage" | "ochre" | "ink";
  className?: string;
}

export function ProcessStep({
  n,
  title,
  description,
  tone = "coral",
  className,
}: ProcessStepProps) {
  const toneMap = {
    coral: "text-coral",
    butter: "text-ochre",
    sage: "text-sage",
    ochre: "text-ochre",
    ink: "text-ink",
  };
  return (
    <div className={cn("grid grid-cols-[auto_1fr] gap-6", className)}>
      <GiantNumeral n={n} className={toneMap[tone]} />
      <div className="pt-3">
        <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight mb-2">
          {title}
        </h3>
        <p className="text-ink-soft leading-relaxed max-w-md">{description}</p>
      </div>
    </div>
  );
}

export function ProcessSteps({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-10 md:gap-14", className)}>{children}</div>
  );
}
