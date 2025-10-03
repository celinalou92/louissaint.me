import React from "react";
import Head from "next/head";
import CTAButton from "../Buttons/CTAButton"

type Service = {
  title: string;
  description?: string;
  features: string[];
  startingPrice?: string;
};

const services: Service[] = [
  {
  title: "Programming Languages",
    features: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "Java",
      "Python"
    ]
  },
  {
  title: "Frameworks & Libraries",
    features: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express",
      "Spring Boot",
      "GraphQL"
    ]
  },
  {
  title: "Methodologies",
    features: [
      "Agile",
      "Kanban",
      "CI/CD",
      "TDD"
    ]
  },
  {
  title: "Testing",
    features: [
      "Jest",
      "React Testing Library",
      "JUnit",
      "Playwright",
      "Mockito"
    ]
  },
  {
  title: "Certifications",
    features: [
      "AWS Certified Cloud Practitioner"
    ]
  }
 
  // {
  //   title: "API Development",
  //   description:
  //     "Refactor, migrate, or optimize Java/Spring Boot backends.",
  //   features: [
  //     "REST API Development",
  //     "REST Integration",
  //     "Node.js, Python or Java",
  //     "React and Next.js Router",
  //     "Spring Boot deployments",
  //     // "**Security audit & fixes",
  //   ],
  //   // startingPrice: "Starts at $500",
  // },
  // {
  //   title: "React Development",
  //   description:
  //     "Build front end or full stack web applicatoins using React, Next.js, Tailwind.",
  //   features: [
  //     "User auth",
  //     // "Data tables & filtering",
  //     "Custom features",
  //   ],
  //   // startingPrice: "Starts at $600",
  // }
];

const experience: Service [] = [
 {
    title: "Experience",
    description:
      "AI Integrations, API Development, React Development. Build front end or full stack web applicatoins using React, Next.js, Tailwind. Refactor, migrate, or optimize Java/Spring Boot backends.",
    features: [
      "Text to image generation: OpenAI, Stability AI",
      "Diarization alignment",
      "OpenAI summary & transcription",
      "REST API Development",
      "REST Integration",
      "Node.js, Python or Java",
      "React and Next.js",
      "Spring Boot deployments",
      "End-to-end, contract, unit, integration testing",
      "CI/CD pipeline development",
      "AWS and GCP application deployment",
      "Tailwind",
      "MUI",
      "Custom UI component"
    ],
  }
]


const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition w-full max-w-md mx-auto">
    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
    <p className="text-sm text-gray-300 mb-4">{service.description}</p>
    <ul className="list-disc list-inside text-sm text-gray-400 mb-4">
      {service.features.map((feature, idx) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
    {service.startingPrice && (
      <p className="text-sm text-amber-400 font-medium">
        {service.startingPrice}
      </p>
    )}
  </div>
);

const ServicesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Services | Louissaint</title>
        <meta
          name="description"
          content="Explore backend, AI integration, and dashboard development services for startups and small teams."
        />
      </Head>
      <main className="min-h-screen px-6 py-12">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Freelance Services
          </h1>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            I bring a mix of AI integration and full-stack development experience, with a focus on building web applications. My work includes refactoring and deploying Java/Spring Boot backends, delivering React/Next.js web applications and designing APIs. My profesional experience includes building ecommerce applications for enterprise retail and heavy equipment industries and a start up AI text and image generation application for the entertainment industry. I’ve delivered projects with features like custom components, Stripe payments integration, microservice data processing, automated testing and delivery pipeline development. Across Node.js, Python, and Java, I enjoy solving complex problems and making technology easier for people to use. 
          </p>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            I am especially interested in AI integration projects dealing with audio and video solutions. See my AI Customer Service Ticket Generation Tool here. I am an AI enthusiast and am asynctnously working along side AI tools to experiement while contiuously building without the use of AI assitance. I take an wholistic approach to my exploration with AI, using it as a suppliment to my skills and not a replacement for my effort. Read about my AI phylosophy in this blog post.
          </p>
          {/* <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div> */}
          <div className="mt-16">
              <ServiceCard key={experience[0].title} service={experience[0]} />
          </div>
          {/* <div className="mt-16 text-center">
            <p className="text-xl font-semibold mb-4">
              Book a free 15-minute call — let’s talk through your idea.
            </p>
            <CTAButton 
            path="https://calendly.com/YOUR-CALENDLY-LINK"
            text="Book a Discovery Call"
            />
          </div> */}
        </section>
      </main>
    </>
  );
};

export default ServicesPage;