import {
  ArrowUpRight,
  Brain,
  Code2,
  Database,
  Github,
  GraduationCap,
  Mail,
  Music2,
  Network,
  Trophy,
  Download,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cp, education, identity, profiles, projects, toolbox } from "@/data/portfolio";
import {
  ScrapbookPaper,
  PhotoFrame,
  StickyNote,
  PaperClip,
  HandwrittenAnnotation,
  SectionDivider,
  Stamp,
  Tape,
} from "./elements";
import { ProjectSpread } from "./project-spread";

export function AboutChapter() {
  return (
    <section id="about" className="section">
      <SectionDivider number="02" label="A LITTLE ABOUT ME" />
      <div className="about-spread">
        <ScrapbookPaper className="about-left">
          <Tape />
          <span className="mono">ABOUT THE AUTHOR</span>
          <h2>
            Curiosity is
            <br />
            my starting point.
          </h2>
          <p>
            Hey, I’m Atharva. A developer, a problem solver, and a student who likes asking “what
            if?” — then opening an editor to find out.
          </p>
          <p className="mt-3">
            I’m exploring the space where software engineering meets machine learning, building
            things that turn complex ideas into something useful.
          </p>
          <PhotoFrame id="ABOUT_PHOTO" caption="A face behind the code." className="about-photo" />
          <HandwrittenAnnotation>
            Always learning,
            <br />
            always building. ↗
          </HandwrittenAnnotation>
        </ScrapbookPaper>
        <ScrapbookPaper className="about-right" delay={0.12}>
          <PaperClip />
          <span className="mono">NOTES FROM MY DESK / 2026</span>
          <h3>
            A mind for code.
            <br />
            An eye for possibility.
          </h3>
          <p>
            Computer Science & Artificial Intelligence
            <br />
            Indian Institute of Information Technology, Lucknow
          </p>
          <ul className="interest-list">
            {[
              [Code2, "Software Development"],
              [Brain, "Artificial Intelligence"],
              [Network, "Machine Learning"],
              [Trophy, "Competitive Programming"],
              [Database, "Problem Solving"],
            ].map(([Icon, title]) => {
              const I = Icon as typeof Code2;
              return (
                <li key={String(title)}>
                  <I />
                  {String(title)}
                </li>
              );
            })}
          </ul>
          <Stamp>
            IIIT LUCKNOW
            <br />
            LEARNING IN PROGRESS
          </Stamp>
        </ScrapbookPaper>
      </div>
    </section>
  );
}
export function ProjectsChapter() {
  return (
    <section id="projects" className="section">
      <SectionDivider number="03" label="THE WORKSHOP" />
      <div className="section-heading">
        <div>
          <h2>
            Things I’ve <em>Built</em>
          </h2>
          <p className="section-subtitle">Some ideas that made it out of my notebook.</p>
        </div>
        <HandwrittenAnnotation>
          Less talking.
          <br />
          More making. ↙
        </HandwrittenAnnotation>
      </div>
      {projects.map((project) => (
        <ProjectSpread key={project.id} project={project} />
      ))}
    </section>
  );
}
export function AchievementCard({ rank, contest }: { rank: number; contest: string }) {
  return (
    <div className="achievement">
      <strong>#{rank.toLocaleString("en-IN")}</strong>
      <span className="mono">{contest}</span>
    </div>
  );
}
export function CPChapter() {
  return (
    <section id="cp" className="cp-section">
      <div className="cp-inner">
        <SectionDivider number="04" label="THE BATTLE JOURNAL" />
        <div className="cp-heading">
          <h2>
            The Problem
            <br />
            <em>Solving Chronicles</em>
          </h2>
          <Stamp>
            SUBMISSION STATUS<strong>ACCEPTED ✓</strong>
          </Stamp>
        </div>
        <p className="section-subtitle">
          Thousands of lines. Countless submissions. One problem at a time.
        </p>
        <div className="cp-composition">
          <ScrapbookPaper className="cp-main">
            <Tape />
            <span className="mono">A COLLECTION OF SMALL VICTORIES</span>
            <div className="solved-count">{cp.total}</div>
            <HandwrittenAnnotation>problems solved. and counting.</HandwrittenAnnotation>
            <div className="cp-breakdown">
              <div>
                <strong>{cp.codeforcesProblems}</strong>
                <span className="mono">CODEFORCES</span>
              </div>
              <div>
                <strong>{cp.otherProblems}</strong>
                <span className="mono">CODECHEF + LEETCODE</span>
              </div>
            </div>
            <div className="cp-ratings">
              <div>
                <span className="mono">CODEFORCES</span>
                <strong>{cp.codeforcesRating}</strong>
                <span className="mono">PUPIL</span>
              </div>
              <div>
                <span className="mono">CODECHEF</span>
                <strong>{cp.codechefRating}</strong>
                <span className="mono">2-STAR ★★</span>
              </div>
            </div>
          </ScrapbookPaper>
          <div className="cp-notes">
            <ScrapbookPaper className="code-paper">
              <PaperClip />
              <span className="mono">ALGORITHM NOTES / KEEP GOING</span>
              <pre>
                <span>{"while (!accepted) {"}</span>
                {"\n  think();\n  code();\n  debug();\n  tryAgain();\n"}
                <span>{"}"}</span>
              </pre>
              <HandwrittenAnnotation>WA → Debug → Accepted</HandwrittenAnnotation>
            </ScrapbookPaper>
            <StickyNote className="orchestrate">
              <span className="mono">{cp.hackerrank.contest.toUpperCase()}</span>
              <strong>Global rank #{cp.hackerrank.rank}</strong>
              <span className="mono">{cp.hackerrank.date.toUpperCase()}</span>
            </StickyNote>
          </div>
        </div>
        <div className="contest-sheets">
          {[
            { title: "Codeforces", items: cp.codeforces },
            { title: "CodeChef", items: cp.codechef },
          ].map((sheet) => (
            <ScrapbookPaper key={sheet.title} className="contest-sheet">
              <div className="contest-heading">
                <h3>{sheet.title}</h3>
                <Trophy />
              </div>
              <span className="mono">CONTEST CLIPPINGS / GLOBAL RANKS</span>
              {sheet.items.map((item) => (
                <AchievementCard key={item.contest} {...item} />
              ))}
            </ScrapbookPaper>
          ))}
        </div>
        <div className="journey-strip">
          <span />
          <div className="mono">THINK</div>
          <span />
          <div className="mono">BUILD</div>
          <span />
          <div className="mono">DEBUG</div>
          <span />
          <div className="mono">REPEAT ↗</div>
          <span />
        </div>
        <div className="profile-links">
          {profiles.map((profile) => (
            <Button variant="paper" className="profile-link" key={profile.handle} asChild>
              <a href={profile.url} target="_blank" rel="noreferrer">
                <span>
                  {profile.platform}
                  <small>{profile.handle}</small>
                </span>
                <ArrowUpRight />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
export function SkillsChapter() {
  return (
    <section id="skills" className="section tools-section">
      <SectionDivider number="05" label="THE TOOLBOX" />
      <div className="toolbox-heading">
        <h2>
          Tools of the <em>Trade</em>
        </h2>
        <p className="section-subtitle">The things I use to turn ideas into working products.</p>
        <HandwrittenAnnotation>A few of my everyday essentials.</HandwrittenAnnotation>
      </div>
      <div className="toolbox-sheets">
        {toolbox.map((group) => (
          <ScrapbookPaper key={group.title} className="toolbox-sheet">
            <PaperClip />
            <span className="mono">{group.label}</span>
            <h3>{group.title}</h3>
            <div className="tool-items">
              {group.tools.map(([tool, icon]) => (
                <div className="tool-item" key={tool} title={tool}>
                  <i className={`devicon-${icon}-plain`} aria-hidden="true" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </ScrapbookPaper>
        ))}
      </div>
      <HandwrittenAnnotation className="toolbox-footer">
        The best tool? A curious mind.
      </HandwrittenAnnotation>
    </section>
  );
}
export function JourneyChapter() {
  return (
    <section id="journey" className="section">
      <SectionDivider number="06" label="EDUCATION & JOURNEY" />
      <h2>
        Where It All <em>Started</em>
      </h2>
      <div className="education-spread">
        <ScrapbookPaper className="education-document">
          <PaperClip />
          <span className="mono">ACADEMIC RECORD / 2025—2029</span>
          <h3>{education.institution}</h3>
          <p className="degree">{education.degree}</p>
          <span className="mono">{education.location}</span>
          <div className="education-data">
            <span className="mono">{education.period}</span>
            <span className="gpa">
              {education.gpa}
              <span className="mono"> GPA</span>
            </span>
          </div>
          <span className="mono">FROM THE CLASSROOM</span>
          <ul className="coursework">
            {education.coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </ScrapbookPaper>
        <div className="education-side">
          <PhotoFrame
            id="COLLEGE_PHOTO"
            caption="Lucknow — the next chapter."
            className="college-photo"
          />
          <StickyNote className="jee-note">
            <span className="mono">A MILESTONE ALONG THE WAY</span>
            <h3>Before the first lecture.</h3>
            <strong>{education.mainPercentile} percentile</strong>
            <p>
              JEE MAIN · AIR {education.mainRank.toLocaleString("en-IN")}
              <br />
              JEE ADVANCED · AIR {education.advancedRank.toLocaleString("en-IN")}
            </p>
          </StickyNote>
        </div>
      </div>
      <div className="academic-timeline">
        <span className="mono">2025 / A NEW BEGINNING</span>
        <span className="timeline-line" />
        <span className="mono">2029 / WHAT’S NEXT?</span>
      </div>
    </section>
  );
}
export function MusicChapter() {
  return (
    <section id="life" className="section music-section">
      <SectionDivider number="07" label="BEYOND THE SCREEN" />
      <h2>
        Life Outside <em>the Code</em>
      </h2>
      <div className="music-spread">
        <div className="music-copy">
          <span className="music-symbol" aria-hidden="true">
            ♫
          </span>
          <span className="mono ml-4">A DIFFERENT KIND OF RHYTHM</span>
          <h3>
            Not everything
            <br />
            needs a keyboard.
          </h3>
          <p>
            Member — Estrella
            <br />
            Musical Society of IIIT Lucknow
          </p>
          <span className="mono">AUGUST 2026 — PRESENT</span>
          <HandwrittenAnnotation>
            Some days, the best ideas
            <br />
            come between the notes.
          </HandwrittenAnnotation>
        </div>
        <div className="music-photos">
          <div className="music-score" />
          <PhotoFrame
            id="MUSIC_PHOTO_01"
            caption="Good music. Better company."
            className="music-main"
            type="music"
          />
          <Tape />
          <PhotoFrame
            id="MUSIC_PHOTO_02"
            caption="Little moments, big memories."
            className="music-small"
            type="music"
          />
        </div>
      </div>
    </section>
  );
}
export function ContactChapter() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <SectionDivider number="08" label="THE LAST PAGE" />
        <div className="contact-composition">
          <div className="contact-copy">
            <h2 className="contact-title">
              Have an idea?
              <br />
              Let’s build
              <br />
              <em>something.</em>
            </h2>
            <p>Always open to interesting ideas, meaningful collaborations and conversations.</p>
            <div className="contact-actions">
              <Button variant="ink" asChild>
                <a href={`mailto:${identity.email}`}>
                  <Mail /> SAY HELLO
                </a>
              </Button>
              <Button variant="paper" asChild>
                <a
                  href="/resume.pdf"
                  download="Atharva-Dhone-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download /> MY RESUME
                </a>
              </Button>
            </div>
            <div className="social-links">
              <a href={identity.githubUrl} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={12} />
              </a>
              <a href={identity.linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={12} />
              </a>
              {profiles
                .filter((p) => p.handle !== "Celestial_11")
                .map((profile) => (
                  <a key={profile.handle} href={profile.url} target="_blank" rel="noreferrer">
                    {profile.platform} <ArrowUpRight size={12} />
                  </a>
                ))}
            </div>
          </div>
          <ScrapbookPaper className="contact-letter">
            <Tape />
            <span className="mono">TO: THE NEXT GREAT IDEA</span>
            <HandwrittenAnnotation>Let’s make it happen.</HandwrittenAnnotation>
            <a href={`mailto:${identity.email}`} className="letter-email">
              {identity.email}
            </a>
            <div className="letter-details">
              <a href={`tel:${identity.phone.replaceAll("-", "")}`}>{identity.phone}</a>
              <span className="mono">INDIA</span>
            </div>
            <p className="handwriting">
              Yours,
              <br />
              Atharva
            </p>
            <Stamp>
              END OF
              <br />
              VOLUME 01
            </Stamp>
          </ScrapbookPaper>
        </div>
        <footer className="archive-footer">
          <HandwrittenAnnotation>
            Thanks for taking a little tour through my world.
          </HandwrittenAnnotation>
          <span className="mono">
            © 2026 ATHARVA DHONE
            <br />
            MADE WITH INTENTION, NOT A TEMPLATE.
          </span>
          <Button variant="archive" asChild>
            <a href="#intro" aria-label="Back to the introduction">
              <ArrowUpRight /> BACK TO TOP
            </a>
          </Button>
        </footer>
      </div>
    </section>
  );
}
