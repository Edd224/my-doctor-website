"use client";

import React from "react";
import { motion } from "framer-motion";

const Blood = () => {

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
            className="bg-gradient-to-bl from-main rounded-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="px-5 sm:px-10 pb-8">
                <h1 className="text-[30px] sm:text-[50px] text-center font-bold">Odbery krvi</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 items-baseline gap-12 p-5 sm:p-8 bg-white text-xl text-text rounded-10 space-y-2 sm:space-y-5">
                    <div>Ráno : 07:00 - 07:30<br /> ( streda 06:30 - 07:30 ) <br /><span className="text-base">*ak sa nedohodneme inak </span></div>
                    <div>Dostatok tekutín pred odberom</div>
                    <div>V prípade akútneho ochorenia termín upravíme po konzultácii</div>
                </div>
            </div>
        </motion.div>
    );
};

export default Blood;
