const About = () => {
  return (
    <div className="about montserrat">
      <div className="about-header d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 mb-5">
        <div>
          <h1 style={{ color: "rgb(64, 131, 255)" }}>Isabel Managuelod</h1>
          <p>web developer</p>
          <p>
            Certified in Web Development (National Certificate III) under TESDA
          </p>
        </div>
      </div>
      <div className="about-info">
        <div className="mb-5">
          <p>hi! i'm isa, a fullstack dev and i..</p>
          <ul>
            <li>build fullstack apps using Python and Django on the backend</li>
            <li>create frontends with React</li>
            <li>design responsive, user-friendly UI/UX</li>
          </ul>
        </div>
        <div className="mb-5">
          <p>currently open for</p>
          <ul>
            <li>freelance gigs</li>
            <li>part-time roles</li>
          </ul>
        </div>
        <div>
          <p>a bit more about me</p>
          <ul>
            <li>i like playing games, especially fps (im bad at gaming btw)</li>
            <li>
              i like listening to music,{" "}
              <a
                href="https://open.spotify.com/playlist/2HBV0UJ7A2ONJHtz8ScIt3?si=6c90853117a548f3"
                target="_blank"
              >
                here's a playlist
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
