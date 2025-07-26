const Resume = () => {
  return (
    <section id="myresume" className="section min-h-screen max-h-screen lg:min-h-[calc(100vh-5rem)] flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono text-base lg:scroll-mt-24 snap-start">
      <div className="w-full max-w-3xl h-[70vh] font-medium flex flex-col items-center justify-around" >
        <h2 className="text-xl font-bold w-full flex  text-left mb-8 text-orange-400 lowercase">resume</h2>
        <div className="w-full h-full flex justify-center">
          {/* Desktop PDF embed */}
          <div className="hidden md:flex w-full  border rounded-lg bg-slate-800  items-center justify-center">
            <embed
              src="/ShubhamGhadgeResume.pdf#toolbar=0&navpanes=0&statusbar=0&sidebar=0"
              title="Resume PDF"
              className="w-full h-full border rounded-lg bg-slate-800 "
            />
          </div>
          {/* Mobile fallback message */}
          <div className="flex md:hidden w-full min-h-[50dvh] border rounded-lg bg-slate-800  items-center justify-center">
            <span className="text-orange-400 text-center text-base px-4">
              PDF rendering is not supported on mobile devices. Please use the download button below to view the resume.
            </span>
          </div>
        </div>
        <a
          href="/ShubhamGhadgeResume.pdf"
          download
          className="mt-6 px-4 flex py-2 bg-orange-400 text-slate-900 rounded font-semibold hover:bg-orange-500 transition"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
};

export default Resume;
