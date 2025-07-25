
const Projects = () => {
  return (
    <section id="projects" className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono text-[14px]">
      <div className="w-full font-medium">
        <h2 className="text-xl mb-8 text-orange-400 font-normal lowercase">projects</h2>
        <div className="space-y-8 text-sm lowercase">
          <div>
            <span className="text-yellow-400 font-medium">Internal Tag Management Tool</span>
            <span> | Python, JavaScript, React, Docker, PostgreSQL</span>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li>Web tool for managing resource tags and validating policies.</li>
              </ul>
          </div>
          <div>
            <span className="text-blue-300 font-medium">Inventory Management Interface</span>
            <span> | Go, JavaScript, React, PostgreSQL, MongoDB</span>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li>Backend and dashboard for high-volume inventory records.</li>
              </ul>
          </div>
          <div>
            <span className="text-yellow-300 font-medium">Cloud Asset Sync & Monitoring Tool</span>
            <span> | Go, JavaScript, WebSockets, MongoDB, Kafka</span>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li>Tool for syncing and monitoring cloud asset data.</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
