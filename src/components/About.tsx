const About = () => {
  return (
    <section
      id="about"
      className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono text-base"
    >
      <div className="w-full font-medium">
        <h1 className="mb-4 lowercase text-2xl font-bold text-orange-400">
          hello, world!
        </h1>
        <div className="space-y-4 text-sm leading-relaxed lowercase">
          <p>
            my name is{" "}
            <span className="text-blue-400 font-semibold">shubham ghadge</span>.
            i'm a <span className="text-orange-400">backend engineer</span> with
            5 years of experience building cloud native applications.
          </p>
          <p>
            previously, I worked as a software engineer at{" "}
            <span className="text-pink-400 font-semibold">GS Lab</span>. I'm
            currently pursuing a master's in computer science at{" "}
            <span className="text-green-400 font-semibold">CSUS</span> and
            working as a software engineer intern at{" "}
            <span className="text-blue-400 font-semibold">
              office of water programs, sacramento
            </span>
            .
          </p>
          <p>
            on the internet, I go by{" "}
            <span className="text-blue-400">shghadge</span>.
          </p>
          <p>
            I enjoy building useful web apps, collaborating with teams, and
            learning new technologies. My daily tools include{" "}
            <span className="text-blue-400">Go</span>,{" "}
            <span className="text-yellow-400">Python</span>,{" "}
            <span className="text-green-400">MongoDB</span>,{" "}
            <span className="text-blue-300">PostgreSQL</span>,{" "}
            <span className="text-teal-200">Docker</span>, and{" "}
            <span className="text-cyan-400">Kubernetes</span>.
          </p>
          <p>
            Currently, I'm working on and learning{" "}
            <span className="text-green-400">Rust</span>. Feel free to reach out
            about <span className="text-blue-400">development</span>,{" "}
            <span className="text-pink-400">brainstorming ideas</span>, or just
            to <span className="text-purple-400">connect</span>!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
