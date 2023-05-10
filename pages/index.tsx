import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Head from "next/head";
import React from "react";

const mont = Montserrat({ subsets: ["latin"] });

const ProjectSlide: React.FC<{
  title: string;
  subtitle: string;
  image: string;
}> = ({ title, subtitle, image }) => (
  <div className="relative w-full">
    <Image
      src={image}
      alt="Project"
      width={1280}
      height={800}
      className="w-full h-auto brightness-[25%]"
    />
    <div className="absolute top-0 h-full w-full flex justify-end flex-col p-4">
      <h3 className="font-bold">{title}</h3>
      <div className="text-xs">{subtitle}</div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className={`${mont.className}`}>
      <article className="relative">
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          modules={[EffectFade, Autoplay]}
          className="mySwiper md:flex-1 brightness-[25%]"
          autoplay={{ delay: 1000 }}
          parallax
        >
          <SwiperSlide>
            <Image
              src="/images/fish-bone-revolution/screenshot.png"
              alt="Project"
              width={1280}
              height={800}
              className="w-full h-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/fish-bone-revolution/screenshot.png"
              alt="Project"
              width={1280}
              height={800}
              className="w-full h-auto"
            />
          </SwiperSlide>
        </Swiper>
        <div className="absolute flex items-center flex-col justify-center text-white w-full h-full top-0 z-20 gap-4">
          <h1 className="font-bold text-2xl">Startup Designs</h1>
          <p className="text-base">By Ansell Maximilian</p>
          <button className="text-base bg-main px-6 py-2 font-bold rounded-full">
            View Projects
          </button>
        </div>
      </article>

      <article className="p-4">
        <Image
          src="/images/illustrations/heatmap.svg"
          height={165.4}
          width={288}
          alt="Heatmap"
          className="mx-auto mb-4"
        />
        <div className="text-center">
          <div className="pb-1">This Website</div>
          <h2 className="text-2xl font-bold pb-4">What Is This?</h2>
          <p className="text-sm">
            I look up startups that look interesting to me, usually on
            kickstarter.com.
          </p>
        </div>
      </article>
      <article className="bg-medium text-light p-4">
        <div className="text-center mb-4">
          <div className="pb-1">Projects</div>
          <h2 className="text-2xl font-bold">Design Examples</h2>
        </div>
        <Swiper
          spaceBetween={16}
          className="mySwiper"
          modules={[]}
          slidesPerView={2}
          centeredSlides={true}
        >
          <SwiperSlide>
            <ProjectSlide
              title="Fish Bone Revolution"
              subtitle="Didn’t Know I Was Lost"
              image="/images/fish-bone-revolution/screenshot.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectSlide
              title="Fish Bone Revolution"
              subtitle="Didn’t Know I Was Lost"
              image="/images/fish-bone-revolution/screenshot.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectSlide
              title="Fish Bone Revolution"
              subtitle="Didn’t Know I Was Lost"
              image="/images/fish-bone-revolution/screenshot.png"
            />
          </SwiperSlide>
        </Swiper>
      </article>
    </main>
  );
}
