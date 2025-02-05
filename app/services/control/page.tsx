"use client";

import React from "react";
import { motion } from "framer-motion";
import ControlData from "../../../public/data/ControlData.json";
import Image from "next/image"

const Control = () => {
  const { sectionTitle, paragraphs } = ControlData;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom * 0.3 }, // Custom delay
    }),
  };

  return (
    <motion.div
      className="bg-gradient-to-bl from-main/40 rounded-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="px-5 sm:px-10 pb-8">
        <h1 className="text-[30px] sm:text-[50px] text-center font-bold">{sectionTitle}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-baseline gap-12 p-5 sm:p-8 bg-white text-xl text-black rounded-10 space-y-2 sm:space-y-5">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="border-b sm:border-none border-text text-text pb-8"
              variants={containerVariants}
              custom={index + 1}
              dangerouslySetInnerHTML={{ __html: paragraph.text }} // Povolenie HTML v texte
            />
          ))}
        </div>
      </div>
      <div className="p-8 text-center text-text text-2xl font-semibold">
        <p>Kontroloné vyšetrenie s rovnakou diagnózou nutné do 24 mesiacov ( bez nového výmenného lístka )</p>
        <p>- možnosť rýchlejšieho termínu na TOP DOKTOR ( nie pre prvé vyšetrenie )</p>
        <div className="flex flex-col items-center justify-between mt-4">
          <a
            href="https://www.topdoktor.sk/doktor/alergolog-imunolog/trenciansky-kraj/ilava/10893-mudr-marina-hantakova?gad_source=1&gclid=CjwKCAiAtYy9BhBcEiwANWQQL3hAjqlwvYHsjfuyLvefw7JDXX1wBPvyTTiMIo7V4AqxwzPQHbAq-BoC_okQAvD_BwE"
            target="_blank"
            rel="noopener noreferrer"
            className=" inline-flex items-center justify-center whitespace-nowrap rounded-10 py-4 px-10 text-lg font-medium text-white bg-gradient-to-tl from-main to-text/70 shadow focus:outline-none focus:ring focus:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
          >
            <Image
              src="/assets/images/topdoktorbiele.png"
              alt="test"
              width={100}
              height={100}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Control;
