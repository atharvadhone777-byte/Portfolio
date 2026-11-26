import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { type Project } from "@/data/portfolio";
import { ScrapbookPaper, PhotoFrame, Tape, HandwrittenAnnotation } from "./elements";

export function ProjectSpread({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const mainImage = project.images[0];
  const secondaryImage = project.images[1];
  return (
    <>
      <ScrapbookPaper className={`project-spread project-${project.id} bg-transparent shadow-none`}>
        <div className="project-meta">
          <span className="project-number">{project.number}</span>
          <span className="mono">
            PROJECT FILE {project.number}
            <br />
            {project.category}
          </span>
        </div>
        <div className="project-body">
          <div className="project-visual">
            {mainImage && (
              <Button
                variant="archive"
                className="block w-full h-auto text-left whitespace-normal"
                onClick={() => setOpen(true)}
                aria-label={`Open ${project.title} project`}
              >
                <PhotoFrame
                  id={mainImage}
                  caption={`${project.title.toUpperCase()} — APPLICATION ARCHIVE`}
                  type="screen"
                  className="project-main-photo"
                />
              </Button>
            )}
            <Tape />
            {secondaryImage && (
              <PhotoFrame
                id={secondaryImage}
                type="screen"
                className="project-secondary"
                caption={
                  project.id === "chat"
                    ? "Words, patterns & people."
                    : project.id === "zaika"
                      ? "Made with a pinch of AI."
                      : "A closer look at the data."
                }
              />
            )}
            <HandwrittenAnnotation className="project-note">{project.note}</HandwrittenAnnotation>
          </div>
          <div className="project-copy">
            <h3>{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
            <p className="project-description">{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
            <div className="project-bottom">
              <Button variant="archive" className="project-open" onClick={() => setOpen(true)}>
                OPEN PROJECT <ArrowUpRight />
              </Button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                title={`${project.title} on GitHub`}
                aria-label={`${project.title} on GitHub`}
              >
                <Github size={17} />
              </a>
            </div>
          </div>
        </div>
      </ScrapbookPaper>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="project-detail">
          <span className="mono">PERSONAL ARCHIVE / PROJECT FILE {project.number}</span>
          <DialogTitle asChild>
            <h2>{project.title}</h2>
          </DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
          <div className="detail-grid">
            <div>
              <h3>01 / The problem</h3>
              <p>{project.problem}</p>
            </div>
            <div>
              <h3>02 / The approach</h3>
              <p>{project.approach}</p>
            </div>
          </div>
          <div>
            <h3>03 / Technical implementation</h3>
            <p>{project.implementation}</p>
            <div className="tech-tags">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h3>04 / Key features</h3>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <h3>05 / Image archive</h3>
          <div className="detail-gallery">
            {project.images.map((image, index) => (
              <PhotoFrame
                key={image}
                id={image}
                type={image.includes("ARCHITECTURE") ? "architecture" : "screen"}
                caption={
                  index === 0
                    ? "The main experience"
                    : index === 1
                      ? "A closer look"
                      : "Behind the scenes"
                }
              />
            ))}
          </div>
          <div className="detail-actions">
            <Button variant="ink" asChild>
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github /> VIEW SOURCE
              </a>
            </Button>
            {project.demoUrl ? (
              <Button variant="paper" asChild>
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <ExternalLink /> LIVE DEMO
                </a>
              </Button>
            ) : (
              <span className="unavailable flex items-center gap-2">
                <Layers size={14} /> Live demo not yet available
              </span>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
