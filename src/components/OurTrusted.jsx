"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTrusted = () => {
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
      image: "/assets/images/png/slide6.png",
    },
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
    <div className="container lg:max-w-[1164px] px-3 mx-auto xl:pt-24 xl:mt-1 xl:pb-32 xl:mb-3 lg:py-20 sm:py-16 py-12">
      <h2 className="font-medium sm:text-textmd text-textxmd leading-[141%] text-center text-black02 md:mb-11 pb-6">
        Our Trusted Partners
      </h2>
      <Slider className="outline-none" {...settings}>
        {data.map((a, index) => (
          <div key={index}>
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
  );
};

export default OurTrusted;
