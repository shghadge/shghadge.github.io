const Resume = () => {
  return (
    <section id="myresume" className="section min-h-screen flex items-center justify-center ml-0 lg:ml-10 px-4 font-mono text-base">
      <div className="w-full max-w-3xl font-medium flex flex-col items-center">
        <h2 className="text-xl mb-8 text-orange-400 font-normal lowercase">resume</h2>
        <div className="w-full flex justify-center">
          <iframe
            src="/ShubhamGhadgeResume.pdf"
            title="Resume PDF"
            className="w-full h-[80vh] border rounded-lg bg-slate-800"
            style={{ minHeight: '500px' }}
          />
        </div>
        <a
          href="/ShubhamGhadgeResume.pdf"
          download
          className="mt-6 px-4 py-2 bg-orange-400 text-slate-900 rounded font-semibold hover:bg-orange-500 transition"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
};

export default Resume;
