import React from 'react';
import { Link } from 'react-router-dom'; // If using react-router for navigation
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex shrink-0 self-stretch bg-rose-100 rounded-3xl h-[416px] max-md:max-w-full">
      <div className="container mx-auto p-32">
        {/* Upper Section */}
        <div className="flex flex-wrap justify-between">
          {/* NSS CEG Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">NSS CEG</h3>
            <p className="mb-4">
              The National Service Scheme at the College of Engineering, Guindy, aims to develop
              students' personality through community service and engagement.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/NSSChennai/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-blue-600" />
              </a>
              <a href="https://twitter.com/nsschennai?lang=en" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-blue-400" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-500" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-blue-700" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li>
                <Link to="#about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Activities
                </Link>
              </li>
              <li>
                <Link to="#events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link to="#contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>
              National Service Scheme<br />
              College of Engineering, Guindy<br />
              Anna University, Chennai - 600025<br />
              Email:{' '}
              <a href="mailto:nssceg@annauniv.edu" className="hover:underline">
                nssceg@annauniv.edu
              </a>
              <br />
              Phone:{' '}
              <a href="tel:+914422345678" className="hover:underline">
                +91 44 2234 5678
              </a>
            </p>
          </div>
        </div>

        {/* Lower Section */}
        <div className="mt-8 border-t pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} NSS CEG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
