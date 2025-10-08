const skills = [
  "Python",
  "Go (Golang)",
  "JavaScript",
  "HTML",
  "CSS",
  "Bash",
  "Git",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
  "Docker",
  "GitHub Actions",
  "PHP",
  "ReactJS",
  "TypeScript",
  "WebSockets",
  "Express.js",
  "Flask",
  "Kubernetes",
  "OAuth2",
  "RBAC",
  "ABAC",
  "AWS",
  "GCP",
  "Kafka",
];

const socialSkills = [
  "Teamwork",
  "Communication",
  "Collaboration",
  "Adaptability",
  "Problem Solving",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono text-base"
    >
      <div className="w-full font-medium">
        <h2 className="mb-8 text-orange-400 font-normal lowercase text-base">
          technical skills
        </h2>
        <div className="mb-4 text-sm lowercase">
          <span className="font-semibold text-blue-400">Proficient:</span>{" "}
          {skills.slice(0, 12).map((skill, i) => (
            <span key={skill} className="text-gray-300">
              {skill}
              {i < 11 ? ", " : ""}
            </span>
          ))}
        </div>
        <div className="mb-4 text-sm lowercase">
          <span className="font-semibold text-blue-400">Familiar:</span>{" "}
          {skills.slice(12).map((skill, i) => (
            <span key={skill} className="text-gray-300">
              {skill}
              {i < skills.slice(12).length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
        <div className="mb-4 text-sm lowercase">
          <span className="font-semibold text-blue-400">Social:</span>{" "}
          {socialSkills.map((skill, i) => (
            <span key={skill} className="text-gray-300">
              {skill}
              {i < socialSkills.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
