import React from 'react';
import EventCard from './EventCard.js';

const Events = () => {
  const eventsData = [
    {
      profileImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/1852c618a50dabebf29b34d94c81d63c224d466c4bf239d9499a10d0e97fbe85?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307",
      eventImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a31ece05a0bf57d674c0f2bcafc67ee616bc2797ee15186eb58acc4ba057c20?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307",
      likes: "2.1K",
      comments: "100",
      shares: "150",
      description: "Literacy is a right, not a privilege. Reading is a conversation. All books talk, but a good book listens as well. Today a reader, tomorrow a leader. 🌟 Join us in the Poster Design Contest for Literacy Week! Capture the essence of these themes in your design."
    },
    {
      profileImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/1852c618a50dabebf29b34d94c81d63c224d466c4bf239d9499a10d0e97fbe85?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307",
      eventImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/e389cf0c7a0821dff14edd6c522aecdd2dac2ced24225559e754fdccbd9b3dee?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307",
      likes: "7.2K",
      comments: "400",
      shares: "50",
      description: "Literacy is a right, not a privilege. Reading is a conversation. All books talk, but a good book listens as well. Today a reader, tomorrow a leader. 🌟 Join us in the Poster Design Contest for Literacy Week! Capture the essence of these themes in your design."
    },
    {
      profileImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/1852c618a50dabebf29b34d94c81d63c224d466c4bf239d9499a10d0e97fbe85?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307",
      eventImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d658fb5cb489303bee66bce1f4abaf5633cca85bcf19a87b5c7edbb2b03f599?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307",
      likes: "5.1K",
      comments: "300",
      shares: "100",
      description: "Literacy is a right, not a privilege. Reading is a conversation. All books talk, but a good book listens as well. Today a reader, tomorrow a leader. 🌟 Join us in the Poster Design Contest for Literacy Week! Capture the essence of these themes in your design."
    }
  ];

  return (
    <section id="events" className="mt-24 max-md:mt-10">
      <h2 className="self-start ml-7 text-7xl font-extrabold text-black max-md:ml-2.5 max-md:text-4xl">Events</h2>
      <div className="flex gap-5 justify-between mt-16 ml-3.5 font-extrabold text-black max-md:mt-10 max-md:mr-1.5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3210fd227f953af586b2592c4dd660ea082c9adbaf82693579a74db338196ea3?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="" className="object-contain shrink-0 my-auto w-12 aspect-square" />
        {eventsData.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/24f79c34bb642d3374772921a30f0f296a6d057f6fc5c132caf4c724d497cf92?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307" alt="" className="object-contain shrink-0 my-auto w-12 aspect-square" />
      </div>
      {/* <div className="flex gap-5 justify-between self-center mt-9 w-40 max-w-full">
        <div className="flex shrink-0 w-7 h-7 bg-black" />
        <div className="flex shrink-0 bg-black h-[27px] w-[27px]" />
        <div className="flex shrink-0 bg-black h-[27px] w-[27px]" />
      </div> */}
    </section>
  );
};

export default Events;