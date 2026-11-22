import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About Visual Studies, an educational project by Dr. Preeti Jha.",
};

const principles = [
  {
    number: "01",
    title: "Start with a picture",
    description: "Use a visual to make the shape of an idea easier to notice.",
  },
  {
    number: "02",
    title: "Connect it to the math",
    description: "Bring equations and numerical steps into the same explanation.",
  },
  {
    number: "03",
    title: "Keep it approachable",
    description: "Move through concepts in small, understandable steps.",
  },
];

export default function AboutPage() {
  return (
    <section className="container py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-20">
        <div>
          <span className="eyebrow">About the project</span>
          <h1 className="section-title mt-5 text-[clamp(40px,5.5vw,64px)]">
            Numerical mathematics, seen from a new angle.
          </h1>
          <p className="mt-6 max-w-[640px] text-[15px] leading-8 text-slate-400">
            Visual Studies is an educational project created
            by Dr. Preeti Jha. It is being shaped around a simple idea: concepts
            in numerical mathematics can feel more approachable when equations,
            computation, and visual intuition are brought together.
          </p>
          <p className="mt-4 max-w-[640px] text-[15px] leading-8 text-slate-400">
            This first version is a starting point. The lessons shown here are
            clearly labeled samples, and video areas are placeholders until
            video content is available.
          </p>
          <Link href="/library" className="button-primary mt-8">
            Explore the lesson samples <span aria-hidden="true">→</span>
          </Link>
        </div>
        <aside className="surface-card grid-background self-start p-6 sm:p-8">
          <span className="text-[10px] font-semibold tracking-[0.16em] text-teal-200 uppercase">The approach</span>
          <div className="mt-6 space-y-6">
            {principles.map((principle) => (
              <div key={principle.number} className="flex gap-4">
                <span className="pt-0.5 font-mono text-[11px] text-violet-200">{principle.number}</span>
                <div>
                  <h2 className="text-sm font-medium text-slate-200">{principle.title}</h2>
                  <p className="mt-1.5 text-xs leading-6 text-slate-500">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-white/[0.08] pt-5">
            <p className="text-xs text-slate-500">Created by</p>
            <p className="mt-1 text-sm font-medium text-slate-200">Dr. Preeti Jha</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
