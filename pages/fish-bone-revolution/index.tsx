import Image from "next/image";
import { Kaushan_Script, Amatic_SC, Neucha } from "next/font/google";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const kaushan = Kaushan_Script({ subsets: ["latin"], weight: "400" });
const amatic = Amatic_SC({ subsets: ["latin"], weight: ["400", "700"] });
const neucha = Neucha({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className="">
      <header className="p-2 shadow-md">
        <div
          className={`${kaushan.className} text-[24px] text-fbr-main container mx-auto`}
        >
          Fish Bone Revolution
        </div>
      </header>
      <article
        className={`${amatic.className} text-center mb-8 md:mb-16 md:text-left md:flex md:max-w-5xl md:mx-auto md:items-center`}
      >
        <div className="px-2 py-12 md:flex-1">
          <h1
            className={`text-fbr-main uppercase font-bold text-[32px] mb-4 w-64 mx-auto md:text-5xl md:w-full`}
          >
            Broth Made From Upcycled Fish Bone
          </h1>
          <p className="hidden md:block text-2xl text-black mb-4 font-bold">
            A game-changer for fish conservation and cutting waste in the food
            industry.
          </p>
          <button className="uppercase text-white bg-fbr-main px-8 py-2 rounded-full md:text-2xl">
            Support Us
          </button>
        </div>
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          modules={[EffectFade, Autoplay]}
          className="mySwiper md:flex-1"
          autoplay={{ delay: 1000 }}
          // parallax
        >
          <SwiperSlide>
            <Image
              alt="image"
              src="/images/fish-bone-revolution/full-fish.jpg"
              width={680}
              height={532}
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="image"
              src="/images/fish-bone-revolution/fish-waste.jpg"
              width={680}
              height={532}
              className="w-full"
            />
          </SwiperSlide>
        </Swiper>
      </article>
      <article className="mb-8 text-center px-2 md:max-w-5xl md:mx-auto md:mb-16">
        <h2
          className={`${amatic.className} text-2xl font-bold text-fbr-main mb-4 md:text-[32px]`}
        >
          BROTH MADE FROM UPCYCLED FISH BROTH
        </h2>
        <p className={`${neucha.className} mb-4 md:text-2xl`}>
          Our mission is to create a fish bone broth from a fish upcycling
          process that will change the way of how fish is treated and handled
          within the seafood industry and redefine what fish waste is. By
          maximizing the full potential of the fish that wholesalers sell, we
          can create a more circular economy where every part is being put to
          use.
        </p>
      </article>
      <article className="bg-fbr-light mb-8 md:max-w-5xl md:mx-auto md:mb-16 md:flex items-center">
        <Image
          alt="image"
          className="h-[388px] object-cover md:flex-1"
          src="/images/fish-bone-revolution/broth-product.jpeg"
          width={680}
          height={532}
        />
        <div className="text-center px-2 py-4 md:flex-1">
          <h2
            className={`${amatic.className} text-2xl font-bold text-fbr-main mb-4 md:text-[32px]`}
          >
            OUR PRODUCT - YUJI RAMEN STOCK
          </h2>
          <p className={`${neucha.className} mb-4 text-[16px] md:text-xl`}>
            The fish broth is available in 2 types. A simple fish broth that can
            be consumed on its own or added to any soup and our very own Yuji
            Ramen stock that will be sold in three authentic flavors: Shoyu (soy
            sauce), Miso, and Shio (salt). You can just heat up these stocks and
            add any noodles such as ramen, soba, or udon to make delicious bowls
            at home. It will be super easy, tasty, and nutritious.
          </p>
          <button
            className={`${amatic.className} uppercase text-white bg-fbr-main px-8 py-2 rounded-full text-[16px] md:text-2xl`}
          >
            View
          </button>
        </div>
      </article>
      <article
        className={`mb-8 ${neucha.className} text-center flex flex-col gap-4 md:max-w-5xl md:mx-auto md:mb-16 md:flex-row md:items-center`}
      >
        <div className="p-4">
          <Image
            src="/images/fish-bone-revolution/takeout-boxes.svg"
            height={72}
            width={141.04}
            alt="No Waste"
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl text-fbr-main mb-2">Zero Waste</h3>
          <p className="text-[16px]">
            We hope to raise people‘s awareness regarding the repurposing of
            fish waste in the seafood industry and encourage a more conscious
            and mindful consumption of fish.
          </p>
        </div>
        <div className="p-4">
          <Image
            src="/images/fish-bone-revolution/fish-bowl.svg"
            height={72}
            width={141.04}
            alt="Sustainable"
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl text-fbr-main mb-2">Sustainable</h3>
          <p className="text-[16px]">
            We believe that if we can create more meals out of a single whole
            fish, by using it in its entirety, we can eventually require less
            fish to be caught, and in this way contribute in a positive way to
            increase sustainability.
          </p>
        </div>
        <div className="p-4">
          <Image
            src="/images/fish-bone-revolution/stability-ball.svg"
            height={72}
            width={141.04}
            alt="No Waste"
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl text-fbr-main mb-2">Healthy</h3>
          <p className="text-[16px]">
            Our broth will contain NO preservatives, No artificial MSG, simply
            fish bones, vegetables, water, and a lot of love and hard work.
          </p>
        </div>
      </article>
      <footer
        className={`bg-[#4F4F4F] ${neucha.className} text-xs px-4 py-6 md:text-lg`}
      >
        <div className="flex gap-2 p-2 mb-[10px]">
          <div className="text-center w-full">
            <h4 className="text-white mb-4">OUR STORIES</h4>
            <ul className="text-[#BEBEBE]">
              <li>United States</li>
              <li>Canada</li>
              <li>United Kingdom</li>
              <li>Mexico</li>
            </ul>
          </div>
          <div className="text-center w-full">
            <h4 className="text-white mb-4">ABOUT</h4>
            <ul className="text-[#BEBEBE]">
              <li>Our Mission</li>
              <li>About Us</li>
              <li>Our Product</li>
              <li>Our Impact</li>
            </ul>
          </div>
        </div>
        <div className="text-[#BEBEBE] text-center">Fish Bones &copy; 2023</div>
      </footer>
    </main>
  );
}
