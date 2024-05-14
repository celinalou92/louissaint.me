import Skill from "./Skill";

export interface Skills {
  
    dev: {
      certifications: Skill[],
      programming_languages: Skill[],
      frameworks_libraries: Skill[]
      testing: Skill[],
      methodologies: Skill[]
    };
    adobe: Skill[];
    business: Skill[]
  }

  export default Skills;


  
