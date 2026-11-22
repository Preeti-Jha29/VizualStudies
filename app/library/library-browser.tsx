"use client";

import { useMemo, useState } from "react";
import { LessonCard } from "@/components/lesson-card";
import type { Lesson } from "@/data/lessons";

export function LibraryBrowser({ lessons }: { lessons: Lesson[] }) {
  const [query, setQuery] = useState("");
  const [activeTopic, setActiveTopic] = useState("All topics");
  const topics = ["All topics", ...new Set(lessons.map((lesson) => lesson.topic))];

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return lessons.filter((lesson) => {
      const matchesTopic = activeTopic === "All topics" || lesson.topic === activeTopic;
      const matchesQuery =
        search.length === 0 ||
        [lesson.title, lesson.subtitle, lesson.topic, lesson.summary]
          .some((value) => value.toLowerCase().includes(search));
      return matchesTopic && matchesQuery;
    });
  }, [activeTopic, lessons, query]);

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4 border-y border-white/[0.08] py-5 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block w-full max-w-[360px]">
          <span className="sr-only">Search lessons</span>
          <svg
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
            <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search lessons or topics"
            className="h-11 w-full rounded-full border border-white/[0.1] bg-white/[0.025] pl-11 pr-4 text-[13px] text-slate-100 placeholder:text-slate-600 focus:border-teal-200/50 focus:outline-none"
          />
        </label>
        <div className="flex flex-wrap gap-2" aria-label="Filter by topic">
          {topics.map((topic) => {
            const active = topic === activeTopic;
            return (
              <button
                key={topic}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveTopic(topic)}
                className={`rounded-full border px-3.5 py-2 text-[11px] transition-colors ${
                  active
                    ? "border-teal-200/30 bg-teal-200/[0.09] text-teal-100"
                    : "border-white/[0.08] text-slate-400 hover:border-white/20 hover:text-slate-200"
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between text-[11px] text-slate-500">
        <span>{filtered.length} sample {filtered.length === 1 ? "lesson" : "lessons"}</span>
        <span>All durations are reading-time estimates</span>
      </div>
      {filtered.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((lesson) => <LessonCard key={lesson.slug} lesson={lesson} />)}
        </div>
      ) : (
        <div className="surface-card mt-5 py-16 text-center">
          <p className="text-sm text-slate-200">No lessons match that search.</p>
          <p className="mt-2 text-xs text-slate-500">Try another title or choose a different topic.</p>
          <button
            className="mt-5 text-xs font-semibold text-teal-200 hover:text-teal-100"
            type="button"
            onClick={() => { setQuery(""); setActiveTopic("All topics"); }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
