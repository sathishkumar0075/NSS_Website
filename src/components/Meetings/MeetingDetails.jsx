import React from 'react';
import AttendanceItem from './Attendanceitem';

const attendanceData = [
  { name: "Amanda Lee", status: "Present", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa0b0d8a48d4cd827070f55a4087c265603c41f9d68c7dbb6f2cde9235a34241?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" },
  { name: "Brandon Smith", status: "Absent", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/32c02064565386f8fc08da589d3d1ae098e84fcadcf862316707397cbfe81887?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" },
  { name: "Catherine Johnson", status: "Present", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/152aeb41e77f85024d970131952ffa9aec4a5c635b57d2f8d537d811b90fcb9c?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" },
  { name: "Daniel Kim", status: "Absent", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6fb86e9cbe2505cbc8b3cfbcb26578de7319445c8171a69a625757baec091e4?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" },
  { name: "Elena Brown", status: "Present", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3b9c4c99c5fdca0454b991cb49e81991bbb0885b50d42c69f17d4d947c57a5b?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" },
  { name: "Frank Miller", status: "Absent", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/80a84ac62d18e075a27e16a4c7330453485660515c9563388ec970e92df12f0f?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" },
  { name: "Gabriella Garcia", status: "Present", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/70e635ae64fb73aa4c4b8d31d1f1c5862b1c28ad813d004a61e5eb294bc91fa8?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" },
  { name: "Henry Davis", status: "Absent", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/37c2467f9db91e302b23f6f9c55714e11945cd5188786ec7abbb06a856f90615?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" },
  { name: "Isabella Martinez", status: "Present", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/be2324c4378e9be41ca1bfb9b9ec79ca0fb65e240eb9fa7dc53d86c817bc29d7?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" },
];

function MeetingDetails() {
  return (
    <section className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col px-1 pt-11 pb-44 mx-auto w-full bg-black bg-opacity-0 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col items-start w-96 max-w-full">
          <h1 className="self-stretch mr-7 ml-5 text-3xl font-semibold text-zinc-900 max-md:mx-2.5">
            General Body Meeting
          </h1>
          <p className="mt-4 ml-5 text-sm font-semibold text-gray-400 max-md:ml-2.5">
            9/13/22,6:00PM
          </p>
          <h2 className="mt-10 ml-5 text-base font-semibold text-zinc-700 max-md:ml-2.5">
            Mark Attendance
          </h2>
          {attendanceData.map((item, index) => (
            <AttendanceItem key={index} {...item} />
          ))}
          <button className="flex flex-col justify-center p-1.5   max-w-full text-sm mt-4 font-semibold bg-black bg-opacity-0 text-slate-100 w-[491px]">
            <span className="px-12 py-3 bg-pink-500 rounded-xl border min-w-[500px] border-blue-500 border-solid max-md:px-5 max-md:max-w-full">
              Save Attendance
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default MeetingDetails;