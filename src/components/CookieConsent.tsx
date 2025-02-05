"use client"

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieConsent = Cookies.get("cookieConsent");
        if (!cookieConsent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        Cookies.set("cookieConsent", "accepted", { expires: 365 });
        setIsVisible(false);
    };

    const declineCookies = () => {
        Cookies.set("cookieConsent", "declined", { expires: 365 });
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                    className="w-1/2 fixed z-50 bottom-10 left-0 bg-gradient-to-bl from-main to-text text-white p-5 rounded-lg shadow-xl flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6 border border-white"
                >
                    <p className="text-sm sm:text-base">
                        Táto stránka používa cookies na zlepšenie užívateľského zážitku. Súhlasíte?
                    </p>
                    <div className="flex space-x-3">
                        <button
                            onClick={acceptCookies}
                            className="bg-main text-white px-5 py-2 rounded-lg text-sm font-medium transition hover:bg-green-600 shadow-md"
                        >
                            Súhlasím
                        </button>
                        <button
                            onClick={declineCookies}
                            className="bg-slate-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition hover:bg-red-600 shadow-md"
                        >
                            Odmietnuť
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
