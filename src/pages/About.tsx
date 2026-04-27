import { motion } from "motion/react";
import { SectionReveal } from "../components/SectionReveal";
import { experience } from "../lib/data";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const techBadges = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Sass",
    "Git",
    "Webpack",
    "Vite",
    "Node.js",
    "Express js",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
];

export function About() {
    return (
        <div className="min-h-screen bg-[#0B0B0F] pt-[72px]">
            {/* Hero */}
            <section className="py-24 md:py-32">
                <div className="max-w-[1320px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1
                            className="text-white mb-6"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 700,
                                fontSize: "clamp(2rem, 4vw, 3rem)",
                            }}
                        >
                            About Me
                        </h1>
                        <p
                            className="text-[#9CA3AF] mb-6"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "1.0625rem",
                                lineHeight: 1.8,
                            }}
                        >
                            Front-End Developer with a passion for building
                            beautiful and scalable web experiences. I specialize
                            in creating high-performance interfaces that bridge
                            the gap between design and engineering.
                        </p>
                        <p
                            className="text-[#9CA3AF]"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "1.0625rem",
                                lineHeight: 1.8,
                            }}
                        >
                            With over 3 years of experience working with
                            companies like Vercel, Stripe, and Shopify, I've
                            developed a deep understanding of what makes great
                            user experiences. I believe in clean code,
                            thoughtful design, and continuous learning.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#4DA3FF]/15 to-[#6C5CFF]/15 rounded-3xl blur-2xl" />
                            <ImageWithFallback
                                src="images/me.jpeg"
                                alt="Developer portrait"
                                className="relative rounded-2xl border border-white/[0.08] w-full object-cover aspect-[4/5]"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 md:py-32">
                <div className="max-w-[1320px] mx-auto px-6">
                    <SectionReveal>
                        <h2
                            className="text-white mb-16 text-center"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 700,
                                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                            }}
                        >
                            Experience Timeline
                        </h2>
                    </SectionReveal>

                    <div className="max-w-2xl mx-auto relative">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.08] md:-translate-x-px" />
                        {experience.map((item, i) => (
                            <SectionReveal key={i} delay={i * 0.1}>
                                <div
                                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}
                                >
                                    <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-[#4DA3FF] to-[#6C5CFF] -translate-x-1.5 md:-translate-x-1.5 z-10" />
                                    <div className="md:w-1/2 pl-10 md:pl-0 md:pr-0">
                                        <span
                                            className="text-[#4DA3FF]"
                                            style={{
                                                fontFamily:
                                                    "'Inter', sans-serif",
                                                fontSize: "0.8125rem",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {item.year}
                                        </span>
                                        <h3
                                            className="text-white mt-1"
                                            style={{
                                                fontFamily:
                                                    "'Space Grotesk', sans-serif",
                                                fontWeight: 600,
                                                fontSize: "1.125rem",
                                            }}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className="text-[#6C5CFF]"
                                            style={{
                                                fontFamily:
                                                    "'Inter', sans-serif",
                                                fontSize: "0.875rem",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {item.company}
                                        </p>
                                        <p
                                            className="text-[#9CA3AF] mt-2"
                                            style={{
                                                fontFamily:
                                                    "'Inter', sans-serif",
                                                fontSize: "0.875rem",
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Badges */}
            <section className="py-24 md:py-32">
                <div className="max-w-[1320px] mx-auto px-6">
                    <SectionReveal>
                        <h2
                            className="text-white mb-12 text-center"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 700,
                                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                            }}
                        >
                            Tools & Technologies
                        </h2>
                    </SectionReveal>
                    <SectionReveal delay={0.1}>
                        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                            {techBadges.map((badge) => (
                                <span
                                    key={badge}
                                    className="px-5 py-2.5 rounded-xl bg-[#14141A] border border-white/[0.08] text-white hover:border-[#4DA3FF]/30 hover:bg-white/[0.03] transition-all duration-300 cursor-default"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: "0.875rem",
                                    }}
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </SectionReveal>
                </div>
            </section>
        </div>
    );
}
