import React from "react";

import InputField from "./InputField";
import TextArea from "./TextArea";
import Button from "./Button";

function NewMeeting() {
  return (
    <main className="flex overflow-hidden flex-col bg-black bg-opacity-0">
      <div className="flex flex-col w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="flex relative flex-col pb-14 w-full min-h-[1440px] max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/697dc7c204974aec0eb99183d8eadd5a10960fc9568e16e5962fa059672197d2?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="" className="object-cover absolute inset-0 size-full" />
       
          <section className="flex relative flex-col items-start pr-px pl-20 mt-20 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            <h1 className="ml-28 text-4xl font-semibold text-zinc-900 max-md:ml-2.5">New Meeting</h1>
            <p className="mt-6 ml-28 text-base font-semibold text-neutral-400 max-md:ml-2.5">Schedule a new meeting</p>
            <form className="flex flex-col mt-8 ml-20 max-w-full w-[569px] max-md:px-5">
              <InputField label="Title" placeholder="Example:1:1 with Jane" />
              <InputField label="Date" placeholder="MM/DD/YYYY" type="date" />
              <InputField label="Time" placeholder="12:00 PM" type="time" />
              <InputField label="Venue" placeholder="Example: Zoom link, Room 123" />
              <TextArea label="Description" placeholder="Optional: Add a description" />
              <TextArea label="Purpose" placeholder="Optional: Add a purpose" />
              <div className="flex justify-end gap-8 mt-4">
                <Button variant="text">Cancel</Button>
                <Button variant="primary">Create Meeting</Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default NewMeeting;