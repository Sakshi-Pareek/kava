import Image from "next/image";
import Commonbtn from "./Commonbtn";

export default function WhoWeAre() {
  return (
    <>
      <div className="container 2xl:max-w-[1342px] lg:max-w-[1202px] px-3 2xl:ml-[150px] mx-auto">
        <div className="flex flex-wrap justify-between items-center max-lg:gap-5">
          <div className="lg:w-[51%] w-[80%] max-lg:mx-auto">
            <Image
              src="/assets/images/png/whoweare.png"
              alt="who we are"
              width={653}
              height={490}
            />
          </div>
          <div className="lg:w-[44.7%] max-lg:flex flex-col justify-center items-center">
            <h3 className="xl:text-textxxl lg:text-textlg sm:text-textmd text-textxmd text-black01 font-semibold leading-[121%]">
              Who we are{" "}
            </h3>
            <p
             className="font-normal sm:text-textsm text-textxsm text-lightgrey leading-[178%] lg:my-6 my-4 lg:py-1.5 max-lg:text-center">
              Kava Up, LLC is a US-based digital creative studio delivering
              ROI-focused web and mobile app development. We've helped startups,
              small businesses, enterprises, and everyone in between build and
              scale with our client-focused development approach.{" "}
            </p>
            <div className="xl:pt-4">
              {" "}
              <Commonbtn btnname="Contact Us"></Commonbtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
