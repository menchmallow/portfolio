import ProjectCard from "../project-card";
import type { ProjectCardProps } from "../project-card";
import ImageCarousel from "../image-carousel";

// const rewearImages = [rewear1, rewear2, rewear3];

const pokemonImages = [
  "/project-images/pokemon-quiz-1.webp",
  "/project-images/pokemon-quiz-2.webp",
];

// const tickImages = [tick1, tick2, tick3, tick4, tick5];

const resumateImages = [
  "/project-images/resumate-1.webp",
  "/project-images/resumate-2.webp",
];

const silksongImages = [
  "/project-images/silksong-1.webp",
  "/project-images/silksong-2.webp",
  "/project-images/silksong-3.webp",
  "/project-images/silksong-3.webp",
];

const iskolarImages = [
  "/project-images/iskolar-1.webp",
  "/project-images/iskolar-2.webp",
  "/project-images/iskolar-3.webp",
];

const websiteProjects: ProjectCardProps[] = [
  {
    title: "Iskolar",
    link: "https://iskolar-brown.vercel.app/",
    ImageComponent: <ImageCarousel images={iskolarImages} />,
    descriptions: [
      "A website for browsing scholarships in the Phillippines",
      "Made for filipino students to search and manage scholarship applications",
    ],

    stack: ["Next.js", "Supabase (auth + database)", "Tailwindcss", "shadcn"],
  },
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

    stack: [
      "React",
      "React Router",
      "Tailwindcss",
      "python-docx",
      "Django",
      "Django REST framework",
    ],
  },
  // {
  //   title: "Re:wear",
  //   link: "https://rewear-x2gd.onrender.com/",
  //   ImageComponent: <ImageCarousel images={rewearImages} />,
  //   descriptions: [
  //     "A buy and sell marketplace",
  //     "Built with Django + React, featuring full CRUD functionality, user auth, and image uploads via Supabase",
  //   ],
  //   key_features: [
  //     "user registration & login with JWT-based authentication",
  //     "route-based navigation using React Router",
  //     "item listings with image upload (Supabase storage)",
  //     "RESTful API with Django REST framework",
  //   ],
  //   stack: [
  //     "React",
  //     "React Router",
  //     "Bootstrap",
  //     "Django",
  //     "Django REST framework",
  //     "Django simple-jwt",
  //   ],
  // },
  // {
  //   title: "tick",
  //   link: "https://tick-ai.vercel.app/",
  //   ImageComponent: <ImageCarousel images={tickImages} />,
  //   descriptions: [
  //     "AI-Powered To Do List",
  //     "Built with React, integrated Clerk for user auth, and used Appwrite's SDK for database management. Also allows users to generate tasks with AI",
  //   ],
  //   key_features: [
  //     "creating, organizing, and tracking tasks with due dates",
  //     "integrated Gemini AI to allow users to generate tasks from a prompt",
  //     "item listings with image upload (Supabase storage)",
  //   ],
  //   stack: ["React", "React Router", "Bootstrap", "Appwrite", "Clerk"],
  // },
  // {
  //   title: "Hollow Knight: Silksong - landing page",
  //   link: "https://hollowknightsilksong-fan.vercel.app/",
  //   ImageComponent: <ImageCarousel images={silksongImages} />,
  //   descriptions: [""],
  //   stack: ["React", "Tailwindcss"],
  // },
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

const Projects = () => {
  return (
    <div>
      {websiteProjects.map((project, i) => (
        <ProjectCard
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
