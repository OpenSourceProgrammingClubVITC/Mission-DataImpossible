"use client";

import { useEffect, useState } from "react";
import { IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"; // Import Dialog components

const roboto = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

const eventDate = new Date("2025-02-04T09:00:00").getTime();

// Mock registration links (replace with actual values)
const REGISTRATION_LINKS = {
  1: "https://www.vitchennaievents.com/conf1/index.php?eventid=2556",
  2: "https://www.vitchennaievents.com/conf1/index.php?eventid=2557",
  3: "https://www.vitchennaievents.com/conf1/index.php?eventid=2558"
};

const HOME = "/";

interface GlowButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlowButton: React.FC<GlowButtonProps> = ({ href, children, className = "", onClick }) => {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`px-3 py-1 sm:px-5 sm:py-2 border-2 border-[rgba(255,77,140,0.3)] 
        rounded-lg bg-transparent text-white hover:border-[rgba(255,77,140,0.6)] 
        hover:shadow-[0_0_15px_rgba(255,77,140,0.4)] transition-all text-xs sm:text-base 
        hover:scale-105 hover:bg-[rgba(255,77,140,0.1)] ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href || "#"}
      className={`px-3 py-1 sm:px-5 sm:py-2 border-2 border-[rgba(255,77,140,0.3)] 
      rounded-lg bg-transparent text-white hover:border-[rgba(255,77,140,0.6)] 
      hover:shadow-[0_0_15px_rgba(255,77,140,0.4)] transition-all text-xs sm:text-base 
      hover:scale-105 hover:bg-[rgba(255,77,140,0.1)] ${className}`}
    >
      {children}
    </Link>
  );
};

// Registration Modal Component
interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const handleTeamSelect = (size: number) => {
    window.open(REGISTRATION_LINKS[size as keyof typeof REGISTRATION_LINKS], "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#000012] border-2 border-[rgba(255,77,140,0.3)] text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">Select Team Size</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 p-4">
          {[1, 2, 3].map((size) => (
            <button
              key={size}
              onClick={() => handleTeamSelect(size)}
              className="p-4 border-2 border-[rgba(255,77,140,0.3)] rounded-lg
                hover:border-[rgba(255,77,140,0.6)] hover:shadow-[0_0_15px_rgba(255,77,140,0.4)]
                hover:bg-[rgba(255,77,140,0.1)] transition-all text-lg"
            >
              {size} {size === 1 ? "Person" : "People"} - ₹{size === 1 ? "100" : size === 2 ? "180" : "260"}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = eventDate - now;
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={`min-h-screen bg-[#000012] flex flex-col items-center justify-center text-white ${roboto.className}`}>
      <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-center">Event Countdown</h1>
      <div className="flex gap-5 text-center text-2xl sm:text-4xl mb-8">
        <div>
          <p className="text-6xl font-bold">{timeLeft.days}</p>
          <span>Days</span>
        </div>
        <div>
          <p className="text-6xl font-bold">{timeLeft.hours}</p>
          <span>Hours</span>
        </div>
        <div>
          <p className="text-6xl font-bold">{timeLeft.minutes}</p>
          <span>Minutes</span>
        </div>
        <div>
          <p className="text-6xl font-bold">{timeLeft.seconds}</p>
          <span>Seconds</span>
        </div>
      </div>
      <div className="flex gap-6">
        <GlowButton onClick={handleRegisterClick}>Register Now</GlowButton>
        <GlowButton href={HOME}>Home</GlowButton>
      </div>
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <style jsx>{`
        .glow-effect {
          box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.4);
        }
        .glow-effect:hover {
          box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
}
