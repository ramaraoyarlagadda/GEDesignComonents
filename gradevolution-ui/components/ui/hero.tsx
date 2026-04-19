"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { DisplayHeadline, Eyebrow, Lead } from "./typography";

/**
 * Hero — full-width editorial hero.
 * Slots:
 *   - eyebrow: optional uppercase label
 *   - title: main display headline (React node — use <ItalicAccent /> for accents)
 *   - lead: supporting paragraph
 *   - primaryCta / secondaryCta: two call-to-action buttons
 *   - illustration: optional right-side illustration/artwork slot
 *   - socialProof: optional row of trust markers
 */
export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  illustration?: React.ReactNode;
  socialProof?: React.ReactNode;
  align?: "center" | "split";
}

export function Hero({
  className,
  eyebrow,
  title,
  lead,
  primaryCta,
  secondaryCta,
  illustration,
  socialProof,
  align = "split",
  ...props
}: HeroProps) {
  if (align === "center") {
    return (
      <div
        className={cn(
          "relative overflow-hidden py-20 md:py-32 text-center",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
          <DisplayHeadline className="mb-8">{title}</DisplayHeadline>
          {lead && <Lead className="mx-auto mb-10">{lead}</Lead>}
          <div className="flex flex-wrap justify-center gap-3">
            {primaryCta && (
              <Button asChild size="lg" variant="primary">
                <a href={primaryCta.href}>{primaryCta.label}</a>
              </Button>
            )}
            {secondaryCta && (
              <Button asChild size="lg" variant="secondary">
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            )}
          </div>
          {socialProof && <div className="mt-12">{socialProof}</div>}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden py-16 md:py-28", className)}
      {...props}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
            <DisplayHeadline className="mb-6">{title}</DisplayHeadline>
            {lead && <Lead className="mb-8">{lead}</Lead>}
            <div className="flex flex-wrap gap-3">
              {primaryCta && (
                <Button asChild size="lg" variant="primary">
                  <a href={primaryCta.href}>{primaryCta.label}</a>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild size="lg" variant="secondary">
                  <a href={secondaryCta.href}>{secondaryCta.label}</a>
                </Button>
              )}
            </div>
            {socialProof && <div className="mt-10">{socialProof}</div>}
          </div>
          <div className="relative">{illustration}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * HeroIllustration — a CSS-drawn placeholder illustration in the
 * warm editorial style. Can be replaced by a real SVG / image.
 */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-square w-full max-w-[480px] mx-auto",
        className
      )}
    >
      <div className="absolute inset-0 rounded-full bg-butter/70" />
      <div className="absolute inset-6 rounded-[40%_60%_45%_55%/60%_40%_55%_45%] bg-coral/80 border-2 border-ink" />
      <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-sage border-2 border-ink" />
      <div className="absolute bottom-10 left-8 w-32 h-20 rounded-full bg-ochre/90 border-2 border-ink rotate-[-12deg]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="font-display italic text-ink text-5xl">A+</div>
      </div>
    </div>
  );
}
