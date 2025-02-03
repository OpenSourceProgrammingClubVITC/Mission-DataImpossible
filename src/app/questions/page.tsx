"use client";
import Head from 'next/head';
import { IBM_Plex_Mono } from 'next/font/google';
import Link from 'next/link';

const roboto = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function LandingPage() {
  return (
    <div className={`min-h-screen bg-[#000012] relative overflow-hidden flex flex-col ${roboto.className}`}>
      <Head>
        <title>Mission: Data Impossible</title>
        <meta name="description" content="AI/ML Data Challenge" />
      </Head>

      {/* Animated Stars Background */}
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
      {/* Main Content */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className="max-w-2xl space-y-8">
          <h1 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent tracking-wide">
           Start Mission 
          </h1>
          
          <p className="text-red-500 text-lg sm:text-xl font-medium tracking-wider uppercase">
             🚀 Data Impossible 🚀
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/questions/1" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold tracking-wide text-lg
              hover:from-blue-600 hover:to-purple-700 transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30">
              Start Challenge
            </Link>
            
          
          </div>
        </div>
      </main>
    </div>
  );
}