"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { IBM_Plex_Mono } from "next/font/google";
import { useState, useEffect } from "react";

const ibmPlexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

// Deadline (February 4, 2025, 13:00 PM IST)
const DEADLINE = new Date("2025-02-04T13:00:00+05:30");

const DeadlineTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
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
          isExpired: true,
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
        isExpired: false,
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
              {DEADLINE.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
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

export default function QuizPage({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen bg-[#000012] relative overflow-hidden ${ibmPlexMono.className}`}>
      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center bg-[#000012]/80 backdrop-blur-sm border-b border-[rgba(255,77,140,0.2)]">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF758C] to-[#5361FF] text-2xl font-bold">
          Mission: Data Impossible
        </h1>
        <div className="flex items-center space-x-4">
          <DeadlineTimer />
          
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonBox: "border-2 border-[rgba(255,77,140,0.3)] rounded-full p-1",
                  userButtonAvatarBox: "w-8 h-8",
                },
              }}
            />
          </SignedIn>
        </div>
      </header>

      {/* Main content */}
      <main>{children}</main>
    </div>
    
  );
}
