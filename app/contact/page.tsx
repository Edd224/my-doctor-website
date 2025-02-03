'use client';

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Definícia typu pre dáta
interface ContactInfo {
  contactInfo: {
    clinicName: string;
    doctorName: string;
    address: string;
    phone: string;
    email: string;
    location: string;
  };
  clinicDescription: {
    whereToFind: string;
    floorDescription: string;
  };
}

const Contact: FC = () => {
  const [contactData, setContactData] = useState<ContactInfo | null>(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch('/data/contact.json');
        const data = await response.json();
        setContactData(data);
      } catch (error) {
        console.error('Error loading contact data', error);
      }
    };

    fetchContactData();
  }, []);

  // Kontrola, či sú dáta načítané
  if (!contactData) {
    return <div>Načítavam údaje...</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 0.6 },
    }),
  };

  return (
    <section className="bg-gradient-to-b from-main py-12 rounded-20">
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
            className="bg-white text-text p-8 space-y-4 rounded-10 shadow-2xl transform transition duration-300 hover:scale-105 flex-1"
          >
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-text">Kontaktné údaje</h2>
              <p className="text-base leading-relaxed">
                <strong>{contactData.contactInfo.clinicName}</strong>
              </p>
            </div>
            <div>
              <p>{contactData.contactInfo.doctorName}</p>
              <p>{contactData.contactInfo.address}</p>
              <p>
                Telefón:{" "}
                <a href={`tel:${contactData.contactInfo.phone}`} className="text-text hover:underline">
                  {contactData.contactInfo.phone}
                </a>
              </p>
              <p>
                E-mail:{" "}
                <a href={`mailto:${contactData.contactInfo.email}`} className="text-text hover:underline">
                  {contactData.contactInfo.email}
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
            className="bg-white text-text p-8 rounded-10 shadow-2xl transform transition duration-300 hover:scale-105 flex-1"
          >
            <h2 className="text-2xl font-bold text-text mb-4">Kde nás nájdete</h2>
            <p className="text-base leading-relaxed">
              {contactData.clinicDescription.whereToFind}
            </p>
            <p className="mt-4">{contactData.clinicDescription.floorDescription}</p>
            <p className="mt-4 font-bold">{contactData.contactInfo.location}</p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317154.92544574683!2d17.58645943998272!3d48.9961922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47149a0b3becfa97%3A0x33bc9f0b295f53a0!2s%C4%BD.+%C5%A0t%C3%BAra%2C%20019%2001%20Ilava!5e0!3m2!1sen!2ssk!4v1673922018278!5m2!1sen!2ssk"
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
