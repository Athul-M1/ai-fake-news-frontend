import { footerData } from "../constants/index";
import { DribbbleIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import { motion } from "motion/react";
// import type  } from "../types";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-center md:justify-between overflow-hidden gap-8 sm:gap-10 md:gap-16 lg:gap-20 mt-24 sm:mt-32 md:mt-40 py-6 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-[12px] sm:text-[13px] text-gray-500">
            <motion.div className="grid grid-cols-2 sm:flex sm:flex-wrap items-start gap-x-8 gap-y-10 sm:gap-10 md:gap-12 lg:gap-16"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <Link to="/" className="col-span-2 sm:col-span-1 mb-4 sm:mb-0">
                    <img className="size-10 aspect-square" src="/logo.png" alt="footer logo" width={40} height={40} />
                </Link>
                {footerData.map((section, index) => (
                    <div key={index} className="min-w-[120px]">
                        <p className="text-slate-100 font-semibold text-sm sm:text-base">{section.title}</p>
                        <ul className="mt-4 space-y-3">
                            {section.links.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.href} className="text-gray-400 hover:text-pink-600 transition-colors duration-200">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>
            <motion.div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end"
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="max-w-60">Making every customer feel valued—no matter the size of your audience.</p>
                <div className="flex items-center gap-4 mt-3">
                    <div>
                        <DribbbleIcon className="size-5 hover:text-pink-500" />
                    </div>
                    <div >
                        <LinkedinIcon className="size-5 hover:text-pink-500" />
                    </div>
                    <div>
                        <TwitterIcon className="size-5 hover:text-pink-500" />
                    </div>
                    <div >
                        <YoutubeIcon className="size-6 hover:text-pink-500" />
                    </div>
                </div>
                <p className="mt-3 text-center">&copy; {new Date().getFullYear()} <div >Truth Net</div></p>
            </motion.div>
        </footer>
    );
}