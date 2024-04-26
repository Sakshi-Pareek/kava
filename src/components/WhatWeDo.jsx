import Image from "next/image";
import { Agency, Company } from "./Icon";
import Commonbtn from "./Commonbtn";

export default function WhatWeDo() {
  return (
    <>
      <div className="max-w-[1920px] mx-auto">
        <div className="container 2xl:max-w-[1548px] lg:max-w-[1202px] 2xl:ml-auto mx-auto px-3 2xl:mr-3 xl:py-32 lg:py-20 sm:py-16 py-12">
          <div className="flex flex-wrap-reverse justify-between items-center max-lg:gap-8">
            <div className="lg:w-[39%] max-lg:flex flex-col justify-center items-center">
              <h3 className="xl:text-textxxl lg:text-textlg sm:text-textmd text-textxmd text-black01 font-semibold leading-[121%] sm:mb-7 mb-4">
                What we do
              </h3>
              <h4 className="font-medium sm:text-textxmd text-textxsm text-textblue leading-[125%] flex items-center gap-4 xl:mb-5 mb-3">
                <Agency /> We're a Full-Service Agency
              </h4>
              <p className="font-normal sm:text-textsm text-textxsm text-lightgrey leading-[177%] max-lg:text-center">
                We craft digital experiences that bring strategic value. From
                simple apps to out-of-the-box, custom software, our team can
                help. Our solutions have an intelligent client interface that
                provides insight and allows for content manipulation.{" "}
              </p>
              <h4 className="font-medium sm:text-textxmd text-textxsm text-textblue leading-[125%] flex items-center gap-4 xl:my-5 my-3 xl:pt-1">
                <Company />
                We're a 100% Remote Company
              </h4>
              <p className="font-normal sm:text-textsm text-textxsm text-lightgrey leading-[177%] xl:mb-12 mb-3 max-lg:text-center">
                Talent isn't restricted to borders. Our team is dispersed
                throughout the US.
              </p>
              <Commonbtn btnname="Contact Us" />
            </div>
            <div className="lg:w-[59.5%]">
              <Image
                src="/assets/images/png/whatwedo.png"
                alt="what we do images"
                width={903}
                height={674}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
