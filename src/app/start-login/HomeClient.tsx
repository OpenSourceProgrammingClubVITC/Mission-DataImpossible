"use client";
import { SignedIn, UserButton } from '@clerk/nextjs';
import { IBM_Plex_Mono } from 'next/font/google';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTFChallenge from "../questions/4/page";

const roboto = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
});

// Deadline (February 4, 2025 13:00 PM IST)
const DEADLINE = new Date('2025-02-04T13:00:00+05:30');

const DeadlineTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = DEADLINE.getTime() - now;

      if (distance < 0) {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
        clearInterval(timer);
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        hours,
        minutes,
        seconds,
        isExpired: false
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      <div className="text-red-400 font-medium">
        <div className="text-xs uppercase tracking-wide">Ends at</div>
        <div className="text-xl">
          {timeLeft.isExpired ? (
            "Time's up!"
          ) : (
            <>
              {DEADLINE.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              <span className="ml-2 text-sm">
                ({timeLeft.hours}h {timeLeft.minutes}m left)
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 4;

  return (
    <div className={`min-h-screen bg-[#000012] relative overflow-hidden ${roboto.className}`}>
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

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center bg-[#000012]/80 backdrop-blur-sm border-b border-[rgba(255,77,140,0.2)]">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF758C] to-[#5361FF] text-2xl font-bold">
          Mission: Data Impossible
        </h1>
        <SignedIn>
          <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonBox: "border-2 border-[rgba(255,77,140,0.3)] rounded-full p-1",
                userButtonAvatarBox: "w-8 h-8",
              }
            }}
          />
        </SignedIn>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 pt-8">
        {/* Progress Bar and Timer */}
        <div className="mb-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative w-64 h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#FF1B1B] via-[#FF758C] to-[#5361FF]"
                initial={{ width: 0 }}
                animate={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 shadow-[0_0_15px_rgba(255,77,140,0.3)]" />
            </div>
            <span className="text-white/80 text-sm">
              Question {currentQuestion} of {totalQuestions}
            </span>
          </div>
          <DeadlineTimer />
        </div>

        {/* Question Card */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-[#000012]/90 backdrop-blur-sm border-2 border-[rgba(255,77,140,0.3)] rounded-xl p-8 min-h-[500px] flex flex-col shadow-[0_0_30px_rgba(255,77,140,0.1)]">
              {/* Question Content */}
              <div className="flex-grow flex flex-col items-center justify-center gap-6">
                <div className="w-full mb-6">
                  <span className="text-[#FF758C] text-sm font-medium">
                    Question #{currentQuestion}
                  </span>
                </div>
                <CTFChallenge/>
                
                
                {/* Answer Options */}
               
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between items-center mt-8 ">
               
                <button 
                  className="px-8 py-3 bg-gradient-to-r from-[#FF1B1B] via-[#FF758C] to-[#5361FF] text-white rounded-lg
                    hover:shadow-[0_0_25px_rgba(255,77,140,0.4)] transition-all duration-300 font-medium
                    flex items-center gap-2 group right-0"
                  onClick={() => setCurrentQuestion(prev => Math.min(prev + 1, totalQuestions))}
                >
                  Next Question
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 animate-float"
            style={{
              background: `radial-gradient(circle, rgba(255,77,140,0.4) 0%, rgba(255,77,140,0) 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}