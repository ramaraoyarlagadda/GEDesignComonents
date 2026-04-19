"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — editorial, pill-shaped.
 *
 * Variants match the Ken-AI visual language used in the Gradevolution pitch deck:
 * - `primary` — inked solid pill (CTA)
 * - `secondary` — cream pill with ink border (supporting)
 * - `ghost` — no chrome, underline on hover (inline CTA)
 * - `coral` | `butter` — accent fills for brand moments
 * - `outline` — thin ink border, transparent fill
 *
 * Sizes range from `xs` to `xl`; default radius is fully pill.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-cream hover:bg-ink-soft hover:-translate-y-0.5 hover:shadow-editorial",
        secondary:
          "bg-cream text-ink border border-ink hover:bg-cream-200",
        outline:
          "bg-transparent text-ink border border-ink/70 hover:bg-ink/5",
        ghost:
          "bg-transparent text-ink hover:underline underline-offset-4",
        coral:
          "bg-coral text-ink hover:bg-coral-soft",
        butter:
          "bg-butter text-ink hover:bg-butter-soft",
        link: "bg-transparent text-ink underline underline-offset-4 hover:text-ink-soft p-0",
      },
      size: {
        xs: "h-8 px-3 text-xs rounded-pill",
        sm: "h-9 px-4 text-sm rounded-pill",
        md: "h-11 px-5 text-sm rounded-pill",
        lg: "h-12 px-6 text-base rounded-pill",
        xl: "h-14 px-8 text-lg rounded-pill",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
