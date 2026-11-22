import type { Metadata } from "next";
import Link from "next/link";
import { learningPaths, lessons } from "@/data/lessons";

export const metadata: Metadata = {
  title: "Learning Paths",
  description: "Follow suggested routes through sample numerical mathematics lessons.",
};

export default function LearningPathsPage() {
  return (
    <section className="container py-16 sm:py-20">
      <div className="max-w-[690px]">
        <span className="eyebrow">Learning paths</span>
        <h1 className="section-title mt-5 text-[clamp(38px,5vw,58px)]">A path through the ideas.</h1>
        <p className="mt-4 text-[15px] leading-7 text-slate-400">
          Suggested routes help you connect related topics. Every item below is a sample lesson preview; nothing is marked as completed.
        </p>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {learningPaths.map((path, index) => {
          const pathLessons = path.lessonSlugs
            .map((slug) => lessons.find((lesson) => lesson.slug === slug))
            .filter((lesson) => lesson !== undefined);
          const color = path.accent === "teal" ? "teal" : "violet";

          return (
            <article key={path.slug} className="surface-card overflow-hidden">
              <div className="grid-background border-b border-white/[0.08] p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className={`rounded-full border px-3 py-1 text-[10px] font-medium ${
                    color === "teal" ? "border-teal-200/20 bg-teal-200/[0.05] text-teal-100" : "border-violet-200/20 bg-violet-200/[0.05] text-violet-100"
                  }`}>{path.level}</span>
                  <span className="font-mono text-xs text-slate-600">PATH / 0{index + 1}</span>
                </div>
                <h2 className="mt-7 text-2xl font-medium tracking-tight">{path.title}</h2>
                <p className="mt-3 max-w-[450px] text-[13px] leading-6 text-slate-400">{path.description}</p>
              </div>
              <ol className="divide-y divide-white/[0.07]">
                {pathLessons.map((lesson, lessonIndex) => (
                  <li key={lesson.slug}>
                    <Link href={`/lessons/${lesson.slug}`} className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-white/[0.025] sm:px-8">
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-[10px] ${
                        color === "teal" ? "border-teal-200/20 text-teal-100" : "border-violet-200/20 text-violet-100"
                      }`}>{String(lessonIndex + 1).padStart(2, "0")}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[13px] font-medium text-slate-200 group-hover:text-white">{lesson.title}</span>
                        <span className="mt-1 block text-[11px] text-slate-500">{lesson.topic} · {lesson.duration}</span>
                      </span>
                      <span className="text-xs text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-teal-200" aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </article>
          );
        })}
      </div>
      <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="text-sm font-medium text-slate-200">Prefer to browse freely?</p>
          <p className="mt-1 text-xs text-slate-500">Search and filter the full set of sample lessons.</p>
        </div>
        <Link href="/library" className="button-secondary min-h-10 text-xs">Explore the library <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
