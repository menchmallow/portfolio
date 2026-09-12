"use client";

import { useState, useEffect, ReactNode } from "react";
import About from "./modal-contents/about";
import Skills from "./modal-contents/skills";
import Projects from "./modal-contents/projects";
import Contact from "./modal-contents/contact";
import Modal from "./modal";

type ModalContent = "about" | "skills" | "projects" | "contact";

export default function Nav() {
  const [title, setTitle] = useState<ModalContent | null>(null);
  const [content, setContent] = useState<ReactNode | null>(null);

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
    <div className="flex justify-center gap-4 md:mb-20">
      <div
        className="flex flex-col items-center cursor-pointer"
        role="button"
        onClick={() => setTitle("about")}
      >
        <i
          className="fi fi-ts-id-card-clip-alt bg-blue-100 px-4 rounded-2xl border-blue-400 border md:bg-transparent md:border-none md:px-2"
          style={{ fontSize: "4rem" }}
        ></i>
        <span className="hover:underline hover:text-blue-500">about</span>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer"
        role="button"
        onClick={() => setTitle("skills")}
      >
        <i
          className="fi fi-ts-bulb bg-blue-100 px-4 rounded-2xl border-blue-400 border md:bg-transparent md:border-none md:px-2"
          style={{ fontSize: "4rem" }}
        ></i>
        <span className="hover:underline hover:text-blue-500">skills</span>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer"
        role="button"
        onClick={() => setTitle("projects")}
      >
        <i
          className="fi fi-ts-tab-folder bg-blue-100 px-4 rounded-2xl border-blue-400 border md:bg-transparent md:border-none md:px-2"
          style={{ fontSize: "4rem" }}
        ></i>
        <span className="hover:underline hover:text-blue-500">projects</span>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer"
        role="button"
        onClick={() => setTitle("contact")}
      >
        <i
          className="fi fi-ts-open-mail-clip bg-blue-100 px-4 rounded-2xl border-blue-400 border md:bg-transparent md:border-none md:px-2"
          style={{ fontSize: "4rem" }}
        ></i>
        <span className="hover:underline hover:text-blue-500">contact</span>
      </div>
      {content && (
        <Modal
          key={title}
          title={title}
          close={handleClear}
          content={content}
        ></Modal>
      )}
    </div>
  );
}
