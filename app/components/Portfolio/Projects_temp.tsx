import StyledCard from "../StyledCard/StyledCard";
import CTAButton from "../Buttons/CTAButton"

const projects = [
  {
    title: "Whisper AI Voice App",
    tagline: "Smart Transcripts for Busy Teams",
    problem:
      "Teams often waste time manually writing notes from long, unstructured meetings.",
    solution:
      "I built a tool using Whisper for transcription, OpenAI for summary generation, and diarization to tag speaker turns.",
    results: "Currently used by 3 users weekly. Expanding to internal test group.",
    techStack: ["Whisper", "OpenAI", "Python", "Flask", "React"],
    image: "/images/projects/whisper-app.jpg",
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/your-username/whisper-ai-app",
      },
    ],
  },
  {
    title: "Node to Java Backend Migration",
    tagline: "Modernizing APIs for a Budget Tracker App",
    problem:
      "An older Node.js backend was becoming hard to maintain and scale securely.",
    solution:
      "Migrated the backend to Spring Boot with modularized service layers and proper DTOs. Improved deployment flow with GitHub Actions.",
    results:
      "Reduced cold start time and fixed persistent memory leaks. Now easier to test and deploy.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    image: "/images/projects/java-backend.jpg",
    links: [
      {
        label: "Read Migration Notes",
        href: "https://github.com/your-username/java-api-refactor",
      },
    ],
  },
  {
    title: "Admin Dashboard Kit",
    tagline: "A lightweight analytics panel for indie projects",
    problem:
      "Freelancers and small teams often need a simple, themeable analytics dashboard but don’t want to build from scratch.",
    solution:
      "Built a responsive dashboard kit using React, Tailwind, Recharts, and a mock API layer.",
    results: "Available as a clone template or add-on for client work.",
    techStack: ["React", "Tailwind", "Recharts", "Next.js"],
    image: "/images/projects/dashboard-kit.jpg",
    links: [
      {
        label: "Live Demo",
        href: "https://admin-kit-demo.vercel.app",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/your-username/dashboard-kit",
      },
    ],
  },
];

const ProjectsPage = () => {
    return (
      <div id="projects" className="pb-10 px-8 w-full">
        <div className="mx-auto">
          <h1 className="text-2xl mb-10 text-center tracking-widest font-bold">
            Projects
          </h1>
          <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
            {projects.map((project) => (
              <StyledCard
                key={project.title}
                contentHeader={`${project.title} – ${project.tagline}`}
                contentText={[
                  `🔍 Problem: ${project.problem}`,
                  `✅ Solution: ${project.solution}\n📈 Outcome: ${project.results}`,
                ]}
                cardMedia={project.image}
                tags={project.techStack}
                buttons={project.links.map((link, index) => (
                  <CTAButton
                    key={index}
                    path={link.href}
                    text={link.label}
                  />
                ))}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectsPage;