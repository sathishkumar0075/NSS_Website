import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-wrap gap-2 justify-between px-8 py-3 w-full text-xl font-extrabold text-white bg-pink-500 rounded-3xl shadow-[0px_4px_6px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-4 whitespace-nowrap">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1852c618a50dabebf29b34d94c81d63c224d466c4bf239d9499a10d0e97fbe85?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="" className="object-contain shrink-0 aspect-[1.02] w-[43px]" />
        <div className="self-start basis-auto mt-2">NSS-CEG</div>
      </div>
      <nav className="flex flex-wrap gap-9 my-auto max-md:max-w-full">
        <a href="#home" className="grow">Home</a>
        <a href="#events">Events</a>
        <a href="#news">News</a>
        <a href="#about" className="basis-auto">About us</a>
        <a href="#contact" className="basis-auto">Contact us</a>
      </nav>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/39a95f273ee9ed9d6ab92224ad31a585c48bcb5dce4ba97b2dff79f23adbfa09?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="" className="object-contain shrink-0 aspect-[1.07] w-[45px]" />
    </header>
  );
};

export default Header;