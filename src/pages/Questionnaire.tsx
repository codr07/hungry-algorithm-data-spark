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
  { id: 1, text: "How would you describe your overall experience with Kuksi Kitchen? (please give a detailed answer)", type: "text" },
  { id: 2, text: "How would you describe your overall experience with MRC canteen? (please give a detailed answer)", type: "text" },
  { id: 3, text: "How would you rate the quality of food at MRC? ", type: "rating"},
  { id: 4, text: "How would you rate the quality of food at Kuksi Kitchen? ", type: "rating" },
  { id: 5, text: "How would you rate the quantity of food at MRC? ", type: "rating" },
  { id: 6, text: "How would you rate the quantity of food at Kuksi Kitchen? ", type: "rating" },
  { id: 7, text: "How would you rate the variety and options available in the menu for Kuksi Kitchen?", type: "rating" },
  { id: 8, text: "How would you rate the variety and options available in the menu for MRC? ", type: "rating" },
  { id: 9, text: "In one word, how would you describe the atmosphere/essence of Kuksi Kitchen?", type: "text" },
  { id: 10, text: "In one word, how would you describe the atmosphere/essence of MRC canteen?	", type: "text"},
  { id: 11, text: "Which canteen maintains better cleanliness of tables, floors, and utensils during any hour of the day? ", type: "mcq" , options: ["MRC Canteen", "Kuksi Canteen", "Both", "None of Them"] },
  { id: 12, text: "According to you, which canteen introduces new dishes or seasonal items more frequently to keep the menu interesting? ", type: "mcq" , options: ["MRC Canteen", "Kuksi Canteen", "Both", "None of Them"] },
  { id: 13, text: "Which would be the dish that you would actually miss if it was removed from the menu of MRC Canteen?", type: "text"},
  { id: 14, text: "Which would be the dish that you would actually miss if it was removed from the menu of Kuksi Kitchen?", type: "text" },
  { id: 15, text: "Would you like the MRC canteen menu to include more healthy / traditional options?", type: "text" },
  { id: 16, text: "Would you like the Kuksi Kitchen menu to include more healthy / traditional options", type: "text" },
  { id: 17, text: "How often do you typically order from either of the canteens in a week?", type: "mcq",options: ["5 Days", "4 Days", "3 Days", "2 Days", "1 Days"]  },
  { id: 18, text: "If you could suggest one major improvement for MRC canteen, what would it be?", type: "text" },
  { id: 19, text: "If you could suggest one major improvement for Kuksi Kitchen, what would it be?", type: "text" },
  { id: 20, text: "How much does the canteen's distance from the college building influence your choice, especially considering the short 45-minute break?", type: "mcq"  , options: ["Very Much", "A Little", "Neutral", "Not really", "Doesn't influence"] },
  { id: 21, text: "Why do you prefer Kuksi over MRC ? Choose one of the below options:", type: "mcq" , options: ["Distance from academic block ", "wifi works better", "quality/quantity/taste/ambience", "To bunk classes", "Service", "Others"] },
  { id: 22, text: "If your answer is others in Q21 then please specify your answer :", type: "text" },
  { id: 23, text: "Why do you prefer MRC over Kuksi ? Choose one of the below options:", type: "mcq" , options: ["Distance from academic block ", "wifi works better", "quality/quantity/taste/ambience", "To bunk classes", "Service", "Others"] },
  { id: 24, text: "If your answer is others in Q23 then please specify your answer :", type: "text" },
  { id: 25, text: "If tea and coffee were superheroes, which canteen would win the showdown? ", type: "mcq" , options: ["MRC Canteen", "Kuksi Canteen", "Both", "None of Them"] },
];

const Questionnaire = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    if (isSubmitting) return;

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

    setIsSubmitting(true);

    try {
      // Replace this URL with your deployed Google Apps Script URL
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzltOH8W1AZpy0gO4UdyjTr7kfxwgB8VCM04gMK_AY/dev";
      
      const formData = {
        timestamp: new Date().toISOString(),
        name,
        email,
        sen,
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
    } finally {
      setIsSubmitting(false);
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
              <Button 
                onClick={handleSubmit} 
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Questionnaire;
