import React from 'react';

function Button({ text }) {
  return (
    <button className="overflow-hidden self-center px-3 py-6 mt-24 max-w-full text-4xl font-semibold text-gray-50 whitespace-nowrap bg-red-400 border-black gap-[var(--sds-size-space-200)] min-h-[81px] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)] pt-[var(--sds-size-space-300)] rounded-[var(--sds-size-radius-200)] w-[283px] max-md:mt-10">
      {text}
    </button>
  );
}

export default Button;