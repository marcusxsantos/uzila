import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function RotatingHeadline({
  phrases,
  interval = 3200,
  className,
}: {
  phrases: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [entered, setEntered] = useState(true);

  useEffect(() => {
    if (phrases.length <= 1) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const id = window.setInterval(() => {
      if (reduced) {
        setIndex((i) => (i + 1) % phrases.length);
        return;
      }
      setEntered(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setEntered(true);
      }, 420);
    }, interval);

    return () => window.clearInterval(id);
  }, [phrases, interval]);

  return (
    <span
      aria-live="polite"
      className={cn("block", className)}
      style={{
        opacity: entered ? 1 : 0,
        transform: entered ? "translateY(0) scale(1)" : "translateY(14px) scale(0.985)",
        filter: entered ? "blur(0px)" : "blur(6px)",
        transition:
          "opacity 420ms cubic-bezier(0.22,1,0.36,1), transform 420ms cubic-bezier(0.22,1,0.36,1), filter 420ms ease",
      }}
    >
      {phrases[index]}
    </span>
  );
}
