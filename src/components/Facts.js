import React from 'react';

const Facts = () => {
  return (
    <section className="flex flex-col items-start self-center mt-12 ml-7 w-full max-w-[1281px] max-md:mt-10 max-md:max-w-full">
      <h2 className="text-7xl font-extrabold text-black max-md:text-4xl">Facts</h2>
      <div className="flex flex-wrap gap-5 justify-between items-start mt-24 ml-24 max-w-full w-[953px] max-md:mt-10">
        <div className="flex flex-col my-auto font-extrabold whitespace-nowrap">
          <div className="flex flex-col self-end mb-[100px] ">
            <div className="z-10 text-8xl text-blue-800 max-md:text-4xl">300</div>
            <div className="self-center text-2xl text-black">Volunteers</div>
          </div>
        </div>
        <div className="flex flex-col self-end font-extrabold text-black whitespace-nowrap max-md:mt-10">
          <div className="self-center text-7xl max-md:text-4xl">1k</div>
          <div className="mb-[100px] text-2xl">Plantations</div>
        </div>
        <div className="flex flex-col self-end  font-extrabold text-black max-md:mt-10">
          <div className="text-7xl max-md:mr-1 max-md:text-4xl">10</div>
          <div className="mb-[100px] text-2xl">
            Medical  camps
          </div>
        </div>
        <div className="flex flex-col self-end  font-extrabold text-black max-md:mt-10">
          <div className="text-7xl max-md:mr-1 max-md:text-4xl">7</div>
          <div className="mb-[100px] text-2xl">
            Seminors
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default Facts;