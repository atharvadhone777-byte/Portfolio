import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Camera, Image, ImagePlus, ArrowUpRight, Sparkles, Code2 } from "lucide-react";
import { assets } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ScrapbookPaper({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.65, 0.3, 1] }}
      className={cn("scrapbook-paper", className)}
    >
      {children}
    </motion.div>
  );
}
export function PaperClip() {
  return <span className="paper-clip" aria-hidden="true" />;
}
export function Tape({ className = "" }: { className?: string }) {
  return <span className={cn("tape", className)} aria-hidden="true" />;
}
export function HandwrittenAnnotation({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("handwriting", className)}>{children}</div>;
}
export function StickyNote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ScrapbookPaper className={cn("sticky-note", className)}>
      <span className="pin" aria-hidden="true" />
      {children}
    </ScrapbookPaper>
  );
}
export function PhotoFrame({
  id,
  caption,
  className = "",
  type = "photo",
}: {
  id: string;
  caption?: string;
  className?: string;
  type?: "photo" | "screen" | "music" | "portrait" | "architecture";
}) {
  const src = assets[id];
  const Icon =
    type === "portrait"
      ? Camera
      : type === "screen"
        ? Image
        : type === "architecture"
          ? Code2
          : ImagePlus;
  return (
    <figure className={cn("photo-frame", `frame-${type}`, className)} data-asset-id={id}>
      <div className="photo-window">
        {src ? (
          <img
            src={src}
            alt={caption || id.toLowerCase().replaceAll("_", " ")}
            loading={id === "PROFILE_PHOTO" ? "eager" : "lazy"}
            decoding="async"
          />
        ) : (
          <div className="photo-placeholder">
            <span className="photo-corner corner-tl" />
            <span className="photo-corner corner-br" />
            {type === "portrait" ? (
              <>
                <span className="portrait-monogram">ad.</span>
                <div className="portrait-guide">
                  <Icon size={17} />
                  <span>YOUR PORTRAIT HERE</span>
                </div>
                <span className="placeholder-coordinate">26° 50′ N · 80° 56′ E</span>
              </>
            ) : (
              <>
                <Icon size={type === "screen" ? 30 : 24} strokeWidth={1} />
                <span>
                  {type === "screen"
                    ? "PROJECT SCREENSHOT"
                    : type === "architecture"
                      ? "ARCHITECTURE NOTES"
                      : "ADD YOUR PHOTO"}
                </span>
              </>
            )}
            <span className="asset-label">{id}</span>
          </div>
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
export function SectionDivider({
  number,
  label,
  children,
}: {
  number: string;
  label: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-divider">
      <span className="mono">PAGE {number}</span>
      <span className="divider-line" />
      <span className="mono">{label}</span>
      {children}
    </div>
  );
}
export function Stamp({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={cn("stamp", className)}>{children}</div>;
}
export function FloatingDecoration({ className = "" }: { className?: string }) {
  return (
    <span className={cn("floating-decoration", className)} aria-hidden="true">
      <Sparkles strokeWidth={1} />
    </span>
  );
}
export function SketchArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={cn("sketch-arrow", className)}
      viewBox="0 0 110 65"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 8C28 1 66 8 71 30C73 42 68 51 64 56M55 45L63 59L76 51"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function OpenMark() {
  return <ArrowUpRight size={19} />;
}
