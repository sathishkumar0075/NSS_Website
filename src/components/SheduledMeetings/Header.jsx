import React from 'react';

function Header() {
  return (
    <header className="flex relative flex-col py-1.5 w-full font-semibold bg-black bg-opacity-0 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1264px] max-md:max-w-full">
        <h2 className="my-auto text-2xl text-neutral-700">Upcoming</h2>
        <nav className="flex gap-6 max-md:max-w-full">
          <div className="flex flex-col grow shrink-0 justify-center items-start px-12 py-2 text-lg text-gray-400 whitespace-nowrap basis-0 bg-black bg-opacity-0 w-fit max-md:pl-5">
            <div className="flex gap-5 px-5 py-5 bg-rose-100 rounded-xl">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b964f19c40bdb297b9b9c6e20322959c3dcce93417f0d9a1d7b93a24ed60373?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="" className="object-contain shrink-0 aspect-[0.61] w-[22px]" />
              <span className="my-auto basis-auto">Search</span>
            </div>
          </div>
          <button className="flex flex-col justify-center px-2 py-2 text-base bg-black bg-opacity-0 text-zinc-600">
            <span className="px-6 py-7 bg-rose-100 rounded-xl max-md:px-5">Log in</span>
          </button>
        </nav>
      </div>
      <div className="flex shrink-0 mt-4 h-0.5 bg-zinc-100 max-md:max-w-full" />
    </header>
  );
}

export default Header;