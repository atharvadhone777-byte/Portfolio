import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { Button } from "@/components/ui/button";
import { chapters } from "@/data/portfolio";

export function ArchiveNavigation() {
  const [active, setActive] = useState("intro");
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 150, damping: 35 });
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    chapters.forEach((chapter) => {
      const el = document.getElementById(chapter.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <motion.div
        className="progress-line"
        style={{ scaleY: reduced ? scrollYProgress : progress }}
      />
      <nav className="chapter-nav" aria-label="Scrapbook chapters">
        {chapters.map((chapter) => (
          <Button key={chapter.id} variant="chapter" asChild>
            <a href={`#${chapter.id}`} aria-current={active === chapter.id ? "page" : undefined}>
              <span>{chapter.number}</span>
              {chapter.label}
            </a>
          </Button>
        ))}
      </nav>
    </>
  );
}
export function OpeningNote() {
  const [open, setOpen] = useState(true);
  const reduced = useReducedMotion();
  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 1050);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {open && !reduced && (
        <motion.div
          className="opening"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="handwriting"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Welcome to my little corner
            <br />
            of the internet.
          </motion.div>
          <Button variant="archive" onClick={() => setOpen(false)}>
            SKIP INTRO ↗
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export function CursorTrail() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches)
      return;
    const element = document.querySelector<HTMLElement>(".cursor-trail");
    if (!element) return;
    let targetX = -100,
      targetY = -100,
      x = -100,
      y = -100,
      frame = 0;
    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };
    const animate = () => {
      x += (targetX - x) * 0.16;
      y += (targetY - y) * 0.16;
      element.style.transform = `translate(${x + 39}px, ${y + 39}px)`;
      frame = requestAnimationFrame(animate);
    };
    window.addEventListener("pointermove", move);
    frame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);
  return <span className="cursor-trail" aria-hidden="true" />;
}
