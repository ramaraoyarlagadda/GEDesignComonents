import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Avatar — round portrait with hand-drawn ink border.
 * Accepts image src or falls back to initials on a warm accent fill.
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: "sm" | "md" | "lg" | "xl";
  tone?: "coral" | "butter" | "sage" | "ochre" | "ink";
}

const sizeMap = {
  sm: "h-9 w-9 text-xs",
  md: "h-12 w-12 text-sm",
  lg: "h-16 w-16 text-base",
  xl: "h-24 w-24 text-xl",
};

const toneMap = {
  coral: "bg-coral text-ink",
  butter: "bg-butter text-ink",
  sage: "bg-sage text-ink",
  ochre: "bg-ochre text-cream",
  ink: "bg-ink text-cream",
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    { className, src, alt, initials, size = "md", tone = "butter", ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-full border-2 border-ink font-display flex items-center justify-center",
        sizeMap[size],
        toneMap[tone],
        className
      )}
      {...props}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt ?? ""} className="h-full w-full object-cover" />
      ) : (
        <span className="font-semibold italic">{initials}</span>
      )}
    </div>
  )
);
Avatar.displayName = "Avatar";

/**
 * AvatarStack — overlapping portraits used in social-proof strips.
 */
export function AvatarStack({
  avatars,
  size = "md",
  className,
}: {
  avatars: Omit<AvatarProps, "size">[];
  size?: AvatarProps["size"];
  className?: string;
}) {
  return (
    <div className={cn("flex -space-x-3", className)}>
      {avatars.map((a, i) => (
        <Avatar
          key={i}
          {...a}
          size={size}
          className={cn("ring-2 ring-cream", a.className)}
        />
      ))}
    </div>
  );
}
