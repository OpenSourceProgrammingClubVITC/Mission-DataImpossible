"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { IBM_Plex_Mono } from 'next/font/google';
import Link from 'next/link';
import { Check, Trophy, Home } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";

const roboto = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function SuccessPage() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLeadDialogOpen, setIsLeadDialogOpen] = useState(false);

  const leads = [
    {
      name: "Hariprasaadh",
      phone: "+91 93428 56540"
    },
    {
      name: "Dhilip",
      phone: "+91 91500 23389"
    },
  ];

  useEffect(() => {
    // Trigger confetti effect
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    setIsLeadDialogOpen(true);
  };

  return (
    <div className={`min-h-screen bg-[#000012] relative overflow-hidden flex flex-col items-center justify-center text-white ${roboto.className}`}>
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

      {/* Confetti Effect (Simulated) */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                top: '-10%', 
                left: `${Math.random() * 100}%`,
                rotate: Math.random() * 360 
              }}
              animate={{ 
                top: '120%', 
                left: `${Math.random() * 100}%`,
                rotate: Math.random() * 360 
              }}
              transition={{ 
                duration: 3, 
                delay: Math.random() * 2,
                ease: "linear" 
              }}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: ['#FF1B1B', '#FF758C', '#5361FF', '#917DFF'][Math.floor(Math.random() * 4)]
              }}
            />
          ))}
        </div>
      )}

      {/* Lead Contact Dialog */}
      <Dialog open={isLeadDialogOpen} onOpenChange={setIsLeadDialogOpen}>
        <DialogContent className="bg-[#000012] border-2 border-[rgba(255,77,140,0.3)] text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-[#FF1B1B] via-[#FF758C] to-[#5361FF] bg-clip-text text-transparent">
              Contact Leads
            </DialogTitle>
            
          </DialogHeader>
          <div className="space-y-4">
            {leads.map((lead, index) => (
              <div 
                key={index} 
                className="bg-[rgba(255,77,140,0.1)] border border-[rgba(255,77,140,0.3)] rounded-lg p-4"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#FF758C]">
                  {lead.name}
                </h3>
                <div className="flex items-center text-white">
                  <span className="mr-2">📞</span>
                  {lead.phone}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-20 p-8 bg-[rgba(0,0,0,0.5)] rounded-2xl border-2 border-[rgba(255,77,140,0.3)] max-w-md w-full"
      >
        <Trophy 
          className="mx-auto mb-6 text-[#FF758C]" 
          size={100} 
          strokeWidth={1.5} 
        />
        <h1 className="text-4xl sm:text-5xl bg-gradient-to-r from-[#FF1B1B] via-[#FF758C] to-[#5361FF] bg-clip-text text-transparent font-bold mb-4">
          Mission Accomplished!
        </h1>
        <p className="text-xl text-white/80 mb-8">
          Congratulations on cracking the challenge! Your data detective skills are impressive.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button 
            onClick={handleContinue}
            className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#ffb5b4]  to-[#ffebc7] 
            text-black rounded-full hover:scale-105 transition-transform"
          >
            🚀Collect Dataset🚀
          </button>

          <Link 
            href="/"
            className="flex items-center justify-center px-6 py-3 border-2 border-[rgba(255,77,140,0.3)] 
            text-white rounded-full hover:border-[rgba(255,77,140,0.6)] hover:bg-[rgba(255,77,140,0.1)] 
            transition-all hover:scale-105"
          >
            <Home className="mr-2" /> Home
          </Link>
        </div>

        <p className="text-sm text-white/50">
          © 2025 OSPC X IEEE RAS - VIT CHENNAI
        </p>
      </motion.div>
    </div>
  );
}