"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

/**
 * Navbar — editorial top chrome with wordmark logo + center nav + CTA.
 * Supports transparent-on-cream or ink-on-cream states.
 */
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  links?: { label: string; href: string }[];
  cta?: { label: string; href: string };
  sticky?: boolean;
}

export function Navbar({
  className,
  logo,
  links = [],
  cta,
  sticky = true,
  ...props
}: NavbarProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "w-full z-40 bg-cream/85 backdrop-blur-md border-b border-ink/10",
        sticky && "sticky top-0",
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-6 md:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {logo ?? <WordmarkLogo />}
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink hover:text-ink-soft transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {cta && (
            <Button asChild size="sm" variant="primary" className="hidden md:inline-flex">
              <a href={cta.href}>{cta.label}</a>
            </Button>
          )}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/30"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-cream">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base text-ink py-1"
              >
                {l.label}
              </a>
            ))}
            {cta && (
              <Button asChild variant="primary" size="md" className="w-full">
                <a href={cta.href}>{cta.label}</a>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * WordmarkLogo — tight-tracked display serif brand wordmark.
 */
export function WordmarkLogo({
  word = "Gradevolution",
  className,
}: {
  word?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-display text-xl md:text-2xl tracking-tight italic text-ink",
        className
      )}
    >
      {word}
      <span className="text-coral">.</span>
    </span>
  );
}
