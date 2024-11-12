import React from 'react';
import Header from './Header.js';
import Hero from './Hero.js';
import AboutUs from './AboutUs.js';
import Events from './Events.js';
import Facts from './Facts.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

const MainPage = () => {
  
  return (
    <div className="flex overflow-hidden flex-col pt-16 bg-white">
      <div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
        <Header />
        <Hero />
        <AboutUs />
        <Events />
        <Facts />
        <Contact />
        <Footer />
      </div>
      <style jsx>{`
        builder-component {
          max-width: none !important;
        }
      `}</style>
    </div>
  );
};

export default MainPage;