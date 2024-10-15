import React from 'react';

function SelectField({ label, options }) {
  return (
    <div className="flex flex-col max-w-full w-[340px]">
      <label htmlFor={label.toLowerCase().replace(' ', '-')} className="self-start text-xl font-semibold text-black">
        {label}
      </label>
      <div className="flex mt-7 leading-none font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-body-size-medium)]">
        <div className="flex flex-col grow shrink-0 mr-0 basis-0 min-h-[51px] w-fit">
          <select
            id={label.toLowerCase().replace(' ', '-')}
            className="overflow-hidden flex-1 shrink self-stretch px-4 py-3 w-full border-pink-500 bg-white bg-opacity-10 min-w-[240px] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-400)] pr-[var(--sds-size-space-400)] pt-[var(--sds-size-space-300)] rounded-[var(--sds-size-radius-200)]"
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SelectField;