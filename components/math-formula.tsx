import katex from "katex";

export function MathFormula({
  formula,
  display = false,
  className = "",
}: {
  formula: string;
  display?: boolean;
  className?: string;
}) {
  const html = katex.renderToString(formula, {
    displayMode: display,
    throwOnError: true,
    output: "htmlAndMathml",
  });

  return (
    <span
      className={className}
      aria-label={formula}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
