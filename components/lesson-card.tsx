import Link from "next/link";
import type { Lesson } from "@/data/lessons";
import { LessonVisual } from "@/components/lesson-visual";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <article className="group surface-card overflow-hidden transition-colors hover:border-white/20">
      <Link href={`/lessons/${lesson.slug}`} className="block">
        <LessonVisual kind={lesson.visual} className="h-[188px] border-b border-white/[0.07]" />
        <div className="p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="rounded-full border border-teal-200/15 bg-teal-200/[0.06] px-2.5 py-1 text-[10px] font-medium text-teal-100">
              {lesson.topic}
            </span>
            <span className="text-[11px] text-slate-500">{lesson.duration}</span>
          </div>
          <p className="text-[11px] tracking-[0.14em] text-slate-500 uppercase">
            Lesson {lesson.lessonNumber} · {lesson.level}
          </p>
          <h3 className="mt-2 text-[19px] font-medium tracking-tight text-slate-100 transition-colors group-hover:text-teal-100">
            {lesson.title}
          </h3>
          <p className="mt-2 min-h-[48px] text-[13px] leading-6 text-slate-400">
            {lesson.summary}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-slate-200">
            Open lesson <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
