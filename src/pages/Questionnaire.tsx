import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Star } from "lucide-react";

const questions = [
  { id: 1, text: "How would you rate your overall experience with data science?", type: "rating" },
  { id: 2, text: "What motivates you to learn about machine learning?", type: "text" },
  { id: 3, text: "Which programming language are you most comfortable with?", type: "mcq", options: ["Python", "R", "JavaScript", "Other"] },
  { id: 4, text: "How confident are you in your programming skills?", type: "rating" },
  { id: 5, text: "Which aspect of data science interests you the most?", type: "text" },
  { id: 6, text: "What is your current level of education?", type: "mcq", options: ["High School", "Undergraduate", "Graduate", "Professional"] },
  { id: 7, text: "How often do you work on data science projects?", type: "rating" },
  { id: 8, text: "What challenges do you face in learning data science?", type: "text" },
  { id: 9, text: "Which area of data science do you want to focus on?", type: "mcq", options: ["Machine Learning", "Deep Learning", "Data Analytics", "Big Data"] },
  { id: 10, text: "How comfortable are you with statistical concepts?", type: "rating" },
  { id: 11, text: "Describe your experience with data visualization tools", type: "text" },
  { id: 12, text: "What is your preferred learning style?", type: "mcq", options: ["Visual", "Hands-on", "Reading", "Listening"] },
  { id: 13, text: "How would you rate your problem-solving abilities?", type: "rating" },
  { id: 14, text: "What is your preferred learning method for new concepts?", type: "text" },
  { id: 15, text: "Which tool do you use most frequently?", type: "mcq", options: ["Jupyter Notebook", "VS Code", "PyCharm", "RStudio"] },
  { id: 16, text: "How confident are you in explaining technical concepts?", type: "rating" },
  { id: 17, text: "What are your career goals in data science?", type: "text" },
  { id: 18, text: "How do you handle setbacks in learning?", type: "rating" },
  { id: 19, text: "Describe a data science project you're proud of", type: "text" },
  { id: 20, text: "How well do you work in team environments?", type: "rating" },
  { id: 21, text: "What areas of data science do you want to explore?", type: "text" },
  { id: 22, text: "How organized are you with your study materials?", type: "rating" },
  { id: 23, text: "What is your approach to debugging code?", type: "text" },
  { id: 24, text: "How adaptable are you to new technologies?", type: "rating" }
];

const Questionnaire = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sen, setSen] = useState("");
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

  const handleSubmit = async () => {
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

    try {
      // Replace this URL with your deployed Google Apps Script URL
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxzcusSmBAegMqHS38qZO2ClxlzknscpC-ollL0nzrFpD46b1jbR1U3mS2mJelt6c66/exec";
      
      const formData = {
        timestamp: new Date().toISOString(),
        name,
        email,
        responses: questions.map(q => ({
          questionId: q.id,
          question: q.text,
          answer: responses[q.id] || ""
        }))
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
      toast({
        title: "Success!",
        description: "Your responses have been submitted successfully.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your responses. Please try again.",
        variant: "destructive",
      });
    }
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
                <div className="space-y-2">
                  <Label htmlFor="sen">SEN *</Label>
                  <Input
                    id="email"
                    type="sen"
                    value={sen}
                    onChange={(e) => setSen(e.target.value)}
                    placeholder="Enter your SEN"
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
                
                {question.type === "rating" ? (
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleResponse(question.id, star.toString())}
                        className="transition-all hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            parseInt(responses[question.id] || "0") >= star
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    ))}
                    {responses[question.id] && (
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({responses[question.id]}/5)
                      </span>
                    )}
                  </div>
                ) : question.type === "mcq" ? (
                  <RadioGroup
                    value={responses[question.id] || ""}
                    onValueChange={(value) => handleResponse(question.id, value)}
                  >
                    {question.options?.map((option) => (
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
