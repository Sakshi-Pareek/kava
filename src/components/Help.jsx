import Image from "next/image";
import { Android, ComplexWeb, Design, Mobile, PhotoTyping } from "./Icon";
import Commonbtn from "./Commonbtn";

export default function help() {
  return (
    <>
      <div className="container xl:max-w-[1276px] lg:max-w-[1202px] px-3 mx-auto xl:py-32 lg:py-20 sm:py-16 py-12 xl:my-3">
        <div className="flex flex-wrap justify-between items-center">
          <div className="lg:w-[48%] max-lg:mx-auto">
            <Image
              src="/assets/images/png/helpimage.png"
              alt="app images"
              width={577}
              height={590}
              className="object-cover xl:max-h-[578px] h-full"
            />
          </div>
          <div className="xl:w-[45%] lg:w-[50%] max-lg:text-center">
            <h3 className="xl:text-textxxl lg:text-textlg sm:text-textmd text-textxmd text-black01 font-semibold leading-[121%]">
              How we can help
            </h3>
            <h4 className="lg:text-textmd sm:text-textxmd text-textsm text-black01 font-semibold xl:my-5 my-3 leading-[133%]">
              We Build Scalable Solutions
            </h4>
            <div className="max-lg:flex justify-center items-cente r">
              <ul className="flex flex-col gap-3 xl:mb-7 mb-3">
                <li className="flex items-center sm:gap-4 gap-2 font-normal sm:text-textsm text-sm text-lightgrey leading-[177%]">
                  {" "}
                  <Mobile /> Web & mobile application services
                </li>
                <li className="flex items-center sm:gap-4 gap-2 font-normal sm:text-textsm text-sm text-lightgrey leading-[177%]">
                  {" "}
                  <PhotoTyping /> Prototyping
                </li>
                <li className="flex items-center sm:gap-4 gap-2 font-normal sm:text-textsm text-sm text-lightgrey leading-[177%]">
                  {" "}
                  <Design /> UI/UX design
                </li>
                <li className="flex items-center sm:gap-4 gap-2 font-normal sm:text-textsm text-sm text-lightgrey leading-[177%]">
                  {" "}
                  <Android />
                  Android / iOS mobile development
                </li>
                <li className="flex items-center sm:gap-4 gap-2 font-normal sm:text-textsm text-sm text-lightgrey leading-[177%] text-start">
                  {" "}
                  <ComplexWeb />
                  Complex web backend and frontend projects.
                </li>
              </ul>
            </div>
            <p className="font-medium sm:text-textxmd text-textxsm text-textblue leading-[160%] xl:mb-5 mb-3">
              Need more help? We also provide database management, cloud
              services, and CI/CD
            </p>
            <Commonbtn btnname="Contact Now"></Commonbtn>
          </div>
        </div>
      </div>
    </>
  );
}
