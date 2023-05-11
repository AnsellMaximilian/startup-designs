import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";

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
          slidesPerView={1}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
          }}
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
      <article className="bg-light p-4">
        <div className="text-center mb-4">
          <div className="pb-1">The Process</div>
          <h2 className="text-2xl font-bold">What I Do</h2>
        </div>
        <div className="flex flex-col gap-8">
          <div className="bg-white px-4 py-8 rounded-[25px] text-center">
            <Image
              src="/images/logos/kickstarter-short.svg"
              height={23.96}
              width={81.07}
              alt="Kickstarter Logo"
              className="mx-auto mb-4"
            />
            <h3 className="text-base font-bold mb-1">Startups</h3>
            <p className="text-sm">
              I look up startups that look interesting to me, usually on
              kickstarter.com.
            </p>
          </div>
          <div className="bg-white px-4 py-8 rounded-[25px] text-center">
            <Image
              src="/images/logos/figma.svg"
              height={57}
              width={38}
              alt="Figma Logo"
              className="mx-auto mb-4"
            />
            <h3 className="text-base font-bold mb-1">Figma</h3>
            <p className="text-sm">
              I look up startups that look interesting to me, usually on
              kickstarter.com.
            </p>
          </div>
          <div className="bg-white px-4 py-8 rounded-[25px] text-center">
            <Image
              src="/images/logos/nextjs.svg"
              height={66}
              width={66}
              alt="Nextjs Logo"
              className="mx-auto mb-4"
            />
            <h3 className="text-base font-bold mb-1">NextJs</h3>
            <p className="text-sm">
              I look up startups that look interesting to me, usually on
              kickstarter.com.
            </p>
          </div>
        </div>
      </article>
      <footer className="bg-dark text-[#A8A8A8] p-4">
        <div className="flex justify-between items-start mb-8">
          <a href="#" className="flex gap-2 items-center text-xs">
            <FaGithub /> <span>Source</span>
          </a>
          <div>
            <div className="text-white text-xs mb-2">Ansell Maximilian</div>
            <ul className="flex flex-col gap-1 text-[10px]">
              <li className="flex items-center gap-2">
                <FaGithub /> <span>Github</span>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin /> <span>Linkedin</span>
              </li>
              <li className="flex items-center gap-2">
                <VscGlobe /> <span>Website</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-white text-center">
          &copy; 2023 Ansell Maximilian. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
