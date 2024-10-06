import React from 'react';

const ContactForm = () => {
  return (
    <form className="flex flex-col grow px-11 pt-14 pb-7 w-full text-2xl font-medium text-black bg-white rounded-3xl border border-black border-solid shadow-[0px_4px_8px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h3 className="self-start text-4xl font-extrabold">SEND US A MESSAGE</h3>
      <div className="mt-24 max-md:mt-10 max-md:max-w-full">
        <label htmlFor="fullName" className="sr-only">Full Name</label>
        <input
          type="text"
          id="fullName"
          className="px-11 py-6 w-full bg-white rounded-3xl border border-black border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full"
          placeholder="Full Name"
        />
      </div>
      <div className="mt-9 max-md:max-w-full">
        <label htmlFor="email" className="sr-only">Email Address</label>
        <input
          type="email"
          id="email"
          className="px-11 py-6 w-full bg-white rounded-3xl border border-black border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full"
          placeholder="Email Address"
        />
      </div>
  

      <div className="mt-9 max-md:max-w-full">
        <label htmlFor="subject" className="sr-only">Subject</label>
        <input
          type="text"
          id="subject"
          className="px-11 py-6 w-full bg-white rounded-3xl border border-black border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full"
          placeholder="Subject"
        />
      </div>
      <div className="mt-12 mr-2.5 max-md:mt-10 max-md:max-w-full">
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          className="px-11 pt-2.5 pb-24 w-full bg-white rounded-3xl border border-black border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:pb-28 max-md:max-w-full"
          placeholder="Message"
        ></textarea>
      </div>
      <button
        type="submit"
        className="self-center px-16 py-7 mt-9 max-w-full font-extrabold whitespace-nowrap bg-lime-500 rounded-3xl border border-black border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[302px] max-md:px-5"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;