const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-blue-500/20 p-8 rounded-xl flex flex-col items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-5xl">{"(˶ˆᗜˆ˵)"}</span>
          <p className="text-3xl">say hiiiiii</p>
          <span className="text-xl">
            email me @{" "}
            <strong className="text-blue-500">izzy.mngd@gmail.com</strong>
          </span>
        </div>
        <button className="bg-blue-500 text-white w-fit p-4 rounded-xl font-semibold">
          <a href="/resume.pdf" download target="_blank">
            download resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
