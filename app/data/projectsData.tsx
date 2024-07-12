import manageIt from "@/public/projectImages/manage-it_screengrab.png"
import EXTRAvert from "@/public/projectImages/EXTRAvert_screengrab.png";
import CCE from "@/public/projectImages/CCE_screengrab.png";
import buddie from "@/public/projectImages/buddie_screengrab.png";
import techBlog from "@/public/projectImages/tech-blog_screengrab.png";
import weatherdash from "@/public/projectImages/weatherdash_screengrab.png";
import trulia from "@/public/projectImages/trulia_screengrab.png";
import gitItDone from "@/public/projectImages/git-it-done_screengrab.png";
import vibbinbeads from "@/public/projectImages/vibinbeadsbybb.png"
import alphoto from "@/public/projectImages/alphoto.jpeg"


export const projectData = [
    {
        name: "Buddie",
        description: "A Social Media Full Stack Application",
        description2: "HTML, CSS, Typescript, Node.js, Express, React, MongoDB, GraphQL",
        links: [
            "https://github.com/celinalou92/buddie2.0",
            "https://buddie2-0.vercel.app/"
        ],
        image: buddie.src,
        featured: true
    },
    {
        name: "Vibbin Beads By BB",
        description: "A landing page for a beaded jewelry business.",
        description2: "Next.js, Typescript, MUI, Vercel",
        links: [
            "https://github.com/celinalou92/vibbinbeadsbybb",
            "https://vibinbeadsbybb.louissaint.me/"
        ],
        image: vibbinbeads.src,
        featured: true
    },
    {
        name: "Amanda Lynn Photography",
        description: "A portfolio website for a photography and videography business. ",
        description2: "Redesigned and developed client’s website with custom CSS modules and ensured mobile responsiveness. Clips from the client demo below.",
        links: [
            "https://vimeo.com/941462940"
        ],
        image: alphoto.src,
        featured: true
    },
    {
        name: "Manage-It",
        description: "A Task Manager, Full-Stack Application",
        description2: "HTML, CSS, Bootstrap, Javascript, Node.js, Sequalize, Handlebars, Twilio API",
        links: [
            "https://github.com/celinalou92/manage-it",
            "https://cryptic-bastion-04157.herokuapp.com/"
        ],
        image: manageIt.src,
        featured: false
    },
    {
        name: "EXTRAvert",
        description: "An Event Decision, Front-End Application",
        description2: "HTML, CSS, Bulma CSS, Javascript, JQuery, Ticketmaster and Skyscanner API",
        links: [
            "https://github.com/celinalou92/EXTRAvert",
            "https://unity7.github.io/EXTRAvert/"
        ],
        image: EXTRAvert.src,
        featured: false
    },
    {
        name: "CCE Landing Page",
        description2: "A Landing Page, Front-End Website",
        decription2: "HTML, CSS, Mobile Responsive Design, Bootstrap, JavaScript",
        links: [
            "https://github.com/celinalou92/CCE-Website",
            "https://celinalou92.github.io/CCE-Website/"
        ],
        image: CCE.src,
        featured: false
    },
    {
        name: "Tech-Blog",
        description: "A Full-Stack Blog App",
        description2: "",
        links: [
            "https://github.com/celinalou92/tech-blog",
            "https://tech-blog-23may21.herokuapp.com/"
        ],
        image: techBlog.src,
        featured: false
    },
    {
        name: "Weather App",
        description: "A Front-End Forecast App",
        description2: "",
        links: [
            "https://celinalou92.github.io/weatherdash/",
            "https://github.com/celinalou92/weatherdash/"
        ],
        image: weatherdash.src,
        featured: false
    },
    {
        name: "Git-it-Done!",
        description: "A Front-End Github API Search App",
        description2: "",
        links: [
            "https://github.com/celinalou92/git-it-done",
            "https://celinalou92.github.io/git-it-done/"
        ],
        image: gitItDone.src,
        featured: false
    },
    {
        name: "Trulia Recreation",
        description: "A Front-End Recreation",
        description2: "",
        links: [
            "https://codepen.io/celinalou92/pen/MWwewWQ",
            ""
        ],
        image: trulia,
        featured: false
    },
]

export default projectData;