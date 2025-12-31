import { 
  BookMarked, 
  Clock, 
  LineChart, 
  Brain, 
  FileCheck, 
  Bookmark,
  Zap,
  Shield
} from "lucide-react";

const features = [
  {
    icon: BookMarked,
    title: "Extensive PYQ Bank",
    description: "10,000+ questions from JEE Main & Advanced spanning 20+ years",
  },
  {
    icon: Clock,
    title: "Timed Practice",
    description: "Practice with real exam time constraints to improve speed",
  },
  {
    icon: LineChart,
    title: "Smart Analytics",
    description: "Track your accuracy, speed, and identify weak chapters",
  },
  {
    icon: Brain,
    title: "Mistake Book",
    description: "Auto-save wrong answers and re-practice to learn from errors",
  },
  {
    icon: FileCheck,
    title: "Detailed Solutions",
    description: "Step-by-step explanations for every question",
  },
  {
    icon: Bookmark,
    title: "Bookmarks & Notes",
    description: "Save important questions and add personal notes",
  },
  {
    icon: Zap,
    title: "Daily Challenges",
    description: "Stay consistent with daily practice goals and streaks",
  },
  {
    icon: Shield,
    title: "Exam Simulation",
    description: "Full-length tests with negative marking like real JEE",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed specifically for JEE aspirants
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
