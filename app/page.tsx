export default function Home() {
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/matthew-davies-250a5418a/?isSelfProfile=true" },
    { label: "GitHub", href: "https://github.com/davo300/" },
    { label: "LeetCode", href: "https://leetcode.com/u/davo300/" },
    { label: "Resume (PDF)", href: "/swe-ml-resume.pdf" },
  ];

  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-4xl font-semibold mb-4">Matt Davies</h1>

      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Computer Science student building full-stack apps with React, TypeScript,
        FastAPI, and SQLAlchemy.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noreferrer" : undefined}
            className="px-5 py-2 rounded-md border hover:bg-gray-100 transition"
          >
            {l.label}
          </a>
        ))}
      </div>
    </main>
  );
}
