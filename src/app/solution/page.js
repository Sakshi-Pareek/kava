import Footer from "@/components/Footer";
import HeroHeading from "@/components/HeroHeading";
import NavBar from "@/components/NavBar";
import NextStep from "@/components/NextStep";
import OurTrusted from "@/components/OurTrusted";

export default function solution() {
  return (<>
    <NavBar />
    <HeroHeading heading="Building Reliable Solutions for"/>
        <OurTrusted />
        <NextStep />
        <Footer />
    </>);
}