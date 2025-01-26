"use client";

import { FC } from "react";
import { Car, MagnifyingGlass, Timer, Wheelchair } from "@phosphor-icons/react";
import Image from "next/image";
import AboutData from "../../public/data/AboutData.json";
import { motion } from "framer-motion"; // Importujeme Framer Motion

const About: FC = () => {
  const {
    sectionTitle,
    openingHours,
    information,
    additionalInfo,
    education,
    logos,
  } = AboutData;

  const getIconComponent = (icon: string) => {
    switch (icon) {
      case "Car":
        return <Car size={40} />;
      case "Wheelchair":
        return <Wheelchair size={40} />;
      case "Timer":
        return <Timer size={40} />;
      default:
        return null;
    }
  };

  return (
    <section className="rounded-20">
      <div className="container mx-auto bg-gradient-to-b from-teal-700 to-teal-400 p-6 sm:p-8 rounded-20">
        {/* Animujeme nadpis sekcie */}
        <motion.h1
          className="text-[50px] font-black text-center text-white pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {sectionTitle}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ordinačné hodiny */}
          <motion.div
            className="flex flex-col items-center justify-center bg-white rounded-10 p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-text mb-4">
              {openingHours.title}
            </h2>
            <ul className="text-text space-y-4 flex-col sm:flex justify-between sm:justify-between items-center">
              {openingHours.items.map((item, index) => (
                <li key={index}>
                  {item.day}: <strong>{item.hours}</strong>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-text">
              <p>{openingHours.address}</p>
              <div className="flex items-center cursor-pointer space-x-2">
                <a
                  href={openingHours.mapLink}
                  rel="noopener"
                  target="_blank"
                  className="text-xl"
                >
                  Zobraziť na mape
                </a>
                <MagnifyingGlass size={32} />
              </div>
            </div>
          </motion.div>

          {/* Informácie */}
          <motion.div
            className="flex justify-center items-center bg-white rounded-10 p-8 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-text font-semibold space-y-3">
              <h2 className="text-2xl font-semibold">{information.title}</h2>
              {information.details.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
          </motion.div>

          {/* Doplnkové informácie */}
          <motion.div
            className="flex justify-center items-center bg-white rounded-10 p-8 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="text-text font-semibold text-xl space-y-3 sm:space-y-6">
              <h2 className="text-2xl font-semibold">{additionalInfo.title}</h2>
              <div className="p-6 sm:p-0 text-base sm:text-xl">
                {additionalInfo.details.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
              <div className="flex justify-between items-center sm:space-x-8 space-x-2">
                {additionalInfo.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center p-2 sm:p-0"
                  >
                    {getIconComponent(feature.icon)}
                    <span className="text-sm sm:text-base">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Prax a vzdelanie */}
          <motion.div
            className="flex justify-center items-center bg-white rounded-10 p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-text font-semibold space-y-6">
              <h2 className="text-2xl font-semibold">{education.title}</h2>
              <div>
                {education.qualifications.map((qualification, index) => (
                  <p key={index}>{qualification}</p>
                ))}
              </div>
              <p>{education.licenses}</p>
            </div>
          </motion.div>
        </div>

        {/* Logá */}
        <motion.div
          className="grid grid-cols-2 gap-4 place-items-center sm:flex sm:flex-row sm:justify-evenly sm:items-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={50}
              className="hover:scale-105 duration-200 w-24 sm:w-36"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
