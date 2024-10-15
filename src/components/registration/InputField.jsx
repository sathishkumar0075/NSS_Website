import React from 'react';

function InputField({ label, placeholder, type = 'text' }) {
  return (
    <div className="flex flex-col max-w-full w-[331px]">
      <label htmlFor={label.toLowerCase().replace(' ', '-')} className="self-start text-xl font-semibold text-black">
        {label}
      </label>
      <div className="flex flex-col mt-9 w-full leading-none font-[number:var(--sds-typography-body-font-weight-regular)] min-h-[51px] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-body-size-medium)]">
        <input
          type={type}
          id={label.toLowerCase().replace(' ', '-')}
          placeholder={placeholder}
          className="overflow-hidden flex-1 shrink self-stretch px-4 py-3 w-full border-rose-500 bg-red-100 bg-opacity-10 min-w-[240px] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-400)] pr-[var(--sds-size-space-400)] pt-[var(--sds-size-space-300)] rounded-[var(--sds-size-radius-200)]"
        />
      </div>
    </div>
  );
}

export default InputField;