import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Card — editorial content container with rounded corners and
 * optional warm accent fill. Used for feature blocks, pricing,
 * testimonials, FAQ rows, empty states, and more.
 */
const cardVariants = cva(
  "rounded-3xl border transition-all duration-300",
  {
    variants: {
      tone: {
        cream: "bg-cream border-ink/10",
        paper: "bg-cream-50 border-ink/10",
        ink: "bg-ink text-cream border-ink",
        coral: "bg-coral/90 text-ink border-coral",
        butter: "bg-butter/80 text-ink border-butter",
        sage: "bg-sage/50 text-ink border-sage",
        ochre: "bg-ochre/80 text-ink border-ochre",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-1 hover:shadow-editorial",
        glow: "hover:shadow-editorial",
      },
    },
    defaultVariants: {
      tone: "cream",
      padding: "lg",
      hover: "none",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, tone, padding, hover, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ tone, padding, hover }), className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1.5 mb-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-display text-2xl leading-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-ink-muted leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-3 mt-6", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";
