"use client";

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  },
});

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

interface AppointmentData {
  title: string;
  orderingOptions: string[];
  buttonLink: string;
  buttonText: string;
  imageSrc: string;
  paragraphs: string[];
}

const Appointment: FC = () => {
  const [data, setData] = useState<AppointmentData | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch("/data/AppointmentData.json");
      const result: AppointmentData = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <motion.section
      className="bg-gradient-to-b from-main rounded-20"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container mx-auto p-4 sm:p-8">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-white pb-4"

          variants={fadeInUp()}
        >
          {data.title}
        </motion.h1>
        <motion.div
          className="w-full bg-white text-text p-6 sm:p-8 rounded-10 shadow-2xl"
          variants={fadeInUp(0.2)}

        >
          <div className="flex flex-col justify-center items-center pb-8">
            <motion.div
              className="flex flex-col gap-4 sm:flex-col sm:justify-evenly items-center py-4"
              variants={fadeInUp(0.4)}
            >
              <h2 className="text-lg sm:text-xl text-text font-bold text-center">
                Objednať sa môžete:
              </h2>
              <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                {data.orderingOptions.map((option, index) => (
                  <li key={index} className="text-sm sm:text-base">
                    {option}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="flex flex-col items-center justify-between"
              variants={fadeInUp(0.6)}
            >
              <a
                href={data.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-10 py-4 px-10 text-lg font-medium text-white bg-gradient-to-tl from-main to-secondary shadow focus:outline-none focus:ring focus:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
              >
              <Image
                src={data.imageSrc}
                alt="test"
                width={100}
                height={100}
              />

              </a>
            </motion.div>

            <motion.div
              className="mt-8 text-sm sm:text-base leading-relaxed space-y-4"
              variants={fadeInUp(1.2)}
            >
              {data.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Appointment;
