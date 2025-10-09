const About = () => {
  return (
    <section id="about" className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono">
      <div className="w-full font-medium">
        <h1 className="mb-4 lowercase text-2xl font-bold text-orange-400">hello, world!</h1>
        <div className="space-y-4 text-base leading-relaxed lowercase text-justify text-gray-400">
          <p>
            my name is <span className="text-red-400">shubham ghadge</span>. i'm a <span className="text-sky-400">full-stack developer</span> with <span className="text-yellow-100">5+</span> years of experience in <span className="text-emerald-400">backend engineering</span> building cloud native applications and microservices.
          </p>
          <p>
            previously, I worked as a software engineer at{' '}
            <span className="text-sky-400">
              <a href="https://www.linkedin.com/company/gs-lab/about/" target="_blank" rel="noopener noreferrer">
                Great Software Laboratory
              </a>
            </span>
            (now neurealm). I'm currently pursuing a master's in computer science at{' '}
            <span className="text-green-600">
              <a href="https://www.csus.edu/" target="_blank" rel="noopener noreferrer">
                CSUS
              </a>
            </span>
            {' '}and working as a software engineer intern at{' '}
            <span className="text-lime-200">
              <a href="https://www.owp.csus.edu/" target="_blank" rel="noopener noreferrer">
                office of water programs
              </a>
            </span>
            , sac state.
          </p>
          <p>
            I enjoy building scalable systems, exploring low-level programming, and working with modern technologies. My daily tools include Go, Python, MongoDB, MySQL, Docker, and Kubernetes.
          </p>
          <p>
            Currently, I'm building privacy-preserving <span className="text-indigo-300">AI</span> tools, developing a small OS in <span className="text-red-400">Rust</span>, and exploring Model Context Protocol servers for <span className="text-lime-200">LLM</span> integrations. Feel free to reach out about development, brainstorming ideas, or just to connect!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
