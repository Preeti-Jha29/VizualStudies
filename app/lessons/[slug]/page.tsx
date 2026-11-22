import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LessonCard } from "@/components/lesson-card";
import { MathFormula } from "@/components/math-formula";
import { LessonVisual } from "@/components/lesson-visual";
import { getLesson, lessons, vectorsModule } from "@/data/lessons";

export function generateStaticParams() {
  return lessons.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  return { title: lesson?.title ?? "Lesson not found" };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = getLesson(slug);

  if (!lesson) notFound();
  const inVectorsModule = vectorsModule.lessonSlugs.includes(lesson.slug);

  const relatedLessons = lessons
    .filter((item) => item.slug !== lesson.slug && item.topic === lesson.topic)
    .concat(lessons.filter((item) => item.slug !== lesson.slug && item.topic !== lesson.topic))
    .slice(0, 2);

  return (
    <article className="container py-10 sm:py-14">
      <nav className="mb-8 text-xs text-slate-500" aria-label="Breadcrumb">
        {inVectorsModule ? (
          <>
            <Link href="/courses/numerical-mathematics" className="hover:text-slate-200">Numerical Mathematics</Link>
            <span className="mx-2 text-slate-700">/</span>
            <Link href={vectorsModule.href} className="hover:text-slate-200">Vectors</Link>
          </>
        ) : (
          <Link href="/library" className="hover:text-slate-200">Library</Link>
        )}
        <span className="mx-2 text-slate-700">/</span>
        <span className="text-slate-300">{lesson.title}</span>
      </nav>

      <header className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
        <div>
          <span className="eyebrow">{lesson.topic}</span>
          <h1 className="mt-5 max-w-[760px] text-[clamp(38px,5vw,60px)] font-medium tracking-[-0.055em] leading-[1.06]">
            {lesson.title}
          </h1>
          <p className="mt-4 text-[16px] text-slate-400">{lesson.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2 lg:justify-end">
          <span className="rounded-full border border-white/[0.1] px-3 py-1.5 text-[11px] text-slate-400">{lesson.level}</span>
          <span className="rounded-full border border-white/[0.1] px-3 py-1.5 text-[11px] text-slate-400">{lesson.duration}</span>
          {lesson.sample && <span className="rounded-full border border-violet-200/20 bg-violet-200/[0.06] px-3 py-1.5 text-[11px] text-violet-200">Sample lesson</span>}
        </div>
      </header>

      <section className="surface-card mt-9 overflow-hidden" aria-label={lesson.videoUrl ? "Uploaded lesson video" : "Video preview placeholder"}>
        <div className="relative">
          {lesson.videoUrl ? (
            <video
              src={lesson.videoUrl}
              className="block h-[260px] w-full bg-black object-cover sm:h-[390px] lg:h-[450px]"
              controls
              preload="metadata"
              playsInline
            />
          ) : (
            <>
              <LessonVisual kind={lesson.visual} className="h-[260px] sm:h-[390px] lg:h-[450px]" />
              <div className="absolute inset-0 grid place-items-center bg-[#080d17]/25">
                <div className="max-w-[390px] px-5 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-[#0b1220]/80 text-white shadow-xl" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor"><path d="M8 5.8c0-.7.8-1.1 1.4-.7l9.1 6.2a.85.85 0 0 1 0 1.4l-9.1 6.2a.85.85 0 0 1-1.4-.7V5.8Z" /></svg>
                  </span>
                  <p className="mt-5 text-sm font-medium text-white">Video preview placeholder</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">No completed video is available for this sample lesson yet.</p>
                </div>
              </div>
            </>
          )}
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#090d18]/70 px-3 py-1 text-[10px] tracking-[0.12em] text-slate-200 uppercase backdrop-blur">
            {lesson.videoUrl ? "Uploaded lesson" : "Video coming later"}
          </span>
        </div>
      </section>

      <div className="mx-auto mt-12 grid max-w-[940px] gap-12 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div>
          <section>
            <span className="eyebrow">The idea</span>
            <h2 className="mt-4 text-2xl font-medium tracking-tight">What you’ll explore</h2>
            <p className="mt-4 text-[14px] leading-7 text-slate-400">{lesson.introduction}</p>
          </section>
          <section className="mt-10">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase">{lesson.equationLabel}</p>
            <div className="surface-card mt-3 overflow-hidden px-5 py-7 text-center text-slate-100 sm:px-8">
              <MathFormula formula={lesson.equation} display className="text-[17px] sm:text-[20px]" />
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-medium tracking-tight">Step by step</h2>
            <ol className="mt-5 space-y-4">
              {lesson.explanation.map((paragraph, index) => (
                <li key={paragraph} className="flex gap-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-teal-200/20 bg-teal-200/[0.06] text-[11px] font-medium text-teal-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-0.5 text-[13px] leading-7 text-slate-400">{paragraph}</p>
                </li>
              ))}
            </ol>
          </section>
          <section className="mt-10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium tracking-tight">A small code example</h2>
              <span className="rounded-full border border-white/[0.1] px-2.5 py-1 text-[10px] text-slate-400">{lesson.codeLanguage}</span>
            </div>
            <pre className="lesson-code mt-4"><code>{lesson.code}</code></pre>
          </section>
        </div>

        <aside className="lg:pt-1">
          <div className="surface-card p-5">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase">In this sample</p>
            <p className="mt-3 text-sm font-medium text-slate-200">{lesson.title}</p>
            <p className="mt-2 text-xs leading-6 text-slate-500">{lesson.summary}</p>
            <div className="mt-5 h-px bg-white/[0.08]" />
            <p className="mt-4 text-xs leading-6 text-slate-400">This is an early lesson preview. Video content and additional materials may be added later.</p>
            <Link href="/library" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-teal-200 hover:text-teal-100">
              Back to all lessons <span aria-hidden="true">→</span>
            </Link>
          </div>
        </aside>
      </div>

      {relatedLessons.length > 0 && (
        <section className="mt-20 border-t border-white/[0.08] pt-12">
          <div className="flex items-end justify-between gap-5">
            <div>
              <span className="eyebrow">Keep exploring</span>
              <h2 className="section-title mt-4 text-3xl">Related lessons</h2>
            </div>
            <Link href="/library" className="hidden text-xs font-semibold text-teal-200 hover:text-teal-100 sm:inline">
              Browse library →
            </Link>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {relatedLessons.map((related) => <LessonCard key={related.slug} lesson={related} />)}
          </div>
        </section>
      )}
    </article>
  );
}
