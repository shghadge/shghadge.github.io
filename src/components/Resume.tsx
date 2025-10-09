import { usePortfolioData } from '../hooks/usePortfolioData';

const Resume = () => {
  const portfolioData = usePortfolioData();

  if (!portfolioData) {
    return <div>Loading...</div>;
  }

  const { resume } = portfolioData;

  return (
    <section id="myresume" className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono">
      <div className="w-full font-medium">
        <h1 className="mb-4 lowercase text-2xl font-bold text-orange-400">resume</h1>
        <div className="h-[70vh] flex flex-col justify-between">
          <div className="w-full h-full flex justify-center">
            {/* Desktop PDF embed */}
            <div className="hidden md:flex w-full  border rounded-lg bg-slate-800  items-center justify-center">
              <embed
                src={`/${resume.filename}#toolbar=0&navpanes=0&statusbar=0&sidebar=0`}
                title="Resume PDF"
                className="w-full h-full border rounded-lg bg-slate-800 "
              />
            </div>
            {/* Mobile fallback message */}
            <div className="flex md:hidden w-full min-h-[50dvh] border rounded-lg bg-slate-800  items-center justify-center">
              <span className="text-orange-400 text-center text-base px-4">
                {resume.mobileMessage}
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href={`/${resume.filename}`}
              download
              className="mt-6 px-6 py-2 bg-orange-400 text-slate-900 rounded font-semibold hover:bg-orange-500 transition inline-block"
            >
              Download Resume PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
