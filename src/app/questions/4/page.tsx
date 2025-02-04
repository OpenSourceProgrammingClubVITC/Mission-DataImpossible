"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FirstClue() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [showHint, setShowHint] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate the answer (case-insensitive trim)
    const cleanedAnswer = answer.trim().toLowerCase();
    
    // The correct answer is the image link
    const correctAnswer = 'https://ibb.co/nN46Kt2w';
    
    if (cleanedAnswer === correctAnswer) {
      // Navigate to the specified route
      router.push('/4/b');
    } else {
      // Show error message
      setError('Incorrect. Keep investigating!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      {/* Hidden link in source code */}
      <div className="hidden">
        <a href="https://ibb.co/nN46Kt2W">
          <img 
            src="https://i.ibb.co/xtwXrdv4/3tbw8p788e9vqaxwpq5jw6fs93.jpg" 
            alt="x>x"  
          />
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center space-y-8 max-w-2xl w-full"
      >
        <motion.h1 
          className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Search for the Source of Everything
        </motion.h1>

        <motion.div
          className="text-gray-300 text-lg border-2 border-purple-500/30 p-6 rounded-xl backdrop-blur-sm"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
        >
          <p className="mb-4">All Data has a variable X</p>
          <p className="animate-pulse text-purple-400 mb-4"> 🧐 Inspect Everything</p>

          <button 
            onClick={() => setShowHint(!showHint)}
            className="mb-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>

          {showHint && (
            <div className="bg-gray-800 p-3 rounded-lg mb-4 text-sm text-gray-300">
              <p>💡 Hint: The answer is hidden in the source code link attribute</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setError(''); // Clear error when user starts typing
              }}
              placeholder="Enter the hidden 🔗..."
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg 
                text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {error && (
              <p className="text-red-400 text-sm animate-bounce">
                {error}
              </p>
            )}

            <button 
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-purple-500 to-blue-600 
                text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}