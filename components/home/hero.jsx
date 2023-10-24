"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import heroOne from "../../public/hero_1.png";
import heroTwo from "../../public/hero_2.png";
import heroThree from "../../public/hero_3.png";
import heroFour from "../../public/hero_4.png";
import heroFive from "../../public/hero_5.png";

const items = [
  {
    title: "Trusted logistics service provider.",
    description:
      "We offer doorstep delivery not only to all states within Nigeria but also to over 250 countries worldwide.",
    image: heroOne,
  },
  {
    title: "International Shipping",
    description: "Get a US & UK address",
    image: heroTwo,
  },
  {
    title: "Air & ocean freight.",
    description:
      "Get real time air and ocean freight rates for over 200 countries. Make a booking in few minutes.",
    image: heroThree,
  },
  {
    title: "Supply chain Management",
    description:
      "We will take care of your entire supply chain from freight forwarding/clearing and warehousing to transport logistics.",
    image: heroFour,
  },
  {
    title: "Courier",
    description:
      "Ship doorstep to over 200 countries and 36 states in Nigeria.",
    image: heroFive,
  },
];

const CustomCarousel = styled.div`
  @media (min-width: 650px) {
    background-image: url(${(props) => props.imageurl});
  }
`;

const Hero = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={true}
        showThumbs={true}
        interval={2000}
        animationHandler="slide"
        showArrows={true}
        emulateTouch={true}
        className="hidden md:flex pt16 md: pt-[3rem] -z-10 bg-fadeOrange"
        showIndicators={true}
        useKeyboardArrows={false}
        // id={`${id} home`}
      >
        {items.map((item) => (
          <CustomCarousel
            key={item.title}
            className="w-full lg:px-20 xl:px-[100px] bgfadeOrange justify-start items-center  md:bg-no-repeat md:bg-cover md:w-auto h-[80vh] lg:h-[85vh] 2xl:h-full"
            imageurl={item.image}
          >
            <div
              id="track"
              className="font-bold flex flex-col md:gap-[2rem] lg:gap-[12rem] 2xl:py-14"
            >
              <div className="pt-[3rem] lg:pt-[6rem] px-4 lg:gap-8">
                <div className={`text-blue lg:w-2/3 ${item.className || ""}`}>
                  <span
                    className={`text-[40px] leading-tight 2xl:pt-2 w-[80%] sm:text-left sm:flex sm:flex-col font-poppins  md:text-[48px] 2xl:text-[82px] drop-shadow-xl `}
                  >
                    {item.title}
                  </span>
                  <p
                    className={`text-center md:text-left md:w-1/2 pb-12 lg:pb-20 drop-shadow-xl text-xl ${
                      item.className || "text-blue"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center pb-4 sm:block">
                  <div className="flex items-center mt-4 ">
                    <input
                      id="trackingId"
                      type="text"
                      className="outline-none uppercase md:px-3 placeholder:w-fit md:py-4 md:text-2xl rounded-l-lg placeholder:font-normal placeholder:font-poppins md:placeholder:text-lg placeholder:leading-none shadow-xl"
                      placeholder="Input tracking ID"
                      autoComplete="off"
                    />

                    <button className="bg-orange text-white p-2 md:px-[18px] md:py-[14px] md:border-[3px] border-orange md:text-2xl rounded-r-lg font-medium font-poppins hover:bg-fadeOrange hover:text-orange shadow-xl outline-none">
                      Track
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CustomCarousel>
        ))}
      </Carousel>
    </>
  );
};

export default Hero;

{
  /* <main className="relativ bg-red-500 flex h-[calc(100vh-70px)] w-screen flex-col justify-center items-center ">
        <div className="absolte w-full h-full">
          <Image
            className="w-full h-full object-cover object-center"
            sizes="100vw"
            fill
            alt="Image"
            width={800}
            height={400}
            src="../../public/hero_1.png"
            // src={`../../public/hero_${page}.png`}
          />
          <div className="absolut inset-0">
            <h2>Beautiful</h2>
          </div>
        </div>
      </main> */
}

{
  /*  */
}
