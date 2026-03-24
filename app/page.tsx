import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20 text-center">
      <div className="max-w-2xl space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow backdrop-blur">
        <span className="inline-flex rounded-full border border-[#d4af37]/30 px-4 py-1 text-sm uppercase tracking-[0.3em] text-[#f4df9b]">
          Next.js App Router
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Valadation Method™ digital experience
        </h1>
        <p className="text-lg leading-8 text-[#d8d0bf]">
          The premium advanced integration page is ready to explore.
        </p>
        <Link
          href="/valadation-advanced"
          className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-7 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#f4df9b]"
        >
          View the page
        </Link>
      </div>
    </main>
  );
}
