
import { usePortfolioData } from '../hooks/usePortfolioData';
import { useEffect } from 'react';

const Projects = () => {
  const portfolioData = usePortfolioData();

  useEffect(() => {
    const detailsElements = document.querySelectorAll('#projects details');
    
    const handleToggle = (event: Event) => {
      const target = event.target as HTMLDetailsElement;
      if (target.open) {
        detailsElements.forEach((details) => {
          if (details !== target) {
            (details as HTMLDetailsElement).open = false;
          }
        });
      }
    };

    detailsElements.forEach((details) => {
      details.addEventListener('toggle', handleToggle);
    });

    return () => {
      detailsElements.forEach((details) => {
        details.removeEventListener('toggle', handleToggle);
      });
    };
  }, [portfolioData]);

  if (!portfolioData) {
    return <div>Loading...</div>;
  }

  const { projects } = portfolioData;
  const currentProjects = projects.filter(project => project.category === 'Current');
  const pastProjects = projects.filter(project => project.category === 'Past');

  return (
    <section id="projects" className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono">
      <div className="w-full font-medium">
        <h1 className="mb-4 lowercase text-2xl font-bold text-orange-400">projects</h1>
        
        <div className="space-y-4">
          {/* Current Projects */}
          {currentProjects.length > 0 && (
            <details open>
              <summary className="cursor-pointer text-lg font-semibold text-blue-400 lowercase hover:text-blue-300">
                current projects
              </summary>
              <div className="mt-4 max-h-80 overflow-y-auto pr-2 space-y-6 text-base lowercase text-gray-400">
                {currentProjects.map((project) => (
                  <div key={project.name}>
                    <span className="text-red-400 font-medium">{project.name}</span>
                    <span> | <span className="text-gray-400">{project.technologies}</span></span>
                    <ul className="list-disc ml-6 mt-2 text-gray-400">
                      <li>{project.description}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          )}
          {/* Past Projects */}
          {pastProjects.length > 0 && (
            <details>
              <summary className="cursor-pointer text-lg font-semibold text-blue-400 lowercase hover:text-blue-300">
                past projects
              </summary>
              <div className="mt-4 max-h-80 overflow-y-auto pr-2 space-y-6 text-base lowercase text-gray-400">
                {pastProjects.map((project) => (
                  <div key={project.name}>
                    <span className="text-red-400 font-medium">{project.name}</span>
                    <span> | <span className="text-gray-400">{project.technologies}</span></span>
                    {project.period && <span className="text-gray-500"> • {project.period}</span>}
                    <ul className="list-disc ml-6 mt-2 text-gray-400">
                      <li>{project.description}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
