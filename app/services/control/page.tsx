"use client";

import React from "react";
import { motion } from "framer-motion";
import ControlData from "../../../public/data/ControlData.json";

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
      </div>
    </motion.div>
  );
};

export default Control;
