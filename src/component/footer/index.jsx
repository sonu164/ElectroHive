import React from "react";
import {
  InstagramIcon,
  FacebookIcon,
  TwitchIcon,
  LinkedinIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-300 py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white">ElectroHive</h2>
          <p className="mt-4 text-sm">
            Delivering top-notch electronics with trust and innovation. Your
            one-stop shop for smart gadgets and home solutions.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/card" className="hover:text-white">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/history" className="hover:text-white">
                History
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Customer Support
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:support@electrohive.com"
                className="hover:text-white"
              >
                support@electrohive.com
              </a>
            </li>
            <li>
              <a href="tel:+911234567890" className="hover:text-white">
                +91 99158 63125
              </a>
            </li>
            <li>
              <p>Mon - Fri : 9:00 AM - 7:00 PM</p>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FacebookIcon className="w-6 h-6 hover:text-blue-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <InstagramIcon className="w-6 h-6 hover:text-pink-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <TwitchIcon className="w-6 h-6 hover:text-sky-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <LinkedinIcon className="w-6 h-6 hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ElectroHive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
