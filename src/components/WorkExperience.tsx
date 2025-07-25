import Timeline from './Timeline';

const workExperienceData = [
  {
    title: 'Software Engineer Intern',
    company: 'Office Of Water Programs',
    period: 'Jul 2025 – Present',
    location: 'Sacramento, California, United States',
    description: [
      'Python, React.js, +2 skills',
    ],
    color: 'text-blue-400',
  },
  {
    title: 'Senior Software Engineer',
    company: 'GS Lab',
    period: 'Nov 2021 – Jul 2024',
    location: 'Pune, Maharashtra, India',
    description: [
      'Engineering, Software Infrastructure, +3 skills',
    ],
    color: 'text-blue-400',
  },
  {
    title: 'Software Engineer',
    company: 'GS Lab',
    period: 'Jul 2019 – Oct 2021',
    location: 'Pune, Maharashtra, India',
    description: [
      'Software Engineering, +2 skills',
    ],
    color: 'text-blue-400',
  },
];

const WorkExperience = () => {
  return (
   <section id="work-experience" className="section min-h-screen max-h-screen lg:min-h-[calc(100vh-5rem)] flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono text-base lg:scroll-mt-24 snap-start">
      <div className="w-full max-w-3xl font-medium max-h-dvh overflow-y-auto pb-40">
        <h2 className="text-xl mb-8 lg:hidden text-violet-400 font-normal lowercase">work experience</h2>
        <Timeline accentColor="bg-orange-400">
          {workExperienceData.map((item) => (
            <div key={item.title + item.period} className="mb-8">
              <div className={`font-semibold text-lg ${item.color}`}>{item.title}</div>
              <div className="text-gray-400 text-sm">{item.company}</div>
              <div className="text-gray-400 text-xs">{item.period}{item.location ? ` • ${item.location}` : ''}</div>
              <ul className="list-disc ml-4 text-gray-300 text-xs">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default WorkExperience;
