import * as React from "react";
import { cn } from "@/lib/utils";
import { WordmarkLogo } from "./navbar";

/**
 * Footer — large editorial footer with giant wordmark, column links,
 * and fine print. Defaults to an ink-on-cream look; pass `tone="ink"` for
 * the dark closing-CTA footer treatment.
 */
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  tone?: "cream" | "ink";
  columns?: { heading: string; links: { label: string; href: string }[] }[];
  legal?: string;
  brand?: React.ReactNode;
  tagline?: string;
  social?: { label: string; href: string }[];
}

export function Footer({
  className,
  tone = "cream",
  columns = [],
  legal,
  brand,
  tagline,
  social = [],
  ...props
}: FooterProps) {
  const dark = tone === "ink";

  return (
    <footer
      className={cn(
        "w-full border-t",
        dark
          ? "bg-ink text-cream border-ink"
          : "bg-cream text-ink border-ink/15",
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
          <div>
            {brand ?? (
              <WordmarkLogo
                className={dark ? "text-cream" : "text-ink"}
              />
            )}
            {tagline && (
              <p
                className={cn(
                  "mt-4 text-sm max-w-sm",
                  dark ? "text-cream/70" : "text-ink-muted"
                )}
              >
                {tagline}
              </p>
            )}
            {social.length > 0 && (
              <div className="flex gap-3 mt-6">
                {social.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className={cn(
                      "text-xs uppercase tracking-wider border rounded-pill px-3 py-1 transition-colors",
                      dark
                        ? "border-cream/30 text-cream hover:bg-cream hover:text-ink"
                        : "border-ink/30 text-ink hover:bg-ink hover:text-cream"
                    )}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <div
                  className={cn(
                    "text-[11px] uppercase tracking-[0.2em] mb-4",
                    dark ? "text-cream/60" : "text-ink-muted"
                  )}
                >
                  {col.heading}
                </div>
                <ul className="flex flex-col gap-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className={cn(
                          "text-sm transition-colors",
                          dark
                            ? "text-cream hover:text-butter"
                            : "text-ink hover:text-coral"
                        )}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "mt-16 pt-6 border-t flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs",
            dark
              ? "border-cream/20 text-cream/60"
              : "border-ink/15 text-ink-muted"
          )}
        >
          <span>{legal ?? `© ${new Date().getFullYear()} Gradevolution. All rights reserved.`}</span>
          <span>Made with care · Bangalore · Remote</span>
        </div>
      </div>
    </footer>
  );
}
