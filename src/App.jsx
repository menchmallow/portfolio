import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

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
  };

  return (
    <div className="main">
      <div className="content">
        <div className="header">Desktop</div>
        <div className="info">
          <div className="text-center m-5">
            <h1 className="name">
              hi! <span style={{ color: "rgb(64, 131, 255)" }}>i'm Isabel</span>
            </h1>
            <p className="fs-4">full stack web developer</p>
          </div>
          <div className="icons d-flex justify-content-center align-items-center gap-4 m-5 nunito-sans">
            <div
              className="icon d-flex flex-column align-items-center"
              role="button"
              onClick={() => setTitle("about")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="80px"
                viewBox="0 -960 960 960"
                width="80px"
                fill="#999999"
              >
                <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
              about
            </div>
            <div
              className="icon d-flex flex-column align-items-center"
              role="button"
              onClick={() => setTitle("skills")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="80px"
                viewBox="0 -960 960 960"
                width="80px"
                fill="#999999"
              >
                <path d="M400-240q-33 0-56.5-23.5T320-320v-50q-57-39-88.5-100T200-600q0-117 81.5-198.5T480-880q117 0 198.5 81.5T760-600q0 69-31.5 129.5T640-370v50q0 33-23.5 56.5T560-240H400Zm0-80h160v-92l34-24q41-28 63.5-71.5T680-600q0-83-58.5-141.5T480-800q-83 0-141.5 58.5T280-600q0 49 22.5 92.5T366-436l34 24v92Zm0 240q-17 0-28.5-11.5T360-120v-40h240v40q0 17-11.5 28.5T560-80H400Zm80-520Z" />
              </svg>
              skills
            </div>
            <div
              className="icon d-flex flex-column align-items-center"
              role="button"
              onClick={() => setTitle("projects")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="80px"
                viewBox="0 -960 960 960"
                width="80px"
                fill="#999999"
              >
                <path d="M160-240v-480 520-40Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v200h-80v-200H447l-80-80H160v480h200v80H160ZM584-56 440-200l144-144 56 57-87 87 87 87-56 57Zm192 0-56-57 87-87-87-87 56-57 144 144L776-56Z" />
              </svg>
              projects
            </div>
            <div
              className="icon d-flex flex-column align-items-center"
              role="button"
              onClick={() => setTitle("contact")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="80px"
                viewBox="0 -960 960 960"
                width="80px"
                fill="#999999"
              >
                <path d="M440-520 120-720v400h400v80H120q-33 0-56.5-23.5T40-320v-480q0-33 23.5-56.5T120-880h640q33 0 56.5 23.5T840-800v200h-80v-120L440-520Zm0-80 320-200H120l320 200ZM760-80q-66 0-113-47t-47-113v-180q0-42 29-71t71-29q42 0 71 29t29 71v180h-80v-180q0-8-6-14t-14-6q-8 0-14 6t-6 14v180q0 33 23.5 56.5T760-160q33 0 56.5-23.5T840-240v-160h80v160q0 66-47 113T760-80ZM120-720v-80 480-400Z" />
              </svg>
              contact
            </div>
          </div>
        </div>
      </div>
      {content && (
        <Modal title={title} close={handleClear}>
          {content}
        </Modal>
      )}
    </div>
  );
}

export default App;
