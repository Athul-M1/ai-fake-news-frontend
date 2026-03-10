'use client'
import { CheckIcon } from "lucide-react";
// import TiltedImage from "../components/TiltImage";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Home() {
    const specialFeatures = [
        "AI-driven analysis",
        "Fast & accurate results",
        "Easy to use interface",
    ];


    return (
        <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 min-h-0 overflow-x-hidden">
            <div className="absolute top-30 -z-10 left-1/4 size-48 sm:size-64 md:size-72 bg-pink-600 blur-[200px] sm:blur-[250px] md:blur-[300px]"></div>
            <motion.div className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-32 sm:mt-36 md:mt-44"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >


            </motion.div>
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium max-w-2xl text-center leading-tight"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                Smart AI-driven verification for identifying fake and {" "}
                <span className="move-gradient px-2 sm:px-3 rounded-xl">Misleading News.</span>
            </motion.h1>
            <motion.p className="text-sm sm:text-base text-center text-slate-200 max-w-lg mt-4 sm:mt-6 px-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                Simple, structured, and intelligent analysis to verify news authenticity..</motion.p>
            <motion.div className="flex flex-col sm:flex-row items-center gap-4 mt-8 sm:mt-10 justify-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <Link to={'/predict'} className="w-full sm:w-auto">
                    <button className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-full px-8 h-12 text-base font-medium transition-all active:scale-95 shadow-lg shadow-pink-600/30">
                        Get started
                    </button>
                </Link>
                <Link to={'/how-it-works'} className="w-full sm:w-auto">
                    <button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full px-8 h-12 text-base font-medium transition-all">
                        How it works
                    </button>
                </Link>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-14 mt-8 sm:mt-12 px-2">
                {specialFeatures.map((feature, index) => (
                    <motion.p className="flex items-center gap-2" key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.3 }}
                    >
                        <CheckIcon className="size-5 text-pink-600" />
                        <span className="text-slate-400">{feature}</span>
                    </motion.p>
                ))}
            </div>

        </div>
    );
}