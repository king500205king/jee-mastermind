import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock } from "lucide-react";

const subjectsData = {
  physics: {
    name: "Physics",
    icon: "⚛️",
    chapters: [
      { id: "mechanics", name: "Mechanics", questions: 450, completed: 0 },
      { id: "thermodynamics", name: "Thermodynamics", questions: 280, completed: 0 },
      { id: "waves", name: "Waves & Oscillations", questions: 220, completed: 0 },
      { id: "optics", name: "Optics", questions: 310, completed: 0 },
      { id: "electrostatics", name: "Electrostatics", questions: 380, completed: 0 },
      { id: "current-electricity", name: "Current Electricity", questions: 290, completed: 0 },
      { id: "magnetism", name: "Magnetism", questions: 320, completed: 0 },
      { id: "modern-physics", name: "Modern Physics", questions: 350, completed: 0 },
    ],
  },
  chemistry: {
    name: "Chemistry",
    icon: "🧪",
    chapters: [
      { id: "atomic-structure", name: "Atomic Structure", questions: 180, completed: 0 },
      { id: "chemical-bonding", name: "Chemical Bonding", questions: 220, completed: 0 },
      { id: "periodic-table", name: "Periodic Table", questions: 150, completed: 0 },
      { id: "thermodynamics", name: "Chemical Thermodynamics", questions: 200, completed: 0 },
      { id: "equilibrium", name: "Chemical Equilibrium", questions: 240, completed: 0 },
      { id: "organic-chem", name: "Organic Chemistry", questions: 520, completed: 0 },
      { id: "inorganic-chem", name: "Inorganic Chemistry", questions: 380, completed: 0 },
      { id: "electrochemistry", name: "Electrochemistry", questions: 180, completed: 0 },
    ],
  },
  mathematics: {
    name: "Mathematics",
    icon: "📐",
    chapters: [
      { id: "algebra", name: "Algebra", questions: 480, completed: 0 },
      { id: "trigonometry", name: "Trigonometry", questions: 320, completed: 0 },
      { id: "calculus", name: "Calculus", questions: 550, completed: 0 },
      { id: "coordinate-geometry", name: "Coordinate Geometry", questions: 420, completed: 0 },
      { id: "vectors", name: "Vectors & 3D", questions: 280, completed: 0 },
      { id: "probability", name: "Probability & Statistics", questions: 240, completed: 0 },
      { id: "matrices", name: "Matrices & Determinants", questions: 200, completed: 0 },
      { id: "complex-numbers", name: "Complex Numbers", questions: 180, completed: 0 },
    ],
  },
};

export default function Practice() {
  const { subject } = useParams();

  if (!subject) {
    // Show subject selection
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-background">
          <div className="container py-12">
            <div className="mb-8">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Practice PYQs
              </h1>
              <p className="text-muted-foreground">
                Select a subject to start practicing previous year questions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(subjectsData).map(([key, data]) => (
                <Link
                  key={key}
                  to={`/practice/${key}`}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl">{data.icon}</span>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {data.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {data.chapters.length} Chapters • {data.chapters.reduce((a, c) => a + c.questions, 0).toLocaleString()} Questions
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const subjectData = subjectsData[subject as keyof typeof subjectsData];

  if (!subjectData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">Subject Not Found</h1>
            <Link to="/practice">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Subjects
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/practice" className="hover:text-primary transition-colors">Practice</Link>
            <span>/</span>
            <span className="text-foreground">{subjectData.name}</span>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">{subjectData.icon}</span>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {subjectData.name}
              </h1>
              <p className="text-muted-foreground">
                {subjectData.chapters.length} Chapters • {subjectData.chapters.reduce((a, c) => a + c.questions, 0).toLocaleString()} Questions
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {subjectData.chapters.map((chapter) => (
              <Link
                key={chapter.id}
                to={`/practice/${subject}/${chapter.id}`}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {chapter.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {chapter.questions} Questions
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4" />
                        {chapter.completed} Done
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                
                {/* Progress bar */}
                <div className="mt-4">
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${(chapter.completed / chapter.questions) * 100}%` }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
