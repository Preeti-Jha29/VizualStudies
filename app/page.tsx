import Link from "next/link";
import { LessonCard } from "@/components/lesson-card";
import { LessonVisual } from "@/components/lesson-visual";
import { vectorsLessons, vectorsModule } from "@/data/lessons";

export default function HomePage() {
  const [featured, ...nextLessons] = vectorsLessons;

  return (
    <>
      <section className="container grid min-h-[610px] items-center gap-10 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="relative z-10 max-w-[590px]">
          <span className="eyebrow">Visual Studies</span>
          <h1 className="display-title mt-7">
            Math you can
            <br />
            <span className="text-teal-200">see</span> taking shape.
          </h1>
          <p className="mt-6 max-w-[475px] text-[16px] leading-8 text-slate-400">
            Explore the ideas behind numerical mathematics through clear,
            visual-first lesson previews. From a list of numbers to the curve
            they reveal.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={vectorsModule.href} className="button-primary">
              Explore the Vectors module
            </Link>
            <Link href={`/lessons/${featured.slug}`} className="button-secondary">
              Start with the featured lesson
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-white/[0.08] pt-5 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-teal-300" />
              Built around visual intuition
            </span>
            <span aria-hidden="true" className="text-slate-700">/</span>
            <span>By Dr. Preeti Jha</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[550px] lg:ml-auto">
          <div className="absolute -inset-8 rounded-full bg-violet-500/[0.07] blur-3xl" />
          <div className="surface-card float-slow relative overflow-hidden border-white/[0.11] shadow-[0_30px_90px_rgba(0,0,0,.32)]">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">Visual lesson 01</p>
                <p className="mt-1 text-sm font-medium text-slate-200">{featured.title}</p>
              </div>
              <span className="rounded-full border border-violet-300/20 bg-violet-300/[0.08] px-2.5 py-1 text-[10px] text-violet-200">
                Lesson preview
              </span>
            </div>
            {featured.videoUrl ? (
              <video
                key={featured.videoUrl}
                src={featured.videoUrl}
                className="h-[320px] w-full object-cover"
                controls
                preload="metadata"
                playsInline
              />
            ) : (
              <LessonVisual kind={featured.visual} className="h-[320px]" />
            )}
            <div className="flex items-center justify-between border-t border-white/[0.08] px-5 py-4">
              <span className="font-mono text-[11px] text-slate-500">{featured.videoUrl ? "Uploaded video lesson" : "xᵢ → f(xᵢ) → (xᵢ, yᵢ)"}</span>
              <Link href={`/lessons/${featured.slug}`} className="text-[12px] font-semibold text-teal-200 hover:text-teal-100">
                Explore the idea <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-[#111a29] px-4 py-3 shadow-xl sm:block">
            <p className="text-[10px] text-slate-500">The numerical recipe</p>
            <p className="mt-1 font-mono text-[12px] text-slate-200">vector <span className="text-teal-200">·</span> function <span className="text-violet-200">·</span> graph</p>
          </div>
        </div>
      </section>

      <section className="container pb-24 pt-12">
        <div className="flex flex-col gap-5 border-t border-white/[0.08] pt-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Start exploring</span>
            <h2 className="section-title mt-4">Small steps. Big ideas.</h2>
            <p className="mt-3 max-w-[530px] text-sm leading-7 text-slate-400">
              Sample lessons introduce the core ideas and show how the mathematics connects to computation.
            </p>
          </div>
          <Link href={vectorsModule.href} className="inline-flex items-center gap-2 text-[13px] font-semibold text-teal-200 hover:text-teal-100">
            View the Vectors module
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {nextLessons.map((lesson) => <LessonCard key={lesson.slug} lesson={lesson} />)}
        </div>
      </section>
    </>
  );
}
