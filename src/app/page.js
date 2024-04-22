import NavBar from "@/components/NavBar";
import OurHome from "@/components/OurHome";
import OurTrusted from "@/components/OurTrusted";
import { Poppins } from "next/font/google";

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
    </main>
  );
}
