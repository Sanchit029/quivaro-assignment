import { useState } from 'react';

const AboutWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' }
  ];

  const content = {
    about: "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.\n\nI was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...",
    experiences: "I have over 3 years of experience in sales at Salesforce, working with enterprise clients across various industries. My expertise includes cloud solutions, CRM implementations, and building long-term client relationships.\n\nPrior to Salesforce, I worked in tech sales for 5 years, helping companies transform their digital infrastructure.",
    recommended: "Based on my experience, I highly recommend exploring Salesforce's latest AI-powered features. They've been game-changers for our clients.\n\nI also suggest checking out the Trailhead learning platform to stay updated with the latest Salesforce capabilities and best practices."
  };

  return (
    <div className="bg-[#363C43] rounded-[18px] shadow-[5px_5px_40px_rgba(0,0,0,0.4)] p-5 w-full">
      {/* Help Icon */}
      <div className="flex justify-start items-start mb-5">
        <div className="w-6 h-6 rounded-full bg-[#171717] flex items-center justify-center cursor-pointer hover:bg-[#252525] transition-colors">
          <svg className="w-4 h-4 text-[#4A4E54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-[#171717] rounded-[23px] p-[6px] mb-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-5.5 px-8 rounded-[17px] text-[16px] font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-[#28292F] text-white shadow-[0_8px_24px_rgba(0,0,0,0.5),inset_0_3px_6px_rgba(0,0,0,0.3)]'
                : 'text-[#A3ADB2] hover:text-[#CBD5E0]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="overflow-y-auto max-h-[175px] pr-3 custom-scrollbar">
        <p className="text-[#969696] text-[15px] leading-[1.6] font-normal">
          {content[activeTab]}
        </p>
      </div>
    </div>
  );
};

export default AboutWidget;
