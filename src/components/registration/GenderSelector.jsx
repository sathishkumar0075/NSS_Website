import React from 'react';

function GenderSelector({ gender, onChange }) {
  return (
    <fieldset className="flex flex-col items-start self-end mt-7">
      <legend className="text-xl font-semibold text-black">Gender</legend>
      <div className="flex gap-10 mt-10 ml-4 w-full max-md:ml-2.5">
        {/* Male Option */}
        <label className="flex flex-1 cursor-pointer">
          <input 
            type="radio" 
            name="gender" 
            value="male" 
            className="sr-only" 
            checked={gender === 'male'} 
            onChange={onChange} 
          />
          <div className="flex justify-center items-center min-h-[48px]">
            <div className="flex overflow-hidden justify-center items-center self-stretch my-auto w-10 rounded-full">
              <div className="flex justify-center items-center self-stretch p-2 my-auto w-10">
                
              </div>
            </div>
          </div>
          <span className="my-auto text-xl font-semibold text-black">Male</span>
        </label>
        
        {/* Female Option */}
        <label className="flex flex-1 cursor-pointer gap-2.5 my-auto text-xl font-semibold text-black whitespace-nowrap">
          <input 
            type="radio" 
            name="gender" 
            value="female" 
            className="sr-only" 
            checked={gender === 'female'} 
            onChange={onChange} 
          />
          <div className="flex justify-center items-center min-h-[48px]">
            <div className="flex overflow-hidden justify-center items-center self-stretch my-auto w-10 rounded-full">
              <div className="flex justify-center items-center self-stretch p-2 my-auto w-10">
                
              </div>
            </div>
          </div>
          <span>Female</span>
        </label>
      </div>
    </fieldset>
  );
}

export default GenderSelector;
