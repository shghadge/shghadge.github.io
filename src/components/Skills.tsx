import { usePortfolioData } from '../hooks/usePortfolioData';

const Skills = () => {
  const portfolioData = usePortfolioData();

  if (!portfolioData) {
    return <div>Loading...</div>;
  }

  const { skills } = portfolioData;

  return (
    <section id="skills" className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono text-gray-400">
      <div className="w-full font-medium">
        <h1 className="mb-4 lowercase text-2xl font-bold text-orange-400">technical skills</h1>
        <div className="mb-4 text-base lowercase">
          <span className="font-semibold text-blue-400">Proficient:</span>{' '}
          {skills.technical.proficient.map((skill, i) => (
            <span key={skill} className="">
              {skill}{i < skills.technical.proficient.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
        <div className="mb-4 text-base lowercase">
          <span className="font-semibold text-blue-400">Familiar:</span>{' '}
          {skills.technical.familiar.map((skill, i) => (
            <span key={skill}   className="">
              {skill}{i < skills.technical.familiar.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
        <div className="mb-4 text-base lowercase">
          <span className="font-semibold text-blue-400">Social:</span>{' '}
          {skills.social.map((skill, i) => (
            <span key={skill} className="">
              {skill}{i < skills.social.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
