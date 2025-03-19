import Skill from "./Skill";

export interface Skills {
  
    dev: {
      certifications: Skill[],
      programming_languages: Skill[],
      frameworks_libraries: Skill[]
      testing: Skill[],
      methodologies: Skill[],
      tools_platforms: Skill[]
    };
    adobe: Skill[];
    business: Skill[]
  }

  export default Skills;


  
