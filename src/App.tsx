import { ReactNode, useEffect, useState } from "react";
import "./index.css";

// COMPONENTS
import Modal from "./components/Modal";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Canvas from "./components/Canvas";

function App() {
  const [title, setTitle] = useState<string | null>(null);
  const [Content, setContent] = useState<ReactNode | null>(null);

  useEffect(() => {
    if (title === "about") {
      setContent(<About />);
    } else if (title === "skills") {
      setContent(<Skills />);
    } else if (title === "projects") {
      setContent(<Projects />);
    } else if (title === "contact") {
      setContent(<Contact />);
    }
  }, [title]);

  const handleClear = () => {
    setTitle(null);
    setContent(null);
  };

  return (
    <>
      <div className="montserrat">
        <div className="bg-white h-[100vh] md:h-fit md:w-[80vw] md:m-auto md:rounded-lg md:mt-45 md:border md:border-gray-500 md:border-2 lg:w-[70vw] xl:w-[50vw] overflow-hidden">
          <div className="bg-black text-white py-3 p-2">Desktop</div>
          <div className="h-full m-8 md:m-0">
            <div className="flex flex-col items-center mt-40 mb-10 md:mt-20">
              <p className="font-semibold text-5xl">
                hi! <span className="text-blue-500">i'm Isabel</span>
              </p>
              <p className="text-lg">full stack web developer</p>
            </div>
            <div className="grid grid-cols-2 mx-15 gap-4 md:flex md:justify-center md:mb-20">
              <div
                className="flex flex-col items-center bg-blue-100 rounded-2xl p-2 md:bg-transparent cursor-pointer"
                role="button"
                onClick={() => {
                  setTitle("about");
                }}
              >
                <i
                  className="fi fi-ts-id-card-clip-alt"
                  style={{ fontSize: "4rem" }}
                ></i>
                about
              </div>
              <div
                className="flex flex-col items-center bg-blue-100 rounded-2xl p-2 md:bg-transparent cursor-pointer"
                role="button"
                onClick={() => {
                  setTitle("skills");
                }}
              >
                <i className="fi fi-ts-bulb" style={{ fontSize: "4rem" }}></i>
                skills
              </div>
              <div
                className="flex flex-col items-center bg-blue-100 rounded-2xl p-2 md:bg-transparent cursor-pointer"
                role="button"
                onClick={() => {
                  setTitle("projects");
                }}
              >
                <i
                  className="fi fi-ts-tab-folder"
                  style={{ fontSize: "4rem" }}
                ></i>
                projects
              </div>
              <div
                className="flex flex-col items-center bg-blue-100 rounded-2xl p-2 md:bg-transparent cursor-pointer"
                role="button"
                onClick={() => setTitle("contact")}
              >
                <i
                  className="fi fi-ts-open-mail-clip"
                  style={{ fontSize: "4rem" }}
                ></i>
                contact
              </div>
            </div>
          </div>
        </div>
        {Content && (
          <Modal
            key={title}
            title={title}
            close={handleClear}
            content={Content}
          ></Modal>
        )}
      </div>
      <Canvas />
    </>
  );
}

export default App;
