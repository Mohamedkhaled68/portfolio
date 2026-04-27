import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    useEffect(() => setMobileOpen(false), [location]);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-[#0B0B0F]/80 backdrop-blur-xl border-b border-white/[0.08]"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-[1320px] mx-auto px-6 h-[72px] flex items-center justify-between">
                <Link
                    to="/"
                    className="text-white tracking-tight"
                    style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.25rem",
                    }}
                >
                    Mohamed
                    <span className="bg-gradient-to-r from-[#4DA3FF] to-[#6C5CFF] bg-clip-text text-transparent">
                        .dev
                    </span>
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`relative py-1 transition-colors duration-300 ${
                                location.pathname === item.path
                                    ? "text-white"
                                    : "text-[#9CA3AF] hover:text-white"
                            }`}
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "0.875rem",
                            }}
                        >
                            {item.label}
                            {location.pathname === item.path && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4DA3FF] to-[#6C5CFF] rounded-full"
                                />
                            )}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="ml-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#4DA3FF] to-[#6C5CFF] text-white transition-all duration-300 hover:shadow-[0_0_24px_rgba(77,163,255,0.3)] hover:scale-105"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.875rem",
                        }}
                    >
                        Let's Work Together
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0B0B0F]/95 backdrop-blur-xl border-b border-white/[0.08] overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`py-2 ${location.pathname === item.path ? "text-white" : "text-[#9CA3AF]"}`}
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#4DA3FF] to-[#6C5CFF] text-white text-center"
                            >
                                Let's Work Together
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
