import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar } from "./avatar";

/**
 * TeamMember — portrait card for team sections.
 * Photo (or initial avatar) + name + role + optional bio.
 */
export interface TeamMemberProps {
  name: string;
  role: string;
  bio?: string;
  src?: string;
  initials?: string;
  tone?: "butter" | "coral" | "sage" | "ochre";
  className?: string;
}

export function TeamMember({
  name,
  role,
  bio,
  src,
  initials,
  tone = "butter",
  className,
}: TeamMemberProps) {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <Avatar
        src={src}
        initials={initials}
        size="xl"
        tone={tone}
        className="mb-4"
      />
      <div className="font-display text-xl text-ink">{name}</div>
      <div className="text-xs uppercase tracking-[0.18em] text-ink-muted mt-1">
        {role}
      </div>
      {bio && (
        <p className="mt-3 text-sm text-ink-soft leading-relaxed max-w-xs">
          {bio}
        </p>
      )}
    </div>
  );
}

/**
 * TeamGrid — responsive grid wrapper for team members.
 */
export function TeamGrid({
  children,
  columns = 3,
  className,
}: {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const colMap = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };
  return (
    <div className={cn("grid gap-10", colMap[columns], className)}>
      {children}
    </div>
  );
}
