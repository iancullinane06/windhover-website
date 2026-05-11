import React from "react";
import { LinkedinLogoIcon } from "@phosphor-icons/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[linear-gradient(180deg,#292524_0%,#1c1917_58%,#0c0a09_100%)] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="rounded-[2rem] border border-white/10 bg-white/4 px-6 py-8 shadow-[0_20px_45px_rgba(0,0,0,0.24)] backdrop-blur-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="mb-2 text-3xl font-serif font-light italic tracking-tight">Windhover</h2>
            <p className="text-sm text-stone-400 max-w-sm leading-6">
              Turning data into defense against invasive species.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-sm font-mono uppercase tracking-[0.12em]">
            <a href="/" className="rounded-full border border-white/10 px-4 py-2 text-stone-300 transition hover:border-sky-400/40 hover:text-sky-300">
              Home
            </a>
            <a
              href="/products"
              className="rounded-full border border-white/10 px-4 py-2 text-stone-300 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              Products
            </a>
            <a
              href="/pricing"
              className="rounded-full border border-white/10 px-4 py-2 text-stone-300 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              Pricing
            </a>
            <a
              href="/about-us"
              className="rounded-full border border-white/10 px-4 py-2 text-stone-300 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              About Us
            </a>
            <a
              href="/contact-us"
              className="rounded-full border border-white/10 px-4 py-2 text-stone-300 transition hover:border-sky-400/40 hover:text-sky-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social Media Icons */}
          <div className="flex gap-4">

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-3 text-stone-300 transition hover:border-[#0077b5]/30 hover:text-[#0077b5]"
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
      </div>
    </footer>
  );
};

export default Footer;