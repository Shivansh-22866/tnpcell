import React from 'react';
import Image from 'next/image';

const RecruitmentPage = () => {
  const sections = [
    {
      title: "INSTITUTE OF NATIONAL IMPORTANCE",
      content: "NIT Goa distinguishes itself as an institute of national importance, established by an act of parliament. We focus on creating better technologists, leaders, and citizens through our comprehensive curriculum.",
      imageUrl: "/api/placeholder/400/300",
      imageAlt: "Students in uniform"
    },
    {
      title: "A VIBRANT CULTURE",
      content: "Our institute's heart remains focused on exploration and innovation. We believe in establishing new routes and taking the less trodden path to meet the needs of our nation.",
      imageUrl: "/api/placeholder/600/300",
      imageAlt: "College cultural activities collage"
    },
    {
      title: "DIVERSITY IN CURRICULUM",
      content: "We offer diverse engineering choices with emphasis on theoretical learning and real-life applications through case studies, R&D activities, and live projects. Our focus is on holistic development.",
      imageUrl: "/api/placeholder/400/400",
      imageAlt: "Students engaged in activities"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
        WHY RECRUIT US?
      </h1>

      <div className="space-y-12">
        {sections.map((section, index) => (
          <div 
            key={section.title}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={section.imageUrl}
                  alt={section.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-lg p-6">
            <div className="aspect-video relative mb-4">
              <Image
                src={`/api/placeholder/400/300`}
                alt="Activity thumbnail"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Student Activity</h3>
            <p className="text-gray-600">
              Engaging in various cultural and technical activities that promote overall development.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitmentPage;