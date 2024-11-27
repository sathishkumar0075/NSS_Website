// EventCard.js

import React from 'react';

const BASE_URL = 'http://localhost:5000'; // Update with your backend base URL

const EventCard = ({ profile_image, event_image, likes, comments, shares, description }) => {
  // Construct full URLs for images
  const profileImageUrl =
    profile_image && profile_image.startsWith('http')
      ? profile_image
      : `${BASE_URL}${profile_image || '/uploads/default_profile_image.jpg'}`;

  const eventImageUrl =
    event_image && event_image.startsWith('http')
      ? event_image
      : `${BASE_URL}${event_image || '/uploads/default_event_image.jpg'}`;

  console.log('Profile Image URL:', profileImageUrl); // Debugging the URL
  console.log('Event Image URL:', eventImageUrl); // Debugging the URL

  return (
    <article className="flex flex-col py-8 bg-white rounded-3xl border border-black shadow-md w-80">
      <div className="flex gap-4 items-center text-2xl">
        <img
          loading="lazy"
          src={profileImageUrl}
          alt="Profile"
          className="object-cover rounded-full ml-4 w-[43px] h-[43px]"
        />
        <div className="font-semibold">nss-ceg</div>
      </div>
      <img
        loading="lazy"
        src={eventImageUrl}
        alt="Event"
        className="object-cover mt-3 w-full h-64"
      />
      <div className="flex flex-col items-start px-4 mt-3 w-full">
        <div className="flex gap-4 text-2xl items-center">
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f73be453814059cad840a24930b63a03e1d26981429ce2f194e2d1ffbf5d866?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307"
              alt="Likes"
              className="object-contain w-8 h-8"
            />
            <span className="ml-2">{likes}</span>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fce5e1fc4a3af8f9d7d2d01d1dd2067cb57803ef39b6385a4c7e91315e769e6?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307"
              alt="Comments"
              className="object-contain w-8 h-8"
            />
            <span className="ml-2">{comments}</span>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fd5c915727be0093fde4f8f2dccecd29b47dcb46a68abeec46111be70a6fa8b?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307"
              alt="Shares"
              className="object-contain w-8 h-8"
            />
            <span className="ml-2">{shares}</span>
          </div>
        </div>
        <p className="mt-4 text-base line-clamp-3 overflow-hidden min-h-[195px]">{description}</p>
      </div>
    </article>
  );
};

export default EventCard;
