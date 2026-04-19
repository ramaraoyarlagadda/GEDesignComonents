"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input, Textarea, Label } from "./input";
import { Button } from "./button";

/**
 * ContactForm — editorial contact form with field stack + submit pill.
 * Stateful; reports submissions via `onSubmitValues`.
 */
export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormProps
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  onSubmitValues?: (values: ContactFormValues) => void | Promise<void>;
  ctaLabel?: string;
}

export function ContactForm({
  className,
  onSubmitValues,
  ctaLabel = "Send message →",
  ...props
}: ContactFormProps) {
  const [values, setValues] = React.useState<ContactFormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const update =
    (key: keyof ContactFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((prev) => ({ ...prev, [key]: e.target.value }));

  async function handle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onSubmitValues?.(values);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-3xl border border-ink/15 bg-sage/40 p-8 text-center",
          className
        )}
      >
        <div className="font-display text-2xl italic">Message sent.</div>
        <p className="mt-2 text-ink-soft">
          We&apos;ll be in touch within two working days.
        </p>
      </div>
    );
  }

  return (
    <form
      className={cn("grid gap-5", className)}
      onSubmit={handle}
      {...props}
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            required
            value={values.name}
            onChange={update("name")}
            placeholder="Alex Carter"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            value={values.email}
            onChange={update("email")}
            placeholder="alex@school.edu"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          value={values.subject}
          onChange={update("subject")}
          placeholder="Pilot for 8th-grade math"
        />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          required
          value={values.message}
          onChange={update("message")}
          placeholder="Tell us a bit about your class and what you want to change…"
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="text-xs text-ink-muted">
          We reply within 48 hours · never spam.
        </p>
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? "Sending…" : ctaLabel}
        </Button>
      </div>
    </form>
  );
}
