import Image from "next/image";

const projects = [
  {
    name: "Llama-Chatbot",
    description: "Full-stack chatbot app using LLMs and modern web tooling.",
    tech: "Python • Jupyter",
    link: "https://github.com/davo300/Llama-Chatbot",
  },
  {
    name: "AWS-SpringBoot",
    description: "Deploying Spring Boot and PostgreSQL to AWS cloud.",
    tech: "Java • AWS • PostgreSQL",
    link: "https://github.com/davo300/AWS-SpringBoot",
  },
  {
    name: "NASA Space Apps",
    description:
      "Interactive platform for exploring massive space image datasets.",
    tech: "TypeScript • React",
    link: "https://github.com/davo300/NASA_Space_Apps",
  },
  {
    name: "CUDA Heat Simulation",
    description:
      "GPU-accelerated Jacobi heat diffusion simulation using CUDA.",
    tech: "CUDA • C++",
    link: "https://github.com/davo300/CUDA-Heat-Simulation",
  },
  {
    name: "AI Research Paper",
    description:
      "Comparative study of optimization algorithms and ML techniques.",
    tech: "Python • Machine Learning",
    link: "https://github.com/davo300/AI-Research-Paper",
  },
  {
    name: "SpringBoot Docker",
    description:
      "Containerized Spring Boot REST API using multi-stage Docker builds.",
    tech: "Java • Docker",
    link: "https://github.com/davo300/SpringBoot-Docker",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/pattern.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              Matthew Davies
            </h1>

            <p className="text-lg text-gray-200 mb-6">
              Computer Science student building full-stack applications with
              React, TypeScript, FastAPI, and SQLAlchemy. Also experimenting with
              machine learning techniques and deploying Chatbots.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/swe-ml-resume.pdf"
                target="_blank"
                aria-label="Open resume PDF"
                className="px-5 py-2 rounded-md border border-white/30 hover:bg-white/10 transition flex items-center gap-2"
              >
                <span aria-hidden="true">📄</span>
                <span>Resume</span>
              </a>

              <a
                href="https://github.com/davo300"
                target="_blank"
                aria-label="Visit GitHub profile"
                className="px-5 py-2 rounded-md border border-white/30 hover:bg-white/10 transition flex items-center gap-2"
              >
                <span aria-hidden="true">🐙</span>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/matthew-davies-250a5418a/"
                target="_blank"
                aria-label="Visit LinkedIn profile"
                className="px-5 py-2 rounded-md border border-white/30 hover:bg-white/10 transition flex items-center gap-2"
              >
                <span aria-hidden="true">💼</span>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/davo300/"
                target="_blank"
                aria-label="Visit LeetCode profile"
                className="px-5 py-2 rounded-md border border-white/30 hover:bg-white/10 transition flex items-center gap-2"
              >
                <span aria-hidden="true">🧠</span>
                <span>LeetCode</span>
              </a>
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-white/20 max-w-sm">
              <Image
                src="/profile.jpeg"
                alt="Matthew Davies"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="relative z-10 max-w-6xl mx-auto px-6 pb-32"
      >
        <h2 className="text-3xl font-semibold mb-8">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              className="block rounded-xl border border-white/15 bg-white/5 p-6
                         hover:bg-white/10 hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-medium mb-2">
                {project.name}
              </h3>

              <p className="text-gray-300 mb-4 text-sm">
                {project.description}
              </p>

              <span className="text-xs text-gray-400">
                {project.tech}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
