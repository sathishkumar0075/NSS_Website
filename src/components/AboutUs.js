import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="px-16 py-14 mt-28 bg-rose-100 rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-10 font-extrabold max-md:max-w-full">
            <h2 className="self-start text-7xl text-violet-950 max-md:text-4xl">
              About us
            </h2>
            <p className="mt-14 text-3xl text-black max-md:mt-10 max-md:max-w-full">
              The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. The NIT Jamshedpur unit of NSS consists of 200 Volunteers, along with a core team guided by the Program Coordinator and Program Officers. NSS Volunteers take part in various government led community service activities & programmes.
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/edfdbcf1ab72206bce6e9104ba79ec7f8b48fbfcb3316892cdcaa68ed2735df3?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="NSS Activities" className="object-contain grow w-full rounded-3xl aspect-[0.82] max-md:mt-10 max-md:max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;