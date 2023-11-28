import bootstrapShield from "@/public/icons/bootstrapShield.png";
// import javascriptShield from "@/public/icons/javascriptShield.png";
import Skills from "@/types/Skills";
import illustratorLogo from '@/public/icons/illustratorLogo.png';
import inDesignLogo from '@/public/icons/inDesignLogo.png';
import photoshopLogo from '@/public/icons/photoshopLogo.png';
import premeireProLogo from '@/public/icons/premeireProLogo.png';

export const skillsListData: Skills = {
    dev: {
            programming_languages: [
                {
                    name: "HTML",
                    // image: htmlShield,
                    star: 5
                },
                {
                    name: "CSS",
                    // image: cssShield,
                    star: 4
                },
                {
                    name: "JavaScript",
                    // image: javascriptShield,
                    star: 4
                },
                {
                    name: "Java",
                    // image: bootstrapShield,
                    star: 2
                },
            ],
            frameworks_libraries: [
                {
                    name: "React.js",
                    // image: bootstrapShield,
                    star: 4
                },
                {
                    name: "Next.js",
                    // image: bootstrapShield,
                    star: 4
                },
                {
                    name: "Node",
                    // image: bootstrapShield,
                    star: 4
                },
                {
                    name: "Express",
                    // image: bootstrapShield,
                    star: 4
                },
                {
                    name: "Typescript",
                    // image: bootstrapShield,
                    star: 4
                },
            ],
            testing: [
                {
                    name: "Jest"
                },
                {
                    name: "React Testing Library"
                },
                {
                    name: "JUnit"
                },
                {
                    name: "Mockito"
                },
            ],
            methodologies: [
                {
                    name: "Agile"
                },
                {
                    name: "Kanban"
                },
                {
                    name: "CI /CD"
                },
                {
                    name: "TDD"
                },
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