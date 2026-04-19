import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { DisplayHeadline } from "./typography";

/**
 * ClosingCTA — large ink-background closing CTA with oversized serif
 * headline and one or two buttons. Used at the end of a page, just above
 * the footer.
 */
export interface ClosingCTAProps extends React.HTMLAttributes<HTMLDivElement> {
  headline: React.ReactNode;
  subline?: React.ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "ink" | "coral" | "butter";
}

export function ClosingCTA({
  className,
  headline,
  subline,
  primary,
  secondary,
  tone = "ink",
  ...props
}: ClosingCTAProps) {
  const dark = tone === "ink";
  const toneClass =
    tone === "ink"
      ? "bg-ink text-cream"
      : tone === "coral"
        ? "bg-coral text-ink"
        : "bg-butter text-ink";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl px-8 md:px-16 py-20 md:py-28",
        toneClass,
        className
      )}
      {...props}
    >
      {/* decorative editorial mark */}
      <span
        aria-hidden
        className={cn(
          "absolute top-8 right-10 font-display italic text-6xl leading-none select-none",
          dark ? "text-cream/15" : "text-ink/15"
        )}
      >
        &#10022;
      </span>

      <div className="max-w-3xl">
        <DisplayHeadline
          className={cn(
            "mb-6",
            dark ? "text-cream" : "text-ink"
          )}
          size="display"
        >
          {headline}
        </DisplayHeadline>
        {subline && (
          <p
            className={cn(
              "text-base md:text-lg max-w-xl mb-8",
              dark ? "text-cream/75" : "text-ink-soft"
            )}
          >
            {subline}
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          {primary && (
            <Button
              asChild
              size="lg"
              variant={dark ? "butter" : "primary"}
            >
              <a href={primary.href}>{primary.label}</a>
            </Button>
          )}
          {secondary && (
            <Button
              asChild
              size="lg"
              variant={dark ? "outline" : "secondary"}
              className={dark ? "border-cream text-cream hover:bg-cream hover:text-ink" : ""}
            >
              <a href={secondary.href}>{secondary.label}</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Marquee — infinite horizontal scroller used for brand phrases or trust bar.
 */
export function Marquee({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div className="inline-flex animate-marquee whitespace-nowrap gap-12 py-4">
        {children}
        {children}
      </div>
    </div>
  );
}
