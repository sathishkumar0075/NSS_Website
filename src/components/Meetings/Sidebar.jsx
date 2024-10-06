import React from 'react';
import NavItem from './Navitem.jsx';
import ScheduledMeeting from './ScheduledMeeting';

const navItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6db280fcc9589d8357036341b4443dc3aab75bc0c3268150277f0f16c69490ac?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307", text: "Dashboard", active: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/644fce53a554d26a8b74ad8665c18ef1fd16094e65c6552f6e966c667332a560?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307", text: "Volunteers", active: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1337e7165bbb4c98d7f6fe5479e1ee9ca2ed4690eb2a3f3265215b55c5114df5?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307", text: "Meetings", active: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5313e5b24a041495977375b19049da4e7367b42ac5494c6648b6d3ed76a35f65?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307", text: "Reports", active: false },
];

const scheduledMeetings = [
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/05fd5cc4578f641e0e427be55b01b6a9747334fbeb94aa592ed83c9e0e43c102?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307", title: "General Body...", date: "9/13/22,6:00PM", attendance: "15/30" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ef3965b748e9fa4ab3abc65bee18181715a7df25c6792dba3f665a3e5d857ad?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307", title: "General Body...", date: "9/20/22,6:00PM", attendance: "12/30" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a24249e5c7ad1158736344a748325755e33719e4373a9431c0529d8b7e66c8bb?placeholderIfAbsent=true&apiKey=847064471252402daefe7a4367a8e307", title: "General Body...", date: "9/27/22,6:00PM", attendance: "10/30" },
];

function Sidebar() {
  return (
    <nav className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
      <div className="flex z-10 flex-col grow mt-7 mr-0 max-md:max-w-full">
        <div className="flex flex-col ml-5 max-w-full w-[327px] max-md:ml-2.5">
          {navItems.map((item, index) => (
            <NavItem key={index} icon={item.icon} text={item.text} active={item.active} />
          ))}
          <button className="flex flex-col justify-center self-center p-1.5 max-w-full text-sm font-semibold bg-black bg-opacity-0 mt-[498px] text-slate-100 w-[298px] max-md:mt-10">
            <span className="px-8 py-3.5 bg-pink-500 rounded-xl border border-blue-500 border-solid max-md:px-5">
              Create Meeting
            </span>
          </button>
          <h2 className="self-start mt-4 ml-5 text-sm font-semibold text-gray-400 max-md:ml-2.5">
            Scheduled Meetings
          </h2>
          {scheduledMeetings.map((meeting, index) => (
            <ScheduledMeeting key={index} {...meeting} />
          ))}
        </div>
        <div className="flex shrink-0 mt-4 h-px bg-slate-50 max-md:max-w-full" />
      </div>
    </nav>
  );
}

export default Sidebar;