"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TestingData from "../../../public/data/TestingData.json";

const Testing = () => {
  const { sectionTitle, sections } = TestingData;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom * 0.3 },
    }),
  };

  return (
    <motion.div
      className="bg-gradient-to-bl from-main to-teal- rounded-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="px-5 sm:px-10 pb-8">
        {/* Nadpis */}
        <h1 className="text-[30px] sm:text-[50px] text-center font-bold text-white">
          {sectionTitle}
        </h1>

        {/* Obsah rozdelený do sekcií */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 sm:p-8 bg-white text-xl text-black rounded-10">
          {sections.slice(0, 3).map((section, index) => (
            <motion.div
              key={index}
              className="space-y-4 border-b sm:border-none border-text pb-8"
              variants={containerVariants}
              custom={index + 1}
            >
              <h2 className="text-lg font-bold text-text">{section.title}</h2>
              <p>{section.content}</p>
            </motion.div>
          ))}

          {/* Sekcia 4: Obrázky */}
          <motion.div
            className="flex flex-col "
            variants={containerVariants}
            custom={4}
          >
            {sections[3].images?.map((imageSrc, index) => (
              <Image
                key={index}
                src={imageSrc}
                alt="test"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testing;
