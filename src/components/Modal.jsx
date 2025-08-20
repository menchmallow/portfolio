import { useState, useEffect, useRef } from "react";

const Modal = ({ children, title, close, height, width }) => {
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const modalRef = useRef();
  const headerRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragging && modalRef.current) {
        modalRef.current.style.left = `${e.clientX - offset.x}px`;
        modalRef.current.style.top = `${e.clientY - offset.y}px`;
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset]);

  const drag = (e) => {
    const rect = modalRef.current.getBoundingClientRect();

    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setDragging(true);
  };

  return (
    <div
      className="modal-container content"
      ref={modalRef}
      style={{ width: width, maxHeight: height }}
    >
      <div
        className="header d-flex justify-content-between"
        ref={headerRef}
        onMouseDown={drag}
        style={{ cursor: "move" }}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
          role="button"
          onClick={close}
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </div>
      <div
        className="modal-content"
        style={{ maxHeight: `calc(${height} - 100px)`, overflow: "auto" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
