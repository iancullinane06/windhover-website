import React from "react";
import { InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-stone-900 to-stone-700 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-mono font-bold mb-2">Windhover</h2>
            <p className="text-sm text-stone-400">
              Turning data into defense against invasive species.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a href="/" className="text-stone-300 hover:text-sky-400 transition">
              Home
            </a>
            <a
              href="/products"
              className="text-stone-300 hover:text-sky-400 transition"
            >
              Products
            </a>
            <a
              href="/pricing"
              className="text-stone-300 hover:text-sky-400 transition"
            >
              Pricing
            </a>
            <a
              href="/about-us"
              className="text-stone-300 hover:text-sky-400 transition"
            >
              About Us
            </a>
            <a
              href="/contact-us"
              className="text-stone-300 hover:text-sky-400 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-sky-400"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social Media Icons */}
          <div className="flex gap-4">

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-[#0077b5] transition"
            >
              <LinkedinLogoIcon className="fill-current"/>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-stone-400">
            © {new Date().getFullYear()} Windhover. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;