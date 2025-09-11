import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type ProjectCardProps = {
  title: string;
  link: string;
  ImageComponent: React.ReactElement;
  descriptions: string[];
  key_features: string[];
  stack: string[];
};
const ImageCarousel = ({ images }: { images: string[] }) => {
  return (
    <Carousel
      showThumbs={false}
      showArrows={true}
      showIndicators={false}
      autoPlay
      infiniteLoop
    >
      {images.map((image: string) => (
        <div>
          <img src={image} alt={image} />
        </div>
      ))}
    </Carousel>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  link,
  ImageComponent,
  descriptions,
  key_features,
  stack,
}) => {
  return (
    <div className="mb-20">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-3xl my-4">{title}</h2>
        <a
          href={link}
          target="_blank"
          className="border border-gray-400 p-2 rounded-lg hover:bg-black hover:text-white"
        >
          view here!
        </a>
      </div>
      {ImageComponent}
      <div className="mt-4">
        {descriptions.map((description, i) => (
          <p className="my-2" key={i}>
            {description}
          </p>
        ))}
        <p className="my-2">key features:</p>
        <ul className="list-disc mx-10">
          {key_features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
          <li>AI powered summary generator</li>
          <li>export to pdf support</li>
        </ul>
        <div>
          <p className="my-4">stack:</p>
          <div className="flex items-center flex-wrap gap-2">
            {stack.map((tech, i) => (
              <p
                key={i}
                className="shadow-sm rounded-lg p-2 border border-gray-200"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const rewearImages = [
    "project-images/rewear-1.PNG",
    "project-images/rewear-2.PNG",
    "project-images/rewear-3.PNG",
  ];

  const summareaseImages = [
    "project-images/summarease.PNG",
    "project-images/summarease-2.PNG",
  ];

  const pokemonImages = [
    "project-images/pokemon-quiz-1.PNG",
    "project-images/pokemon-quiz-2.PNG",
  ];

  const tickImages = [
    "project-images/tick-1.png",
    "project-images/tick-2.png",
    "project-images/tick-3.png",
  ];

  const projects: ProjectCardProps[] = [
    {
      title: "Re:wear",
      link: "https://pokemon-quiz-a3i5.onrender.com/",
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
      title: "tick-ai",
      link: "https://todoist-ruby.vercel.app/",
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
      title: "summarease",
      link: "https://summarease-bsyf.onrender.com",
      ImageComponent: <ImageCarousel images={summareaseImages} />,
      descriptions: [
        "A text summarization tool for long-form content",
        "Integrated Gemini AI for AI powered text summarization",
        "Initially built with node.js + express.js",
      ],
      key_features: ["AI powered summary generator", "export to PDF support"],
      stack: ["HTML", "CSS", "Node.js", "Express.js", "Gemini API"],
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

  return (
    <div>
      {projects.map((project, i) => (
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
