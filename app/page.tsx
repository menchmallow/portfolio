import Canvas from "./components/canvas";
import Nav from "./components/nav";
import TypingEffect from "./components/typing-effect";

const phrases = ["web developer", "graphic designer", "video editor"];

export default function Home() {
  return (
    <div>
      <Canvas />
      <main>
        <div className="flex justify-center items-center h-screen">
          <section className="bg-white h-[100vh] w-full md:h-fit md:w-[80vw] md:rounded-lg md:border md:border-gray-500 md:border-2 lg:w-[70vw] xl:w-[40vw] overflow-hidden">
            <div className="bg-black text-white p-4">Desktop</div>
            <div className="h-full flex flex-col items-center justify-center md:h-[45vh]">
              <div className="flex flex-col items-center justify-center mb-10">
                <h1 className="font-semibold text-5xl">
                  hi! <span className="text-blue-500">i'm Isabel</span>
                </h1>
                <TypingEffect words={phrases} />
              </div>
              <Nav />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
