import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import MeetingList from './MeetingList';

function ScheduledMeetings() {
  return (
    <main className="flex overflow-hidden flex-col bg-black bg-opacity-0">
      <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex relative flex-col pt-1.5 pb-64 w-full min-h-[1440px] max-md:pb-24 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2a9f7b0c1d8d8bd0aec3106cf9792c63ddd01db11223bef3c4606b7894dad92?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="" className="object-cover absolute inset-0 size-full" />
          <Header />
          <section className="flex relative flex-col self-center mt-11 mb-0 ml-2.5 w-full max-w-[1139px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
            <h1 className="z-10 self-start ml-10 text-6xl font-semibold text-zinc-900 max-md:ml-2.5 max-md:text-4xl">
              Scheduled meetings
            </h1>
            <div className="px-16 py-11 mr-4 bg-black bg-opacity-0 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1054ef48df53ce621f8751814b1f5314a8385ff603cc9c92b6c12503dc3c1aee?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="" className="object-contain grow shrink-0 aspect-[0.82] w-[23px] max-md:mt-10" />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c8c7bec70d9a152cfcbc72794c3b4a7e23759cfa124be9d5128fcbb65b336c1?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="" className="object-contain grow shrink-0 aspect-[0.84] w-[21px] max-md:mt-10" />
                </div>
              </div>
            </div>
            <SearchBar />
            <MeetingList />
          </section>
        </div>
      </div>
    </main>
  );
}

export default ScheduledMeetings;