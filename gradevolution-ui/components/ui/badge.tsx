import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge / Tag / Pill — small inline callout used for:
 * - section labels ("Features", "Pricing")
 * - feature tags inside cards
 * - status indicators ("New", "Beta")
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-pill border font-medium whitespace-nowrap",
  {
    variants: {
      variant: {
        outline: "border-ink/70 text-ink bg-transparent",
        solid: "border-ink bg-ink text-cream",
        coral: "border-coral bg-coral/15 text-ink",
        butter: "border-butter bg-butter/30 text-ink",
        sage: "border-sage bg-sage/20 text-ink",
        muted: "border-ink/15 bg-cream-200 text-ink-soft",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[11px] uppercase tracking-wider",
        md: "px-3 py-1 text-xs uppercase tracking-wider",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}
