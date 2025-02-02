import React from 'react';

const Timeline = () => {
  const events = [
    { time: '9:00 AM', title: 'Event Starts', progress: 20, position: 'left' },
    { time: '9:00-10:00 AM', title: 'Workshop on EDA', progress: 40, position: 'right' },
    { time: '10:00-1:00 PM', title: 'CTH', progress: 60, position: 'left' },
    { time: '2:00-9:00 PM', title: 'Hackathon', progress: 80, position: 'right' },
    { time: '9:00 PM', title: 'Final Submission', progress: 100, position: 'center' }
  ];

  const getProgressColor = (progress: number) => {
    switch(progress) {
      case 20: return 'border-blue-500';
      case 40: return 'border-purple-500';
      case 60: return 'border-green-500';
      case 80: return 'border-yellow-500';
      case 100: return 'border-red-500';
      default: return 'border-white';
    }
  };

  return (
    <div className="w-full max-w-4xl px-4 relative">
      <div className="relative mx-auto">
        {events.map((event, index) => (
          <div key={index} className="relative">
            <div 
              className={`
                flex mb-12
                ${event.position === 'right' ? 'justify-end pl-[50%]' : 
                  event.position === 'center' ? 'justify-center' : 'justify-start pr-[50%]'}
              `}
            >
              {/* Container for line and circle */}
              <div className="relative flex items-center">
                {/* Horizontal line before circle for left position */}
                {event.position === 'right' && (
                  <div className="w-16 h-1 bg-white mr-4" />
                )}
                
                {/* Circle with content */}
                <div className={`
                  w-48 h-48 rounded-full border-8 shrink-0
                  ${getProgressColor(event.progress)}
                  flex items-center justify-center
                  bg-gradient-to-br from-gray-700 to-gray-900
                `}>
                  <div className="text-center px-4">
                    <div className="text-white text-xl font-bold mb-3">{event.time}</div>
                    <div className="text-white text-lg">{event.title}</div>
                  </div>
                </div>

                {/* Horizontal line after circle for right position */}
                {event.position === 'left' && (
                  <div className="w-16 h-1 bg-white ml-4" />
                )}
              </div>

              {/* Vertical connecting line */}
              {index !== events.length - 1 && (
                <div 
                  className={`
                    absolute w-1 h-16 bg-white
                    ${event.position === 'right' ? 'right-[calc(50%-0.5px)]' : 
                      event.position === 'center' ? 'left-1/2' : 'left-[calc(50%-0.5px)]'}
                  `}
                  style={{
                    top: '100%',
                    transform: event.position === 'center' ? 'translateX(-50%)' : 'none'
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;