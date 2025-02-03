"use client";
import Head from 'next/head';
import { IBM_Plex_Mono } from 'next/font/google';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';
import Timeline from './Timeline';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import FAQ from "@/components/faq";
const roboto = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
});

// Registration links based on team size
const REGISTRATION_LINKS = {
  1: "https://www.vitchennaievents.com/conf1/index.php?eventid=2556",
  2: "https://www.vitchennaievents.com/conf1/index.php?eventid=2557",
  3: "https://www.vitchennaievents.com/conf1/index.php?eventid=2558"
};

const START_MISSION_LINK = "\start";
const SPONSOR_LINK = "https://channelise.in";
const question1 = "questions/1";

// Button component with optional onClick handler
interface GlowButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlowButton: React.FC<GlowButtonProps> = ({ href, children, className = '', onClick }) => {
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
      href={href || '#'}
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
    window.open(REGISTRATION_LINKS[size as keyof typeof REGISTRATION_LINKS], '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#000012] border-2 border-[rgba(255,77,140,0.3)] text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Select Team Size
          </DialogTitle>
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
              {size} {size === 1 ? 'Person' : 'People'} - ₹{size === 1 ? '100' : size === 2 ? '180' : '260'}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function LandingPage() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsRegistrationModalOpen(true);
  };

