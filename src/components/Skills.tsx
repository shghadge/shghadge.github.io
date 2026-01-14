import { usePortfolioData } from "../hooks/usePortfolioData";
import TechBadge from "./TechBadge";

const Skills = () => {
  const portfolioData = usePortfolioData();

  if (!portfolioData) {
    return <div>Loading...</div>;
  }

  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono text-gray-400"
    >
      <div className="w-full font-medium">
        <h1 className="mb-4 lowercase text-2xl font-bold text-orange-400">
          technical skills
        </h1>
        
        <div className="max-h-[70vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.categories.map((category) => (
              <div key={category.name} className="mb-2">
                <h2 className="font-semibold text-blue-400 lowercase mb-3 border-b border-gray-800 pb-1 w-fit">
                  {category.name}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <TechBadge key={skill} tech={skill} size="md" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

