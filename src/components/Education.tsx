
import { usePortfolioData } from '../hooks/usePortfolioData';
import Timeline from "./Timeline";

const Education = () => {
  const portfolioData = usePortfolioData();

  if (!portfolioData) {
    return <div>Loading...</div>;
  }

  const { education } = portfolioData;

  return (
    <section id="education" className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono">
      <div className="w-full font-medium">
        <h1 className="mb-4 lowercase text-2xl font-bold text-orange-400">education</h1>
        <Timeline>
          {education.map((item) => (
            <div key={item.degree} className="flex flex-col  md:items-start w-full mb-8">
              <h3 className={`font-semibold text-lg text-blue-400`}>{item.degree}</h3>
              <p className="text-blue-200 text-base">{item.institution}</p>
              <p className="text-gray-400 text-base">{item.period}</p>
              {item.gpa && (
                <p className="text-gray-300 text-sm">{item.gpa}</p>
              )}
            </div>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Education;
