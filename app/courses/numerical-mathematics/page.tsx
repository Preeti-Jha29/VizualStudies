import type { Metadata } from "next";
import { LessonCard } from "@/components/lesson-card";
import { vectorsLessons } from "@/data/lessons";

export const metadata: Metadata = {
  title: "Numerical Mathematics",
  description: "Explore the Vectors module through five visual lessons.",
};

export default function NumericalMathematicsPage() {
  return (
    <div className="container py-16 sm:py-20">
      <h1 className="section-title text-[clamp(38px,5vw,58px)]">Numerical Mathematics</h1>
      <section id="vectors" aria-labelledby="vectors-title" className="mt-12 scroll-mt-8">
        <div className="eyebrow">Module</div>
        <h2 id="vectors-title" className="section-title mt-4">Vectors</h2>
        <p className="mt-3 max-w-[550px] leading-7 text-slate-400">
          Start with how vectors represent numerical data, then explore vector spaces, span,
          linear independence, basis, and dimension.
        </p>
        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {vectorsLessons.map((lesson) => (
            <li key={lesson.slug}>
              <LessonCard lesson={lesson} />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
