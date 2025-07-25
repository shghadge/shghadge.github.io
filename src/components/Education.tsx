
const educationData = [
  {
    title: "Master's in Computer Science",
    place: 'California State University, Sacramento',
      period: 'Fall 2024 -- Spring 2026',
    description: '',
    color: 'text-blue-400',
  },
     {
       title: 'Bachelor of Engineering in Information Technology',
       place: 'Savitribai Phule Pune University, Pune',
       period: 'August 2016 -- May 2019',
       description: 'GPA: 3.52/4.0',
       color: 'text-blue-400',
     },
];


import Timeline from "./Timeline";

const Education = () => {
  return (
    <section id="education" className="section min-h-screen max-h-screen lg:min-h-[calc(100vh-5rem)] flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono text-base lg:scroll-mt-24 snap-start">
      <div className="w-full max-w-3xl font-medium max-h-dvh overflow-y-auto pb-40">
        <Timeline>
          {educationData.map((item) => (
            <div key={item.title} className="flex flex-col items-center md:items-start w-full">
              <h3 className={`text-base mb-1 font-medium lowercase ${item.color}`}>{item.title}</h3>
              <p className="text-xs text-gray-400 mb-1">{item.place} • {item.period}</p>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Education;
