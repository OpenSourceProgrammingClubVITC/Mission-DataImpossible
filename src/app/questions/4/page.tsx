"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CTFChallenge() {
  const router = useRouter();
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isSolved, setIsSolved] = useState(false);

  // Hidden in HTML source
  const hiddenImageLink = (
    <div className="hidden" aria-hidden="true">
      <Image src="https://qzxhebimyetidvoydcew.supabase.co/storage/v1/object/public/event//imageQ4.jpg" alt="Image" />
    </div>
  );

  const checkAnswer = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const normalizedAnswer = answer.trim().toLowerCase();

    try {
      const response = await fetch('/api/verify-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer: normalizedAnswer }),
      });

      const result = await response.json();

      if (result.isCorrect) {
        setIsSolved(true);
        setMessage('✅ Correct! Redirecting...');
        setTimeout(() => router.push('/next-stage'), 2000);
      } else {
        setAttempts(prev => prev + 1);
        setMessage(`❌ Incorrect. Attempts left: ${3 - attempts}`);
      }
    } catch (error) {
      console.error('Verification error:', error);
      setMessage('🔧 Technical error. Try again.');
    }
  };

  useEffect(() => {
    if (isSolved) {
      const timer = setTimeout(() => router.push('/next-stage'), 2000);
      return () => clearTimeout(timer);
    }
  }, [isSolved, router]);

  return (
    <div className="min-h-screen bg-[#000012] relative overflow-hidden">
      {/* Stars Background */}
      <div className="fixed w-full h-full animate-twinkle">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 2}px`,
              height: `${Math.random() * 2}px`, 
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {hiddenImageLink}

      <main className="relative z-10 container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-[#000012]/90 backdrop-blur-sm border-2 border-[rgba(255,77,140,0.3)] rounded-xl p-8 shadow-[0_0_30px_rgba(255,77,140,0.1)]"
        >
          <div className="space-y-6 mb-8">
            <div className="pt-6">
              {!isSolved ? (
                <form onSubmit={checkAnswer} className="space-y-4">
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="📸🧑‍💻"
                    className="w-full p-4 bg-[#000012] border-2 border-[rgba(255,77,140,0.3)] rounded-lg text-white
                      focus:outline-none focus:border-[#FF758C] focus:shadow-[0_0_15px_rgba(255,77,140,0.2)]
                      transition-all duration-200"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-[#FF1B1B] via-[#FF758C] to-[#5361FF] text-white rounded-lg
                      hover:shadow-[0_0_25px_rgba(255,77,140,0.4)] transition-all duration-300 font-medium
                      disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={attempts >= 3}
                  >
                    {attempts >= 3 ? 'Attempts Exhausted' : 'Submit Answer'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="text-2xl text-green-400 mb-4">🎉 Challenge Solved!</div>
                  <div className="text-white/80">Redirecting to next stage...</div>
                </div>
              )}

              {message && (
                <div className={`text-center p-4 rounded-lg ${
                  message.startsWith('✅') ? 'bg-green-900/20' : 'bg-red-900/20'
                }`}>
                  <span className={message.startsWith('✅') ? 'text-green-400' : 'text-red-400'}>
                    {message}
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}