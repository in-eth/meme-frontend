"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import localFont from "next/font/local";

import Cloud from "@/components/cloud";

import PlanetsNight from "../public/nightt 1_LE_auto_x2.jpg";
import PlanetsDay from "../public/dayy 1_LE_auto_x2.jpg";
import LayerNight from "../public/Layer 1.png";
import LayderDay from "../public/Layer 1_2.png";
import GroundNight from "../public/Group1.png";
import GroundDay from "../public/Group1_2.png";
import CatPlane from "../public/paperplane1.png";
import Cloud1 from "../public/TG _for website 2.png";
import Cloud2 from "../public/TG _for website 3.png";

const CatComic = localFont({
  src: [
    {
      path: "../public/cat_comic/Cat Comic.ttf",
      weight: "400",
    },
  ],
  variable: "--font-cat-comic",
});

export default function Home() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents SSR issues

  const currentTheme = theme === "system" ? systemTheme : theme;
  const PlanetsType = currentTheme === "light" ? PlanetsDay : PlanetsNight;
  const GroundType = currentTheme === "light" ? GroundDay : GroundNight;
  const LayerType = currentTheme === "light" ? LayderDay : LayerNight;

  return (
    <>
      <section
        className="relative w-full pt-40 sm:pt-44 h-fit"
        id="planetsImages"
      >
        <Image
          alt="Background"
          className="w-full z-0"
          fill={true}
          priority={true}
          src={PlanetsType}
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
        <div className="px-20">
          <div
            className="relative w-full z-20 text-center sm:text-left"
            style={{ maxWidth: "800px" }}
          >
            <p className="uppercase text-white text-shadow font-bold mb-5">
              welcome to simon cat offical token
            </p>
            <h1
              className={`text-white uppercase text-5xl sm:text-7xl md:text-8xl text-shadow ${CatComic.className}`}
            >
              one cat, billions of owners&apos;
            </h1>
          </div>
          <div className="flex w-full justify-end items-center relative z-10 -mt-3 xs:-mt-20 sm:-mt-32 md:-mt-[22rem]">
            <Image
              alt="Cat on Paper Plane"
              className="w-half"
              priority={true}
              src={CatPlane}
            />
          </div>
        </div>
        <div className="px-5 sm:px-20 relative">
          <div className="relative w-fit" id="cloud1">
            <Cloud
              iconPosition="top-10 right-24 xxs:right-28 xs:right-32"
              img={Cloud1}
              padding="pl-9 pr-6 xs:pr-14 pt-5 xs:pt-14 pb-20 xs:pb-24"
            />
          </div>
          <div className="relative w-full flex justify-end -mt-16" id="cloud2">
            <div className="w-fit relative">
              <Cloud
                iconPosition="top-24 xs:top-28 right-20 xxs:right-28"
                img={Cloud2}
                padding="pb-14 xs:pb-20 pt-16 xs:pt-28 pl-8 pr-10 xs:pr-12"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative" id="statsAndFooterImage">
        <Image
          alt="Layer"
          className="h-200"
          priority={true}
          src={LayerType}
          style={{ objectFit: "cover" }}
        />
        <Image
          alt="Ground"
          className="absolute bottom-0 left-0 w-full"
          priority={true}
          src={GroundType}
        />
      </section>
    </>
  );
}
