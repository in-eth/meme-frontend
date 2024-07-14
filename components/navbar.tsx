"use client";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { IoMoon, IoSunny } from "react-icons/io5";
import { BiPaperPlane } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

import LogoLight from "../public/Group 1000004190.png";
import LogoDark from "../public/image.png";

const FullNavbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [isScrolled, setIsScrolled] = useState(false);

  let LogoType = LogoLight;

  LogoType = isScrolled && currentTheme == "light" ? LogoDark : LogoLight;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && theme) {
      setCurrentTheme(theme);
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (currentTheme == "light") {
      const handleScroll = () => {
        const scrollThreshold =
          window.innerWidth < 450
            ? window.innerHeight * 0.2
            : window.innerHeight;

        if (window.scrollY > scrollThreshold) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme == "light" ? "dark" : "light";

    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <Navbar
      className={`py-3 pr-10 sm:pr-20 pl-8 sm:pl-14 fixed top-0 left-0 ${
        isScrolled && currentTheme == "light" ? "text-black" : "text-white"
      }`}
      isBlurred={false}
      maxWidth="full"
      style={{ background: "transparent" }}
    >
      <NavbarBrand>
        <Link href="#" rel="preconnect">
          <Image
            alt="Logo"
            height={0}
            priority={true}
            src={LogoType}
            width={60}
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="gap-5" justify="end">
        <NavbarItem className="hidden xs:block">
          <Link href="#">
            {currentTheme === "light" ? (
              <IoSunny className="text-xl" onClick={toggleTheme} />
            ) : (
              <IoMoon className="text-xl" onClick={toggleTheme} />
            )}
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden xs:block">
          <Link href="#">
            <BiPaperPlane className="text-xl" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden xs:block">
          <Link href="#">
            <FaXTwitter />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <Button
              className={`px-5 py-0 font-semibold uppercase ${
                isScrolled && currentTheme == "light"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              href="#"
              radius="sm"
              size="sm"
              variant="solid"
            >
              Buy $scat
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default FullNavbar;
