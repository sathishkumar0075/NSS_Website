import React from "react";

function TextArea({ label, placeholder }) {
  return (
    <div className="flex flex-col px-6 pt-4 pb-1 mt-2.5 max-w-full text-lg font-semibold bg-black bg-opacity-0 w-full">
      <label htmlFor={label.toLowerCase()} className="self-start text-neutral-600 max-md:ml-2">{label}</label>
      <div className="flex flex-col mt-1.5 bg-black bg-opacity-0 text-zinc-500 max-md:max-w-full">
        <div className="flex flex-col bg-white max-md:max-w-full">
          <div className="flex flex-col justify-center p-2 bg-black bg-opacity-0 max-md:max-w-full">
            <textarea
              id={label.toLowerCase()}
              placeholder={placeholder}
              className="px-5 pt-7 pb-28 bg-white rounded-xl border border-solid border-neutral-200 max-md:pr-5 max-md:pb-28 max-md:max-w-full resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextArea;