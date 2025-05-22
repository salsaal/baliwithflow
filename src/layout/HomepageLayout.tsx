import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import { Montserrat } from "next/font/google";
import React from "react";
// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });
function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
