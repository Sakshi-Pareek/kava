import Image from "next/image";
import Commonbtn from "./Commonbtn";

export default function Webapp() {
  return (
    <>
      <div className="container mx-auto px-3 lg:max-w-[1202px]">
        <div className="flex flex-wrap-reverse lg:justify-between max-lg:gap-8 justify-center">
          <div className="xl:w-[41%] lg:w-[47%] max-lg:text-center">
            <h3 className="xl:text-textxl lg:text-textlg sm:text-textmd text-textxmd text-black01 font-semibold leading-[127%] xl:mb-6 mb-3">
              Web Apps
            </h3>
            <h4 className="font-medium sm:text-textxmd text-textxsm text-textblue leading-[125%] xl:mb-4 mb-3">
              Custom Web App Development
            </h4>
            <p className="font-normal sm:text-textsm text-textxsm text-lightgrey leading-[177%] xl:mb-6 mb-3">
              Do you want to enhance your website with a custom web application?
              We can help.
            </p>
            <h4 className="font-medium sm:text-textxmd text-textxsm text-textblue leading-[125%] xl:mb-4 mb-3">
              Custom Web Apps Solve Unique Business Needs
            </h4>
            <p className="font-normal sm:text-textsm text-textxsm text-lightgrey leading-[177%] xl:mb-6 mb-3 xl:pb-1.5">
              We analyze your unique needs and build powerful, practical web
              applications that make your life easier. From customer portals to
              key integrations with third-party vendors and beyond, our custom
              web application development solves problems.
            </p>
            <Commonbtn btnname="Read More"></Commonbtn>
          </div>
          <div className="2xl:w-[59%] xl:w-[55%] lg:w-1/2 w-[80%] 2xl:translate-x-32 xl:translate-x-8">
            <Image src="/assets/images/png/nft.png" width={697} height={531} className="rounded-radiusmd"/>
          </div>
        </div>
      </div>
    </>
  );
}
