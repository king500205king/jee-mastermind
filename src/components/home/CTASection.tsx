import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 md:p-12 lg:p-16 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 mb-6">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Start Free Today</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Crack JEE?
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join thousands of students who are already practicing smarter. 
              Start your journey to IIT today.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="xl" variant="accent" className="group">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/practice">
                <Button size="xl" variant="ghost" className="text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10">
                  Explore Questions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
