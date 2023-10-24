import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import vegetables from "/public/productCategoriesOne.png";
import fruits from "/public/productCategoriesTwo.png";
import rootCrops from "/public/productCategoriesThree.png";
import productVideo from "/public/productVideo.png";
import { FaPlay } from "react-icons/fa";
import play from "/public/icons/play.svg";

const products = [
  {
    name: "vegetables",
    image: vegetables,
  },
  {
    name: "fruits",
    image: fruits,
  },
  {
    name: "root crops",
    image: rootCrops,
  },
  {
    name: "cereals",
  },
  {
    name: "legumes",
  },
  {
    name: "spices",
  },
];

const HeroProducts = () => {
  const settings = {
    className: "center",
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 2000,
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 3,
    dots: true,
    arrows: true,
  };

  return (
    <>
      <div className="py-28 flx items-center justify-between  ">
        <div className="mxauto mx-20 py-3 max-w7xl  bg-purple700 ">
          <h2 className="text-4xl font-bold text-greyBlack text-center py-6 ">
            Product Categories
          </h2>
          <div className="flex justify-center mx-auto w-[120px] text-center ">
            <span className="border-2 border-lemonGreen w-full"></span>
          </div>
          <div className="overflow-x-hidde max-w-full pt-12 px-6 ">
            <Slider {...settings} className="h-fit space-x-4 ">
              {products.map((product) => (
                <div className="bg-lightGrey rounded-md lg:rounded-2xl h-[400px] max-w-[300px]">
                  <div className="flex flex-col justify-between min-h-full">
                    <div className="p-4">
                      <h3 className="text-2xl uppercase font-bold py-2">
                        {product.name}
                      </h3>
                      <Link
                        href="#"
                        className="border-b-2 border-b-green py-2 text-lg tracking-tight"
                      >
                        Shop now
                      </Link>
                    </div>
                    <div className="  ">
                      <Image
                        className="bott"
                        width={400}
                        height={200}
                        alt={product.name}
                        src={product.image}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="py-10 max-w-6xl mx-auto">
        <div className="relative overflow-hidden z-10 flexflex-col justify-center items-center  min-w-fit h-[500px] mx-auto bg-gradient-to-b from-deepGreen via-midGrey to-deepGreen rounded-md lg:rounded-lg ">
          <div className="absolute w-full h-full flex justify-center items-center bg-blend-overlay ">
            <Image
              className="w-full h-full object-cover object-center overflow-hidden"
              sizes="100vw"
              fill
              alt="productVideo"
              src={productVideo}
            />
            <div className="absolute inset-0 flex justify-center items-center ">
              <div className="text-white absolut font-bold text-2xl leading-[0.57px] font-karla text-center mx-auto max-w-2xl py-32 sm:py48 lg:py56">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                  Premium, Fresh Produce from the Heart of Africa
                </h1>
                <p className="mt-6 text-lg font-medium leading-8 max-w-xl mx-auto ">
                  Explore our diverse selection of farm-fresh agricultural
                  goods, sustainably cultivated in the heart of Africa, and
                  experience the true essence of quality, taste, and tradition.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 ">
                  <a
                    href="#"
                    className="rounded-md bg-green w-[200px] px-[22px] py-[14px] text-sm border border-green font-semibold text-white shadow-sm hover:bg-indigo-500  cursor-pointer"
                  >
                    Browse products
                    <Image
                      arc={play}
                      weight={40}
                      height={40}
                      className=" text-white w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex flex-row z-[100]">
              <div className="  ">
                <span className="text-white capitalize bg-green text-xl flex w-full ">
                  <Link href="#">
                    how afrifood works?
                    <FaPlay className=" text-white w-6 h-6" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroProducts;
