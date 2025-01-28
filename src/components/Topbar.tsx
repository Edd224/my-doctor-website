

import React from "react";
import Link from "next/link";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const TopBar: React.FC = () => {
    return (
        <div className="w-full h-[50px] items-center justify-between hidden md:flex">
            {/* Kontaktné informácie */}
            <div className="flex items-center text-white justify-end w-2/3 pr-3 space-x-8 text-sm">
                {/* <div className="flex items-center space-x-2">
                    <EnvelopeIcon className="h-5 w-5" />
                    <a href="mailto:info@ambulancia.sk" className="underline hover:text-black">
                        info@ambulancia.sk
                    </a>
                </div> */}
                <div className="flex items-center space-x-2">
                    <MapPinIcon className="h-5 w-5" />
                    <p>Ľ. Štúra 1920, 01901 Ilava</p>
                </div>
                <div className="flex items-center space-x-2">
                    <PhoneIcon className="h-5 w-5" />
                    <a href="tel:+421912345678" className="underline hover:text-black">
                    +421 918 243 490
                    </a>
                </div>
            </div>

            {/* Linky na sociálne siete */}
            <div
                className="flex items-center justify-center w-1/3 space-x-6 bg-gradient-to-l from-primary to-secondary px-10 py-4"
                style={{
                    clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)",
                }}
            >        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 hover:text-teal-900"
                    >
                        <path
                            d="M22.675 0h-21.35C.596 0 0 .592 0 1.325v21.351C0 23.405.596 24 1.325 24h11.495v-9.294H9.69v-3.622h3.129V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.793.143v3.238l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.591l-.467 3.622h-3.124V24h6.127C23.405 24 24 23.405 24 22.676V1.325C24 .592 23.405 0 22.675 0z"
                        />
                    </svg>
                </Link>
                <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 hover:text-teal-900"
                    >
                        <path d="M24 4.556a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.978 13.978 0 0 1 1.671 3.149 4.915 4.915 0 0 0 3.18 9.725a4.902 4.902 0 0 1-2.23-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 .96 19.085a13.945 13.945 0 0 0 7.548 2.213c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0 0 24 4.556z" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default TopBar;
