import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle, Loader2, Shield, TrendingUp, Clock, Users } from 'lucide-react';
import SearchInput from '../components/InputBox';
import axios from "axios"

const Predict = () => {
  const [newsText, setNewsText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  // const apiUrl = import.meta.env.VITE_API_URL;

  const HandleAnalyzeNews = async () => {
    const reqbody = {
      "title": "Breaking News",
      "article": newsText
    }
    try{
      const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/predict`,
      reqbody
    );
      console.log(response)
    }catch(err){
      console.log(err)
    }
  };

  return (
    <div className='w-full min-h-screen bg-black text-white p-6 overflow-x-hidden'>
      <motion.div className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44  "
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                
                
            </motion.div>
      {/* Animated Background Blur Effects */}
      <motion.div 
        className="absolute top-30 -z-10 left-1/4 size-72 bg-pink-600 blur-[300px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 -z-10 right-1/4 size-96 bg-pink-500 blur-[350px] opacity-40"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-5xl mx-auto pt-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-pink-500 via-pink-400 to-pink-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fake News Detector
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Powered by AI to detect misinformation and verify news authenticity
          </motion.p>
        </motion.div>

        {/* Input Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SearchInput 
            placeholder="Paste your news article here..."
            value={newsText}
            onChange={setNewsText}
            style={{ width: '100%' }}
            inputStyle={{
              height: '200px',
              paddingTop: '20px',
              paddingBottom: '20px',
              resize: 'vertical',
              minHeight: '200px',
              maxHeight: '500px',
            }}
          />
          
          <motion.button
            onClick={HandleAnalyzeNews}
            disabled={!newsText.trim() || loading}
            className="mt-6 w-full bg-linear-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 disabled:from-gray-700 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-pink-500/30 disabled:shadow-none"
            whileHover={{ scale: !newsText.trim() || loading ? 1 : 1.02 }}
            whileTap={{ scale: !newsText.trim() || loading ? 1 : 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={22} />
                Analyzing with AI...
              </>
            ) : (
              <>
                <Shield size={22} />
                Analyze Article
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Results Section */}
        <AnimatePresence mode="wait">
          {result && (
            <motion.div 
              className="mt-12 space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Main Result Card */}
              <motion.div 
                className="bg-linear-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  {/* Prediction */}
                  <motion.div 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.div 
                      className={`${result.prediction === 'Real' ? 'bg-green-500/20' : 'bg-red-500/20'} p-4 rounded-full`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.3
                      }}
                    >
                      {result.prediction === 'Real' ? (
                        <CheckCircle className="text-green-500" size={48} />
                      ) : (
                        <AlertCircle className="text-red-500" size={48} />
                      )}
                    </motion.div>
                    <div>
                      <motion.div 
                        className="text-sm text-gray-400 mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        Prediction
                      </motion.div>
                      <motion.div 
                        className={`text-4xl font-bold ${
                          result.prediction === 'Real' ? 'text-green-500' : 'text-red-500'
                        }`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {result.prediction} News
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Confidence */}
                  <motion.div 
                    className="text-center md:text-right"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="text-sm text-gray-400 mb-2">Confidence Level</div>
                    <motion.div 
                      className="text-3xl font-bold text-pink-500 mb-2"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                        delay: 0.5
                      }}
                    >
                      {result.confidence}%
                    </motion.div>
                    <div className="w-48 bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        className="bg-linear-to-r from-pink-600 to-pink-400 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${result.confidence}%` }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Analysis Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { 
                    icon: TrendingUp, 
                    title: 'Credibility', 
                    value: result.analysis.credibility,
                    hasBar: true
                  },
                  { 
                    icon: Users, 
                    title: 'Sentiment', 
                    value: result.analysis.sentiment,
                    hasBar: false,
                    subtitle: 'Tone Analysis'
                  },
                  { 
                    icon: Clock, 
                    title: 'Source Quality', 
                    value: result.analysis.sourceQuality,
                    hasBar: true
                  },
                ].map((metric, index) => (
                  <motion.div 
                    key={metric.title}
                    className="bg-linear-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.7 + (index * 0.1),
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: 'rgba(236, 72, 153, 0.5)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <metric.icon className="text-pink-500" size={24} />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-pink-400">{metric.title}</h3>
                    </div>
                    <motion.div 
                      className={`${metric.hasBar ? 'text-3xl' : 'text-2xl'} font-bold text-white mb-2`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8 + (index * 0.1) }}
                    >
                      {metric.hasBar ? `${metric.value}%` : metric.value}
                    </motion.div>
                    {metric.hasBar ? (
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div 
                          className="bg-pink-500 h-full rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.value}%` }}
                          transition={{ duration: 1, delay: 0.9 + (index * 0.1), ease: "easeOut" }}
                        />
                      </div>
                    ) : (
                      <div className="text-sm text-gray-400 mt-1">
                        {metric.subtitle}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Predict;