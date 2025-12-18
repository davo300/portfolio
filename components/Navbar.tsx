import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black border-b z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg">
          Matthew Davies
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
          <a
            href="/swe_ml_resume.pdf"
            target="_blank"
            className="hover:underline"
          >
            Resume
          </a>
          <a
            href="https://github.com/davo300"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-davies-250a5418a/"
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
