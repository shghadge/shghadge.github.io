import { usePortfolioData } from '../hooks/usePortfolioData';
import Timeline from './Timeline';

const WorkExperience = () => {
  const portfolioData = usePortfolioData();

  if (!portfolioData) {
    return <div>Loading...</div>;
  }

  const { workExperience } = portfolioData;

  return (
    <section id="work-experience" className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono">
      <div className="w-full font-medium">
        <h1 className="mb-4 lowercase text-2xl font-bold text-orange-400">work experience</h1>
        <Timeline accentColor="bg-orange-400">
          {workExperience.map((item) => (
            <div key={item.title + item.period} className="mb-8">
              <div className={`font-semibold text-lg text-blue-400`}>{item.company}</div>
              <div className="text-blue-200 text-base">{item.title}</div>
              <div className="text-gray-400 text-base">{item.period}</div>
              <div className="text-gray-400 text-base">{item.location}</div>
              
            </div>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default WorkExperience;
