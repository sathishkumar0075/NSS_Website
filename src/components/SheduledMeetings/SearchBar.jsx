import React from 'react';

function SearchBar() {
  return (
    <form className="flex z-10 flex-col px-6 pt-1 pb-5 mt-2.5 mr-6 text-lg text-gray-400 bg-black bg-opacity-0 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-2.5 py-2 w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex flex-wrap gap-3 px-5 py-7 bg-rose-100 rounded-2xl">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccef6af0443cf5973ac7c526f26a90ae09b7ad18780c4521eff1ffe0d60a4089?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="" className="object-contain shrink-0 aspect-[0.66] w-[23px]" />
          <label htmlFor="searchMeetings" className="sr-only">Search meetings</label>
          <input
            type="text"
            id="searchMeetings"
            className="flex-auto my-auto w-[965px] max-md:max-w-full bg-transparent border-none focus:outline-none"
            placeholder="Search meetings"
          />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;