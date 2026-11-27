import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { identity } from "@/data/portfolio";
import {
  PhotoFrame,
  Tape,
  Stamp,
  HandwrittenAnnotation,
  SketchArrow,
  FloatingDecoration,
} from "@/components/scrapbook/elements";
import { ArchiveNavigation, OpeningNote, CursorTrail } from "@/components/scrapbook/navigation";
import {
  AboutChapter,
  ProjectsChapter,
  CPChapter,
  SkillsChapter,
  JourneyChapter,
  MusicChapter,
  ContactChapter,
} from "@/components/scrapbook/chapters";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atharva Dhone — Ideas, Code & Creations" },
      {
        name: "description",
        content:
          "Explore the digital scrapbook of Atharva Dhone, a Computer Science and AI student at IIIT Lucknow. Projects, problem solving, music and everything in between.",
      },
      { property: "og:title", content: "Atharva Dhone — Ideas, Code & Creations" },
      {
        property: "og:description",
        content:
          "A personal archive of intelligent products, programming adventures and life beyond the screen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});
function Index() {
  const reduced = useReducedMotion();
  return (
    <div className="scrapbook">
      <a href="#projects" className="skip-link">
        Skip to projects
      </a>
      <OpeningNote />
      <CursorTrail />
      <ArchiveNavigation />
      <header className="archive-header">
        <a className="archive-brand" href="#intro" aria-label="Atharva Dhone home">
          ad.
          <span>
            A PERSONAL
            <br />
            COLLECTION
          </span>
        </a>
        <div className="header-right">
          <span className="header-status">
            <span className="status-dot" /> OPEN TO POSSIBILITIES
          </span>
          <Button variant="archive" asChild>
            <a href={`mailto:${identity.email}`}>
              LET’S TALK <ArrowUpRight />
            </a>
          </Button>
        </div>
      </header>
      <main>
        <section id="intro" className="cover">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="cover-eyebrow mono">
              <span /> PERSONAL ARCHIVE — VOL. 01
            </div>
            <h1>
              ATHARVA<span className="surname">DHONE</span>
              <Sparkles className="name-spark" strokeWidth={1} />
            </h1>
            <p className="cover-subtitle">DEVELOPER. PROBLEM SOLVER. BUILDER.</p>
            <p className="cover-description">
              <strong>Hey, I’m Atharva.</strong> A Computer Science and Artificial Intelligence
              undergraduate at IIIT Lucknow, passionate about building intelligent products, solving
              challenging problems, and exploring the intersection of software engineering and
              machine learning.
            </p>
            <div className="cover-actions">
              <Button variant="ink" asChild>
                <a href="#projects">
                  EXPLORE MY WORK <ArrowUpRight />
                </a>
              </Button>
              <Button variant="paper" asChild>
                <a href="#contact">
                  LET’S CONNECT <ArrowUpRight />
                </a>
              </Button>
            </div>
            <HandwrittenAnnotation className="cover-annotation">
              There’s more than meets the eye.
              <br />
              Keep scrolling ↓
            </HandwrittenAnnotation>
          </motion.div>
          <motion.div
            className="cover-photo-assembly"
            initial={reduced ? false : { opacity: 0, y: 35, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="cover-backing" />
            <PhotoFrame
              id="PROFILE_PHOTO"
              type="portrait"
              className="cover-portrait"
              caption="a work in progress, always."
            />
            <Tape className="cover-tape" />
            {/* <PhotoFrame
              id="PERSONAL_PHOTO_02"
              className="cover-mini-photo"
              caption="bits of my world."
            /> */}
            <HandwrittenAnnotation className="cover-note">
              The person behind the pixels.
              <SketchArrow />
            </HandwrittenAnnotation>
            <Stamp className="cover-stamp">
              BASED IN INDIA<strong>IIIT LUCKNOW</strong>26°50′ N / 80°56′ E
            </Stamp>
            <span className="mono cover-code">{"< ideas, code & creations />"}</span>
          </motion.div>
          <FloatingDecoration className="cover-star" />
          <div className="cover-footer">
            <span className="mono">A COLLECTION OF IDEAS, CODE & CREATIONS</span>
            <span className="mono flex items-center gap-2">
              SCROLL TO UNFOLD <ArrowDown size={11} /> 01 — 08
            </span>
          </div>
        </section>
        <AboutChapter />
        <ProjectsChapter />
        <CPChapter />
        <SkillsChapter />
        <JourneyChapter />
        <MusicChapter />
        <ContactChapter />
      </main>
    </div>
  );
}
