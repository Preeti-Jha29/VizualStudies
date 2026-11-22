import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/[0.07]">
      <div className="container flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[13px] font-medium text-slate-200">
            Visual Studies
          </p>
          <p className="mt-1 text-xs text-slate-500">
            An educational project by Dr. Preeti Jha
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400" aria-label="Footer navigation">
          <Link className="hover:text-white" href="/library">Library</Link>
          <Link className="hover:text-white" href="/paths">Learning paths</Link>
          <Link className="hover:text-white" href="/about">About</Link>
        </nav>
      </div>
    </footer>
  );
}
