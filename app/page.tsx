import Image from "next/image";

const projects = [
  {
    name: "Llama-Chatbot",
    description: "A full-stack Retrieval-Augmented Generation (RAG) chatbot designed to help students understand course material for COMP-2140 (Compilers) without revealing full solutions. The system uses course assignment PDFs as ground truth, retrieves relevant sections using embeddings + FAISS, and generates grounded, non-hallucinating explanations using LLaMA model.",
    tech: "RAG • Python • Colab • HuggingFace • LLaMA",
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
    name: "BayesianLogisticRegression-PyMC",
    description: "This project implements a Bayesian logistic regression model using PyMC to predict passenger survival on the Titanic dataset. Unlike classical logistic regression, this approach models uncertainty in parameters through probability distributions, enabling principled inference and uncertainty quantification.",
    tech: "Python • Colab • PyMC • pandas • numpy • matlplotlib",
    link: "https://github.com/davo300/BayesianLogisticRegression-PyMC",
  },
  {
    name: "CUDA Heat Simulation",
    description:
      "GPU-accelerated Jacobi heat diffusion simulation using CUDA.",
    tech: "CUDA • C++",
    link: "https://github.com/davo300/CUDA-Heat-Simulation",
  },
  {
    name: "Dynamic Hypergraph Neural Networks for Node Classification",
    description:
      "Implemented and evaluated Graph Neural Networks (GCN, GAT) alongside multiple Hypergraph Neural Network (HGNN+) variants for node classification. Developed dynamic hypergraph learning methods that periodically reconstruct hyperedges using KNN, DOSAGE-style, and LFH-inspired strategies, and compared their performance on the Cora and DBLP benchmark datasets to study the impact of higher-order relationships and adaptive hypergraph construction.",
    tech:
      "Python • PyTorch • PyTorch Geometric • HGNN+ • GCN • GAT • Representation Learning • Graph Neural Networks • Hypergraph Neural Networks • Machine Learning",
    link: "https://github.com/davo300/hypergraph-neural-networks-paper",
  },
  {
    name: "AI Research Paper",
    description:
      "Comparative study of optimization algorithms and ML techniques.",
    tech: "Python • Machine Learning • random forest • gradient boosting • scikit learn • seaborn ",
    link: "https://github.com/davo300/AI-Research-Paper",
  },
  {
    name: "SpringBoot Docker",
    description:
      "Containerized Spring Boot REST API using multi-stage Docker builds.",
    tech: "Java • Docker",
    link: "https://github.com/davo300/SpringBoot-Docker",
  },
  {
    name: "Feature Engineering (Titanic ML)",
    description:
      "End-to-end feature engineering and selection on the Titanic dataset, including preprocessing, encoding, and feature evaluation.",
    tech: "Python • Pandas • Scikit-learn",
    link: "https://github.com/davo300/feature-engineering-ML",
  },
  {
    name: "Python LeetCode",
    description:
      "Large collection of Python-based LeetCode solutions and problem-solving techniques.",
    tech: "Python • Algorithms",
    link: "https://github.com/davo300/python-leetcode",
  },
  {
    name: "Heat Simulation (C++ / OpenCV)",
    description:
      "C++ heat simulation using OpenCV matrices and the Jacobi method to model temperature diffusion.",
    tech: "C++ • OpenCV",
    link: "https://github.com/davo300/Heat-Simulation",
  },
  {
    name: "User Registration (Laravel / MySQL)",
    description:
      "Laravel PHP project demonstrating user registration with validation and database persistence.",
    tech: "PHP • Laravel • MySQL",
    link: "https://github.com/davo300/User-Registration-PHP-Laravel-MySQL",
  },
  {
    name: "QuoteGenerator",
    description:
      "Full-stack application for managing quotes and authors using FastAPI, React, and TypeScript.",
    tech: "TypeScript • React • FastAPI",
    link: "https://github.com/davo300/QuoteGenerator",
  },
  {
    name: "JetBot",
    description:
      "Autonomous robot car built with NVIDIA Jetson Nano, focusing on robotics and computer vision.",
    tech: "Python • NVIDIA Jetson • Robotics",
    link: "https://github.com/davo300/JetBot",
  },
  {
    name: "Java Development Suite",
    description:
      "Collection of Java projects demonstrating core language features, OOP, and software design patterns.",
    tech: "Java • OOP",
    link: "https://github.com/davo300/Java-Development-Suite",
  },
  {
    name: "CSharp",
    description:
      "C# projects exploring .NET fundamentals, object-oriented programming, and application development.",
    tech: "C# • .NET",
    link: "https://github.com/davo300/CSharp",
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
      <section className="relative z-10 min-h-[60vh] flex items-center px-6">
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
                href="/Matthew_Davies_resume.pdf"
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
