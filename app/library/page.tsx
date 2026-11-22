import type { Metadata } from "next";
import { LibraryBrowser } from "@/app/library/library-browser";
import { lessons } from "@/data/lessons";

export const metadata: Metadata = {
  title: "Visualization Library",
  description: "Search and filter sample visual lessons in numerical mathematics.",
};

export default function LibraryPage() {
  return (
    <section className="container py-16 sm:py-20">
      <div className="max-w-[680px]">
        <span className="eyebrow">The library</span>
        <h1 className="section-title mt-5 text-[clamp(38px,5vw,58px)]">
          Ideas, made visible.
        </h1>
        <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-slate-400">
          Browse sample lessons across numerical methods, linear algebra, and
          more. These are first-version learning previews, not a catalog of
          completed videos.
        </p>
      </div>
      <LibraryBrowser lessons={lessons} />
    </section>
  );
}
