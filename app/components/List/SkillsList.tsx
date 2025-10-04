import Skill from "@/types/Skill";
import { skillsListData } from "@/app/data/skillListData";


const {
  certifications,
  programming_languages,
  frameworks_libraries,
  methodologies,
  testing,
} = skillsListData.dev;

const skillCategories = [
  {
    title: "Programming Languages",
    skills: programming_languages,
  },
  {
    title: "Methodologies",
    skills: methodologies,
  },
  {
    title: "Frameworks & Libraries",
    skills: frameworks_libraries,
  },
  {
    title: "Testing",
    skills: testing,
  },
  {
    title: "Certifications",
    skills: certifications,
  },
];

export const SkillList = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center pb-10 px-8 w-full"
    >
      <div className="max-w-xl">
        <h2 className="text-center text-2xl tracking-widest border-b-[.5px] border-[#D6A23A] mb-8 font-bold">
          My Skill Set
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-2 rounded-md"
            >
              <h3 className="text-base font-medium border-b-[.5px] border-[#D6A23A] pb-1 mb-3">
                {category.title}
              </h3>
              <ul className="space-y-1">
                {category.skills.map((skill: Skill) => (
                  <li key={skill.name} className="text-sm">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};