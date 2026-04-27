import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { SectionReveal } from "../components/SectionReveal";
import { projects } from "../lib/data";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center text-white pt-[72px]">
        <div className="text-center">
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "2rem" }}>Project not found</h1>
          <Link to="/projects" className="text-[#4DA3FF] mt-4 inline-block">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0F] pt-[72px]">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/projects" className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors mb-8" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}>
              <ArrowLeft size={16} /> Back to Projects
            </Link>

            <h1 className="text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              {project.title}
            </h1>
            <p className="text-[#9CA3AF] max-w-2xl mb-8" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.7 }}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-12">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-lg bg-white/[0.05] text-[#9CA3AF] border border-white/[0.06]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem" }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
              <ImageWithFallback src={project.image} alt={project.title} className="w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-[1320px] mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { label: "Role", value: project.role },
            { label: "Problem", value: project.problem },
            { label: "Timeline", value: "3 months" },
          ].map((item, i) => (
            <SectionReveal key={item.label} delay={i * 0.1}>
              <div className="bg-[#14141A] rounded-2xl border border-white/[0.08] p-8">
                <h3 className="text-[#9CA3AF] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {item.label}
                </h3>
                <p className="text-white" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                  {item.value}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="max-w-[1320px] mx-auto px-6">
          <SectionReveal>
            <h2 className="text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.75rem" }}>
              Results & Impact
            </h2>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {project.results.map((result, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-[#14141A] rounded-2xl border border-white/[0.08] p-8 text-center">
                  <div className="bg-gradient-to-r from-[#4DA3FF] to-[#6C5CFF] bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.5rem" }}>
                    {result}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
