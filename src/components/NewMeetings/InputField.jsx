import React from "react";

function InputField({ label, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col px-5 py-3 mt-1.5 max-w-full text-lg bg-black bg-opacity-0 w-full">
      <label htmlFor={label.toLowerCase()} className="self-start text-neutral-500 max-md:ml-2">{label}</label>
      <div className="flex flex-col justify-center p-2 mt-3 w-full bg-black bg-opacity-0 text-zinc-500 max-md:max-w-full">
        <div className="flex relative flex-col flex-wrap gap-5 justify-between px-5 py-6 w-full rounded-xl min-h-[69px] max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/db0688879f479f3800faf0a83ec883dbccfc370cced2d9ed1e4c010650797c22?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="" className="object-cover absolute inset-0 size-full" />
          <input
            type={type}
            id={label.toLowerCase()}
            placeholder={placeholder}
            className="relative w-full bg-transparent border-none outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default InputField;