
import { usePortfolioData } from '../hooks/usePortfolioData';
import TechBadge from './TechBadge';

interface Project {
  name: string;
  technologies: string;
  description: string;
  link?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const technologies = project.technologies.split(',').map(tech => tech.trim());
  
  return (
    <div className="border border-gray-700 rounded-lg p-3 flex flex-col h-full hover:bg-gray-800 transition-colors">
      <h3 className="text-base font-medium text-blue-400 lowercase border-b border-gray-700 pb-2">
        {project.name}
      </h3>
      
      <p className="text-xs text-gray-400 lowercase mt-1 flex-grow  pb-2">
        {project.description}
      </p>
      
      <div className="mt-auto pt-2">
        <div className="flex flex-wrap gap-x-3 gap-y-1 border-b border-gray-700 pb-2">
          {technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} size="sm" />
          ))}
        </div>
        
        <div className="text-right">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-orange-400 hover:text-blue-300 mt-2 inline-block lowercase"
          >
            → view project
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const portfolioData = usePortfolioData();

  if (!portfolioData) {
    return <div>Loading...</div>;
  }

  const { projects } = portfolioData;

  return (
    <section id="projects" className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono">
      <div className="w-full font-medium">
        <h1 className="mb-4 lowercase text-2xl font-bold text-orange-400">projects</h1>
        
        <div className="max-h-[70vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
