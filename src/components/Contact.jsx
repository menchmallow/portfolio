const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-info d-flex flex-column align-items-center p-5 mb-4">
        <h1>{"(˶ˆᗜˆ˵)"}</h1>
        <h1>say hiiiiii</h1>
        <span>
          email me @ <strong>izzy.mngd@gmail.com</strong>
        </span>
      </div>
      <div className="d-flex justify-content-center">
        <a
          href="https://menchmallow.github.io/portfolio/resume.pdf"
          download
          target="_blank"
          className="btn btn-primary"
        >
          download resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
