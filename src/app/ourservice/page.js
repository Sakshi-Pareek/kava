import Footer from "@/components/Footer";
import HeroHeading from "@/components/HeroHeading";
import NavBar from "@/components/NavBar";
import NextStep from "@/components/NextStep";
import OurTrusted from "@/components/OurTrusted";

export default function ourservice() {
    return (
        <>
            <NavBar />
            <HeroHeading heading="Services what we provide"/>
            <OurTrusted />
            <NextStep />
            <Footer />
        </>
    );
}