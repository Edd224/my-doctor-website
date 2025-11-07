"use client";

import React from "react";
import { motion } from "framer-motion";
import TractData from "../../../public/data/TractData.json";

const Tract = () => {
  const { sectionTitle, paragraphs } = TractData;

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
        <h3 className="text-[20px] sm:text-[30px] font-semiblod text-black">Ako sa pripraviť na diagnostické vyšetrenie sibo?</h3>
        <h4 className="text-black my-4"><span className="font-bold">UPOZORENIE:</span> Pokiaľ sa precízne nedodržujú uvedené zásady, senzitivita a špecificita tohto testu môže klesnúť aj pod 60 %.</h4>
        <h5 className="font-bold text-black text-2xl mb-3">Lekár by mal byť informovaný:</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-baseline gap-10 p-5 sm:p-8 bg-white text-xl text-black rounded-10 space-y-2 sm:space-y-5">
          {paragraphs.map((paragraph, index) => (
            <motion.li
              key={index}
              className="border-b sm:border-none border-text text-text pb-8 "
              variants={containerVariants}
              custom={index + 1}
              dangerouslySetInnerHTML={{ __html: paragraph.text }} // Povolenie HTML v texte
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Tract;
