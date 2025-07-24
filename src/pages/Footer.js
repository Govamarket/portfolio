import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Built with <span className="text-red-500">♥</span> using React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
