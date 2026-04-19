import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar } from "./avatar";
import { Card } from "./card";

/**
 * Testimonial — pull quote card with author portrait + attribution.
 */
export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: React.ReactNode;
  authorName: string;
  authorRole?: string;
  avatarSrc?: string;
  avatarInitials?: string;
  tone?: "cream" | "paper" | "butter" | "coral";
  size?: "md" | "lg";
}

export function Testimonial({
  className,
  quote,
  authorName,
  authorRole,
  avatarSrc,
  avatarInitials,
  tone = "cream",
  size = "md",
  ...props
}: TestimonialProps) {
  const toneMap = {
    cream: "cream" as const,
    paper: "paper" as const,
    butter: "butter" as const,
    coral: "coral" as const,
  };

  return (
    <Card
      tone={toneMap[tone]}
      padding={size === "lg" ? "xl" : "lg"}
      className={cn("relative", className)}
      {...props}
    >
      <span
        aria-hidden
        className="absolute -top-4 left-8 text-6xl font-display italic text-coral leading-none select-none"
      >
        &ldquo;
      </span>
      <blockquote
        className={cn(
          "font-display italic text-ink leading-snug",
          size === "lg" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
        )}
      >
        {quote}
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        <Avatar
          src={avatarSrc}
          initials={avatarInitials}
          size="md"
          tone="ochre"
        />
        <div>
          <div className="text-sm font-semibold text-ink">{authorName}</div>
          {authorRole && (
            <div className="text-xs text-ink-muted">{authorRole}</div>
          )}
        </div>
      </div>
    </Card>
  );
}

/**
 * LogoStrip — horizontal row of client/partner wordmarks.
 * Pass an array of strings for styled ghost wordmarks, or children.
 */
export function LogoStrip({
  logos,
  className,
  title,
}: {
  logos: string[];
  className?: string;
  title?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      {title && (
        <div className="text-center text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-6">
          {title}
        </div>
      )}
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
        {logos.map((l) => (
          <span
            key={l}
            className="font-display italic text-xl md:text-2xl text-ink-soft"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
