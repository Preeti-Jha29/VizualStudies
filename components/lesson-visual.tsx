import type { Lesson } from "@/data/lessons";
import { useId } from "react";

const colors = {
  curve: { primary: "#5ee2c0", secondary: "#a895ff" },
  iteration: { primary: "#a895ff", secondary: "#5ee2c0" },
  wave: { primary: "#a895ff", secondary: "#5ee2c0" },
  vectors: { primary: "#5ee2c0", secondary: "#a895ff" },
  matrix: { primary: "#a895ff", secondary: "#5ee2c0" },
};

export function LessonVisual({
  kind,
  className = "",
}: {
  kind: Lesson["visual"];
  className?: string;
}) {
  const palette = colors[kind];
  const visualId = `lesson-visual-${useId().replace(/:/g, "")}`;

  return (
    <div className={`math-grid relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#101827]/15 via-transparent to-[#0b1020]/70" />
      <svg
        viewBox="0 0 560 330"
        className="relative h-full w-full"
        role="img"
        aria-label={`Illustration of ${kind === "curve" ? "sampled points and curves" : kind}`}
      >
        <defs>
          <linearGradient id={`${visualId}-glow`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={palette.primary} stopOpacity=".23" />
            <stop offset="100%" stopColor={palette.secondary} stopOpacity=".02" />
          </linearGradient>
          <filter id={`${visualId}-blur`}>
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>
        <ellipse
          cx="340"
          cy="160"
          rx="165"
          ry="100"
          fill={`url(#${visualId}-glow)`}
          filter={`url(#${visualId}-blur)`}
        />
        <path d="M56 272H520M88 35V285" stroke="#90a4bf" strokeOpacity=".32" strokeWidth="1" />
        <path d="M88 210H520M88 145H520M88 80H520" stroke="#90a4bf" strokeOpacity=".09" strokeWidth="1" strokeDasharray="3 7" />
        {kind === "curve" && (
          <>
            <path d="M115 226C157 158 191 123 241 95S326 63 377 47" fill="none" stroke={palette.primary} strokeOpacity=".22" strokeWidth="14" filter={`url(#${visualId}-blur)`} />
            <path d="M115 226C157 158 191 123 241 95S326 63 377 47" fill="none" stroke={palette.primary} strokeWidth="2.5" />
            <path d="M115 248C169 238 206 209 249 174S321 113 376 77" fill="none" stroke={palette.secondary} strokeWidth="2" strokeDasharray="5 6" />
            {[115, 163, 211, 259, 307, 355, 403, 451].map((x, index) => {
              const y = [226, 154, 111, 85, 68, 56, 48, 43][index];
              return <circle key={x} cx={x} cy={y} r="4.3" fill="#09121c" stroke={palette.primary} strokeWidth="2" />;
            })}
            <text x="390" y="33" fill="#c7d4e5" fontSize="12">f(x)</text>
            <text x="389" y="72" fill={palette.secondary} fontSize="12">samples</text>
          </>
        )}
        {kind === "iteration" && (
          <>
            <path d="M92 227C164 222 209 191 258 145S336 88 495 67" fill="none" stroke={palette.primary} strokeWidth="2.5" />
            <path d="M150 204L257 145L324 91" fill="none" stroke={palette.secondary} strokeWidth="1.7" strokeDasharray="5 5" />
            <circle cx="150" cy="204" r="5" fill={palette.secondary} />
            <circle cx="257" cy="145" r="5" fill={palette.secondary} />
            <circle cx="324" cy="91" r="5" fill={palette.secondary} />
            <text x="139" y="228" fill="#c7d4e5" fontSize="12">x₀</text>
            <text x="246" y="169" fill="#c7d4e5" fontSize="12">x₁</text>
          </>
        )}
        {kind === "wave" && (
          <>
            <path d="M94 150C126 66 158 66 190 150S254 234 286 150 350 66 382 150 446 234 478 150" fill="none" stroke={palette.primary} strokeWidth="2.5" />
            <path d="M94 150C145 113 169 113 220 150S295 187 346 150 421 113 478 150" fill="none" stroke={palette.secondary} strokeWidth="2" strokeDasharray="5 5" />
            <path d="M94 150C126 82 158 82 190 150S254 218 286 150 350 82 382 150 446 218 478 150" fill="none" stroke="#e9e4ff" strokeOpacity=".72" strokeWidth="2" />
          </>
        )}
        {kind === "vectors" && (
          <>
            <path d="M90 251L395 251L395 73" fill="none" stroke={palette.primary} strokeWidth="2" />
            <path d="M90 251L336 102" fill="none" stroke={palette.secondary} strokeWidth="3" />
            <path d="M90 251L336 251M336 251L336 102" fill="none" stroke={palette.primary} strokeWidth="2" strokeDasharray="5 6" />
            <path d="M336 102L323 108L332 120Z" fill={palette.secondary} />
            <circle cx="336" cy="102" r="5" fill={palette.secondary} />
            <text x="207" y="280" fill="#c7d4e5" fontSize="13">v₁</text>
            <text x="348" y="172" fill="#c7d4e5" fontSize="13">v₂</text>
            <text x="348" y="98" fill={palette.secondary} fontSize="14">v</text>
          </>
        )}
        {kind === "matrix" && (
          <>
            <path d="M139 245L214 245L214 170L139 170Z" fill="none" stroke="#90a4bf" strokeOpacity=".75" strokeWidth="2" />
            <path d="M139 245L350 200L350 58L214 170" fill="none" stroke={palette.primary} strokeWidth="2.5" />
            <path d="M139 170L350 58M139 245L350 200" stroke={palette.secondary} strokeOpacity=".75" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M139 245L350 58" stroke="#e8e3ff" strokeWidth="3" />
            <circle cx="350" cy="58" r="5" fill={palette.primary} />
          </>
        )}
      </svg>
    </div>
  );
}
