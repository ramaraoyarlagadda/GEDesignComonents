"use client";

import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";
import { cn } from "@/lib/utils";

/**
 * FAQ — editorial FAQ list with hand-drawn plus/minus indicators.
 * Data-driven; pass `items` or compose children with AccordionItem directly.
 */
export interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export interface FAQProps extends React.HTMLAttributes<HTMLDivElement> {
  items: FAQItem[];
  defaultOpen?: string;
  type?: "single" | "multiple";
}

export function FAQ({
  className,
  items,
  defaultOpen,
  type = "single",
  ...props
}: FAQProps) {
  if (type === "multiple") {
    return (
      <div className={cn("w-full", className)} {...props}>
        <Accordion type="multiple">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)} {...props}>
      <Accordion type="single" collapsible defaultValue={defaultOpen}>
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
