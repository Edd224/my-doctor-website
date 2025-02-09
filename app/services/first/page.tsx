"use client"


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "../../../public/data/FirstData.json"; // Importujeme dáta z JSON súboru


interface WhatYouNeedItem {
    title: string;
    description: string;
    items: string[];
}

interface AppointmentMethod {
    text: string;
    link?: {
        title: string;
        href: string;
    }
}

interface FirstData {
    heading: string;
    importantNotice: string[];
    importantWarnings: string[];
    whatYouNeed: WhatYouNeedItem[]; // Opravený typ
    warnings: string[];
    appointmentMethods: AppointmentMethod[];
    firstExaminationTimes: Record<string, string[]>;
}
const First = () => {
    const [jsonData, setJsonData] = useState<FirstData | null>(null);

    useEffect(() => {
        // Načítame dáta z JSON súboru
        setJsonData(data);
    }, []);

    if (!jsonData) {
        return <div>Načítavam...</div>;
    }

    // Variants for animations
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: custom * 0.3 }, // Custom delay
        }),
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: custom * 0.2 }, // Custom delay
        }),
    };

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: (custom: number) => ({
            opacity: 1,
            transition: { duration: 0.8, delay: custom * 0.2 }, // Custom delay
        }),
    };

    return (
        <motion.div
            className="bg-gradient-to-bl from-main rounded-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="px-5 sm:px-10 pb-8">
                <motion.h1
                    className="text-[30px] sm:text-[50px] text-center font-bold"
                    variants={containerVariants}
                    custom={0}
                >
                    {jsonData.heading}
                </motion.h1>

                <motion.div
                    className="p-2 sm:p-4 bg-white text-black rounded-10"
                    variants={containerVariants}
                >
                    <motion.div
                        className="p-3 sm:p-6 space-y-4 sm:space-y-8"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {jsonData.importantNotice.map((text: string, index: number) => (
                            <motion.p
                                className="text-sm sm:text-lg"
                                variants={containerVariants}
                                custom={index}
                                key={index}
                            >
                                {text}
                            </motion.p>
                        ))}

                        <motion.h2
                            className="text-xl font-semibold mt-4 mb-2"
                            variants={containerVariants}
                            custom={1}
                        >
                            Dôležité upozornenia:
                        </motion.h2>

                        <motion.ul
                            className="list-disc pl-6 mb-4"
                            variants={containerVariants}
                            custom={1}
                        >
                            {jsonData.importantWarnings.map((warning: string, index: number) => (
                                <motion.li variants={listItemVariants} key={index} dangerouslySetInnerHTML={{ __html: warning}}></motion.li>
                            ))}
                        </motion.ul>

                        <motion.div
                            className=""
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            custom={2}
                        >
                            <h2 className="text-2xl text-text font-semibold mt-6 mb-2">
                                Čo potrebujete na vyšetrenie?
                            </h2>

                            <div className="flex flex-col sm:flex-row">
                                {jsonData.whatYouNeed.map((item: WhatYouNeedItem, index: number) => (
                                    <motion.div
                                        key={index}
                                        className="w-full text-text sm:w-1/2 bg-gradient-to-b from-main/40 to-primary space-y-4 p-4 sm:p-8 m-0 sm:m-2 flex flex-col justify-center items-center rounded-10 hover:scale-105 duration-500 shadow-md"
                                        variants={containerVariants}
                                        custom={index + 3}
                                    >
                                        <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                                        <p className="text-center text-sm text-black">{item.description}</p>
                                        <ul className="list-disc pl-2 sm:pl-6">
                                            {item.items.map((listItem: string, itemIndex: number) => (
                                                <motion.li
                                                    className="text-lg font-semibold underline py-2"
                                                    variants={listItemVariants}
                                                    key={itemIndex}
                                                >
                                                    {listItem}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className=""
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <div className=" space-y-4">
                                {/* Upozornenia */}
                                {jsonData.warnings.map((warning: string, index: number) => (
                                    <motion.p
                                        key={index}
                                        className="bg-gradient-to-r from-red-500/30 text-sm sm:text-base py-1 px-2 rounded-10"
                                        variants={fadeInVariants}
                                        custom={index}
                                    >
                                        <strong>{index === 0 ? "Upozornenie:" : "Pozor:"}</strong> {warning}
                                    </motion.p>
                                ))}

                                {/* Ako sa objednáte */}
                                <motion.h2
                                    className="text-2xl font-semibold mt-6 mb-2 text-text"
                                    variants={containerVariants}
                                    custom={9}
                                >
                                    Ako sa objednáte?
                                </motion.h2>

                                <div className="flex flex-col sm:flex-row">
                                    <motion.div
                                        className="w-full flex flex-col justify-around items-center space-y-4 m-0 sm:m-2 p-8 bg-gradient-to-l from-main/40 to-primary rounded-10 hover:scale-105 duration-500 shadow-lg"
                                        variants={containerVariants}
                                        custom={10}
                                    >
                                        <h3 className="text-xl font-semibold mt-4 text-text">
                                            Spôsoby objednania:
                                        </h3>
                                        <ul className="list-disc pl-6 mb-4 space-y-3">
                                            {jsonData.appointmentMethods.map((method: AppointmentMethod, index: number) => (
                                                <motion.li variants={listItemVariants} key={index}>
                                                    <span dangerouslySetInnerHTML={{ __html:method.text}}></span>

                                                    {method.link && ( // Ak existuje odkaz, zobraz ho
                                                        <a
                                                            href={method.link.href}
                                                            className="text-blue-500 underline ml-2"
                                                            target={method.link.href.startsWith("http") ? "_blank" : "_self"}
                                                            rel="noopener noreferrer"
                                                        >
                                                            {method.link.title}
                                                        </a>
                                                    )}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default First;
