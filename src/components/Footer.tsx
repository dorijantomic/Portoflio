import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © <span id="year">{new Date().getFullYear()}</span> Dorijan Tomić.
          Crafted with ❤️ in Osijek.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
