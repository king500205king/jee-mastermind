import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, FileText, BarChart2, ArrowRight, Lock } from "lucide-react";

const mockTests = [
  {
    id: 1,
    title: "JEE Main 2024 - January Session",
    duration: 180,
    questions: 90,
    marks: 300,
    attempted: 0,
    isFree: true,
  },
  {
    id: 2,
    title: "JEE Main 2023 - April Session",
    duration: 180,
    questions: 90,
    marks: 300,
    attempted: 0,
    isFree: true,
  },
  {
    id: 3,
    title: "JEE Advanced 2023 - Paper 1",
    duration: 180,
    questions: 54,
    marks: 180,
    attempted: 0,
    isFree: false,
  },
  {
    id: 4,
    title: "JEE Advanced 2023 - Paper 2",
    duration: 180,
    questions: 54,
    marks: 180,
    attempted: 0,
    isFree: false,
  },
  {
    id: 5,
    title: "Full Syllabus Mock Test 1",
    duration: 180,
    questions: 90,
    marks: 300,
    attempted: 0,
    isFree: true,
  },
  {
    id: 6,
    title: "Full Syllabus Mock Test 2",
    duration: 180,
    questions: 90,
    marks: 300,
    attempted: 0,
    isFree: false,
  },
];

const chapterTests = [
  { subject: "Physics", chapters: ["Mechanics", "Thermodynamics", "Optics", "Electromagnetism"] },
  { subject: "Chemistry", chapters: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"] },
  { subject: "Mathematics", chapters: ["Algebra", "Calculus", "Coordinate Geometry", "Trigonometry"] },
];

export default function MockTest() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container py-12">
          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Mock Tests
            </h1>
            <p className="text-muted-foreground">
              Take full-length tests with real exam simulation
            </p>
          </div>

          {/* Full Length Tests */}
          <section className="mb-12">
            <h2 className="font-display text-xl font-bold text-foreground mb-6">
              Full Length Tests
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTests.map((test) => (
                <div
                  key={test.id}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    {!test.isFree && (
                      <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        <Lock className="h-3 w-3" />
                        Pro
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {test.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {test.duration} min
                    </span>
                    <span>{test.questions} Questions</span>
                    <span>{test.marks} Marks</span>
                  </div>

                  <Button 
                    variant={test.isFree ? "hero" : "outline"} 
                    className="w-full group/btn"
                  >
                    {test.isFree ? "Start Test" : "Unlock"}
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Chapter-wise Tests */}
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-6">
              Chapter-wise Tests
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {chapterTests.map((subject) => (
                <div
                  key={subject.subject}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">
                    {subject.subject}
                  </h3>
                  <div className="space-y-2">
                    {subject.chapters.map((chapter) => (
                      <Link
                        key={chapter}
                        to={`/mock-test/${subject.subject.toLowerCase()}/${chapter.toLowerCase().replace(" ", "-")}`}
                        className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors group"
                      >
                        <span className="text-sm text-foreground">{chapter}</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
