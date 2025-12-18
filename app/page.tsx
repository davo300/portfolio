export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-4xl font-semibold mb-4">
        Matthew Davies
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-6">
        Computer Science student building full-stack web applications
        with React, TypeScript, FastAPI, and SQLAlchemy.
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/davo300"
          target="_blank"
          className="px-5 py-2 rounded-md border hover:bg-gray-100"
        >
          GitHub
        </a>

        <a
          href="https://github.com/davo300/QuoteGenerator"
          target="_blank"
          className="px-5 py-2 rounded-md bg-black text-white hover:bg-gray-800"
        >
          Quote App
        </a>
      </div>
    </main>
  );
}
