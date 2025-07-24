import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import profileImage from "../assets/me.jpg"; // Adjust the path as necessary
import { Link } from "react-router-dom";
// import Footer from "./Footer";
import About from "./About";
import Skill from "./Skill";

const Home = () => {
  return (
    <div>
      <div className="min-h-72 bg-gray-100 flex flex-col lg:flex-row mt-28">
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-6 md:p-12 flex flex-col justify-between order-2 lg:order-1">
          {/* Header */}
          <div>
            <div className="mb-8 lg:mb-16">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-8 mt-4 lg:mt-10">
                <span className="text-white font-bold text-lg">TG</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="mb-8 lg:mb-16">
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Hi, I am
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Clinton Chidera
              </h1>
              <p className="text-gray-600 text-base md:text-lg">
                Front-end Developer / UI Designer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8 lg:mb-0">
              <a
                href="https://github.com/Govamarket"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <Instagram size={18} className="text-gray-700" />
              </a>
              <a
                href="https://github.com/Govamarket"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <Github size={18} className="text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/cinton-chidera/"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <Linkedin size={18} className="text-gray-700" />
              </a>
            </div>
          </div>

          {/* Bottom Section - IT BERRIES */}
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/2 bg-black relative overflow-hidden order-1 lg:order-2 min-h-[400px] lg:min-h-screen lg:clip-path-polygon">
          {/* Navigation */}
          <nav className="absolute top-4 lg:top-20 left-4 right-4 lg:right-8 lg:left-auto z-10">
            <ul className="flex flex-wrap gap-4 lg:gap-8 text-xs lg:text-sm text-white justify-center lg:justify-end">
              <li>
                <Link to="/about">
                  <a
                    href="#"
                    className="hover:text-gray-300 transition-colors whitespace-nowrap"
                  >
                    About me
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/skill">
                  <a
                    href="#"
                    className="hover:text-gray-300 transition-colors whitespace-nowrap"
                  >
                    Skills
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  <a
                    href="#"
                    className="hover:text-gray-300 transition-colors whitespace-nowrap"
                  >
                    Portfolio
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <a
                    href="#"
                    className="bg-white text-black px-3 lg:px-4 py-1 lg:py-2 rounded-full hover:bg-gray-200 transition-colors text-xs lg:text-sm whitespace-nowrap"
                  >
                    CONTACT ME
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Profile Image */}
          <div className="absolute top-16 lg:top-44 left-1/2 lg:left-auto lg:right-20 transform -translate-x-1/2 lg:translate-x-0 w-48 h-60 lg:w-80 lg:h-96 overflow-hidden flex items-center justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Decorative Arrow - Hidden on mobile */}
          <div className="absolute bottom-16 right-16 hidden lg:block">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              className="text-white opacity-20"
            >
              <path
                d="M20 40 L60 40 M50 30 L60 40 L50 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Background Pattern - Simplified for mobile */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-16 lg:w-32 h-16 lg:h-32 border border-white rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/3 w-8 lg:w-16 h-8 lg:h-16 border border-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for clip-path */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .lg\\:clip-path-polygon {
            clip-path: polygon(25% 0%, 100% 0%, 100% 99%, 0% 100%);
          }
        }
      `}</style>
      <div>
        <About />
      </div>
      <div>
        <Skill />
      </div>
      <div>{/* <Footer /> */}</div>
    </div>
  );
};

export default Home;
