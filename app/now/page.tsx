import Link from "next/link";

export default function BlogIndex() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="animate-bounce text-6xl mb-4">🚧</div>
      <h1 className="text-3xl font-bold mb-2">Under Construction</h1>
      <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mb-6">
        This section of the site is still being built.
        <br />
        Check back soon for new posts, notes, and experiments!
      </p>
      <Link
        href="/"
        className="inline-block px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
