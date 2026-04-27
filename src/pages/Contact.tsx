import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { SectionReveal } from "../components/SectionReveal";
import { Send, Mail, Github, Linkedin } from "lucide-react";

emailjs.init("AiXDs62j4ZEY2I8lF");

const EMAIL_SERVICE_ID = "service_94caakg";
const EMAIL_TEMPLATE_ID = "template_5gkxd78";
const RECIPIENT_EMAIL = "mohamed.khaled6083@gmail.com";

export function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    return (
        <div className="min-h-screen bg-[#0B0B0F] pt-[72px] relative overflow-hidden">
            {/* BG gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#4DA3FF]/5 rounded-full blur-[160px]" />
            </div>

            <section className="py-24 md:py-32 relative z-10">
                <div className="max-w-[720px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-center mb-16">
                            <h1
                                className="text-white mb-4"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontWeight: 700,
                                    fontSize: "clamp(2rem, 4vw, 3rem)",
                                }}
                            >
                                Let's Build Something{" "}
                                <span className="bg-gradient-to-r from-[#4DA3FF] to-[#6C5CFF] bg-clip-text text-transparent">
                                    Great Together
                                </span>
                            </h1>
                            <p
                                className="text-[#9CA3AF]"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "1.0625rem",
                                    lineHeight: 1.7,
                                }}
                            >
                                Have a project in mind? I'd love to hear about
                                it. Drop me a message and let's create something
                                amazing.
                            </p>
                        </div>
                    </motion.div>

                    {!submitted ? (
                        <SectionReveal delay={0.1}>
                            <form
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    setLoading(true);
                                    setError("");

                                    const form = e.target as HTMLFormElement;
                                    const formData = new FormData(form);

                                    try {
                                        const templateParams = {
                                            name: formData.get("name"),
                                            email: formData.get("email"),
                                            message: formData.get("message"),
                                        };

                                        await emailjs.send(
                                            EMAIL_SERVICE_ID,
                                            EMAIL_TEMPLATE_ID,
                                            templateParams,
                                        );

                                        setSubmitted(true);
                                    } catch (err) {
                                        setError(
                                            err instanceof Error
                                                ? err.message
                                                : "Failed to send message. Please try again.",
                                        );
                                        console.error("Email error:", err);
                                    } finally {
                                        setLoading(false);
                                    }
                                }}
                                className="space-y-6"
                            >
                                {[
                                    {
                                        label: "Name",
                                        type: "text",
                                        name: "name",
                                        placeholder: "Your name",
                                    },
                                    {
                                        label: "Email",
                                        type: "email",
                                        name: "email",
                                        placeholder: "your@email.com",
                                    },
                                ].map((field) => (
                                    <div key={field.label}>
                                        <label
                                            className="block text-[#9CA3AF] mb-2"
                                            style={{
                                                fontFamily:
                                                    "'Inter', sans-serif",
                                                fontSize: "0.8125rem",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            required
                                            placeholder={field.placeholder}
                                            className="w-full px-5 py-3.5 rounded-xl bg-[#14141A] border border-white/[0.08] text-white placeholder:text-[#9CA3AF]/50 focus:border-[#4DA3FF]/50 focus:outline-none transition-colors duration-300"
                                            style={{
                                                fontFamily:
                                                    "'Inter', sans-serif",
                                                fontSize: "0.9375rem",
                                            }}
                                        />
                                    </div>
                                ))}
                                <div>
                                    <label
                                        className="block text-[#9CA3AF] mb-2"
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: "0.8125rem",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project..."
                                        className="w-full px-5 py-3.5 rounded-xl bg-[#14141A] border border-white/[0.08] text-white placeholder:text-[#9CA3AF]/50 focus:border-[#4DA3FF]/50 focus:outline-none transition-colors duration-300 resize-none"
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: "0.9375rem",
                                        }}
                                    />
                                </div>
                                {error && (
                                    <div
                                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400"
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: "0.9375rem",
                                        }}
                                    >
                                        {error}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#4DA3FF] to-[#6C5CFF] text-white transition-all duration-300 hover:shadow-[0_0_32px_rgba(77,163,255,0.35)] hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: "0.9375rem",
                                    }}
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                    <Send
                                        size={16}
                                        className="transition-transform group-hover:translate-x-0.5"
                                    />
                                </button>
                            </form>
                        </SectionReveal>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-16"
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#4DA3FF] to-[#6C5CFF] flex items-center justify-center mx-auto mb-6">
                                <Send size={24} className="text-white" />
                            </div>
                            <h2
                                className="text-white mb-2"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontWeight: 700,
                                    fontSize: "1.5rem",
                                }}
                            >
                                Message Sent!
                            </h2>
                            <p
                                className="text-[#9CA3AF]"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Thanks for reaching out. I'll get back to you
                                soon.
                            </p>
                        </motion.div>
                    )}

                    <SectionReveal delay={0.2}>
                        <div className="flex items-center justify-center gap-8 mt-16 pt-16 border-t border-white/[0.08]">
                            {[
                                {
                                    icon: Mail,
                                    label: "Email",
                                    href: `mailto:${RECIPIENT_EMAIL}`,
                                },
                                {
                                    icon: Github,
                                    label: "GitHub",
                                    href: "https://github.com/Mohamedkhaled68",
                                },
                                {
                                    icon: Linkedin,
                                    label: "LinkedIn",
                                    href: "https://www.linkedin.com/in/mohamed-elemshaty-b0ab7a270/",
                                },
                            ].map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors duration-300"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: "0.875rem",
                                    }}
                                >
                                    <Icon size={18} />
                                    {label}
                                </a>
                            ))}
                        </div>
                    </SectionReveal>
                </div>
            </section>
        </div>
    );
}
