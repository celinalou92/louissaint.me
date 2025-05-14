import React from "react";
import Head from "next/head";
import CTAButton from "../Buttons/CTAButton"

type Service = {
  title: string;
  description: string;
  features: string[];
  startingPrice?: string;
};

const services: Service[] = [
  {
    title: "Whisper AI Integration",
    description:
      "Add smart transcription, speaker diarization, and summary generation to your app using Whisper and OpenAI.",
    features: [
      "Audio upload UI",
      "Diarization alignment",
      "OpenAI summary & keyword extraction",
    ],
    startingPrice: "Starts at $300",
  },
  {
    title: "Java Backend Refactor",
    description:
      "Refactor, migrate, or optimize Java/Spring Boot backends. Improve API speed, structure, and reliability.",
    features: [
      "REST API cleanup",
      "Spring Boot migrations",
      "Security audit & fixes",
    ],
    startingPrice: "Starts at $500",
  },
  {
    title: "Custom Dashboards",
    description:
      "Build fast and functional admin or analytics dashboards using React, Tailwind, and modern charting libraries.",
    features: [
      "User auth",
      "Data tables & filtering",
      "Dynamic chart integration",
    ],
    startingPrice: "Starts at $600",
  },
];

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
            I offer backend, AI, and full-stack services designed for fast-paced
            startups and scrappy product teams. Each engagement is scoped to
            your goals and budget.
          </p>
          <div className="grid gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Not sure what fits your project?
            </h2>
            <p className="text-gray-400 mb-4">
              Book a free 15-minute call — let’s talk through your idea.
            </p>
            <CTAButton 
            path="https://calendly.com/YOUR-CALENDLY-LINK"
            text="Book a Discovery Call"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;