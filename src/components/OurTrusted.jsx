"use Client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurTrusted() {
  const data = [
    {
      image: "/assets/images/png/slide1.png",
    },
    {
      image: "/assets/images/png/slide2.png",
    },
    {
      image: "/assets/images/png/slide3.png",
    },
    {
      image: "/assets/images/png/slide4.png",
    },
    {
      image: "/assets/images/png/slide5.png",
    },
    {
      image: "/assets/images/png/slide6.png"
    }
  ];
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="container lg:max-w-[1164px] px-3 mx-auto py-24 my-1">
        <h2 className="font-mediun text-textmd leading-[125%] text-center text-black02 mb-12">
          Our Trusted Partners
        </h2>
        <Slider
          className="outline-none mb-xl-5"
          {...settings}
        >
          {data.map((a) => (
            <div>
              <Image
                src={a.image}
                alt="cardimg"
                width={190}
                height={33}
                className="object-cover cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
