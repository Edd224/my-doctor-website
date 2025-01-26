"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import menuData from "../../public/data/menu.json"; // Import JSON dát
import { FaBars, FaTimes } from "react-icons/fa";
import { CaretUp } from "@phosphor-icons/react" // Ikony pre hamburger menu

const Header: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Stav pre mobilné menu

  const handleMouseOver = (title: string) => {
    setOpenDropdown(title);
  };

  const handleMouseOut = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-teal-700 to-teal-400 text-white py-4 shadow-md z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="div">
          <h1 className="text-xl text-nowrap font-bold">MUDr. Marína Hantáková</h1>
          <span className="italic">klinická imunológia a alergológia</span>
        </div>

        {/* Hamburger menu pre mobil */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop verzia */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex items-center space-x-6">
            {/* Dynamické vykresľovanie menu z JSON */}
            {menuData.menu.map((menuItem) => (
              <li
                key={menuItem.title}
                className="relative group"
                onMouseOver={() => handleMouseOver(menuItem.title)}
                onMouseOut={handleMouseOut}
              >
                {menuItem.submenu ? (
                  <>
                    <button className="flex items-center px-4 py-2 hover:scale-110">
                      {menuItem.title}
                      <span
                        className={`ml-2 transition-transform duration-500 transform ${openDropdown === menuItem.title
                            ? "rotate-180"
                            : "rotate-0"
                          }`}
                      >
                        <CaretUp size={15} />
                      </span>
                    </button>
                    {openDropdown === menuItem.title && (
                      <motion.ul
                        className="absolute top-full left-0 w-56 bg-white text-black shadow-md mt-0 rounded-md"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.8 }}
                      >
                        {menuItem.submenu.map((submenuItem, index) => (
                          <li key={index}>
                            <Link
                              href={submenuItem.link}
                              className="block px-4 py-2 hover:text-white hover:bg-gradient-to-r from-teal-700 to-teal-400 shadow focus:outline-none focus:ring-4 focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
                            >
                              {submenuItem.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={menuItem.link}
                    className="block px-4 py-2 hover:scale-110"
                  >
                    {menuItem.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobilné menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-teal-700 text-white flex flex-col items-center justify-center z-30"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <ul className="space-y-6 text-">
              {menuData.menu.map((menuItem) => (
                <li key={menuItem.title} className="relative items-center justify-start ">
                  {menuItem.submenu ? (
                    <>
                      <button
                        className="text-lg font-semibold flex items-center justify-center"
                        onClick={() =>
                          setOpenDropdown((prev) =>
                            prev === menuItem.title ? null : menuItem.title
                          )
                        }
                      >
                        {menuItem.title}
                        <span
                          className={`ml-2 transition-transform duration-500 transform ${openDropdown === menuItem.title
                              ? "rotate-180"
                              : "rotate-0"
                            }`}
                        >
                          <CaretUp size={20} />
                        </span>
                      </button>
                      {openDropdown === menuItem.title && (
                        <motion.ul
                          className="mt-2 bg-white text-black rounded-md"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {menuItem.submenu.map((submenuItem, index) => (
                            <li key={index}>
                              <Link
                                href={submenuItem.link}
                                className="block px-4 py-2 hover:bg-gray-200"
                                onClick={closeMobileMenu} // Zavrie menu po kliknutí
                              >
                                {submenuItem.title}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={menuItem.link}
                      className="text-lg font-semibold"
                      onClick={closeMobileMenu} // Zavrie menu po kliknutí
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
