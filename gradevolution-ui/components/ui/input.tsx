import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Input — editorial single-line text input with bottom rule
 * or pill style. Use pill for contact forms, bottom-rule for
 * minimal editorial forms.
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "pill" | "rule";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "pill", type = "text", ...props }, ref) => {
    const base =
      "w-full bg-transparent text-ink placeholder:text-ink-muted focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50";
    const styles =
      variant === "pill"
        ? "h-11 rounded-pill border border-ink/40 px-5 text-sm focus:border-ink"
        : "h-11 border-b border-ink/40 px-0 text-base focus:border-ink rounded-none";

    return (
      <input
        type={type}
        ref={ref}
        className={cn(base, styles, className)}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

/**
 * Textarea — matching editorial treatment.
 */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "box" | "rule";
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = "box", ...props }, ref) => {
    const base =
      "w-full bg-transparent text-ink placeholder:text-ink-muted focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none";
    const styles =
      variant === "box"
        ? "rounded-2xl border border-ink/40 px-5 py-4 text-sm focus:border-ink min-h-[140px]"
        : "border-b border-ink/40 px-0 py-3 text-base focus:border-ink min-h-[120px]";

    return (
      <textarea
        ref={ref}
        className={cn(base, styles, className)}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

/**
 * Label — editorial uppercase field label.
 */
export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-[11px] uppercase tracking-[0.18em] text-ink-soft font-medium mb-2 inline-block",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";
