import LandingPage from "@/components/LandingPage";
import { IBM_Plex_Mono } from 'next/font/google'


const roboto = IBM_Plex_Mono({
    weight: '400',
    subsets: ['latin'],
  })
export default function Home() {
  return (
    <div className={roboto.className}>
      <LandingPage/>
    </div>
  );
}

