import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Matthew Davies
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Computer Science student building full-stack applications with
            React, TypeScript, FastAPI, and SQLAlchemy.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/swe_ml_resume.pdf"
              target="_blank"
              className="px-5 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
            >
              Resume
            </a>

            <a
              href="https://github.com/davo300"
              target="_blank"
              className="px-5 py-2 rounded-md border hover:bg-gray-100 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/matthew-davies-250a5418a/"
              target="_blank"
              className="px-5 py-2 rounded-md border hover:bg-gray-100 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/davo300/"
              target="_blank"
              className="px-5 py-2 rounded-md border hover:bg-gray-100 transition"
            >
              LeetCode
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg border max-w-sm">
            <Image
              src="/profile.jpeg"
              alt="Matt Davies"
              width={400}
              height={400}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
