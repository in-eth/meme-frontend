import React from "react";
import { Mulish } from "next/font/google";
import localFont from "next/font/local";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

interface CloudProps {
  img: StaticImageData;
  padding: string;
  iconPosition: string;
}

const CatComic = localFont({
  src: [
    {
      path: "../public/cat_comic/Cat Comic.ttf",
      weight: "400",
    },
  ],
  variable: "--font-cat-comic",
});

const mulish = Mulish({
  weight: "400",
  subsets: ["latin"],
});

const Cloud: FC<CloudProps> = ({ img, padding, iconPosition }) => {
  return (
    <>
      <Image
        alt="Cloud"
        className="relative z-0"
        height={0}
        priority={true}
        src={img}
        style={{
          objectFit: "contain",
        }}
        width={400}
      />
      <Link href="#">
        <FaXTwitter
          className={`text-black absolute z-20 text-2xl ${iconPosition}`}
        />
      </Link>
      <div
        className={`absolute top-0 left-0 z-10 text-black w-full h-full flex items-center ${padding}`}
      >
        <div className="p-4">
          <h2
            className={`${CatComic.className} capitalize text-lg sm:text-2xl`}
          >
            floki
          </h2>
          <p className={`${mulish.className} text-sm sm:text-lg`}>
            We need a small description here
          </p>
        </div>
      </div>
    </>
  );
};

export default Cloud;
