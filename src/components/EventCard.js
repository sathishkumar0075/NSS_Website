import React from 'react';

const EventCard = ({ profileImage, eventImage, likes, comments, shares, description }) => {
  return (
    <article className="flex flex-col py-8 bg-white rounded-3xl border border-black border-solid shadow-[0px_4px_7px_rgba(0,0,0,0.25)]">
      <div className="flex gap-4 self-start text-2xl whitespace-nowrap max-md:ml-2">
        <img loading="lazy" src={profileImage} alt="Profile" className="object-contain ml-4 shrink-0 aspect-[1.02] w-[43px]" />
        <div className="my-auto">nss-ceg</div>
      </div>
      <img loading="lazy" src={eventImage} alt="Event" className="object-contain mt-3 w-full aspect-[1.01]" />
      <div className="flex flex-col items-start pr-14 pl-2 mt-3 w-full max-md:pr-5">
        <div className="flex gap-2 text-2xl whitespace-nowrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f73be453814059cad840a24930b63a03e1d26981429ce2f194e2d1ffbf5d866?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="Likes" className="object-contain shrink-0 self-start aspect-square w-[35px]" />
          <div className="my-auto">{likes}</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fce5e1fc4a3af8f9d7d2d01d1dd2067cb57803ef39b6385a4c7e91315e769e6?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="Comments" className="object-contain shrink-0 self-start aspect-square w-[35px]" />
          <div className="my-auto">{comments}</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fd5c915727be0093fde4f8f2dccecd29b47dcb46a68abeec46111be70a6fa8b?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="Shares" className="object-contain shrink-0 self-start mt-1 aspect-square w-[35px]" />
          <div>{shares}</div>
        </div>
        <p className="mt-5 text-base">{description}</p>
      </div>
    </article>
  );
};

export default EventCard;