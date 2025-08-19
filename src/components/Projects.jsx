import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  const ImageCarousel = ({ images }) => {
    return (
      <Carousel
        showThumbs={false}
        showArrows={true}
        showIndicators={false}
        autoPlay
        infiniteLoop
      >
        {images.map((image) => (
          <div>
            <img src={image} alt={image} />
          </div>
        ))}
      </Carousel>
    );
  };

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

  const todoistImages = [
    "project-images/todoist-1.png",
    "project-images/todoist-2.png",
    "project-images/todoist-3.png",
  ];

  return (
    <div className="projects montserrat">
      <div className="p-4 mb-5 border-bottom">
        <div className="d-flex align-items-center gap-3 mb-2">
          <h2>re:wear</h2>
          <a
            href="https://rewear-x2gd.onrender.com"
            target="_blank"
            className="btn btn-outline-secondary"
          >
            view here!
          </a>
        </div>
        <ImageCarousel images={rewearImages} />
        <div className="mt-4">
          <p>A buy and sell marketplace</p>
          <p>
            Built with Django + React, featuring full CRUD functionality, user
            auth, and image uploads via Supabase
          </p>
          <p>key features:</p>
          <ul>
            <li>user registration & login with JWT-based authentication</li>
            <li>route-based navigation using React Router</li>
            <li>item listings with image upload (Supabase storage)</li>
            <li>RESTful API with Django REST framework</li>
          </ul>
          <div>
            <p>stack:</p>
            <div className="d-flex gap-2 mt-2 flex-wrap">
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                React
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                React Router
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                Bootstrap
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                Django
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                Django REST framework
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                Django simple-jwt
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                PostgreSQL
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mb-5 border-bottom">
        <div className="d-flex align-items-center gap-3 mb-2">
          <h2>summarease</h2>
          <a
            href="https://summarease-bsyf.onrender.com"
            target="_blank"
            className="btn btn-outline-secondary"
          >
            view here!
          </a>
        </div>
        <ImageCarousel images={summareaseImages} />
        <div className="mt-4">
          <p>A hackathon project</p>
          <p>A text summarization tool for long-form content</p>
          <p>
            Built with React + Django, featuring gemini, and PDF export for
            notes
          </p>
          <p>key features:</p>
          <ul>
            <li>summary generation using AI from gemini API</li>
            <li>used html2pdf.js for downloading content</li>
          </ul>
          <div>
            <p>stack:</p>
            <div className="d-flex gap-2 mt-2 flex-wrap">
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                React
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                Bootstrap
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                Django
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                html2pdf.js
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mb-5 border-bottom">
        <div className="d-flex align-items-center gap-3 mb-2">
          <h2>todoist</h2>
          <a
            href="https://todoist-ruby.vercel.app/"
            target="_blank"
            className="btn btn-outline-secondary"
          >
            view here!
          </a>
        </div>
        <ImageCarousel images={todoistImages} />
        <div className="mt-4">
          <p>AI-Powered To Do List</p>
          <p>
            Built with React, integrated Clerk for user auth, and used
            Appwrite's SDK for database management. Also allows users to
            generate tasks with AI.
          </p>
          <p>key features:</p>
          <ul>
            <li>creating, organizing, and tracking tasks with due dates</li>
            <li>
              Implemented Gemini AI to allow users to generate tasks from a
              prompt
            </li>
          </ul>
          <div>
            <p>stack:</p>
            <div className="d-flex gap-2 mt-2 flex-wrap">
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                React
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                React Router
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                Bootstrap
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                Django
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                Django REST framework
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                Django simple-jwt
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                PostgreSQL
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mb-5 border-bottom">
        <div className="d-flex align-items-center gap-3 mb-2">
          <h2>pokemon quiz</h2>
          <a
            href="https://pokemon-quiz-a3i5.onrender.com/"
            target="_blank"
            className="btn btn-outline-secondary"
          >
            view here!
          </a>
        </div>
        <ImageCarousel images={pokemonImages} />
        <div className="mt-4">
          <p>A quiz game i built for fun</p>
          <p>Built with React + Django</p>
          <p>key features:</p>
          <ul>
            <li>multiple-choice quiz with randomized questions</li>
            <li>final score + result screen at the end</li>
            <li>leaderboard for displaying scores of players</li>
          </ul>
          <div>
            <p>stack:</p>
            <div className="d-flex gap-2 mt-2 flex-wrap">
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                React
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                React Router
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                Bootstrap
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                Django
              </p>
              <p
                className="card shadow-sm"
                style={{ width: "fit-content", padding: "0.5rem" }}
              >
                PostgreSQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
