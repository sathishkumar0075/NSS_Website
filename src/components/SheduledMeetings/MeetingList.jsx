import React from 'react';
import MeetingItem from './MeetingItem';

const meetingsData = [
  {
    title: "Product review",
    schedule: "Every Monday,9:30am-10:00am",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae100e25abb34a4c68dbb768fe851d9b5e42784e86df12281a5e0c269c1d9e2b?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307"
  },
  {
    title: "Design sync",
    schedule: "Every Tuesday,1:30pm-2:30pm",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/633cef16436c79b0ea9afdb7d7b4bf319c8e8324e03363d300a36c9bdcb4b4c6?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307"
  },
  {
    title: "Roadmap review",
    schedule: "Every Wednesday,2:00pm-3:00pm",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffe51dfd2c4283f0dde21db23146d837e5143de3cc2e6fe207b91218b0144793?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307"
  },
  {
    title: "Sprint planning",
    schedule: "Every Thursday,10:00am-11:00am",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b01134fa924158fc7c231337742f519916984a71a49172b1642a034f49a0e08d?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307"
  },
  {
    title: "Retro",
    schedule: "Every Friday,11:00am-12:00pm",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7eb85d916282931cd6917277ab4d30c0865eb2eda0a82e5778335124a4d208cf?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307"
  }
];

function MeetingList() {
  return (
    <ul className="flex flex-col pt-1 pr-3.5 pb-4 w-full bg-black bg-opacity-0 max-md:max-w-full">
      {meetingsData.map((meeting, index) => (
        <MeetingItem key={index} {...meeting} />
      ))}
    </ul>
  );
}

export default MeetingList;