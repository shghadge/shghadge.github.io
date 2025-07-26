
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
      
      <div className="w-full max-w-3xl font-medium text-justify ">
        <h1 className="mb-10 lowercase text-2xl font-bold text-orange-400">education</h1>
        <Timeline>
          {educationData.map((item) => (
            <div key={item.title} className="flex flex-col  md:items-start w-full mb-8">
              <h3 className={`font-semibold text-lg ${item.color}`}>{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.place}</p>
              <p className="text-gray-400 text-xs">{item.period}</p>
              {item.description && (
                <p className="text-gray-300 text-xs mt-1">{item.description}</p>
              )}
            </div>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Education;
