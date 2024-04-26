import NavBar from "@/components/NavBar";
import OurHome from "@/components/OurHome";
import OurProcess from "@/components/OurProcess";
import OurTrusted from "@/components/OurTrusted";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import Help from "@/components/Help";
import { Poppins } from "next/font/google";
import NextStep from "@/components/NextStep";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function Home() {
  return (
    <main className={` ${poppins.className} overflow-hidden`}>
      <NavBar />
      <OurHome />
      <OurTrusted />
      <WhoWeAre />
      <WhatWeDo />
      <OurProcess />
      <Help />
      <NextStep />
      <Footer />
    </main>
  );
}
