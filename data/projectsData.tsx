// import manageIt from "../public/projectImages/manage-it_screengrab.png"
// import EXTRAvert from "../public/projectImages/EXTRAvert_screengrab.png";
// import CCE from "../public/projectImages/CCE_screengrab.png";
// import buddie from "../public/projectImages/buddie_screengrab.png";
// import techBlog from "../public/projectImages/tech-blog_screengrab.png";
// import weatherdash from "../public/projectImages/weatherdash_screengrab.png";
// import trulia from "../public/projectImages/trulia_screengrab.png";
// import gitItDone from "../public/projectImages/git-it-done_screengrab.png";

// Did you mean './/EXTRAvert_screengrab.png'?
// Requests that should resolve in the current directory need to start with './'.
// Requests that start with a name are treated as module requests and resolve within module directories (node_modules, /Users/celinalouissaint/Documents/devProjects/louissaint.me).
// If changing the source code is not an option there is also a resolve options called 'preferRelative' which tries to resolve these kind of requests in the current directory too.
// > 1 | import manageIt from "/EXTRAvert_screengrab.png"


export const projectData = [
    {
        name: "Manage-It",
        description: "A Task Manager, Full-Stack Application",
        decription2: "HTML, CSS, Bootstrap, Javascript, Node.js, Sequalize, Handlebars, Twilio API",
        links: [
            "https://github.com/celinalou92/manage-it",
            "https://cryptic-bastion-04157.herokuapp.com/"
        ],
        // image: manageIt.src,
        featured: true
    },
    {
        name: "EXTRAvert",
        description: "An Event Decision, Front-End Application",
        decription2: "HTML, CSS, Bulma CSS, Javascript, JQuery, Ticketmaster and Skyscanner API",
        links: [
            "https://github.com/celinalou92/EXTRAvert",
            "https://unity7.github.io/EXTRAvert/"
        ],
        // image: EXTRAvert.src,
        featured: true
    },
    {
        name: "Buddie",
        description: "A Social Media Full Stack Application",
        decription2: "HTML, CSS, JavaScript, Node.js, Express, React, MongoDB, GraphQL",
        links: [
            "https://github.com/celinalou92/buddie",
            "https://buddie-app.herokuapp.com/"
        ],
        // image: buddie.src,
        featured: true
    },
    {
        name: "CCE Landing Page",
        description: "A Landing Page, Front-End Website",
        decription2: "HTML, CSS, Mobile Responsive Design, Bootstrap, JavaScript",
        links: [
            "https://github.com/celinalou92/CCE-Website",
            "https://celinalou92.github.io/CCE-Website/"
        ],
        // image: CCE.src,
        featured: true
    },
    {
        name: "Tech-Blog",
        description: "A Full-Stack Blog App",
        decription2: "",
        links: [
            "https://github.com/celinalou92/tech-blog",
            "https://tech-blog-23may21.herokuapp.com/"
        ],
        // image: techBlog.src,
        featured: false
    },
    {
        name: "Weather App",
        description: "A Front-End Forecast App",
        decription2: "",
        links: [
            "https://celinalou92.github.io/weatherdash/",
            "https://github.com/celinalou92/weatherdash/"
        ],
        // image: weatherdash.src,
        featured: false
    },
    {
        name: "Git-it-Done!",
        description: "A Front-End Github API Search App",
        decription2: "",
        links: [
            "https://github.com/celinalou92/git-it-done",
            "https://celinalou92.github.io/git-it-done/"
        ],
        // image: gitItDone.src,
        featured: false
    },
    {
        name: "Trulia Recreation",
        description: "A Front-End Recreation",
        decription2: "",
        links: [
            "https://codepen.io/celinalou92/pen/MWwewWQ",
            ""
        ],
        // image: trulia,
        featured: false
    },
]

export default projectData;