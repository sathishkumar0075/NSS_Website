import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import EventCard from './EventCard.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Events = () => {
  const [eventsData, setEventsData] = useState([]);

  // Fetch events data from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events'); // Replace with your API URL
        setEventsData(response.data);
      } catch (err) {
        console.error('Failed to fetch events:', err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <section id="events" className="mt-24 max-md:mt-10 relative">
      <h2 className="self-start ml-7 text-7xl font-extrabold text-black max-md:ml-2.5 max-md:text-4xl">Events</h2>

      <div className="relative flex items-center justify-center mt-16 font-extrabold text-black max-md:mt-10 max-md:mr-1.5">
  {/* Left Navigation Button Wrapper */}
  <div className="mr-10">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3210fd227f953af586b2592c4dd660ea082c9adbaf82693579a74db338196ea3?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307"
      alt="Previous"
      className="object-contain cursor-pointer swiper-button-prev"
      style={{ width: '64px', height: '64px' }} // Set custom width and height here
    />
  </div>

  {/* Swiper Component */}
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={20}
    slidesPerView={3}
    slidesPerGroup={3}
    centeredSlides={false}
    navigation={{
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }}
    pagination={{ clickable: true }}
    className="my-10 flex-1"
    style={{
      paddingLeft: '70px',
      paddingRight: '10px',
    }}
  >
    {eventsData.map((event, index) => (
      <SwiperSlide
        key={index}
        className="flex-shrink-0 transition-transform transform hover:scale-105"
        style={{ width: '300px' }}
      >
        <EventCard {...event} />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Right Navigation Button Wrapper */}
  <div className="ml-10">
  <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/24f79c34bb642d3374772921a30f0f296a6d057f6fc5c132caf4c724d497cf92?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307"
          alt="Next"
          className="object-contain cursor-pointer swiper-button-next"
          style={{ width: '64px', height: '64px' }} // Set custom width and height here
        />
  </div>
</div>
    </section>
  );
};

export default Events;
