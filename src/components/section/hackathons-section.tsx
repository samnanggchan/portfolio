/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { Dumbbell, Lightbulb, Music, Newspaper } from "lucide-react";

const HOBBIES = [
  {
    title: "Tech Content",
    description: "Writing and sharing practical IT lessons through blog posts and social media.",
    icon: Newspaper,
  },
  {
    title: "Continuous Growth",
    description: "Exploring new tools, frameworks, and engineering patterns through hands-on practice.",
    icon: Lightbulb,
  },
  {
    title: "Music & Ideas",
    description: "Listening to music and following curiosity-driven side projects.",
    icon: Music,
  },
  {
    title: "Sports",
    description: "Playing football and volleyball to stay active and competitive.",
    icon: Dumbbell,
  },
] as const;

const PROJECT_LOGOS: Record<string, string> = {
  AUTHGATE: "/authgate-logo.png",
  "E-LIBRARY NORTON": "/nu-logo.webp",
  "KAVEYCODE": "/kaveycode-logo.png",
  "KOMSAN-MOVIE": "/komsan-logo.png",
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="overflow-hidden flex flex-col gap-y-16">
      {/* Projects Timeline */}
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Projects & Experience</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">I like building things</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-2xl">
              During my time in university, I engineered {DATA.projects.length}+ core systems and platforms. Turning complex architectural ideas into reliable software products with motivated teams is what drives my passion.
            </p>
          </div>
        </div>

        <Timeline>
          {DATA.projects.map((project) => {
            const logo = PROJECT_LOGOS[project.title];

            return (
              <TimelineItem key={project.title + project.dates} className="w-full flex items-start justify-between gap-10">
                <TimelineConnectItem className="flex items-start justify-center">
                  {logo ? (
                    <img
                      src={logo}
                      alt={`${project.title} logo`}
                      className="size-12 bg-card z-10 shrink-0 overflow-hidden p-1.5 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                    />
                  ) : (
                    <div className="size-12 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none flex items-center justify-center text-xs font-bold text-muted-foreground">
                      {project.title.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                </TimelineConnectItem>

                <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                  {project.dates && (
                    <time className="text-xs text-muted-foreground font-medium">{project.dates}</time>
                  )}
                  {project.title && (
                    <h3 className="font-semibold leading-none tracking-tight text-lg">{project.title}</h3>
                  )}
                  {project.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed text-justify break-words whitespace-pre-line">
                      {project.description}
                    </p>
                  )}
                  {project.links && project.links.length > 0 && (
                    <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                      {project.links.map((link, idx) => (
                        <Link
                          href={link.href}
                          key={idx}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                            {link.icon}
                            {link.type}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>

      {/* Hobbies & Interests Section */}
      <div className="flex flex-col gap-y-6 w-full">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">Hobbies & Interests</span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-3xl mx-auto w-full px-4">
          {HOBBIES.map((hobby) => (
            <div
              key={hobby.title}
              className="group flex min-h-32 gap-4 rounded-lg border bg-card p-4 text-card-foreground shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-md border bg-background text-primary ring-1 ring-border/60 transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                <hobby.icon className="size-5" aria-hidden />
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <h4 className="text-sm font-semibold leading-none text-foreground">
                  {hobby.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
