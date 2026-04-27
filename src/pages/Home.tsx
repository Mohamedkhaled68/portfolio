import { Link } from "react-router";
import { motion } from "motion/react";
import {
    ArrowRight,
    Download,
    ChevronDown,
    Code,
    Palette,
    Wrench,
} from "lucide-react";
import { SectionReveal } from "../components/SectionReveal";
import { projects, skills } from "../lib/data";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const categoryIcons: Record<string, typeof Code> = {
    "Front-End Development": Code,
    "UI Development": Palette,
    Tools: Wrench,
};

export function Home() {
    return (
        <div className="min-h-screen bg-[#0B0B0F]">
            {/* Hero */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Gradient bg */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#4DA3FF]/10 rounded-full blur-[160px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#6C5CFF]/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-[1320px] mx-auto px-6 pt-[72px] w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <span
                                className="inline-block px-4 py-1.5 rounded-full border border-white/[0.08] text-[#9CA3AF] mb-6 bg-white/[0.03]"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "0.8125rem",
                                }}
                            >
                                Available for freelance work
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-white mb-6"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 700,
                                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                                lineHeight: 1.1,
                            }}
                        >
                            Front-End Developer{" "}
                            <span className="bg-gradient-to-r from-[#4DA3FF] to-[#6C5CFF] bg-clip-text text-transparent">
                                Crafting Modern Web Experiences
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-[#9CA3AF] max-w-lg mb-8"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "1.0625rem",
                                lineHeight: 1.7,
                            }}
                        >
                            I build high-performance, interactive web interfaces
                            using modern technologies and design systems.
                            Specialized in scalable, responsive, and visually
                            engaging applications.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.65,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                to="/projects"
                                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4DA3FF] to-[#6C5CFF] text-white transition-all duration-300 hover:shadow-[0_0_32px_rgba(77,163,255,0.35)] hover:scale-105"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "0.9375rem",
                                }}
                            >
                                View Projects
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                            <a
                                href="https://drive.google.com/file/d/1sweocMnULn8zL2Xu8qc0NR1Ja_75w_1F/view?usp=drive_link"
                                target="_blank"
                                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.12] text-white hover:bg-white/[0.05] transition-all duration-300"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "0.9375rem",
                                }}
                            >
                                <Download size={16} />
                                Download Resume
                            </a>
                        </motion.div>
                    </div>

                    {/* Right side: animated code card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#4DA3FF]/20 to-[#6C5CFF]/20 rounded-3xl blur-xl" />
                            <div className="relative bg-[#14141A] rounded-2xl border border-white/[0.08] p-6 overflow-hidden">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                </div>
                                <pre
                                    className="text-[0.8125rem] leading-relaxed"
                                    style={{
                                        fontFamily:
                                            "'Space Grotesk', monospace",
                                    }}
                                >
                                    <code>
                                        <span className="text-[#6C5CFF]">
                                            const
                                        </span>{" "}
                                        <span className="text-[#4DA3FF]">
                                            developer
                                        </span>{" "}
                                        <span className="text-white">=</span>{" "}
                                        {"{\n"}
                                        {"  "}
                                        <span className="text-[#9CA3AF]">
                                            name:
                                        </span>{" "}
                                        <span className="text-[#27C93F]">
                                            "Mohamed Khaled"
                                        </span>
                                        ,{"\n"}
                                        {"  "}
                                        <span className="text-[#9CA3AF]">
                                            role:
                                        </span>{" "}
                                        <span className="text-[#27C93F]">
                                            "Front-End Developer"
                                        </span>
                                        ,{"\n"}
                                        {"  "}
                                        <span className="text-[#9CA3AF]">
                                            skills:
                                        </span>{" "}
                                        [
                                        <span className="text-[#27C93F]">
                                            "React"
                                        </span>
                                        ,{" "}
                                        <span className="text-[#27C93F]">
                                            "TypeScript"
                                        </span>
                                        ,{" "}
                                        <span className="text-[#27C93F]">
                                            "Next.js"
                                        </span>
                                        ],{"\n"}
                                        {"  "}
                                        <span className="text-[#9CA3AF]">
                                            passion:
                                        </span>{" "}
                                        <span className="text-[#27C93F]">
                                            "Building beautiful UIs"
                                        </span>
                                        ,{"\n"}
                                        {"  "}
                                        <span className="text-[#6C5CFF]">
                                            async
                                        </span>{" "}
                                        <span className="text-[#4DA3FF]">
                                            createExperience
                                        </span>
                                        () {"{\n"}
                                        {"    "}
                                        <span className="text-[#6C5CFF]">
                                            return
                                        </span>{" "}
                                        <span className="text-[#27C93F]">
                                            "✨ Something amazing"
                                        </span>
                                        ;{"\n"}
                                        {"  }\n}"}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#9CA3AF]"
                >
                    <ChevronDown size={24} />
                </motion.div>
            </section>

            {/* Skills */}
            <section className="py-24 md:py-32">
                <div className="max-w-[1320px] mx-auto px-6">
                    <SectionReveal>
                        <div className="text-center mb-16">
                            <h2
                                className="text-white mb-4"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontWeight: 700,
                                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                                }}
                            >
                                Technical Expertise
                            </h2>
                            <p
                                className="text-[#9CA3AF] max-w-md mx-auto"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Technologies and tools I use to bring products
                                to life.
                            </p>
                        </div>
                    </SectionReveal>

                    <div className="grid md:grid-cols-3 gap-6">
                        {Object.entries(skills).map(
                            ([category, items], catIdx) => {
                                const Icon = categoryIcons[category] || Code;
                                return (
                                    <SectionReveal
                                        key={category}
                                        delay={catIdx * 0.1}
                                    >
                                        <div className="group bg-[#14141A] rounded-2xl border border-white/[0.08] p-8 hover:border-[#4DA3FF]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(77,163,255,0.08)]">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4DA3FF]/20 to-[#6C5CFF]/20 flex items-center justify-center mb-6">
                                                <Icon
                                                    size={22}
                                                    className="text-[#4DA3FF]"
                                                />
                                            </div>
                                            <h3
                                                className="text-white mb-6"
                                                style={{
                                                    fontFamily:
                                                        "'Space Grotesk', sans-serif",
                                                    fontWeight: 600,
                                                    fontSize: "1.125rem",
                                                }}
                                            >
                                                {category}
                                            </h3>
                                            <div className="space-y-4">
                                                {items.map((skill) => (
                                                    <div key={skill.name}>
                                                        <div
                                                            className="text-white"
                                                            style={{
                                                                fontFamily:
                                                                    "'Inter', sans-serif",
                                                                fontSize:
                                                                    "0.9375rem",
                                                                fontWeight: 500,
                                                            }}
                                                        >
                                                            {skill.name}
                                                        </div>
                                                        <div
                                                            className="text-[#9CA3AF]"
                                                            style={{
                                                                fontFamily:
                                                                    "'Inter', sans-serif",
                                                                fontSize:
                                                                    "0.8125rem",
                                                            }}
                                                        >
                                                            {skill.desc}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </SectionReveal>
                                );
                            },
                        )}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-24 md:py-32">
                <div className="max-w-[1320px] mx-auto px-6">
                    <SectionReveal>
                        <div className="text-center mb-16">
                            <h2
                                className="text-white mb-4"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontWeight: 700,
                                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                                }}
                            >
                                Featured Work
                            </h2>
                            <p
                                className="text-[#9CA3AF] max-w-md mx-auto"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                A selection of projects I've worked on recently.
                            </p>
                        </div>
                    </SectionReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.slice(0, 4).map((project, i) => (
                            <SectionReveal key={project?.id} delay={i * 0.1}>
                                <Link
                                    to={`/projects/${project?.id}`}
                                    className="group block"
                                >
                                    <div className="relative bg-[#14141A] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-[#4DA3FF]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(77,163,255,0.08)]">
                                        <div className="aspect-[16/10] overflow-hidden">
                                            <ImageWithFallback
                                                src={project?.image}
                                                alt={project?.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3
                                                className="text-white mb-2"
                                                style={{
                                                    fontFamily:
                                                        "'Space Grotesk', sans-serif",
                                                    fontWeight: 600,
                                                    fontSize: "1.125rem",
                                                }}
                                            >
                                                {project?.title}
                                            </h3>
                                            <p
                                                className="text-[#9CA3AF] mb-4"
                                                style={{
                                                    fontFamily:
                                                        "'Inter', sans-serif",
                                                    fontSize: "0.875rem",
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                {project?.shortDesc}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project?.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 rounded-lg bg-white/[0.05] text-[#9CA3AF] border border-white/[0.06]"
                                                        style={{
                                                            fontFamily:
                                                                "'Inter', sans-serif",
                                                            fontSize: "0.75rem",
                                                        }}
                                                    >
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

                    <SectionReveal delay={0.3}>
                        <div className="text-center mt-12">
                            <Link
                                to="/projects"
                                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.12] text-white hover:bg-white/[0.05] transition-all duration-300"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "0.9375rem",
                                }}
                            >
                                View All Projects
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </SectionReveal>
                </div>
            </section>
        </div>
    );
}
