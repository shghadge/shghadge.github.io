import Button from './Button';

const Contact = () => {
  return (
    <section id="contact" className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono text-[14px]">
      <div className="w-full max-w-md font-medium">
         <h1 className="mb-10 lowercase text-2xl font-bold text-orange-400">contact me</h1>
        <p className="text-sm mb-8">let's build something amazing together.</p>
        <div className="space-y-4">
          <div>
            <span className="text-gray-400">email: </span>
            <a
              href="mailto:shubhamghadge02@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              shubhamghadge02@gmail.com
            </a>
          </div>
          <div>
            <span className="text-gray-400">github: </span>
            <a
              href="https://github.com/shghadge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              github.com/shghadge
            </a>
          </div>
          <div>
            <span className="text-gray-400">linkedin: </span>
            <a
              href="https://linkedin.com/in/shghadge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              linkedin.com/in/shghadge
            </a>
          </div>
        </div>
        
        <div className="mt-12">
          <Button variant="primary">{'>>>'} send message</Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
