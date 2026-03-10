import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

import { Link } from "react-router-dom";
import { navlinks } from "../constants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur-md bg-black/40 border-b border-white/5"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Link to="/" className="flex items-center">
                    <img className="h-12 w-12 sm:h-14 sm:w-14" src="/logo.png" alt="logo" />
                </Link>


                <div className="hidden md:flex items-center gap-8 font-medium">
                    {navlinks.map((link) => (
                        <Link key={link.name} to={link.href} className="text-slate-300 hover:text-pink-500 transition-colors duration-300 text-sm tracking-wide">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={() => setIsOpen(true)} className="md:hidden text-white hover:text-pink-500 transition">
                        <MenuIcon size={24} />
                    </button>
                    <Link to="/predict" className="hidden md:block">
                        <button className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-full transition-all active:scale-95 shadow-lg shadow-pink-600/20">
                            Get Started
                        </button>
                    </Link>
                </div>
            </motion.nav>

            <div className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl md:hidden transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navlinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ x: -20, opacity: 0 }}
                            animate={isOpen ? { x: 0, opacity: 1 } : {}}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-semibold hover:text-pink-500 transition tracking-tight"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="mt-8 size-12 flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white rounded-full transition shadow-lg shadow-pink-600/40"
                    >
                        <XIcon size={28} />
                    </button>
                </div>
            </div>
        </>
    );
}