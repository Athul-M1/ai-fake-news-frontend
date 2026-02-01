'use client'
import { motion } from "motion/react";
import { Brain, Shield, Zap, Target, Database, TrendingUp } from "lucide-react";
import { features } from "../constants";
export default function About() {
    

    return (
        <div className="relative px-4 md:px-16 lg:px-24 xl:px-32 py-20 mt-24">
            {/* Background blur effects */}
            <div className="absolute top-0 right-1/4 size-96 bg-pink-600 blur-[300px] opacity-20 -z-10"></div>
            <div className="absolute bottom-1/4 left-1/4 size-96 bg-pink-600 blur-[300px] opacity-20 -z-10"></div>

            {/* About Section */}
            <motion.div 
                className="max-w-4xl mx-auto mb-24"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70 }}
            >
                <h2 className="text-4xl md:text-5xl font-medium text-center mb-6">
                    About <span className="move-gradient px-3 rounded-xl">Our Platform</span>
                </h2>
                <p className="text-lg text-slate-300 text-center max-w-3xl mx-auto leading-relaxed">
                    In an era where misinformation spreads faster than truth, our AI-powered fake news detector 
                    stands as your reliable guardian. We leverage cutting-edge machine learning and sophisticated 
                    rule-based analysis to verify news authenticity, helping you make informed decisions about 
                    the information you consume and share.
                </p>
            </motion.div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto mb-24">
                <motion.h3 
                    className="text-3xl md:text-4xl font-medium text-center mb-12"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70 }}
                >
                    Powerful Features
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-pink-600/50 transition-all duration-300 group"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 240, damping: 70 }}
                        >
                            <div className="bg-pink-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-600/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-pink-600" />
                            </div>
                            <h4 className="text-xl font-medium mb-2 text-white">{feature.title}</h4>
                            <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mission Statement */}
            <motion.div 
                className="max-w-3xl mx-auto text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70 }}
            >
                <h3 className="text-3xl font-medium mb-6">Our Mission</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                    We're committed to combating misinformation by providing accessible, accurate, and 
                    intelligent tools that empower individuals to verify news authenticity. Our goal is 
                    to create a more informed digital society where truth prevails over deception.
                </p>
            </motion.div>
        </div>
    );
}