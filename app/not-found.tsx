import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-white px-6 dark:bg-neutral-950">
      <div className="flex max-w-md flex-col items-center text-center">
        <p className="select-none text-[7rem] font-black leading-none tracking-tighter text-neutral-900 sm:text-[10rem] dark:text-neutral-100">
          404
        </p>

        <h1 className="mt-6 text-2xl font-semibold text-neutral-900 sm:text-3xl dark:text-neutral-100">
          Page not found
        </h1>

        <p className="mt-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          The page you are looking for does not exist or may have been moved.
          Check the address, or head back to the homepage.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300 dark:focus-visible:ring-neutral-100 dark:focus-visible:ring-offset-neutral-950"
        >
          Go to homepage
        </Link>
      </div>
    </main>
  );
}
