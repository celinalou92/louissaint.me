import Skills from "@/types/Skills";
import illustratorLogo from '@/public/icons/illustratorLogo.png';
import inDesignLogo from '@/public/icons/inDesignLogo.png';
import photoshopLogo from '@/public/icons/photoshopLogo.png';
import premeireProLogo from '@/public/icons/premeireProLogo.png';

export const skillsListData: Skills = {
    dev: {
        certifications: [
          { name: "AWS Certified Cloud Practitioner" }
        ],
        programming_languages: [
          { name: "HTML" },
          { name: "CSS" },
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "Java" },
          { name: "Python" }
        ],
        frameworks_libraries: [
          { name: "React.js" },
          { name: "Next.js" },
          { name: "Node.js" },
          { name: "Express" },
          { name: "Spring Boot" },
          { name: "GraphQL" }
        ],
        testing: [
          { name: "Jest" },
          { name: "React Testing Library" },
          { name: "JUnit" },
          { name: "Mockito" }
        ],
        methodologies: [
          { name: "Agile" },
          { name: "Kanban" },
          { name: "CI/CD" },
          { name: "TDD" }
        ],
        tools_platforms: [
          { name: "Docker" },
          { name: "Google Cloud Platform (GCP)" }
        ]
      },
    adobe: [
        {
            name: "Photoshop",
            image: photoshopLogo,
            star: 5
        },
        {
            name: "Illustrator",
            image: illustratorLogo,
            star: 5
        },
        {
            name: "PremeirePro",
            image: premeireProLogo,
            star: 5
        },
        {
            name: "InDesign",
            image: inDesignLogo,
            star: 5
        }
    ],
    business: [
        {
            name: "Public Speaking",
            star: 5
        },
        {
            name: "Account Management",
            star: 5
        },
        {
            name: "Customer Relations",
            star: 5
        },
    ]
};