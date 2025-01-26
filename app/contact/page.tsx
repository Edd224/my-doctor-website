"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";

const Contact: FC = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 0.6 },
    }),
  };

  return (
    <section className="bg-gradient-to-b from-teal-700 to-teal-400 py-12 rounded-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[30px] sm:text-[50px] font-black text-center text-white mb-8"
        >
          Kontaktujte nás
        </motion.h1>
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {/* Kontaktné údaje */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white text-black p-8 space-y-4 rounded-10 shadow-2xl transform transition duration-300 hover:scale-105 flex-1"
          >
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-text">Kontaktné údaje</h2>
              <p className="text-base leading-relaxed">
                <strong>Ambulancia klinickej imunológie a alergológie</strong>
              </p>
            </div>
            <div className="">
              <p className="">MUDr. Andrej Zlatoš</p>
              <p className="">Adresa: Mestská poliklinika, Starohájska 2, Trnava</p>
              <p className="">
                Telefón:{" "}
                <a href="tel:+421335953414" className="text-text hover:underline">
                  +421 335 953 414
                </a>
              </p>
              <p className="">
                E-mail:{" "}
                <a href="mailto:ambulancia@zlatos.sk" className="text-text hover:underline">
                  ambulancia@zlatos.sk
                </a>
              </p>
            </div>
          </motion.div>

          {/* Kde nás nájdete */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white text-black p-8 rounded-10 shadow-2xl transform transition duration-300 hover:scale-105 flex-1"
          >
            <h2 className="text-2xl font-bold text-text mb-4">Kde nás nájdete</h2>
            <p className="text-base leading-relaxed">
              Ambulancia sa nachádza v detskom pavilóne Mestskej polikliniky na sídlisku Družba v
              Trnave. Dostupnosť je buď priamo z ulice pod lávkou pre peších alebo z lávky, kedy
              musíte zísť o jedno podlažie nadol.
            </p>
            <p className="mt-4">
              Naše podlažie je značené ako suterén, hoci je nadzemné, ale ako prízemie je
              označované podlažie na úrovni lávky pre peších.
            </p>
            <p className="mt-4 font-bold">Mestská poliklinika</p>
            <p>Starohájska 2</p>
            <p>TRNAVA</p>
          </motion.div>
        </div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-12"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.318237004553!2d17.583194415709436!3d48.37700797924681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476cfa45a874b22b%3A0x2f030a74c7c8e7a0!2sMestsk%C3%A1%20poliklinika%2C%20Staroh%C3%A1jska%202%2C%20Trnava!5e0!3m2!1sen!2ssk!4v1614682118278!5m2!1sen!2ssk"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen={true}
            loading="lazy"
            title="Mapa ambulancie"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
