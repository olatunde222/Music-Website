"use client";

// packages for audio player
import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variant";
const Player = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px] h-[112px] flex items-center relative z-40 "
      >
        <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
          {/* text and Avatar image */}
          <div className="w-[300px] xl:flex items-center gap-x-4 hidden">
            <div className="relative w-16 h-16">
              <Image
                src={"/assets/player/avatar.png"}
                priority
                fill
                alt="Player Avatar image"
              />
            </div>
            {/* Text */}
            <div className="leading-none">
              <div className="text-lg font-medium">Mia Reynolds</div>
              <div className="text-sm font-light">Freedom</div>
            </div>
          </div>
          {/* Audio Player */}
          <div className="w-full max-w-4xl">
            <AudioPlayer
              loop
              preload="none"
              volume={40}
              volumePlacement="top"
              color="#fff"
              src="/assets/freedom.mp3"
              style={{
                background: "transparent",
                boxShadow: "none",
                width: "100%",
              }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Player;
