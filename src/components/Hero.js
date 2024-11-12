import React from 'react';

const Hero = () => {
  return (
    <section className="flex relative flex-col justify-center items-start px-12 py-44 mt-16 w-full rounded-3xl min-h-[707px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cd24678eeb2cddbbb8a22ac4c208578f6eefb22f276e4ab037e2b4f20ac0fc6?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="Background" className="object-cover absolute inset-0 size-full rounded-xl" />
      <div className="relative -mb-9 w-full max-w-screen-lg max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a772a7b3f29df5f6d2a95088e5305d7f7a4bdf7ea62af8b6a6b24581a5d6d21?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="NSS Logo" className="object-contain w-full aspect-[1.02] max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow mt-6 text-7xl font-extrabold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <h1 className="text-white max-md:max-w-full max-md:text-4xl">
                National Service Scheme
              </h1>
              <p className="mt-24 mr-10 text-red-600 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
                Not Me But You
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;