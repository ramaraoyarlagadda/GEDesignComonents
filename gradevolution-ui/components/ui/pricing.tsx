import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";

/**
 * PricingCard — single plan card with price, feature list, and CTA.
 * Supports a highlighted "featured" state for the recommended plan.
 */
export interface PricingCardProps {
  name: string;
  description?: string;
  price: string;
  period?: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
  badge?: string;
  className?: string;
}

export function PricingCard({
  name,
  description,
  price,
  period = "/month",
  features,
  cta,
  featured = false,
  badge,
  className,
}: PricingCardProps) {
  return (
    <Card
      tone={featured ? "ink" : "cream"}
      padding="lg"
      className={cn(
        "relative flex flex-col",
        featured ? "shadow-editorial" : "",
        className
      )}
    >
      {badge && (
        <Badge
          variant={featured ? "butter" : "outline"}
          size="sm"
          className={cn(
            "absolute top-5 right-5",
            featured ? "border-butter" : ""
          )}
        >
          {badge}
        </Badge>
      )}
      <div className="mb-6">
        <div
          className={cn(
            "font-display italic text-2xl",
            featured ? "text-butter" : "text-coral"
          )}
        >
          {name}
        </div>
        {description && (
          <p
            className={cn(
              "mt-1 text-sm",
              featured ? "text-cream/70" : "text-ink-muted"
            )}
          >
            {description}
          </p>
        )}
      </div>

      <div className="flex items-baseline gap-1 mb-6">
        <span
          className={cn(
            "font-display text-5xl md:text-6xl font-semibold",
            featured ? "text-cream" : "text-ink"
          )}
        >
          {price}
        </span>
        <span
          className={cn(
            "text-sm",
            featured ? "text-cream/60" : "text-ink-muted"
          )}
        >
          {period}
        </span>
      </div>

      <ul className="flex flex-col gap-2.5 mb-8 flex-1">
        {features.map((f) => (
          <li
            key={f}
            className={cn(
              "flex items-start gap-2.5 text-sm",
              featured ? "text-cream/90" : "text-ink-soft"
            )}
          >
            <Check
              className={cn(
                "h-4 w-4 shrink-0 mt-0.5",
                featured ? "text-butter" : "text-coral"
              )}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        size="lg"
        variant={featured ? "butter" : "primary"}
        className="w-full"
      >
        <a href={cta.href}>{cta.label}</a>
      </Button>
    </Card>
  );
}

/**
 * PricingGrid — two or three column pricing layout.
 */
export function PricingGrid({
  children,
  columns = 3,
  className,
}: {
  children: React.ReactNode;
  columns?: 2 | 3;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * PricingToggle — monthly / yearly toggle pill.
 */
export function PricingToggle({
  value,
  onChange,
  options = ["Monthly", "Yearly"],
  className,
}: {
  value: string;
  onChange: (v: string) => void;
  options?: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-pill border border-ink/30 p-1 bg-cream",
        className
      )}
    >
      {options.map((o) => {
        const active = o === value;
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={cn(
              "px-4 h-9 text-sm rounded-pill transition-colors",
              active
                ? "bg-ink text-cream"
                : "bg-transparent text-ink hover:bg-ink/5"
            )}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
