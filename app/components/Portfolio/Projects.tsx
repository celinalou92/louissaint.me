import { Project } from "@/types/Project";
import StyledCard from "../StyledCard/StyledCard";
import { getButtons } from "../Buttons/Buttons";

export const Projects = ({ projects }: { projects: Array<Project> }) => {
return (
  <section
    className="flex flex-col items-center py-12 px-4"
  >
    <div className="sectionContainer w-full max-w-5xl">
      <h2 className="text-center text-2xl font-semibold tracking-widest border-b border-[#D6A23A] mb-12">
        Portfolio
      </h2>

      <div className="flex flex-col items-center justify-center gap-20 py-12">
        {projects.map((project: Project) => {
          const buttons = [getButtons(project)]; // Keep wrapped in array
          return (
            <StyledCard
              key={project.name}
              contentHeader={project.name}
              contentText={[
                project.description ?? "",
                project.description2 ?? "",
              ]}
              cardMedia={`${project.image}`}
              buttons={buttons}
            />
          );
        })}
      </div>
    </div>
  </section>
);
};