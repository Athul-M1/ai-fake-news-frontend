'use client'
import { motion } from "motion/react";
import { ArrowDown, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

export default function HowItWorks() {
    return (
        <div className="relative px-4 md:px-16 lg:px-24 xl:px-32 py-20 mt-24">
            {/* Enhanced Background Effects */}
            <div className="absolute top-0 right-1/4 size-[600px] bg-pink-600 blur-[350px] opacity-10 -z-10"></div>
            <div className="absolute bottom-1/4 left-1/3 size-[500px] bg-purple-600 blur-[350px] opacity-10 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 size-[400px] bg-blue-600 blur-[350px] opacity-10 -z-10"></div>

            {/* Header Section */}
            <motion.div 
                className="text-center mb-20"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
                    How It <span className="move-gradient px-4 rounded-2xl">Works</span>
                </h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    Our advanced pipeline combines AI and rule-based analysis to deliver accurate fake news detection in milliseconds
                </p>
            </motion.div>

            {/* Main Pipeline Container */}
            <div className="max-w-7xl mx-auto space-y-16">
                
                {/* Step 1: User Input */}
                <motion.div 
                    className="relative"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 bg-gradient-to-br from-pink-600/20 via-pink-600/10 to-transparent border border-pink-600/30 rounded-3xl p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-pink-600/50">
                                    01
                                </div>
                                <h3 className="text-2xl font-bold text-white">User Input</h3>
                            </div>
                            <p className="text-slate-300 mb-4">Users enter news text through our intuitive React interface</p>
                            <div className="bg-black/30 rounded-xl p-4 border border-slate-700">
                                <p className="text-sm text-slate-400 font-mono">React UI → Submit Button</p>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <ArrowDown className="w-8 h-8 text-pink-600 animate-bounce" />
                        </div>
                    </div>
                </motion.div>

                {/* Step 2: API Request */}
                <motion.div 
                    className="relative"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="flex-1 bg-gradient-to-bl from-purple-600/20 via-purple-600/10 to-transparent border border-purple-600/30 rounded-3xl p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-600/50">
                                    02
                                </div>
                                <h3 className="text-2xl font-bold text-white">API Request</h3>
                            </div>
                            <p className="text-slate-300 mb-4">Axios sends POST request to Flask backend endpoint</p>
                            <div className="space-y-2">
                                <div className="bg-black/30 rounded-xl p-3 border border-slate-700">
                                    <p className="text-sm text-purple-400 font-mono">/predict API</p>
                                </div>
                                <div className="bg-black/30 rounded-xl p-3 border border-slate-700">
                                    <p className="text-sm text-slate-400">Request Validation & Preprocessing</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <ArrowDown className="w-8 h-8 text-purple-600 animate-bounce" />
                        </div>
                    </div>
                </motion.div>

                {/* Step 3: Feature Extraction */}
                <motion.div 
                    className="relative"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="bg-gradient-to-br from-blue-600/20 via-blue-600/10 to-transparent border border-blue-600/30 rounded-3xl p-8 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-600/50">
                                03
                            </div>
                            <h3 className="text-2xl font-bold text-white">Feature Extraction</h3>
                        </div>
                        <p className="text-slate-300 mb-6">Advanced NLP techniques extract multiple feature types</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-black/40 rounded-xl p-4 border border-blue-600/30 hover:border-blue-600/60 transition-all">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mb-2"></div>
                                <p className="text-white font-semibold mb-1">Basic Features</p>
                                <p className="text-sm text-slate-400">Text length, structure, syntax patterns</p>
                            </div>
                            <div className="bg-black/40 rounded-xl p-4 border border-blue-600/30 hover:border-blue-600/60 transition-all">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mb-2"></div>
                                <p className="text-white font-semibold mb-1">Emotional Analysis</p>
                                <p className="text-sm text-slate-400">Sensational language detection</p>
                            </div>
                            <div className="bg-black/40 rounded-xl p-4 border border-blue-600/30 hover:border-blue-600/60 transition-all">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mb-2"></div>
                                <p className="text-white font-semibold mb-1">Sentiment Score</p>
                                <p className="text-sm text-slate-400">Polarity and subjectivity metrics</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <ArrowDown className="w-8 h-8 text-blue-600 animate-bounce" />
                    </div>
                </motion.div>

                {/* Step 4: Dual Analysis */}
                <motion.div 
                    className="relative"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-white mb-2">Dual Analysis Engine</h3>
                        <p className="text-slate-400">Two parallel systems working together</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Rule-Based */}
                        <motion.div 
                            className="bg-gradient-to-br from-cyan-600/20 via-cyan-600/10 to-transparent border border-cyan-600/30 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-transform"
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-600/50">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-white">Rule-Based Detector</h4>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-black/40 rounded-lg p-3 border border-cyan-600/20">
                                    <p className="text-cyan-400 font-semibold text-sm mb-1">Pattern Matching</p>
                                    <p className="text-slate-400 text-xs">Identifies known fake news patterns</p>
                                </div>
                                <div className="bg-black/40 rounded-lg p-3 border border-cyan-600/20">
                                    <p className="text-cyan-400 font-semibold text-sm mb-1">CAPS & Punctuation</p>
                                    <p className="text-slate-400 text-xs">Excessive capitalization detection</p>
                                </div>
                                <div className="bg-cyan-600/30 rounded-lg p-4 border border-cyan-600 mt-4">
                                    <p className="text-white font-bold text-center">Rule Score: 0–100</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* ML Model */}
                        <motion.div 
                            className="bg-gradient-to-br from-violet-600/20 via-violet-600/10 to-transparent border border-violet-600/30 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-transform"
                            initial={{ x: 30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-600/50">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-white">ML Model Pipeline</h4>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-black/40 rounded-lg p-3 border border-violet-600/20">
                                    <p className="text-violet-400 font-semibold text-sm mb-1">TF-IDF Vectorization</p>
                                    <p className="text-slate-400 text-xs">Converts text to numerical features</p>
                                </div>
                                <div className="bg-black/40 rounded-lg p-3 border border-violet-600/20">
                                    <p className="text-violet-400 font-semibold text-sm mb-1">Trained Model</p>
                                    <p className="text-slate-400 text-xs">Deep learning classification</p>
                                </div>
                                <div className="bg-violet-600/30 rounded-lg p-4 border border-violet-600 mt-4">
                                    <p className="text-white font-bold text-center">Probability: 0–1</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <ArrowDown className="w-8 h-8 text-pink-600 animate-bounce" />
                    </div>
                </motion.div>

                {/* Step 5: Score Fusion */}
                <motion.div 
                    className="relative"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-transparent border border-pink-600/30 rounded-3xl p-8 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-pink-600/50">
                                04
                            </div>
                            <h3 className="text-2xl font-bold text-white">Score Fusion</h3>
                        </div>
                        <p className="text-slate-300 mb-4">Intelligent combination of both analysis methods</p>
                        <div className="bg-black/40 rounded-xl p-6 border border-pink-600/30">
                            <div className="flex items-center justify-center gap-4">
                                <div className="text-center">
                                    <p className="text-cyan-400 font-bold">Rule Score</p>
                                </div>
                                <span className="text-2xl text-pink-600">+</span>
                                <div className="text-center">
                                    <p className="text-violet-400 font-bold">ML Probability</p>
                                </div>
                                <span className="text-2xl text-pink-600">=</span>
                                <div className="text-center">
                                    <p className="text-pink-400 font-bold">Final Score</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <ArrowDown className="w-8 h-8 text-pink-600 animate-bounce" />
                    </div>
                </motion.div>

                {/* Step 6: Classification */}
                <motion.div 
                    className="relative"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                >
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-white mb-2">Final Classification</h3>
                        <p className="text-slate-400">Three possible outcomes with confidence scores</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div 
                            className="bg-gradient-to-br from-green-600/20 via-green-600/10 to-transparent border-2 border-green-600/50 rounded-2xl p-6 hover:scale-105 transition-transform"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex justify-center mb-4">
                                <CheckCircle2 className="w-16 h-16 text-green-500" />
                            </div>
                            <h4 className="text-2xl font-bold text-green-400 text-center mb-2">REAL</h4>
                            <p className="text-slate-400 text-center text-sm">Verified authentic news content</p>
                        </motion.div>
                        <motion.div 
                            className="bg-gradient-to-br from-yellow-600/20 via-yellow-600/10 to-transparent border-2 border-yellow-600/50 rounded-2xl p-6 hover:scale-105 transition-transform"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex justify-center mb-4">
                                <AlertTriangle className="w-16 h-16 text-yellow-500" />
                            </div>
                            <h4 className="text-2xl font-bold text-yellow-400 text-center mb-2 uppercase">Un clear</h4>
                            <p className="text-slate-400 text-center text-sm">Requires further verification</p>
                        </motion.div>
                        <motion.div 
                            className="bg-gradient-to-br from-red-600/20 via-red-600/10 to-transparent border-2 border-red-600/50 rounded-2xl p-6 hover:scale-105 transition-transform"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex justify-center mb-4">
                                <XCircle className="w-16 h-16 text-red-500" />
                            </div>
                            <h4 className="text-2xl font-bold text-red-400 text-center mb-2">FAKE</h4>
                            <p className="text-slate-400 text-center text-sm">Identified as misinformation</p>
                        </motion.div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <ArrowDown className="w-8 h-8 text-pink-600 animate-bounce" />
                    </div>
                </motion.div>

                {/* Step 7: Response */}
                <motion.div 
                    className="relative"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="bg-gradient-to-br from-pink-600/20 via-pink-600/10 to-transparent border border-pink-600/30 rounded-3xl p-8 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-pink-600/50">
                                05
                            </div>
                            <h3 className="text-2xl font-bold text-white">Result Delivery</h3>
                        </div>
                        <p className="text-slate-300 mb-4">JSON response sent back to React UI for display</p>
                        <div className="bg-black/40 rounded-xl p-4 border border-slate-700">
                            <pre className="text-sm text-pink-400 font-mono overflow-x-auto">
{`{
  "classification": "Real/Fake/Suspicious",
  "confidence": 0.95,
  "rule_score": 85,
  "ml_probability": 0.92
}`}
                            </pre>
                        </div>
                    </div>
                </motion.div>

                {/* Technology Stack */}
                <motion.div 
                    className="mt-20"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                >
                    <h3 className="text-3xl font-bold text-center mb-10 text-white">Powered By</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-pink-600/10 to-transparent border border-pink-600/20 rounded-2xl p-8">
                            <h4 className="text-xl font-bold text-pink-500 mb-6 flex items-center gap-2">
                                <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
                                Frontend Stack
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 bg-black/30 rounded-lg p-3">
                                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                                    <span className="text-slate-300">React 18+ with Hooks</span>
                                </div>
                                <div className="flex items-center gap-3 bg-black/30 rounded-lg p-3">
                                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                                    <span className="text-slate-300">Framer Motion Animations</span>
                                </div>
                                <div className="flex items-center gap-3 bg-black/30 rounded-lg p-3">
                                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                                    <span className="text-slate-300">Axios HTTP Client</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-600/20 rounded-2xl p-8">
                            <h4 className="text-xl font-bold text-purple-500 mb-6 flex items-center gap-2">
                                <div className="w-2 h-8 bg-purple-600 rounded-full"></div>
                                Backend Stack
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 bg-black/30 rounded-lg p-3">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                    <span className="text-slate-300">Flask REST API</span>
                                </div>
                                <div className="flex items-center gap-3 bg-black/30 rounded-lg p-3">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                    <span className="text-slate-300">Scikit-learn & TF-IDF</span>
                                </div>
                                <div className="flex items-center gap-3 bg-black/30 rounded-lg p-3">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                    <span className="text-slate-300">Advanced NLP Pipeline</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}