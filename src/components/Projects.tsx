import WebsiteProjectCard from "./ui/WebsiteProjectCard";
import type { ProjectCardProps } from "./ui/WebsiteProjectCard";
import ImageCarousel from "./ui/ImageCarousel";
import GraphicDesignCard from "./ui/GraphicDesignCard";

// PROJECT IMAGES
import tick1 from "../assets/project-images/tick-1.png";
import tick2 from "../assets/project-images/tick-2.png";
import tick3 from "../assets/project-images/tick-3.png";
import tick4 from "../assets/project-images/tick-4.png";
import tick5 from "../assets/project-images/tick-5.png";
import rewear1 from "../assets/project-images/rewear-1.png";
import rewear2 from "../assets/project-images/rewear-2.png";
import rewear3 from "../assets/project-images/rewear-3.png";
import pokemonQuiz1 from "../assets/project-images/pokemon-quiz-1.png";
import pokemonQuiz2 from "../assets/project-images/pokemon-quiz-2.png";
import resumate1 from "../assets/project-images/resumate-1.png";
import resumate2 from "../assets/project-images/resumate-2.png";
import resumate3 from "../assets/project-images/resumate-3.png";
import silksong1 from "../assets/project-images/silksong-1.png";
import silksong2 from "../assets/project-images/silksong-2.png";
import silksong3 from "../assets/project-images/silksong-3.png";
import silksong4 from "../assets/project-images/silksong-4.png";
import hiringGraphicDesign from "../assets/graphic-design-images/hiring.webp";
import menuGraphicDesign from "../assets/graphic-design-images/new menu.webp";
import nailGraphicDesign1 from "../assets/graphic-design-images/nail design 1.webp";
import nailGraphicDesign2 from "../assets/graphic-design-images/nail design 2.webp";
import twixGraphicDesign from "../assets/graphic-design-images/twix.webp";
import ediblesLogoDesign from "../assets/graphic-design-images/edibles logo.webp";
import cLogoDesign from "../assets/graphic-design-images/C.png";

const rewearImages = [rewear1, rewear2, rewear3];

const pokemonImages = [pokemonQuiz1, pokemonQuiz2];

const tickImages = [tick1, tick2, tick3, tick4, tick5];

const resumateImages = [resumate1, resumate2, resumate3];

const silksongImages = [silksong1, silksong2, silksong3, silksong4];

const websiteProjects: ProjectCardProps[] = [
  {
    title: "resumate",
    link: "https://resumate-beta.vercel.app/",
    ImageComponent: <ImageCarousel images={resumateImages} />,
    descriptions: [
      "A website to help job-seekers create their resumes easily",
      "A resume builder with templates to choose from",
      "Includes an AI-powered interview simulator to help users prepare",
      "Resumes are built utilizing the python-docx library",
    ],
    key_features: [
      "fill out a simple form to generate a resume instantly",
      "save resume to docx",
      "AI powered interview simulator",
    ],
    stack: [
      "React",
      "React Router",
      "Tailwindcss",
      "python-docx",
      "Django",
      "Django REST framework",
    ],
  },
  {
    title: "Re:wear",
    link: "https://rewear-x2gd.onrender.com/",
    ImageComponent: <ImageCarousel images={rewearImages} />,
    descriptions: [
      "A buy and sell marketplace",
      "Built with Django + React, featuring full CRUD functionality, user auth, and image uploads via Supabase",
    ],
    key_features: [
      "user registration & login with JWT-based authentication",
      "route-based navigation using React Router",
      "item listings with image upload (Supabase storage)",
      "RESTful API with Django REST framework",
    ],
    stack: [
      "React",
      "React Router",
      "Bootstrap",
      "Django",
      "Django REST framework",
      "Django simple-jwt",
    ],
  },
  {
    title: "tick",
    link: "https://tick-ai.vercel.app/",
    ImageComponent: <ImageCarousel images={tickImages} />,
    descriptions: [
      "AI-Powered To Do List",
      "Built with React, integrated Clerk for user auth, and used Appwrite's SDK for database management. Also allows users to generate tasks with AI",
    ],
    key_features: [
      "creating, organizing, and tracking tasks with due dates",
      "integrated Gemini AI to allow users to generate tasks from a prompt",
      "item listings with image upload (Supabase storage)",
    ],
    stack: ["React", "React Router", "Bootstrap", "Appwrite", "Clerk"],
  },
  {
    title: "Hollow Knight: Silksong - landing page",
    link: "https://hollowknightsilksong-fan.vercel.app/",
    ImageComponent: <ImageCarousel images={silksongImages} />,
    descriptions: [""],
    stack: ["React", "Tailwindcss"],
  },
  {
    title: "pokemon quiz",
    link: "https://pokemon-quiz-a3i5.onrender.com/",
    ImageComponent: <ImageCarousel images={pokemonImages} />,
    descriptions: ["A quiz game i built for fun"],
    key_features: [
      "multiple-choice quiz with randomized questions",
      "final score + result screen at the end",
      "leaderboard for displaying scores of players",
    ],
    stack: ["React", "React Router", "Bootstrap"],
  },
];

const graphicDesignImages = [
  hiringGraphicDesign,
  menuGraphicDesign,
  nailGraphicDesign1,
  nailGraphicDesign2,
  twixGraphicDesign,
  ediblesLogoDesign,
  cLogoDesign,
];

const Projects = ({
  setImgSrc,
}: {
  setImgSrc: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div>
      <h2 className="font-semibold text-3xl my-4">Graphic Designs</h2>
      <div className="bg-gray-100 p-4 rounded-xl">
        <div className="grid gap-y-6 md:grid-cols-2 md:gap-4">
          {graphicDesignImages.map((img, i) => (
            <GraphicDesignCard key={i} img={img} setModalImgSrc={setImgSrc} />
          ))}
        </div>
      </div>
      {websiteProjects.map((project, i) => (
        <WebsiteProjectCard
          key={i}
          title={project.title}
          link={project.link}
          descriptions={project.descriptions}
          ImageComponent={project.ImageComponent}
          key_features={project.key_features}
          stack={project.stack}
        />
      ))}
    </div>
  );
};

export default Projects;
