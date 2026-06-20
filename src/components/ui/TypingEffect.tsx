import { useState, useEffect } from "react";

const TypingEffect = ({ words }: { words: string[] }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      timer = setTimeout(() => {
        setCurrentWord(word.substring(0, currentWord.length + 1));
      }, 100);

      if (currentWord === word) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      timer = setTimeout(() => {
        setCurrentWord(word.substring(0, currentWord.length - 1));
      }, 100);

      if (currentWord === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [wordIndex, currentWord, isDeleting]);

  let animatePulse = words[wordIndex] === currentWord ? "animate-pulse" : "";

  return (
    <div className="h-[1.5rem]">
      <span
        className={`whitespace-nowrap border-r-2 border-blue-500 ${animatePulse}`}
      >
        {currentWord}
      </span>
    </div>
  );
};

export default TypingEffect;
