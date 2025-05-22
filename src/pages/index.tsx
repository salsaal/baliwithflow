import Image from "next/image";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import HomeLayout from "@/layout/HomepageLayout";
import HeroSection from "@/components/Homepage/HeroSection";
import Experience from "@/components/Homepage/Experience";
import About from "@/components/Homepage/About";
import YouMayAlsoLike from "@/components/Homepage/YouMayAlsoLike";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <HomeLayout>
      <HeroSection />
      <Experience />
      <About />
      <YouMayAlsoLike />
    </HomeLayout>
  );
}
