import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  ArrowRight, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle2, 
  XCircle, 
  Lightbulb,
  Clock,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

// Sample question data
const sampleQuestion = {
  id: 1,
  year: 2023,
  exam: "JEE Main",
  type: "MCQ",
  question: "A particle of mass m is projected with velocity v at an angle θ with the horizontal. The magnitude of angular momentum of the particle about the point of projection when the particle is at the highest point of its trajectory is:",
  options: [
    { id: "a", text: "mv³sin²θcosθ / 2g" },
    { id: "b", text: "mv³sinθcos²θ / 2g" },
    { id: "c", text: "mv³sin²θcosθ / g" },
    { id: "d", text: "mv³sinθcos²θ / g" },
  ],
  correctAnswer: "a",
  solution: `At the highest point of trajectory:
  
• Horizontal distance from point of projection = R/2 = v²sin2θ/2g = v²sinθcosθ/g
• Velocity at highest point = vcosθ (horizontal)
• Height at highest point = v²sin²θ/2g

Angular momentum L = mvr
where r is the perpendicular distance from the line of motion to the point of projection.

At highest point, the perpendicular distance is the height = v²sin²θ/2g

Therefore, L = m × vcosθ × v²sin²θ/2g = mv³sin²θcosθ/2g`,
  difficulty: "Medium",
};

export default function PracticeQuestion() {
  const { subject, chapter } = useParams();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 25;

  const isCorrect = selectedOption === sampleQuestion.correctAnswer;
  const hasAnswered = selectedOption !== null;

  const handleSubmit = () => {
    if (selectedOption) {
      setShowSolution(true);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowSolution(false);
    setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions));
  };

  const handlePrev = () => {
    setSelectedOption(null);
    setShowSolution(false);
    setCurrentQuestion((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container py-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/practice" className="hover:text-primary transition-colors">Practice</Link>
            <span>/</span>
            <Link to={`/practice/${subject}`} className="hover:text-primary transition-colors capitalize">{subject}</Link>
            <span>/</span>
            <span className="text-foreground capitalize">{chapter?.replace("-", " ")}</span>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Question Panel */}
            <div className="lg:col-span-3 space-y-6">
              {/* Question Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {sampleQuestion.exam} {sampleQuestion.year}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                    {sampleQuestion.type}
                  </span>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-sm",
                    sampleQuestion.difficulty === "Easy" && "bg-success/10 text-success",
                    sampleQuestion.difficulty === "Medium" && "bg-warning/10 text-warning",
                    sampleQuestion.difficulty === "Hard" && "bg-destructive/10 text-destructive"
                  )}>
                    {sampleQuestion.difficulty}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={isBookmarked ? "text-accent" : ""}
                >
                  {isBookmarked ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
                </Button>
              </div>

              {/* Question */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="font-display text-lg text-foreground leading-relaxed">
                  <span className="font-bold text-primary mr-2">Q{currentQuestion}.</span>
                  {sampleQuestion.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {sampleQuestion.options.map((option) => {
                  const isSelected = selectedOption === option.id;
                  const isCorrectOption = option.id === sampleQuestion.correctAnswer;
                  
                  let optionStyle = "border-border hover:border-primary/50";
                  if (showSolution) {
                    if (isCorrectOption) {
                      optionStyle = "border-success bg-success/10";
                    } else if (isSelected && !isCorrectOption) {
                      optionStyle = "border-destructive bg-destructive/10";
                    }
                  } else if (isSelected) {
                    optionStyle = "border-primary bg-primary/5";
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => !showSolution && setSelectedOption(option.id)}
                      disabled={showSolution}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 text-left transition-all duration-200",
                        optionStyle,
                        !showSolution && "hover:shadow-md cursor-pointer"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <span className={cn(
                          "flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold",
                          showSolution && isCorrectOption ? "bg-success text-success-foreground" :
                          showSolution && isSelected && !isCorrectOption ? "bg-destructive text-destructive-foreground" :
                          isSelected ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                        )}>
                          {option.id.toUpperCase()}
                        </span>
                        <span className="text-foreground">{option.text}</span>
                        {showSolution && isCorrectOption && (
                          <CheckCircle2 className="ml-auto h-5 w-5 text-success" />
                        )}
                        {showSolution && isSelected && !isCorrectOption && (
                          <XCircle className="ml-auto h-5 w-5 text-destructive" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {!showSolution ? (
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={handleSubmit}
                    disabled={!selectedOption}
                    className="flex-1"
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handlePrev}
                      disabled={currentQuestion === 1}
                      className="flex-1"
                    >
                      <ChevronLeft className="h-5 w-5 mr-2" />
                      Previous
                    </Button>
                    <Button
                      variant="hero"
                      size="lg"
                      onClick={handleNext}
                      disabled={currentQuestion === totalQuestions}
                      className="flex-1"
                    >
                      Next Question
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </Button>
                  </>
                )}
              </div>

              {/* Solution */}
              {showSolution && (
                <div className="p-6 rounded-2xl bg-card border border-border animate-slide-up">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="h-5 w-5 text-accent" />
                    <h3 className="font-display font-semibold text-foreground">Solution</h3>
                  </div>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <pre className="whitespace-pre-wrap font-sans">{sampleQuestion.solution}</pre>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress */}
              <div className="p-5 rounded-2xl bg-card border border-border">
                <h3 className="font-display font-semibold text-foreground mb-4">Progress</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Question</span>
                    <span className="font-medium text-foreground">{currentQuestion} / {totalQuestions}</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-primary transition-all duration-300"
                      style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Quick Navigation */}
              <div className="p-5 rounded-2xl bg-card border border-border">
                <h3 className="font-display font-semibold text-foreground mb-4">Questions</h3>
                <div className="grid grid-cols-5 gap-2">
                  {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setCurrentQuestion(num);
                        setSelectedOption(null);
                        setShowSolution(false);
                      }}
                      className={cn(
                        "w-full aspect-square rounded-lg text-sm font-medium transition-all",
                        num === currentQuestion 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                      )}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timer */}
              <div className="p-5 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">Time Spent</span>
                </div>
                <p className="font-display text-2xl font-bold text-foreground mt-2">02:45</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
