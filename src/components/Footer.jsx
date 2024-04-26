import Link from "next/link";
import {
  Sendbtn,
  Fbicon,
  Instagram,
  Twitter,
  Youtube,
  FooterLogo,
} from "./Icon";

export default function Footer() {
  const Dates = new Date();
  const year = Dates.getFullYear();
  const socialicon = [
    {
      icon: <Fbicon />,
      href: "https://www.facebook.com/",
    },
    {
      icon: <Youtube />,
      href: "https://www.youtube.com/",
    },
    {
      icon: <Twitter />,
      href: "https://www.twitter.com/",
    },
    {
      icon: <Instagram />,
      href: "https://www.instagram.com/",
    },
  ];
  return (
    <>
      <div
        className="container lg:max-w-[1218px] px-3 mx-auto xl:pt-[130px] lg:pt-20 sm:pt-16 pt-12"
        id="contact"
      >
        <div className="flex flex-wrap justify-between max-lg:gap-8 xl:pb-12 md:pb-8 pb-5 border-b-[0.5px] border-solid border-[#a9abaf8]">
          <div className="xl:w-[12%] lg:w-[14%] sm:w-[18%] w-[40%] max-lg:order-2">
            <h6 className="font-semibold md:text-textmd sm:text-textxmd text-textsm text-black01 leading-[100%] lg:mb-5 mb-3">
              Company
            </h6>
            <div className="flex flex-col md:gap-1.5">
              <Link
                href={"/"}
                className="font-normal sm:text-textsm text-textxsm text-black03 hover:text-black transition-all duration-500 ease-in-out leading-[200%]"
              >
                <span className="after:w-0 after:h-[2px] after:bg-black after:absolute relative after:left-0 after:bottom-[0px] hover:after:w-full after:duration-500 after:ease-in-out">
                  Home
                </span>
              </Link>
              <Link
                href={"/"}
                className="font-normal sm:text-textsm text-textxsm text-black03 hover:text-black transition-all duration-500 ease-linear leading-[200%]"
              >
                <span className="after:w-0 after:h-[2px] after:bg-black after:absolute relative after:left-0 after:bottom-[0px] hover:after:w-full after:duration-500 after:ease-in-out">
                  Solutions
                </span>
              </Link>
              <Link
                href={"/"}
                className="font-normal sm:text-textsm text-textxsm text-black03 hover:text-black transition-all duration-500 ease-linear leading-[200%]"
              >
                <span className="after:w-0 after:h-[2px] after:bg-black after:absolute relative after:left-0 after:bottom-[0px] hover:after:w-full after:duration-500 after:ease-in-out">
                  App
                </span>
              </Link>
              <Link
                href={"/"}
                className="font-normal sm:text-textsm text-textxsm text-black03 hover:text-black transition-all duration-500 ease-linear leading-[200%]"
              >
                <span className="after:w-0 after:h-[2px] after:bg-black after:absolute relative after:left-0 after:bottom-[0px] hover:after:w-full after:duration-500 after:ease-in-out">
                  Services
                </span>
              </Link>
            </div>
          </div>
          <div className="xl:w-[16%] lg:w-[20%] sm:w-[30%] w-[50%] max-lg:order-3">
            <h6 className="font-semibold md:text-textmd sm:text-textxmd text-textsm text-black01 leading-[100%] lg:mb-5 mb-3">
              Product
            </h6>
            <div className="flex flex-col md:gap-1.5">
              <Link
                href={"/"}
                className="font-normal sm:text-textsm text-textxsm text-black03 hover:text-black transition-all duration-500 ease-linear leading-[200%]"
              >
                <span className="after:w-0 after:h-[2px] after:bg-black after:absolute relative after:left-0 after:bottom-[0px] hover:after:w-full after:duration-500 after:ease-in-out">
                  Web apps
                </span>
              </Link>
              <Link
                href={"/"}
                className="font-normal sm:text-textsm text-textxsm text-black03 hover:text-black transition-all duration-500 ease-linear leading-[200%]"
              >
                <span className="after:w-0 after:h-[2px] after:bg-black after:absolute relative after:left-0 after:bottom-[0px] hover:after:w-full after:duration-500 after:ease-in-out">
                  Mobile apps
                </span>
              </Link>
              <Link
                href={"/"}
                className="font-normal sm:text-textsm text-textxsm text-black03 hover:text-black transition-all duration-500 ease-linear leading-[200%]"
              >
                {" "}
                <span className="after:w-0 after:h-[2px] after:bg-black after:absolute relative after:left-0 after:bottom-[0px] hover:after:w-full after:duration-500 after:ease-in-out">
                  Mac & desktop apps
                </span>
              </Link>
            </div>
          </div>
          <div className="xl:w-[20%] lg:w-[22%] md:w-[30%] sm:w-[35%] w-full max-lg:order-4">
            <h6 className="font-semibold md:text-textmd sm:text-textxmd text-textsm text-black01 leading-[100%] lg:mb-5 mb-3">
              Contact
            </h6>
            <div className="flex flex-col md:gap-1.5">
              <Link
                href={"mailto:info@kava.com"}
                className="font-normal sm:text-textsm text-textxsm text-black03 hover:text-black transition-all duration-500 ease-linear leading-[200%]"
              >
                info@kava.com
              </Link>
              <Link
                href={
                  "https://www.google.com/maps/@29.2904069,76.0389249,8z?entry=ttu"
                }
                className="font-normal sm:text-textsm text-textxsm text-black03 hover:text-black transition-all duration-500 ease-linear leading-[200%]"
              >
                1234, Lorem ipsum dolor sit amet, consectetuer.
              </Link>
            </div>
          </div>
          <div className="xl:w-[20%] lg:w-[24%] w-full max-lg:order-1">
            <h6 className="font-semibold md:text-textmd sm:text-textxmd text-textsm text-black01 leading-[100%] lg:mb-5 mb-3">
              Get in touch
            </h6>
            <div className="bg-bgsky ps-5 lg:py-1 py-2 lg:pe-1 pe-2 rounded-radiussm flex justify-between items-center lg:max-w-[234px] w-full">
              <input
                placeholder="Your email address"
                type="email"
                className="font-normal text-textxs leading-[240%] text-grey placeholder:text-grey bg-transparent"
              />
              <Sendbtn />
            </div>
            <div className="flex items-center gap-4 lg:mt-16 mt-5">
              {socialicon.map((a) => (
                <a href={a.href} target="_blank" rel="noopener noreferrer">
                  {a.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex max-sm:flex-col justify-between items-center gap-4 py-4 lg:mb-4">
          <Link href={"/"}>
            <FooterLogo />
          </Link>
          <p className="font-normal sm:text-textsm text-xsm leading-[160%] text-grey">
            Copyright© {year} kava up, LLC
          </p>
        </div>
      </div>
    </>
  );
}
