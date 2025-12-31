import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const subjects = [
  {
    id: "physics",
    name: "Physics",
    icon: "⚛️",
    chapters: 32,
    questions: 3500,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "🧪",
    chapters: 35,
    questions: 3200,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "📐",
    chapters: 38,
    questions: 3800,
    color: "from-purple-500 to-pink-500",
  },
];

export function SubjectsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Subject
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practice chapter-wise PYQs from JEE Main & Advanced across all subjects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <Link
              key={subject.id}
              to={`/practice/${subject.id}`}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full p-6 rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl">{subject.icon}</span>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {subject.name}
                  </h3>
                  
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>{subject.chapters} Chapters</span>
                    <span>•</span>
                    <span>{subject.questions.toLocaleString()} Questions</span>
                  </div>

                  {/* Progress bar placeholder */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-foreground">0%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div className={`h-full w-0 rounded-full bg-gradient-to-r ${subject.color} transition-all duration-500`} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