  return (
    <div className={`min-h-screen bg-[#000012] relative overflow-hidden flex flex-col ${roboto.className}`}>
      <Head>
        <title>Mission: Data Impossible</title>
        <meta name="description" content="AI/ML data set event" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RegistrationModal 
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />

      {/* Stars Background */}
      <div
        className="fixed w-full h-full z-10 animate-twinkle"
        style={{
          background: `
            radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 50px 160px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 160px 120px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 200px 150px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 250px 220px, #fff, rgba(0,0,0,0))
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
        }}
      />

      {/* Navbar */}
      <nav className="bg-[#000012]/80 backdrop-blur-sm py-5 px-4 sm:px-4 absolute w-full top-0 z-20 border-t border-b border-white/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm sm:text-2xl font-semibold bg-gradient-to-r from-[#FF1B1B] via-[#FF758C] to-[#5361FF] bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
            Mission: Data Impossible
          </div>
          <div className="flex gap-3 sm:gap-5">
            <GlowButton onClick={handleRegisterClick}>Register Now</GlowButton>
            <GlowButton href={START_MISSION_LINK}>Start Mission</GlowButton>
            <GlowButton href={question1}>Start Mission</GlowButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto flex-grow flex flex-col justify-center items-center px-4">
        <div className="text-center pt-[15vh] sm:pt-[25vh] mb-[5.5vh] animate-fadeIn">
          <h1 className="text-6xl sm:text-[100px] bg-gradient-to-r from-[#FF1B1B] via-[#FF758C] to-[#5361FF] bg-clip-text text-transparent mb-2 hover:scale-105 transition-transform">
            Mission
          </h1>
          <h2 className="text-4xl sm:text-6xl text-white mb-8 tracking-wider animate-glow">Data Impossible</h2>
          <p className="text-xl sm:text-2xl text-white opacity-90 mb-10">AI/ML data set event</p>
          <div className="flex justify-center items-center gap-5 mt-8 hover:scale-105 transition-transform">
            <img src="/ras.png" alt="RAS Logo" className="w-8 h-8 sm:w-12 sm:h-12" />
            <span className="text-white text-xl sm:text-2xl opacity-80">X</span>
            <img src="/ospc.png" alt="OSPC Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="z-10 text-center py-8 bg-gradient-to-b from-[#180321] to-[#000012] relative shadow-[0px_-12px_100.6px_#CE1FA3] px-4 rounded-t-[40%]">
        <h1 className="text-4xl sm:text-6xl font-semibold text-white mb-12 text-shadow-[0_0_10px_rgba(255,255,255,0.3)] pt-12 animate-pulse">
          Prize Pool: ₹5,000
        </h1>
        <div className="flex flex-col sm:flex-row justify-evenly items-center px-5 mb-6 text-white">
          <div className="text-center sm:text-left text-xl sm:text-2xl mb-6 sm:mb-0 hover:scale-105 transition-transform">
            <p>📅 4/2/25</p>
            <p>🕐 9am - 11:59pm</p>
          </div>
          <div className="w-[15rem] sm:w-[2px] h-[2px] sm:h-[15rem] bg-gradient-to-r from-transparent via-white to-transparent my-6 sm:my-0 sm:mx-5" />
          <div className="text-center text-xl sm:text-2xl mb-6 sm:mb-0">
            <p>Team of 1: ₹100</p>
            <p>Team of 2: ₹180</p>
            <p>Team of 3: ₹260</p>
            <button
              onClick={handleRegisterClick}
              className="mt-4 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#917DFF] via-[#9C4BFF] to-[#917DFF] 
                text-white text-xl sm:text-2xl font-bold rounded-full 
                shadow-[0_4px_15px_rgba(128,90,213,0.5)] hover:scale-105 
                transition-transform hover:shadow-[0_4px_25px_rgba(128,90,213,0.7)]"
            >
              Register Now
            </button>
          </div>
          <div className="w-[15rem] sm:w-[2px] h-[2px] sm:h-[15rem] bg-gradient-to-r from-transparent via-white to-transparent my-6 sm:my-0 sm:mx-5" />
          <div className="text-center sm:text-left text-xl sm:text-2xl hover:scale-105 transition-transform">
            <p>📍 Kamaraj Auditorium</p>
            <p>AB3, VIT Chennai</p>
          </div>
        </div>
      </div>

      {/* Sponsor Section */}
      <div className="z-10 flex flex-col justify-center items-center my-12 p-4">
        <h1 className="text-4xl sm:text-6xl font-semibold text-white mb-12 text-shadow-[0_0_10px_rgba(255,255,255,0.3)] pt-12">
          SPONSOR
        </h1>
        <a 
          href={SPONSOR_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-8 border-white border-4 rounded-2xl overflow-hidden 
            hover:scale-105 transition-all duration-300 
            hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
            hover:border-[rgba(255,77,140,0.6)]"
        >
          <div className="relative">
            <img 
              src="/logo_light.png" 
              alt="Channelise" 
              className="w-[200px] h-[90px] sm:w-[300px] sm:h-[120px] p-4 left-8
                transition-transform duration-300 group-hover:opacity-90" 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        </a>
        <p className="text-white/70 mt-4 text-sm sm:text-base hover:text-white transition-colors">
          Click to visit sponsor website
        </p>
      </div>
      <div className="z-10 flex flex-col items-center w-full">
        <h1 className="text-4xl sm:text-6xl font-semibold text-white mb-12 text-shadow-[0_0_10px_rgba(255,255,255,0.3)] pt-12">
          TIMELINE
        </h1>
        <Timeline />
        <FAQ/>
      </div>

  
        


      <footer className="bg-black/70 backdrop-blur-sm text-white py-8 px-4 sm:px-8 flex flex-col items-center z-10">
        <div className="w-full flex flex-col sm:flex-row justify-between mb-6">
          <div className="w-full sm:w-1/2 flex flex-col sm:flex-row justify-around mb-6 sm:mb-0">
            <div className="text-center sm:text-left mb-6 sm:mb-0">
              <p className="text-2xl sm:text-3xl mb-4">IEEE RAS</p>
              <a
                href="https://www.instagram.com/ieeerasvitc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg mb-2 flex items-center justify-center sm:justify-start hover:text-pink-400 transition-colors"
              >
                <FaInstagram className="mr-2" /> Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-ras/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg flex items-center justify-center sm:justify-start hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl mb-4">OSPC VITC</p>
              <a
                href="https://www.instagram.com/ospc_vitc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg mb-2 flex items-center justify-center sm:justify-start hover:text-pink-400 transition-colors"
              >
                <FaInstagram className="mr-2" /> Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/opensource-programming-club-vitc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg flex items-center justify-center sm:justify-start hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="w-full sm:w-2/5 flex flex-col items-center">
            <p className="text-xl sm:text-2xl mb-6">What are you waiting for?</p>
            <GlowButton onClick={handleRegisterClick}>Register Now</GlowButton>

          </div>
        </div>
      </footer>
      <div className="bg-black/90 text-white border-t border-white/30 w-full p-4 z-10">
        <p className="text-center font-bold">© 2025 OSPC X IEEE RAS - VIT CHENNAI</p>
      </div>
    </div>
  );
}
