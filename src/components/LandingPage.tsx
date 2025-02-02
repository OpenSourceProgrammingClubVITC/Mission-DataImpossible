/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head';
import { IBM_Plex_Mono } from 'next/font/google';
import  Timeline  from './Timeline';

const roboto = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function LandingPage() {
  return (
    <div className={`min-h-screen bg-[#000012] relative overflow-hidden flex flex-col ${roboto.className}`}>
      <Head>
        <title>Mission: Data Impossible</title>
        <meta name="description" content="6 hr AI/ML data set event" />
      </Head>

      {/* Stars Background */}
      <div
        className="fixed w-full h-full z-10"
        style={{
          background:
            'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 160px 120px, #fff, rgba(0,0,0,0))',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      ></div>

      {/* Navbar */}
      <nav className="bg-[#000012] py-5 px-4 sm:px-4 absolute w-full top-[-15px] z-20 border-t border-b border-white my-4 si">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm sm:text-2xl font-semibold bg-gradient-to-b from-[#FF1B1B] to-[#5361FF] bg-clip-text text-transparent">
            Mission: Data Impossible
          </div>
          <div className="flex gap-3 sm:gap-5">
            <button className="px-3 py-1 sm:px-5 sm:py-2 border-2 border-[rgba(255,77,140,0.3)] rounded-lg bg-transparent text-white hover:border-[rgba(255,77,140,0.6)] hover:shadow-[0_0_15px_rgba(255,77,140,0.4)] transition-all text-xs sm:text-base">
              Register Now
            </button>
            <button className="px-3 py-1 sm:px-5 sm:py-2 border-2 border-[rgba(255,77,140,0.3)] rounded-lg bg-transparent text-white hover:border-[rgba(255,77,140,0.6)] hover:shadow-[0_0_15px_rgba(255,77,140,0.4)] transition-all text-xs sm:text-base">
              Start Mission
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto flex-grow flex flex-col justify-center items-center px-4">
        <div className="text-center pt-[15vh] sm:pt-[25vh] mb-[5.5vh]">
          <h1 className="text-6xl sm:text-[100px] bg-gradient-to-b from-[#FF1B1B] to-[#5361FF] bg-clip-text text-transparent mb-2">
            Mission
          </h1>
          <h2 className="text-4xl sm:text-6xl text-white mb-8 tracking-wider">Data Impossible</h2>
          <p className="text-xl sm:text-2xl text-white opacity-90 mb-10">6 hr AI/ML data set event</p>
          <div className="flex justify-center items-center gap-5 mt-8">
            <img src="/ras.png" alt="RAS Logo" className="w-8 h-8 sm:w-12 sm:h-12" />
            <span className="text-white text-xl sm:text-2xl opacity-80">X</span>
            <img src="/ospc.png" alt="OSPC Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="z-10 text-center py-8 bg-[#180321] bg-opacity-70 relative shadow-[0px_-12px_100.6px_#CE1FA3] px-4 rounded-t-[40%]"

      >
        <h1 className="text-4xl sm:text-6xl font-semibold text-white mb-12 text-shadow-[0_0_10px_rgba(255,255,255,0.3)] pt-12">
          Prize Pool: ₹5,000
        </h1>
        <div className="flex flex-col sm:flex-row justify-evenly items-center px-5 mb-6 text-white">
          <div className="text-center sm:text-left text-xl sm:text-2xl mb-6 sm:mb-0">
            <p>📅 4/2/25</p>
            <p>🕐 9am - 6pm</p>
          </div>
          <div className="w-[15rem] sm:w-[2px] h-[2px] sm:h-[15rem] bg-white my-6 sm:my-0 sm:mx-5"></div>
          <div className="text-center text-xl sm:text-2xl mb-6 sm:mb-0">
            <p>Team of 1: ₹100</p>
            <p>Team of 2: ₹180</p>
            <p>Team of 3: ₹260</p>
            <button className="mt-4 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-b from-[#917DFF] to-[#9C4BFF] text-white text-xl sm:text-2xl font-bold rounded-full shadow-[0_4px_15px_rgba(128,90,213,0.5)] hover:scale-105 transition-transform">
              Register Now
            </button>
          </div>
          <div className="w-[15rem] sm:w-[2px] h-[2px] sm:h-[15rem] bg-white my-6 sm:my-0 sm:mx-5"></div>
          <div className="text-center sm:text-left text-xl sm:text-2xl">
            <p>📍 kamaraj auditorium</p>
            <p>AB3, VIT Chennai</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className='z-10 flex flex-col items-center w-full'>
        <h1 className="text-4xl sm:text-6xl font-semibold text-white mb-12 text-shadow-[0_0_10px_rgba(255,255,255,0.3)] pt-12">
          TIMELINE
        </h1>
        <Timeline />
      </div>

      {/* Sponser */}
      <div className='z-10 flex flex-col justify-center items-center my-12 p-4'>
        <h1 className="text-4xl sm:text-6xl font-semibold text-white mb-12 text-shadow-[0_0_10px_rgba(255,255,255,0.3)] pt-12">SPONSOR</h1>
        <div className='mx-8 border-white border-4 rounded-2xl'>
          <img src="/logo_light.png" alt="Channelise" className='w-[200px] h-[90px] sm:w-[300px] sm:h-[120px] p-4 left-8' />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4 sm:px-8 flex flex-col items-center z-10 bg-opacity-70">
        <div className="w-full flex flex-col sm:flex-row justify-between mb-6 ">
          <div className="w-full sm:w-1/2 flex flex-col sm:flex-row justify-around mb-6 sm:mb-0">
            <div className="text-center sm:text-left mb-6 sm:mb-0">
              <p className="text-2xl sm:text-3xl mb-4">IEEE RAS</p>
              <a href="/" className="text-lg block mb-2">
                ☑ Instagram
              </a>
              <a href="/" className="text-lg block">
                ☑ LinkedIn
              </a>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl mb-4">OSPC VITC</p>
              <a href="/" className="text-lg block mb-2">
                ☑ Instagram
              </a>
              <a href="/" className="text-lg block">
                ☑ LinkedIn
              </a>
            </div>
          </div>
          <div className="w-full sm:w-2/5 flex flex-col items-center">
            <p className="text-xl sm:text-2xl mb-6">What are you waiting for?</p>
            <button className="px-5 py-2 border-2 border-[rgba(255,77,140,0.3)] rounded-lg bg-transparent text-white hover:border-[rgba(255,77,140,0.6)] hover:shadow-[0_0_15px_rgba(255,77,140,0.4)] transition-all">
              Register Now
            </button>
          </div>
        </div>
      </footer>
      <div className=' bg-black text-white border-t border-white w-full p-4 w-full z-10'>
        <p className="text-center font-bold bg">© 2025 OSPC X IEEE RAS - VIT CHENNAI</p>
      </div>

    </div>
  );
}