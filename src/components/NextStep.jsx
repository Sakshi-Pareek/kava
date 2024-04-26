import Image from "next/image";
import Commonbtn from "./Commonbtn";

export default function NextStep() {
  return (
    <>
     <div className="max-lg:bg-bgpink">
     <div className="container px-3 lg:max-w-[1194px] mx-auto bg-bgpink xl:pt-1.5">
        <div className="flex flex-wrap max-lg:gap-8 justify-evenly xl:pt-14 lg:pb-0 lg:pt-20 sm:py-16 py-12">
          <div className="lg:w-[27%]">
            <Image
              src="/assets/images/png/mobile.png"
              width={315}
              height={415}
            />
          </div>
          <div className="lg:w-[45%] lg:pt-5 max-lg:text-center">
            <h3 className="xl:text-textxl lg:text-textlg sm:text-textmd text-textxmd text-black01 font-semibold leading-[127%] xl:mb-7 mb-4">
              Take the Next Step in Your Digital Transformation
            </h3>
            <p className="sm:text-textsm text-textxsm font-normal xl:leading-[200%] leading-[150%] text-black01 lg:mb-4 mb-3">
              Concentrate on your brand, business, or project while we handle
              the software development.
            </p>
            <p className="sm:text-textsm text-textxsm font-normal xl:leading-[200%] leading-[150%] text-textblue xl:mb-6 mb-4 xl:pb-1.5">
              Get in touch with Kava Up to learn more!
            </p>
            <Commonbtn btnname="Contact Us"/>
          </div>
        </div>
      </div>
     </div>
    </>
  );
}
