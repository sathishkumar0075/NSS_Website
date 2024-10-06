import React from 'react';
import ContactForm from './ContactForm.js';

const Contact = () => {
  return (
    <section id="contact" className="z-10 mt-32 w-full max-w-[1244px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-8 font-extrabold text-black max-md:mt-10 max-md:max-w-full">
            <h2 className="self-start text-7xl max-md:text-4xl">Contact us</h2>
            <p className="mt-12 text-2xl max-md:mt-10 max-md:max-w-full">
              Since inception of the NSS in the year 1969, the number of students strength increased from 40,000 to over 3.8 million up to the end of March 2018 students in various universities, colleges and Institutions of higher learning have volunteered to take part in various community service programmes.
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;