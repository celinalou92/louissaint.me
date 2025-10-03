export const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-screen sm:h-[60vh] px-6"
    >
      <div className="max-w-3xl">
        <h2 className="text-3xl text-center tracking-widest border-b border-[#D6A23A] mb-8 leading-relaxed">
          About Me
        </h2>
        <p className="text-base tracking-wide text-justify py-8">
          I have three years of experience building web applications for startups, enterprise clients, and local businesses. I’ve worked on everything from e-commerce platforms to generative AI apps using <strong>React</strong>, <strong>Next.js</strong>, <strong>Java/Spring Boot</strong>, and <strong>TypeScript</strong>.
          <br /><br />
          Lately, I have been sharpening my backend development skills, adding <strong>Python</strong> to my toolkit and working on data processing, API integrations, and service-oriented architecture. I enjoy building full-stack systems that are scalable, reliable, and grounded in solving practical business problems.
        </p>
      </div>
    </section>
  );
};