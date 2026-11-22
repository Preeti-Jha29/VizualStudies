export type Lesson = {
  slug: string;
  title: string;
  subtitle: string;
  topic: string;
  level: "Foundations" | "Building intuition" | "Applied";
  duration: string;
  lessonNumber: string;
  summary: string;
  introduction: string;
  equation: string;
  equationLabel: string;
  explanation: string[];
  codeLanguage: string;
  code: string;
  visual: "curve" | "iteration" | "wave" | "vectors" | "matrix";
  sample: boolean;
  videoUrl?: string;
};

export const lessons: Lesson[] = [
  {
    slug: "vector-spaces",
    title: "What Makes a Set a Vector Space?",
    subtitle: "Two operations. One common structure.",
    topic: "Linear algebra",
    level: "Foundations",
    duration: "4 min watch",
    lessonNumber: "00",
    summary:
      "An uploaded lesson that introduces the closure conditions behind vector spaces and the idea of a shared algebraic structure.",
    introduction:
      "A vector space is not just a set of arrows. It is a set with two operations—addition and scalar multiplication—that work together in a consistent way. This short lesson turns that abstract definition into a visual story.",
    equation: "\mathbf{u},\mathbf{v}\in V\;\Rightarrow\;\mathbf{u}+\mathbf{v}\in V,\qquad \mathbf{u}\in V,\;\alpha\in F\;\Rightarrow\;\alpha\mathbf{u}\in V",
    equationLabel: "Closure under the defining operations",
    explanation: [
      "A vector space begins with a set of objects and a field of scalars, such as the real numbers.",
      "The two operations must stay inside the set: adding two vectors remains in the set, and scaling a vector by a scalar also remains in the set.",
      "Once those closure rules and the corresponding axioms hold, the same abstract language can describe vectors, matrices, functions, and more.",
    ],
    codeLanguage: "Python",
    code: [
      "from sympy import Matrix",
      "v = Matrix([1, 2])",
      "w = Matrix([3, -1])",
      "print(v + w)",
      "print(2 * v)",
    ].join("\n"),
    visual: "vectors",
    sample: true,
    videoUrl: "/media/videos/vector-space-visualization.mp4",
  },
  {
    slug: "vectors-to-curves",
    title: "Vectors to Curves",
    subtitle: "How a computer turns numbers into a graph",
    topic: "Numerical foundations",
    level: "Foundations",
    duration: "Video lesson",
    lessonNumber: "01",
    summary:
      "Follow a vector of x-values through function evaluation and see how discrete samples become a plotted curve.",
    introduction:
      "A computer does not draw a continuous curve in one stroke. It evaluates a function at selected points, stores the results, then connects those samples. This first look traces that simple but powerful idea from a numerical vector to a graph.",
    equation: "x_i = x_0 + i\\,\\Delta x, \\qquad y_i = f(x_i)",
    equationLabel: "Sample points, then evaluate",
    explanation: [
      "Choose a starting value, an ending value, and a step size. Together, they define the x-values the computer will sample.",
      "Evaluate the function once for each value in the vector. A smaller step creates more samples, which can make a plotted polyline look smoother while increasing the number of calculations.",
      "Plot each (xᵢ, yᵢ) pair and connect neighboring points. The resulting line is a numerical approximation of the continuous function.",
    ],
    codeLanguage: "MATLAB",
    code: [
      "xvec = 0.3:0.1:2.0;",
      "y1 = 1 ./ xvec;",
      "y2 = sqrt(4 - xvec.^2);",
      "",
      "plot(xvec, y1, xvec, y2)",
      "grid on",
    ].join("\n"),
    visual: "curve",
    sample: true,
    videoUrl: "/media/videos/vectors-to-curves.mp4",
  },
  {
    slug: "linear-combinations-and-span",
    title: "Linear Combinations and Span",
    subtitle: "Scale and add vectors to see what they can reach",
    topic: "Linear algebra",
    level: "Foundations",
    duration: "Video lesson",
    lessonNumber: "06",
    summary: "See how changing the coefficients of a linear combination changes the resulting vector.",
    introduction: "The span of a set of vectors is the set of all their linear combinations. In the plane, two nonparallel vectors span the whole plane, while two nonzero parallel vectors span a line.",
    equation: String.raw`\operatorname{span}(\mathbf u,\mathbf v)=\{a\mathbf u+b\mathbf v:a,b\in\mathbb R\}`,
    equationLabel: "The span of two vectors",
    explanation: [
      "Choose a coefficient for each vector.",
      "Scale each vector by its coefficient and add the results.",
      "Let the coefficients vary to see every vector in the span.",
    ],
    codeLanguage: "Python",
    code: "from sympy import Matrix\nu = Matrix([1, 0])\nv = Matrix([1, 1])\nprint(2*u + 3*v)",
    visual: "vectors",
    sample: false,
    videoUrl: "/media/videos/linear-combinations-and-span.mp4",
  },
  {
    slug: "linear-independence",
    title: "Linear Independence and Dependence",
    subtitle: "Find out when a vector adds a new direction",
    topic: "Linear algebra",
    level: "Foundations",
    duration: "6 min watch",
    lessonNumber: "07",
    summary: "Use the zero-vector test to recognize independent vectors and redundant constraints.",
    introduction: "A set of vectors is linearly independent when the only linear combination that gives zero uses all-zero coefficients. The same test applies to arrows, equations, and functions.",
    equation: String.raw`a_1\mathbf v_1+\cdots+a_k\mathbf v_k=\mathbf 0\implies a_1=\cdots=a_k=0`,
    equationLabel: "The zero-vector test for independence",
    explanation: [
      "Write a linear combination of the vectors and set it equal to zero.",
      "Solve for the coefficients. A nonzero solution shows dependence.",
      "If every coefficient must be zero, the vectors are independent.",
    ],
    codeLanguage: "Python",
    code: "from sympy import Matrix\nA = Matrix([[1, 2], [2, 4]])\nprint(A.nullspace())",
    visual: "vectors",
    sample: false,
    videoUrl: "/media/videos/linear-independence.mp4",
  },
  {
    slug: "basis-and-dimension",
    title: "Basis and Dimension",
    subtitle: "Describe a space with independent spanning vectors",
    topic: "Linear algebra",
    level: "Foundations",
    duration: "7 min watch",
    lessonNumber: "08",
    summary: "See how a basis gives every vector unique coordinates and how its size determines dimension.",
    introduction: "A basis is a linearly independent set that spans a vector space. Different bases can describe the same space, and every basis of a finite-dimensional space has the same number of vectors.",
    equation: String.raw`\mathbf v=c_1\mathbf b_1+\cdots+c_n\mathbf b_n,\qquad \dim V=n`,
    equationLabel: "Coordinates in a basis of n vectors",
    explanation: [
      "Check that the proposed basis vectors span the space.",
      "Check independence so that every vector has unique coefficients.",
      "Count the basis vectors to find the dimension.",
    ],
    codeLanguage: "Python",
    code: "from sympy import Matrix\nB = Matrix([[1, 1], [0, 1]])\nprint(B.LUsolve(Matrix([3, 2])))",
    visual: "vectors",
    sample: false,
    videoUrl: "/media/videos/basis-and-dimension.mp4",
  },
  {
    slug: "newtons-method",
    title: "Newton’s Method, Visually",
    subtitle: "Use tangent lines to approach a root",
    topic: "Numerical methods",
    level: "Building intuition",
    duration: "8 min read",
    lessonNumber: "02",
    summary:
      "See how repeated tangent-line estimates can move an initial guess toward a solution.",
    introduction:
      "Root-finding turns an equation into a sequence of better guesses. Newton’s method uses the local slope of a function to estimate where its graph crosses the axis.",
    equation: "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}",
    equationLabel: "Newton update",
    explanation: [
      "Start with an estimate xₙ where the derivative is defined and nonzero.",
      "Follow the tangent at (xₙ, f(xₙ)) until it meets the x-axis. That intercept becomes the next estimate.",
      "The method can converge quickly near a suitable root, but the starting point and function shape matter.",
    ],
    codeLanguage: "Python",
    code: [
      "def newton_step(x, f, df):",
      "    return x - f(x) / df(x)",
      "",
      "x = 1.5",
      "for _ in range(5):",
      "    x = newton_step(x, f, df)",
    ].join("\n"),
    visual: "iteration",
    sample: true,
  },
  {
    slug: "fourier-building-blocks",
    title: "Waves as Building Blocks",
    subtitle: "A first look at Fourier series",
    topic: "Signals & series",
    level: "Building intuition",
    duration: "10 min read",
    lessonNumber: "03",
    summary:
      "Explore the idea of approximating a periodic signal with a sum of simple waves.",
    introduction:
      "Sine and cosine waves are useful building blocks. Fourier series express many periodic functions as a weighted combination of these familiar shapes.",
    equation: "f(x) \\sim \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} \\left(a_n\\cos(nx)+b_n\\sin(nx)\\right)",
    equationLabel: "A Fourier series",
    explanation: [
      "Each term contributes a wave with its own frequency and amplitude.",
      "Adding more terms can capture finer changes in the original periodic function.",
      "The approximation and its convergence depend on the function and how its coefficients are chosen.",
    ],
    codeLanguage: "Python",
    code: [
      "approximation = a0 / 2",
      "for n in range(1, terms + 1):",
      "    approximation += (",
      "        a[n] * cos(n * x)",
      "        + b[n] * sin(n * x)",
      "    )",
    ].join("\n"),
    visual: "wave",
    sample: true,
  },
  {
    slug: "vectors-in-the-plane",
    title: "Vectors in the Plane",
    subtitle: "Magnitude, direction, and components",
    topic: "Linear algebra",
    level: "Foundations",
    duration: "7 min read",
    lessonNumber: "04",
    summary:
      "Build a geometric picture of vector components, length, and direction.",
    introduction:
      "A vector can be described by its components or pictured as an arrow. Moving between those descriptions makes calculations easier to interpret.",
    equation: "\\mathbf{v} = \\begin{bmatrix}v_1\\\\v_2\\end{bmatrix}, \\qquad \\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2}",
    equationLabel: "Components and magnitude",
    explanation: [
      "The components record how far the vector moves along each coordinate axis.",
      "The magnitude is the vector’s length, found by applying the Pythagorean theorem to its components.",
      "The same vector can be drawn from any starting point; its displacement and direction remain unchanged.",
    ],
    codeLanguage: "Python",
    code: [
      "v = (3, 2)",
      "magnitude = (v[0]**2 + v[1]**2) ** 0.5",
      "print(magnitude)",
    ].join("\n"),
    visual: "vectors",
    sample: true,
  },
  {
    slug: "eigenvector-directions",
    title: "Eigenvectors: Directions That Stay Put",
    subtitle: "A geometric introduction to eigenvalues",
    topic: "Linear algebra",
    level: "Applied",
    duration: "9 min read",
    lessonNumber: "05",
    summary:
      "Visualize the special directions that a matrix stretches without rotating.",
    introduction:
      "Most vectors change direction when a matrix transforms them. Eigenvectors are the special nonzero vectors whose direction is preserved, while their length may change.",
    equation: "A\\mathbf{v} = \\lambda\\mathbf{v}",
    equationLabel: "The eigenvector relationship",
    explanation: [
      "Think of a matrix as a transformation of the plane.",
      "An eigenvector points along a direction that the transformation keeps on the same line.",
      "The eigenvalue λ tells how that vector is scaled, including a possible reversal when λ is negative.",
    ],
    codeLanguage: "Python",
    code: [
      "eigenvalues, eigenvectors = np.linalg.eig(A)",
      "for value, vector in zip(eigenvalues, eigenvectors.T):",
      "    print(value, vector)",
    ].join("\n"),
    visual: "matrix",
    sample: true,
  },
];

export const vectorsModule = {
  href: "/courses/numerical-mathematics#vectors",
  lessonSlugs: [
    "vectors-to-curves",
    "vector-spaces",
    "linear-combinations-and-span",
    "linear-independence",
    "basis-and-dimension",
  ],
};

export const vectorsLessons = vectorsModule.lessonSlugs
  .map(getLesson)
  .filter((lesson) => lesson !== undefined);

export const learningPaths = [
  {
    slug: "numerical-foundations",
    title: "Numerical foundations",
    description:
      "Build intuition for sampling, vectors, and the relationship between formulas and plotted data.",
    level: "Start here",
    lessonSlugs: ["vectors-to-curves", "vectors-in-the-plane"],
    accent: "teal",
  },
  {
    slug: "methods-and-models",
    title: "Methods & models",
    description:
      "Meet iterative methods, signal approximations, and transformations through visual ideas.",
    level: "Explore next",
    lessonSlugs: [
      "newtons-method",
      "fourier-building-blocks",
      "eigenvector-directions",
    ],
    accent: "violet",
  },
] as const;

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}
