import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const questions = [
  { id: 1, text: "How would you rate your overall experience with data science?", type: "scale" },
  { id: 2, text: "What motivates you to learn about machine learning?", type: "text" },
  { id: 3, text: "How confident are you in your programming skills?", type: "scale" },
  { id: 4, text: "Which aspect of data science interests you the most?", type: "text" },
  { id: 5, text: "How often do you work on data science projects?", type: "scale" },
  { id: 6, text: "What challenges do you face in learning data science?", type: "text" },
  { id: 7, text: "How comfortable are you with statistical concepts?", type: "scale" },
  { id: 8, text: "Describe your experience with data visualization tools", type: "text" },
  { id: 9, text: "How would you rate your problem-solving abilities?", type: "scale" },
  { id: 10, text: "What is your preferred learning method for new concepts?", type: "text" },
  { id: 11, text: "How confident are you in explaining technical concepts?", type: "scale" },
  { id: 12, text: "What are your career goals in data science?", type: "text" },
  { id: 13, text: "How do you handle setbacks in learning?", type: "scale" },
  { id: 14, text: "Describe a data science project you're proud of", type: "text" },
  { id: 15, text: "How well do you work in team environments?", type: "scale" },
  { id: 16, text: "What areas of data science do you want to explore?", type: "text" },
  { id: 17, text: "How organized are you with your study materials?", type: "scale" },
  { id: 18, text: "What is your approach to debugging code?", type: "text" },
  { id: 19, text: "How adaptable are you to new technologies?", type: "scale" },
  { id: 20, text: "Describe your experience with machine learning frameworks", type: "text" },
  { id: 21, text: "How do you stay updated with data science trends?", type: "scale" },
  { id: 22, text: "What motivates you to participate in data science events?", type: "text" },
  { id: 23, text: "How confident are you in presenting your work?", type: "scale" },
  { id: 24, text: "What is your approach to learning from failures?", type: "text" },
  { id: 25, text: "How would you rate your enthusiasm for data science?", type: "scale" },
];

const Questionnaire = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const questionsPerPage = 5;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const handleResponse = (questionId: number, value: string) => {
    setResponses({ ...responses, [questionId]: value });
  };

  const canProceed = () => {
    return currentQuestions.every(q => responses[q.id]);
  };

  const handleNext = () => {
    if (canProceed()) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    } else {
      toast({
        title: "Incomplete Responses",
        description: "Please answer all questions before proceeding.",
        variant: "destructive",
      });
    }
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    if (!name || !email) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and email.",
        variant: "destructive",
      });
      return;
    }

    if (!canProceed()) {
      toast({
        title: "Incomplete Responses",
        description: "Please answer all questions before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send the data to Google Sheets
    console.log({ name, email, responses });
    
    setSubmitted(true);
    toast({
      title: "Success!",
      description: "Your responses have been submitted successfully.",
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 pt-24 pb-12">
          <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
            <CheckCircle2 className="w-20 h-20 text-primary mx-auto" />
            <h1 className="text-4xl font-bold text-foreground">Thank You!</h1>
            <p className="text-xl text-muted-foreground">
              Your responses have been recorded successfully. We appreciate your participation in the Hungry Algorithm event.
            </p>
            <Button onClick={() => window.location.href = "/"} className="bg-primary hover:bg-primary/90">
              Return to Home
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Sentiment Analysis Questionnaire
            </h1>
            <p className="text-muted-foreground">
              Page {currentPage + 1} of {totalPages}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
            />
          </div>

          {/* Personal Info (First Page Only) */}
          {currentPage === 0 && (
            <Card className="p-6 bg-card border-border space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Your Information</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-background border-border"
                  />
                </div>
              </div>
            </Card>
          )}

          {/* Questions */}
          <div className="space-y-6">
            {currentQuestions.map((question) => (
              <Card key={question.id} className="p-6 bg-card border-border space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  {question.id}. {question.text}
                </h3>
                
                {question.type === "scale" ? (
                  <RadioGroup
                    value={responses[question.id] || ""}
                    onValueChange={(value) => handleResponse(question.id, value)}
                  >
                    {["1 - Very Low", "2 - Low", "3 - Moderate", "4 - High", "5 - Very High"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`q${question.id}-${option}`} />
                        <Label htmlFor={`q${question.id}-${option}`} className="cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <Textarea
                    value={responses[question.id] || ""}
                    onChange={(e) => handleResponse(question.id, e.target.value)}
                    placeholder="Type your answer here..."
                    className="min-h-[100px] bg-background border-border"
                  />
                )}
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4">
            <Button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              variant="outline"
              className="border-border"
            >
              Previous
            </Button>

            {currentPage < totalPages - 1 ? (
              <Button onClick={handleNext} className="bg-primary hover:bg-primary/90">
                Next
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90">
                Submit
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Questionnaire;
