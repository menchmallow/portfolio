import {
  useState,
  useEffect,
  useRef,
  ReactNode,
  MouseEvent as ReactMouseEvent,
} from "react";

// ASSETS
import closeIcon from "../assets/cross-small.png";

interface ModalProps {
  content: ReactNode;
  title: ReactNode;
  close: () => void;
}

interface Offset {
  x: number;
  y: number;
}

const Modal = ({ content, title, close }: ModalProps) => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });

  const modalRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setInitialPosition = () => {
      if (!modalRef.current) return;

      if (window.innerWidth >= 768) {
        const { offsetWidth, offsetHeight } = modalRef.current;
        const left = (window.innerWidth - offsetWidth) / 2;
        const top = (window.innerHeight - offsetHeight) / 2;

        modalRef.current.style.left = `${left}px`;
        modalRef.current.style.top = `${top}px`;
      } else {
        modalRef.current.style.top = "0";
        modalRef.current.style.left = "0";
      }
    };

    setInitialPosition();
    window.addEventListener("resize", setInitialPosition);

    return () => window.removeEventListener("resize", setInitialPosition);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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

  const drag = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!modalRef.current) return;
    const rect = modalRef.current.getBoundingClientRect();

    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setDragging(true);
  };

  return (
    <div
      className="bg-white absolute w-full h-full md:w-[80vw] md:h-[60vh] md:rounded-lg md:border md:border-gray-500 md:border-2 lg:w-[70vw] xl:w-[50vw] overflow-hidden"
      ref={modalRef}
    >
      <div
        className="bg-black text-white flex justify-between items-center p-4"
        ref={headerRef}
        onMouseDown={drag}
        style={{ cursor: "move" }}
      >
        {title}
        <img
          src={closeIcon}
          alt="Close icon"
          onClick={close}
          className="cursor-pointer"
        />
      </div>
      <div className="h-full overflow-auto p-8">{content}</div>
    </div>
  );
};

export default Modal;
