import Image from "next/image";
import Commonbtn from "./Commonbtn";
import { Arrow } from "./Icon";

export default function OurHome() {
  return (
    <>
      <div className="max-w-[1780px] mx-auto bg-bgpink xl:rounded-radiusmd lg:pt-10 2xl:pb-0 lg:pb-10 sm:py-12 py-10 xl:mt-5" id="home">
        <div className="container 2xl:max-w-[1460px] lg:max-w-[1202px] px-3 2xl:ml-auto 2xl:mr-10 mx-auto">
          <div className="flex flex-wrap-reverse items-center max-lg:gap-5">
            <div className="lg:w-[48%] max-lg:flex flex-col justify-center items-center">
              <h1 className="xl:text-textxxxl lg:text-textxl sm:text-textlg text-textmd font-semibold text-black01 md:mb-12 mb-5 leading-[125%] max-lg:text-center">
                Custom <span className="text-pink">software development</span>{" "}
                from concept to completion accelerate growth through interactive
                app development
              </h1>
              <div className="flex max-sm:flex-col sm:gap-8 gap-5 max-lg:justify-center">
                <Commonbtn btnname="Start Now"></Commonbtn>
                <button className="text-textsm text-black01 font-medium leading-[125%] flex items-center gap-4 group">
                  Try it for free <Arrow />
                </button>
              </div>
            </div>
            <div className="lg:w-[52%] w-[60%] max-lg:mx-auto">
              <Image
                src="/assets/images/png/mobiles.png"
                alt="mobiles"
                width={734}
                height={758}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
