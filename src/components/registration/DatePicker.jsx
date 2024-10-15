import React from 'react';

function DatePicker({ label }) {
  return (
    <div className="flex flex-col self-start">
      <label htmlFor={label.toLowerCase().replace(' ', '-')} className="self-start text-xl font-semibold text-black">
        {label}
      </label>
      <div className="flex relative flex-col mt-10 w-full rounded min-h-[56px]">
        <div className="flex z-0 flex-col flex-1 w-full rounded border-pink-300 border-solid border-[3px]">
          <div className="flex flex-1 items-start py-1 pl-4 rounded size-full">
            <input
              type="date"
              id={label.toLowerCase().replace(' ', '-')}
              className="flex relative flex-1 shrink justify-center py-3 text-base tracking-wide leading-6 whitespace-nowrap basis-0 min-h-[48px] min-w-[240px] text-zinc-900"
            />
            <div className="flex flex-col justify-center items-center w-12 min-h-[48px]">
              <div className="flex overflow-hidden gap-2.5 justify-center items-center w-full max-w-[40px] rounded-[100px]">
                <div className="flex gap-2.5 justify-center items-center self-stretch p-2 my-auto w-10 h-10 bg-zinc-700 bg-opacity-10">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fe8342cf0b5d52e23a09f95e389b47e9dfbef80c803a0a3cf21af0233499bfd?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-5 flex-1 shrink gap-2.5 px-4 pt-1 max-w-full h-5 text-xs tracking-wide leading-4 whitespace-nowrap min-h-[20px] text-zinc-700 w-[312px]">
          MM/DD/YYYY
        </div>
      </div>
    </div>
  );
}

export default DatePicker;