
const Projects = () => {
  return (
    <section id="projects" className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono text-[14px]">
      <div className="w-full font-medium">
        <h1 className="mb-10 lowercase text-2xl font-bold text-orange-400">projects</h1>
        <div className="space-y-8 text-base lowercase">
          <div>
            <span className="text-yellow-400 font-medium">Tag Management Tool</span>
            <span> | <span className="text-gray-400">Python, JavaScript, React, Docker, PostgreSQL</span></span>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li>Web tool for managing resource tags and validating policies.</li>
              </ul>
          </div>
          <div>
            <span className="text-yellow-400 font-medium">Inventory Management Interface</span>
            <span> | <span className="text-gray-400">Go, JavaScript, React, PostgreSQL, MongoDB</span></span>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li>Backend and dashboard for high-volume inventory records.</li>
              </ul>
          </div>
          <div>
            <span className="text-yellow-400 font-medium">Cloud Asset Sync & Monitoring Tool</span>
            <span> | <span className="text-gray-400">Go, JavaScript, WebSockets, MongoDB, Kafka</span></span>
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
