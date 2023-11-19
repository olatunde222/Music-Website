"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";
const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detect scrolling
      setActive(window.screenY > 100);
    };

    // add event listeners
    window.addEventListener("scroll", handleScroll);

    // Clear event listeners

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header className="fixed z-50 w-full">
      <div className="container mx-auto">
        {/* Logo */}
        <Link
          href={"#"}
          className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          <Image src={"/assets/header/logo.svg"} alt="HeaderLogo" fill />
        </Link>
      </div>
    </header>
  );
};

export default Header;
