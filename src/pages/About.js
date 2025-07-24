import React from "react";
import { useState } from "react";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <button
          onClick={toggleModal}
          className="text-black border border-black px-4 py-2 transition hover:bg-black hover:text-white"
        >
          About Me
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-200 max-w-4xl w-full max-h-96 overflow-y-auto rounded-lg relative">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-black hover:text-gray-600 text-2xl z-10"
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="py-16 px-8 text-center">
              {/* Header */}
              <div className="mb-12">
                <div className="inline-block border-2 border-black px-7 py-3 text-sm font-bold tracking-widest uppercase mb-8">
                  ABOUT ME
                </div>
                <p className="text-xs text-gray-600 max-w-lg mx-auto mb-8 leading-loose">
                  👋 Hi, I'm Clinton 🎨 I specialize in UI/UX and Frontend
                  Development 🧠 Strong in Web3 – Solidity, React, JS, Smart
                  Contracts 🌱 Currently building decentralized tools and dApps
                  💼 Chief Editor @DappLab – Writing on airdrops, testnets &
                  crypto insights 🤝 Open to Web3 collabs, especially
                  frontend-heavy projects 📫 Reach me on Linktree ⚡ Fun fact: I
                  turn ideas into slick Web3 interfaces 🚀
                </p>
                <a
                  href="#"
                  className="inline-block border border-black px-5 py-2 text-xs tracking-wider uppercase text-black hover:bg-black hover:text-gray-200 transition-all duration-300"
                >
                  EXPLORE
                </a>
              </div>

              {/* Decorative Line */}
              <div className="flex items-center justify-center my-12 gap-4">
                <div className="w-20 h-px bg-black"></div>
                <div className="text-black text-base">♔</div>
                <div className="w-20 h-px bg-black"></div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-2xl mx-auto my-12">
                <div className="text-center">
                  <div className="text-xs font-bold tracking-widest uppercase mb-4 text-black">
                    DESIGN
                  </div>
                  <p className="text-xs text-gray-600 leading-loose">
                    I love design because of beauty that inspires and engages. I
                    also create, play and user-focused and visual interesting
                    and converting the path.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold tracking-widest uppercase mb-4 text-black">
                    DEVELOPMENT
                  </div>
                  <p className="text-xs text-gray-600 leading-loose">
                    I love design the UI based on the stages and possibilities.
                    I can put that PSD file into a modern and future-proof
                    working website.
                  </p>
                </div>
              </div>

              {/* Maintenance Section */}
              <div className="text-center mt-12">
                <div className="text-xs font-bold tracking-widest uppercase mb-4 text-black">
                  MAINTENANCE
                </div>
                <p className="text-xs text-gray-600 leading-loose max-w-md mx-auto">
                  I'm keeping the site before live your website and experiences.
                  I can provide the maintenance and updating you need to keep
                  your running.
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="flex items-center justify-center mt-12 gap-4">
                <div className="w-20 h-px bg-black"></div>
                <div className="text-black text-base">♔</div>
                <div className="w-20 h-px bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
