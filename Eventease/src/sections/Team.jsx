import React from 'react';

const TeamMember = ({ name, position, experience, photo, linkedIn }) => (
  <div className="bg-light-gray p-8 rounded-3xl border-2 border-primary-blue shadow-[0_5px_0_0_#1D3063] hover:shadow-[0_2px_0_0_#1D3063] transition-all duration-200">
    <div className="space-y-6">
      <div className="relative">
        <div className="w-24 h-24 bg-primary-blue rounded-full mx-auto flex items-center justify-center border-2 border-primary-blue">
          <span className="text-3xl">{photo}</span>
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-text-white">{name}</h3>
        <p className="text-primary-blue font-medium">{position}</p>
      </div>
      
      <div className="border-t border-gray-600 pt-4">
        <p className="text-gray-300 text-sm leading-relaxed">{experience}</p>
      </div>
      
      <div className="flex justify-center">
        <a 
          href={linkedIn}
          className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all"
        >
          <span className="text-text-white text-sm">in</span>
        </a>
      </div>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Mussie Solomon",
      position: "CEO and Founder",
      experience: "10+ years of experience in event management and technology. Expertise in platform development and event industry insights",
      photo: "👨‍💼",
      linkedIn: "#"
    },
    {
      name: "Hanan Abebe", 
      position: "Director of Operations",
      experience: "7+ years of experience in event operations and logistics. Strong background in venue partnerships and event coordination",
      photo: "👩‍💼",
      linkedIn: "#"
    },
    {
      name: "Daniel Tesfaye",
      position: "Lead Developer", 
      experience: "5+ years of experience in mobile app development and payment integration. Proficient in React Native and backend systems",
      photo: "👨‍💻",
      linkedIn: "#"
    },
    {
      name: "Sara Bekele",
      position: "Marketing Manager",
      experience: "3+ years of experience in digital marketing and social media. Skilled in influencer partnerships and event promotion",
      photo: "👩‍💻",
      linkedIn: "#"
    },
    {
      name: "Yonas Tadesse",
      position: "Partnership Manager",
      experience: "4+ years of experience in business development and venue partnerships. Expert in building relationships with event organizers",
      photo: "👨‍🎨",
      linkedIn: "#"
    },
    {
      name: "Meron Haile",
      position: "UX/UI Designer",
      experience: "2+ years of experience in mobile app design and user experience. Skilled in creating intuitive event discovery and booking interfaces",
      photo: "👩‍🎨",
      linkedIn: "#"
    }
  ];

  return (
    <section id="team" className="py-16 lg:py-24 px-6 lg:px-20 bg-gradient-to-bl from-black via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-white mb-6">Our Team</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Meet the passionate team behind EventEase, dedicated to revolutionizing event experiences across Ethiopia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              experience={member.experience}
              photo={member.photo}
              linkedIn={member.linkedIn}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary-blue text-text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all">
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;