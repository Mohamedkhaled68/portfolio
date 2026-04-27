import { Link } from "react-router";
import { SectionReveal } from "../components/SectionReveal";
import { projects } from "../lib/data";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] pt-[72px]">
      <section className="py-24 md:py-32">
        <div className="max-w-[1320px] mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <h1
                className="text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Projects
              </h1>
              <p className="text-[#9CA3AF] max-w-lg mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.7 }}>
                A curated collection of work spanning product design, web development, and creative engineering.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <SectionReveal key={project?.id} delay={i * 0.08}>
                <Link to={`/projects/${project?.id}`} className="group block">
                  <div className="relative bg-[#14141A] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-[#4DA3FF]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(77,163,255,0.08)]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <ImageWithFallback
                        src={project?.image}
                        alt={project?.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-white border border-white/[0.12]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}>
                          View Case Study <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "1.125rem" }}>
                        {project?.title}
                      </h3>
                      <p className="text-[#9CA3AF] mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.6 }}>
                        {project?.shortDesc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project?.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-lg bg-white/[0.05] text-[#9CA3AF] border border-white/[0.06]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
