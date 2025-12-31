import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BarChart2, 
  Target, 
  Clock, 
  TrendingUp, 
  BookOpen, 
  CheckCircle2,
  XCircle,
  ArrowRight,
  Flame,
  Trophy
} from "lucide-react";

const stats = [
  { label: "Questions Attempted", value: "847", icon: BookOpen, change: "+12 today" },
  { label: "Accuracy", value: "72%", icon: Target, change: "+3% this week" },
  { label: "Time Spent", value: "45h", icon: Clock, change: "This month" },
  { label: "Current Streak", value: "7", icon: Flame, change: "days" },
];

const recentTests = [
  { title: "JEE Main 2024 Mock", score: 186, total: 300, date: "Dec 28, 2024", accuracy: 72 },
  { title: "Physics - Mechanics", score: 28, total: 40, date: "Dec 27, 2024", accuracy: 70 },
  { title: "Chemistry - Organic", score: 35, total: 50, date: "Dec 26, 2024", accuracy: 78 },
];

const weakChapters = [
  { name: "Thermodynamics", accuracy: 45, subject: "Physics" },
  { name: "Organic Chemistry", accuracy: 52, subject: "Chemistry" },
  { name: "Calculus", accuracy: 58, subject: "Mathematics" },
];

const subjectProgress = [
  { name: "Physics", completed: 234, total: 3500, color: "from-blue-500 to-cyan-500" },
  { name: "Chemistry", completed: 189, total: 3200, color: "from-green-500 to-emerald-500" },
  { name: "Mathematics", completed: 424, total: 3800, color: "from-purple-500 to-pink-500" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container py-12">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Welcome back! 👋
            </h1>
            <p className="text-muted-foreground">
              Here's your preparation overview
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <p className="font-display text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-xs text-success mt-2">{stat.change}</p>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Subject Progress */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-lg font-bold text-foreground">
                    Subject Progress
                  </h2>
                  <Link to="/practice">
                    <Button variant="ghost" size="sm">
                      View All
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
                <div className="space-y-5">
                  {subjectProgress.map((subject) => {
                    const percentage = Math.round((subject.completed / subject.total) * 100);
                    return (
                      <div key={subject.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">{subject.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {subject.completed} / {subject.total} ({percentage}%)
                          </span>
                        </div>
                        <div className="h-3 rounded-full bg-secondary overflow-hidden">
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r ${subject.color} transition-all duration-500`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recent Tests */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-lg font-bold text-foreground">
                    Recent Tests
                  </h2>
                  <Link to="/mock-test">
                    <Button variant="ghost" size="sm">
                      View All
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentTests.map((test, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-secondary/30"
                    >
                      <div>
                        <h3 className="font-medium text-foreground">{test.title}</h3>
                        <p className="text-sm text-muted-foreground">{test.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-display font-bold text-foreground">
                          {test.score}/{test.total}
                        </p>
                        <p className={`text-sm ${test.accuracy >= 70 ? 'text-success' : 'text-warning'}`}>
                          {test.accuracy}% accuracy
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Weak Chapters */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-2 mb-6">
                  <Target className="h-5 w-5 text-accent" />
                  <h2 className="font-display text-lg font-bold text-foreground">
                    Focus Areas
                  </h2>
                </div>
                <div className="space-y-4">
                  {weakChapters.map((chapter) => (
                    <div
                      key={chapter.name}
                      className="p-4 rounded-xl bg-destructive/5 border border-destructive/20"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-foreground">{chapter.name}</h3>
                          <p className="text-xs text-muted-foreground">{chapter.subject}</p>
                        </div>
                        <span className="text-sm font-bold text-destructive">{chapter.accuracy}%</span>
                      </div>
                      <Link to={`/practice/${chapter.subject.toLowerCase()}`}>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          Practice Now
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Goal */}
              <div className="p-6 rounded-2xl gradient-primary text-primary-foreground">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="h-5 w-5" />
                  <h2 className="font-display font-bold">Daily Goal</h2>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2 opacity-90">
                    <span>Questions Today</span>
                    <span>12 / 25</span>
                  </div>
                  <div className="h-3 rounded-full bg-primary-foreground/20 overflow-hidden">
                    <div className="h-full w-[48%] rounded-full bg-primary-foreground/80" />
                  </div>
                </div>
                <Link to="/practice">
                  <Button variant="accent" size="lg" className="w-full">
                    Continue Practice
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
