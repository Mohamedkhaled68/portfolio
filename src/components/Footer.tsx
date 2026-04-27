import { Link } from "react-router";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/[0.08] bg-[#0B0B0F]">
            <div className="max-w-[1320px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <Link
                    to="/"
                    className="text-white"
                    style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.125rem",
                    }}
                >
                    Mohamed
                    <span className="bg-gradient-to-r from-[#4DA3FF] to-[#6C5CFF] bg-clip-text text-transparent">
                        .dev
                    </span>
                </Link>
                <div
                    className="flex items-center gap-6 text-[#9CA3AF]"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                    }}
                >
                    <Link to="/" className="hover:text-white transition-colors">
                        Home
                    </Link>
                    <Link
                        to="/projects"
                        className="hover:text-white transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-white transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-white transition-colors"
                    >
                        Contact
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    {[Github, Linkedin, Twitter].map((Icon, i) => (
                        <a
                            key={i}
                            href={
                                Icon === Github
                                    ? "https://github.com/Mohamedkhaled68"
                                    : Icon === Linkedin
                                      ? "https://www.linkedin.com/in/mohamed-elemshaty-b0ab7a270/"
                                      : "https://x.com/MohamedKhaledev"
                            }
                            target="_blank"
                            className="text-[#9CA3AF] hover:text-white transition-colors duration-300"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
            <div
                className="border-t border-white/[0.08] py-6 text-center text-[#9CA3AF]"
                style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                }}
            >
                © 2026 Mohamed.dev — All rights reserved.
            </div>
        </footer>
    );
}
