import { usePortfolioData } from '../hooks/usePortfolioData';

const Contact = () => {
  const portfolioData = usePortfolioData();

  if (!portfolioData) {
    return <div>Loading...</div>;
  }

  const { contact, meta } = portfolioData;

  return (
    <section id="contact" className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono">
      <div className="w-full font-medium">
        <h1 className="mb-4 lowercase text-2xl font-bold text-orange-400">{meta.contactHeading}</h1>
        <p className="text-sm mb-8 text-gray-400">{meta.contactSubtext}</p>
        <div className="space-y-4 text-gray-400">
          <div>
            <span className="text-gray-400">email: </span>
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              {contact.email}
            </a>
          </div>
          {contact.phone && (
            <div>
              <span className="text-gray-400">phone: </span>
              <a
                href={`tel:${contact.phone}`}
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                {contact.phone}
              </a>
            </div>
          )}
          <div>
            <span className="text-gray-400">github: </span>
            <a
              href={contact.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              github.com/{contact.github.username}
            </a>
          </div>
          <div>
            <span className="text-gray-400">linkedin: </span>
            <a
              href={contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              linkedin.com/in/{contact.linkedin.username}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
