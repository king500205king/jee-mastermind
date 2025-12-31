import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Target, TrendingUp } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute top-60 -left-20 w-60 h-60 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm font-medium text-primary">JEE 2025 Preparation</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Crack JEE with{" "}
              <span className="text-gradient">Smart Practice</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Master Previous Year Questions, take mock tests, and track your progress. 
              Everything you need to ace JEE Main & Advanced.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/practice">
                <Button size="xl" variant="hero" className="group">
                  Start Practicing
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/mock-test">
                <Button size="xl" variant="outline">
                  Take Mock Test
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { value: "10,000+", label: "PYQs" },
                { value: "500+", label: "Mock Tests" },
                { value: "50,000+", label: "Students" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Feature cards */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CountdownTimer />
            
            <div className="grid gap-4">
              {[
                {
                  icon: BookOpen,
                  title: "Practice PYQs",
                  description: "Chapter-wise previous year questions with detailed solutions",
                  color: "primary",
                },
                {
                  icon: Target,
                  title: "Mock Tests",
                  description: "Full-length tests with real exam simulation",
                  color: "accent",
                },
                {
                  icon: TrendingUp,
                  title: "Track Progress",
                  description: "Detailed analytics to identify weak areas",
                  color: "success",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-${feature.color}/10 text-${feature.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
