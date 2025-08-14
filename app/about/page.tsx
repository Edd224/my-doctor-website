"use client";

import { FC } from "react";
import { Asclepius, Car, ClockCountdown, Info, Student, Timer, Wheelchair } from "@phosphor-icons/react";
import Image from "next/image";
import AboutData from "../../public/data/AboutData.json";
import { motion } from "framer-motion"; // Importujeme Framer Motion

const About: FC = () => {
  const {
    sectionTitle,
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

      <div className="container mx-auto bg-gradient-to-b from-main p-6 sm:p-8 rounded-20">
        {/* Logá */}
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-8 sm:space-x-20"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
          >
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={40}
                className="hover:scale-105 duration-200 w-24 sm:w-36 h-[30px] sm:h-[50px]"
              />
            ))}
            {/* Opakujeme logá, aby bola ilúzia plynulá */}
            {logos.map((logo, index) => (
              <Image
                key={`${index}-duplicate`}
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={40}
                className="hover:scale-105 duration-200 w-24 sm:w-36 h-[30px] sm:h-[50px]"
              />
            ))}
            {logos.map((logo, index) => (
              <Image
                key={`${index}-duplicate`}
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={40}
                className="hover:scale-105 duration-200 w-24 sm:w-36 h-[30px] sm:h-[50px]"
              />
            ))}
            {logos.map((logo, index) => (
              <Image
                key={`${index}-duplicate`}
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={40}
                className="hover:scale-105 duration-200 w-24 sm:w-36 h-[30px] sm:h-[50px]"
              />
            ))}
          </motion.div>
        </div>

        {/* Animujeme nadpis sekcie */}
        <motion.h1
          className="text-[50px] font-black text-center text-white pb-8 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {sectionTitle}
        </motion.h1>

        {/* Prax a vzdelanie */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-10 mb-6 p-4 sm:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full sm:w-1/2 py-4">
            <div className="text-text space-y-10">
              <div className="flex">
                <h4 className=" text-2xl font-semibold mr-2">Personál</h4>
                <Asclepius size={32} />
              </div>
              <div>
                <h4 className=''>Lekár: <span className='font-bold text-xl sm:text-2xl text-nowrap'>MUDr.Marína Hantáková</span></h4>
                <h4 className=''>Zdravotná sestra: <span className='font-bold text-xl sm:text-2xl text-nowrap'>Marta Balážová</span></h4>
                <p>Telefónne číslo: <strong className="text-xl sm:text-2xl">+421 918 243 490</strong></p>
              </div>
            </div>
          </div>

          <div className="text-text font-semibold space-y-6 w-full sm:w-1/2 py-4">
            <div className="flex">
              <h2 className="text-2xl font-semibold mr-2">{education.title}</h2>
              <Student size={32} />
            </div>
            <div>
              {education.qualifications.map((qualification, index) => (
                <p key={index}>{qualification}</p>
              ))}
            </div>
            <p>{education.licenses}</p>
          </div>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ordinačné hodiny */}
          <motion.div
            className="flex flex-col items-center justify-center  rounded-10 p-0 sm:p-8 shadow-2xl border-t"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ClockCountdown size={32} />
            <div className="relative text-center text-text backdrop-blur-md p-4 sm:p-6 rounded-10 ">
              <h2 className="text-xl font-semibold mb-4">Ordinačné hodiny</h2>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-white text-center">
                    <th className="border border-gray-300 px-4 py-2">Deň</th>
                    <th className="border border-gray-300 px-4 py-2">Ordinačné hodiny</th>
                    <th className="border border-gray-300 px-4 py-2">* Čistý ordinačný čas</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { day: 'Pondelok', hours: '07:00 - 14:30', clean: '07:30 - 14:00' },
                    { day: 'Utorok', hours: '07:00 - 14:30', clean: '07:30 - 14:00' },
                    { day: 'Streda', hours: '07:00 - 14:00', clean: '07:30 - 13:30' },
                    { day: 'Štvrtok', hours: '07:00 - 14:30', clean: '07:30 - 14:00' },
                    { day: 'Piatok', hours: '07:00 - 10:00', clean: '07:30 - 09:30' },
                  ].map(({ day, hours, clean }) => (
                    <tr key={day} className="text-center">
                      <td className="border text-white border-gray-300 px-4 py-2">{day}</td>
                      <td className="border text-white border-gray-300 px-4 py-2">{hours}</td>
                      <td className="border text-white border-gray-300 px-4 py-2">{clean}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="space-y-2 bg-white p-2 text-left">
                <h4 className='text-xl text-text'>* Čistý ordinačný čas</h4>
                <p>Čas, v ktorom lekár príjima pacientov za účelom poskytnutia zdravotnej starostlivosti v príslušnej ambulacii. Do čistého ordinačného času sa započítava čas ordinačných hodín schválených príslušným samosprávnym krajom, vyhradený na vyšetrenie pacientov.</p>
                <p>Do čistého ordinačného času sa nezapočítava čas ordinačných hodín vyhradených na odbery, vyhodnocovanie výsledkov bez prítomnosti pacienta, admnistratívu a konziliárne vyšetrenia.</p>
              </div>
            </div>
          </motion.div>

          {/* Informácie */}
          <motion.div
            className="flex flex-col justify-center items-center space-y-12 text-text rounded-10 shadow-2xl p-0 sm:p-8 border-t"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Info size={32} className="text-white text-center" />
            <h2 className="text-2xl font-semibold">{information.title}</h2>

            <div className="pb-5 bg-white relative text-left text-text shadow-xl backdrop-blur-md p-6 rounded-10">

              <div className="text-text font-semibold space-y-3">
                {information.details.map((detail, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html:detail}}></p>
                ))}
              </div>
            </div>

            {/* Doplnkové informácie */}
            <motion.div
              className="flex justify-center items-center bg-transparent rounded-10 p-5 mt-4 shadow-2xl border-t"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="text-white font-semibold text-xl space-y-3 sm:space-y-6">
                <h2 className="text-2xl font-semibold text-text text-center">{additionalInfo.title}</h2>
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


          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default About;
