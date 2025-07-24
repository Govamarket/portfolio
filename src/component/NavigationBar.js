import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TableOfContents, X } from "lucide-react";

const NavigationBar = () => {
  const [openToggle, setOpenToggle] = useState(false);

  const navLinks = [
    { to: "/about", label: "About Me" },
    { to: "/skill", label: "Skills" },
    { to: "/portfolio", label: "Portfolio" },
    {
      to: "/contact",
      label: "Contact Us",
      className:
        "bg-white text-black rounded px-4 py-2 hover:text-gray-200 hover:bg-gray-800 transition",
    },
  ];

  return (
    <nav className="bg-black shadow-md fixed  top-0 z-50 w-full">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-white font-bold text-xl">
          <Link to="/">My Portfolio</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setOpenToggle(!openToggle)}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {openToggle ? <X size={28} /> : <TableOfContents size={28} />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.to}
                className={
                  link.className || "text-white hover:text-gray-200 transition"
                }
                onClick={() => setOpenToggle(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 bg-black ${
          openToggle
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.to}
                className={
                  link.className || "text-white hover:text-gray-200 transition"
                }
                onClick={() => setOpenToggle(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
