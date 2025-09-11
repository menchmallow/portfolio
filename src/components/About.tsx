const About = () => {
  return (
    <div>
      <div className="mb-10">
        <div>
          <h1 className="font-semibold text-3xl my-2 text-blue-500">
            Isabel Managuelod
          </h1>
          <p>web developer</p>
        </div>
      </div>
      <div>
        <div className="mb-8">
          <p className="text-xl font-medium my-4">
            <span className="font-semibold text-blue-500">|</span> About me
          </p>
          <p className="my-4">hi! i'm isa, a fullstack dev and i..</p>
          <ul className="list-disc mx-10">
            <li>create website wireframes</li>
            <li>design responsive, user-friendly UI/UX</li>
            <li>build fullstack apps mainly using Django + React</li>
            <li>love turning ideas into real apps!!!</li>
            <li>
              lately been exploring into the world of AI and integrating AI into
              my projects :D
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <p className="text-xl font-medium my-4">
            <span className="font-semibold text-blue-500">|</span>{" "}
            Certifications
          </p>
          <ul className="mx-10">
            <li>
              <a
                href="https://www.freecodecamp.org/certification/menchmallow/responsive-web-design"
                target="_blank"
                className="underline text-blue-500"
              >
                Responsive Web Design - freeCodeCamp
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/certification/menchmallow/javascript-algorithms-and-data-structures-v8"
                target="_blank"
                className="underline text-blue-500"
              >
                Javascript Algorithms and Data Structures - freeCodeCamp
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/certification/menchmallow/scientific-computing-with-python-v7"
                target="_blank"
                className="underline text-blue-500"
              >
                Scientific Computing with Python - freeCodeCamp
              </a>
            </li>
            <li>
              <a
                href="https://t2mis.tesda.gov.ph/Learners/S/49004A003300360047002F0053004D002F00420079004200330042007100460030003300650053006F006F00730047006E004800510047005400360033004B0043006B0058005800670066005500300059004A0034003D00"
                target="_blank"
                className="underline text-blue-500"
              >
                National Certificate III in Web Development - TESDA
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium my-4">
            <span className="font-semibold text-blue-500">|</span> A bit more
            about me
          </p>
          <ul className="list-disc mx-10">
            <li>i like playing games, especially fps (im bad at gaming btw)</li>
            <li>
              i like listening to music,{" "}
              <a
                href="https://open.spotify.com/playlist/2HBV0UJ7A2ONJHtz8ScIt3?si=6c90853117a548f3"
                target="_blank"
                className="underline text-blue-500"
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
