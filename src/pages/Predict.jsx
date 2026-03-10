import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle, Loader2, Shield, TrendingUp, Clock, Users, XCircle } from 'lucide-react';
import SearchInput from '../components/InputBox';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Predict = () => {
  const [newsText, setNewsText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const HandleAnalyzeNews = async () => {
    // Validate input
    if (!newsText.trim()) {
      toast.error('Please enter news text to analyze', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    // Simulate AI analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      // Dummy data selection logic based on text content or just random
      const isFake = newsText.toLowerCase().includes('scam') || newsText.toLowerCase().includes('win') || Math.random() > 0.5;

      const mockResult = isFake ? {
        prediction: 'Fake',
        confidence: (85 + Math.random() * 10).toFixed(1),
        credibility: (10 + Math.random() * 15).toFixed(1),
        sentiment: 'Sensational',
        sourceQuality: (20 + Math.random() * 20).toFixed(1)
      } : {
        prediction: 'Real',
        confidence: (92 + Math.random() * 5).toFixed(1),
        credibility: (88 + Math.random() * 8).toFixed(1),
        sentiment: 'Neutral / Informative',
        sourceQuality: (90 + Math.random() * 7).toFixed(1)
      };

      setResult(mockResult);

      if (mockResult.prediction === 'Fake') {
        toast.warning('News appears to be fake!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } else {
        toast.success('News appears to be authentic!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (err) {
      console.error('Analysis Error:', err);
      setError({
        message: 'Something went wrong during simulation.',
        isNetworkError: false
      });
    } finally {
      setLoading(false);
    }
  };

  const renderError = () => {
    if (!error) return null;

    return (
      <motion.div
        className="mt-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4 sm:p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <XCircle className="text-red-500" size={24} />
          <h3 className="text-lg font-semibold text-red-400">Analysis Failed</h3>
        </div>
        <p className="text-gray-300 mb-4">{error.message}</p>



        <motion.button
          onClick={() => setError(null)}
          className="mt-4 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Dismiss
        </motion.button>
      </motion.div>
    );
  };

  return (
    <div className='w-full min-h-screen bg-black text-white p-4 sm:p-6 overflow-x-hidden'>
      <motion.div className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-24  "
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

      <div className="max-w-5xl mx-auto pt-8 sm:pt-12 px-2 sm:px-0">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-pink-500 via-pink-400 to-pink-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fake News Detector
          </motion.h1>
          <motion.p
            className="text-gray-400 text-base sm:text-lg"
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
              paddingTop: '16px',
              paddingBottom: '16px',
              resize: 'vertical',
              minHeight: '180px',
              maxHeight: '600px',
            }}
          />

          {/* Error Display */}
          <AnimatePresence>
            {renderError()}
          </AnimatePresence>

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
                className="bg-linear-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                  {/* Prediction */}
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.div
                      className={`${result?.prediction === 'Real' ? 'bg-green-500/20' : result?.prediction === 'Unclear' ? 'bg-amber-500/20' : 'bg-red-500/20'} p-4 rounded-full`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.3
                      }}
                    >
                      {result?.prediction === 'Real' ? (
                        <CheckCircle className="text-green-500" size={48} />
                      ) : result?.prediction === 'Unclear' ? (
                        <AlertCircle className="text-amber-500" size={48} />
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
                        className={`text-2xl sm:text-3xl md:text-4xl font-bold ${result?.prediction === 'Real' ? 'text-green-500' : result?.prediction === 'Unclear' ? 'text-amber-500' : 'text-red-500'}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {result?.prediction} News
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
                      {result?.confidence}%
                    </motion.div>
                    <div className="w-full max-w-48 mx-auto md:mx-0 bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-linear-to-r from-pink-600 to-pink-400 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${result?.confidence}%` }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Analysis Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {[
                  {
                    icon: TrendingUp,
                    title: 'Credibility',
                    value: result?.credibility,
                    hasBar: true
                  },
                  {
                    icon: Users,
                    title: 'Sentiment',
                    value: result?.sentiment,
                    hasBar: false,
                    subtitle: 'Tone Analysis'
                  },
                  {
                    icon: Clock,
                    title: 'Source Quality',
                    value: result?.sourceQuality,
                    hasBar: true
                  },
                ].map((metric, index) => (
                  <motion.div
                    key={metric.title}
                    className="bg-linear-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-pink-500/20 rounded-xl p-4 sm:p-5 md:p-6"
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
                      className={`${metric.hasBar ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-2xl'} font-bold text-white mb-2 break-words`}
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