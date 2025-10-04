import React from "react";
import Head from "next/head";

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
];

const experience: Service [] = [
 {
    title: "Experience",
    description:
      "I bring a mix of full-stack development experience and AI integration, with a focus on building web applications. My work includes refactoring and deploying Java/Spring Boot backends, delivering React/Next.js web applications and designing APIs. My professional experience includes building ecommerce applications for enterprise retail and heavy equipment industries and a start-up AI text and image generation application for the entertainment industry. I’ve delivered projects with features like custom components, Stripe payments integration, microservice data processing, automated testing and delivery pipeline development. Across Node.js, Python, and Java, I enjoy solving complex problems and making technology easier for people to use.",
      features: [
        "Text-to-image generation (OpenAI, Stability AI)",
        "Speaker diarization alignment",
        "OpenAI-powered transcription & summarization",
        "REST API development & integration",
        "Spring Boot deployments",
        "Node.js, Python, or Java services",
        "React and Next.js applications",
        "Tailwind CSS styling",
        "Material UI (MUI)",
        "Custom UI components",
        "Unit, integration, contract, and end-to-end testing",
        "CI/CD pipeline setup and optimization",
        "AWS and GCP application deployments"
      ]
  }
]

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition w-full mx-auto">
    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
    <p className="text-sm text-gray-300 mb-4">{service.description}</p>
    <ul className="list-disc list-inside text-sm text-gray-400 mb-4 pt-4 border-t-[.5px] border-[#D6A23A]">
      {service.features.map((feature, idx) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
    {service.startingPrice && (
      <p className="text-sm text-amber-400">
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
      <main className="md:min-h-screen">
        <section className="max-w-xl mt-14 mx-auto">
          <div className="text-center mb-10 md:mb-auto ">
            <ServiceCard key={experience[0].title} service={experience[0]}/>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;