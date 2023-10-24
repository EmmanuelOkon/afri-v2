"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import heroOne from "../public/hero_1.png";
import heroTwo from "../public/hero_2.png";
import heroThree from "../public/hero_3.png";
import heroFour from "../public/hero_4.png";
import heroFive from "../public/hero_5.png";
import HeroProducts from "@/components/home/products";
import Hero from "@/components/home/hero";

const items = [
  // {
  //   title: "Trusted logistics service provider.",
  //   description:
  //     "We offer doorstep delivery not only to all states within Nigeria but also to over 250 countries worldwide.",
  //   image: heroOne,
  // },
  // {
  //   title: "International Shipping",
  //   description: "Get a US & UK address",
  //   image: heroTwo,
  // },
  // {
  //   title: "Air & ocean freight.",
  //   description:
  //     "Get real time air and ocean freight rates for over 200 countries. Make a booking in few minutes.",
  //   image: heroThree,
  // },
  // {
  //   title: "Supply chain Management",
  //   description:
  //     "We will take care of your entire supply chain from freight forwarding/clearing and warehousing to transport logistics.",
  //   image: heroFour,
  // },
  // {
  //   title: "Courier",
  //   description:
  //     "Ship doorstep to over 200 countries and 36 states in Nigeria.",
  //   image: heroFive,
  // },
];

const Home = () => {
  // const [activeElement, setActiveElement] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let interval = setInterval(() => {
      setPage((prevActiveElement) =>
        prevActiveElement < 4 ? prevActiveElement + 1 : 0
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  console.log(page);

  // const switchActiveElement = (index) => {
  //   setActiveElement(index);
  // };
  // const carouselArr = [
  //   {
  //     img: heroOne,
  //   },
  //   {
  //     img: heroTwo,
  //   },
  //   {
  //     img: heroThree,
  //   },
  //   {
  //     img: heroFour,
  //   },
  //   {
  //     img: heroFive,
  //   },
  // ];
  return (
    <>
      {/* <Hero /> */}
      <main className="relative overflow-hidden z-10 flex h-[calc(100vh-70px)] wscreen flex-col justify-center items-center ">
        <div className="absolute w-full h-full">
          <Image
            className="w-full h-full object-cover object-center overflow-hidden"
            sizes="100vw"
            fill
            alt="Image"
            src={`/hero_${page}.png`}
          />
          <div className="absolute inset-0 flex justify-center items-center ">
            <div className="text-white absolut font-bold text-2xl leading-[0.57px] font-karla text-center mx-auto max-w-2xl py-32 sm:py48 lg:py56">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                Premium, Fresh Produce from the Heart of Africa
              </h1>
              <p className="mt-6 text-lg font-medium leading-8 max-w-xl mx-auto ">
                Explore our diverse selection of farm-fresh agricultural goods,
                sustainably cultivated in the heart of Africa, and experience
                the true essence of quality, taste, and tradition.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 ">
                <a
                  href="#"
                  className="rounded-md bg-green w-[200px] px-[22px] py-[14px] text-sm border border-green font-semibold text-white shadow-sm hover:bg-indigo-500  cursor-pointer"
                >
                  Browse products
                </a>
                <a
                  href="#"
                  className="rounded-md text-sm w-[200px] px-[22px] py-[14px] font-semibold border text-white border-white hover:bg-green hover:bg-opacity-40"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <div
        className={`${
          activeElement === index ? "lg:fle lg:flex-co justify-end " : "hiddn"
        } w-full top20 text-white bg-slate-300 slide relative min-h-[85vh]  max-h-[90vh] hidde  overflow-hidden `}
        key={index}
      >
        <Image
          width={800}
          height={500}
          src={carousel.img}
          alt=""
          className="w-full h-full absolute left-0 top-0 object-cover"
        />
        <div className="w-full justify-center relative inset-0 z30">
          <div className="text-white absolut font-bold text-2xl leading-[0.57px] font-karla text-center mx-auto max-w-2xl py-32 sm:py48 lg:py56">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Premium, Fresh Produce from the Heart of Africa
            </h1>
            <p className="mt-6 text-lg font-medium leading-8 max-w-xl mx-auto ">
              Explore our diverse selection of farm-fresh agricultural goods,
              sustainably cultivated in the heart of Africa, and experience the
              true essence of quality, taste, and tradition.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 z- ">
              <a
                href="#"
                className="rounded-md bg-green px-[22px] py-[14px] text-sm border border-green font-semibold text-white shadow-sm hover:bg-indigo-500  cursor-pointer"
              >
                Browse products
              </a>
              <a
                href="#"
                className="rounded-md text-sm px-[22px] py-[14px] font-semibold border text-white border-white hover:bg-green hover:bg-opacity-40"
              >
                Read more
              </a>
            </div>
          </div>
          <Hero />

          <div className="w-full absolute py-4 flex 2xl:mt-[10%] justify-center items-center gap-2">
            {carouselArr.map((carousel, index) => (
              <div
                className={`h-[6px] ${
                  activeElement === index
                    ? "w-12 bg-green "
                    : "w-6 bg-lightGrey "
                } rounded-lg  transition-transform cursor-pointer`}
                key={index}
                onClick={() => switchActiveElement(index)}
              ></div>
            ))}
          </div>
        </div>
      </div> */}
      <HeroProducts />
    </>
  );
};

export default Home;
