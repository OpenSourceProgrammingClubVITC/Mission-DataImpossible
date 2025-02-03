"use client";
import { SignIn } from '@clerk/nextjs';
import { IBM_Plex_Mono } from 'next/font/google';

const roboto = IBM_Plex_Mono({
  weight: '300',
  subsets: ['latin'],
});

export default function SignInPage() {
  return (
    <div className={`min-h-screen bg-[#000012] relative overflow-hidden flex flex-col ${roboto.className}`}>
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

      {/* Main Content Container */}
      <main className="relative z-20 flex flex-col min-h-screen">
        {/* Content Wrapper */}
        <div className="flex-grow flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md space-y-8">
            {/* Header Section */}
            <div className="text-center space-y-4">
              <h1 className="text-6xl sm:text-[80px] bg-gradient-to-r from-[#FF1B1B] via-[#FF758C] to-[#5361FF] bg-clip-text text-transparent ">
                Mission
              </h1>
              <h2 className="text-4x1 sm:text-4xl text-white tracking-wider animate-glow ">
                Data Impossible
              </h2>
            </div>
            
            {/* Sign In Container */}
            <div className="flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-xl space-y-6 mx-auto">
  <h3 className="text-2xl text-black font-semibold">OSPC X IEEE RAS</h3>
    <SignIn
      appearance={{
        elements: {
          headerTitle: "hidden",
          headerSubtitle: "hidden",
        },
      }}
    />
</div>

          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/90 text-white border-t border-white/30 w-full p-4 z-20">
          <p className="text-center font-bold">© 2025 OSPC X IEEE RAS - VIT CHENNAI</p>
        </footer>
      </main>
    </div>
  );
}