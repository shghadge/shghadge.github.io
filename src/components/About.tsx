const About = () => {
  return (
    <section id="about" className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono">
      <div className="w-full font-medium">
        <h1 className="mb-4 lowercase text-2xl font-bold text-orange-400">hello, world!</h1>
        <div className="space-y-4 text-base leading-relaxed lowercase text-justify">
          <p>
            my name is <span className="text-orange-400 ">shubham ghadge</span>. i'm a <span className="text-blue-400">full-stack developer</span> with 5 years of primary experience in backend engineering building <span className="">cloud native applications</span>.
          </p>
          <p>
            previously, I worked as a software engineer at <span className="text-blue-400"><a href="https://www.linkedin.com/company/gs-lab/about/" target="_blank">GS Lab</a></span>. I'm currently pursuing a master's in computer science at <span className="text-green-600"><a href="https://www.csus.edu/" target="_blank">CSUS</a></span> and working as a software engineer intern at <span className="text-emerald-400"><a href="https://www.owp.csus.edu/" target="_blank">office of water programs</a></span>, sac state.
          </p>
          {/* <p>
            on the internet, I go by <span className="text-blue-400">shghadge</span>.
          </p> */}
          <p>
            I enjoy building <span className="">useful web apps</span>, collaborating with <span className="">teams</span>, and learning <span className="">new technologies</span>. My daily tools include <span className="text-sky-300">Go</span>, <span className="text-blue-400">Py</span><span className="text-yellow-400">thon</span>, <span className="text-green-400">MongoDB</span>, <span className="text-blue-300">My</span><span className="text-orange-300">SQL</span>, <span className="text-blue-500">Docker</span>, and <span className="text-blue-400">Kubernetes</span>. 
            {/* I'm mostly active in the <span className="text-orange-400">Go community</span>. */}
          </p>
          <p>
            Currently, I'm learning ReactJS, TypeScript and struggling to learn <span className="text-red-400">Rust</span>.  Feel free to reach out about development, <span className="">brainstorming ideas</span>, or just to <span className="">connect</span>!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
