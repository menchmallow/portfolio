import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Canvas from "./components/Canvas";

function App() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [modalWidth, setModalWidth] = useState();
  const [modalHeight, setModalHeight] = useState();

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
    setTitle("");
    setContent("");
    setModalHeight("");
    setModalWidth("");
  };

  return (
    <>
      <div className="main">
        <div className="content">
          <div className="header">Desktop</div>
          <div className="info">
            <div className="text-center m-5">
              <h1 className="name">
                hi!{" "}
                <span style={{ color: "rgb(64, 131, 255)" }}>i'm Isabel</span>
              </h1>
              <p className="fs-4">full stack web developer</p>
            </div>
            <div className="icons d-flex justify-content-center align-items-center gap-5 m-5">
              <div
                className="icon d-flex flex-column align-items-center"
                role="button"
                onClick={() => {
                  setTitle("about");
                  setModalHeight("60vh");
                  setModalWidth("40vw");
                }}
              >
                <i
                  className="fi fi-ts-id-card-clip-alt"
                  style={{ fontSize: "4rem" }}
                ></i>
                about
              </div>
              <div
                className="icon d-flex flex-column align-items-center"
                role="button"
                onClick={() => {
                  setTitle("skills");
                  setModalHeight("50vh");
                  setModalWidth("40vw");
                }}
              >
                <i className="fi fi-ts-bulb" style={{ fontSize: "4rem" }}></i>
                skills
              </div>
              <div
                className="icon d-flex flex-column align-items-center"
                role="button"
                onClick={() => {
                  setTitle("projects");
                  setModalHeight("70vh");
                  setModalWidth("60vw");
                }}
              >
                <i
                  className="fi fi-ts-tab-folder"
                  style={{ fontSize: "4rem" }}
                ></i>
                projects
              </div>
              <div
                className="icon d-flex flex-column align-items-center"
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
        {content && (
          <Modal
            title={title}
            close={handleClear}
            width={modalWidth}
            height={modalHeight}
          >
            {content}
          </Modal>
        )}
      </div>
      <Canvas />
    </>
  );
}

export default App;
