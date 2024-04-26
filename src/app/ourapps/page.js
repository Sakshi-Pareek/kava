import Footer from "@/components/Footer";
import HeroHeading from "@/components/HeroHeading";
import NavBar from "@/components/NavBar";
import NextStep from "@/components/NextStep";
import OurTrusted from "@/components/OurTrusted";

export default function ourapps() {
    return (
        <>
            <NavBar />
            <HeroHeading heading="What we have solutions on" subheading="this platform" />
            <OurTrusted />
            <NextStep />
            <Footer />
        </>
    );

}