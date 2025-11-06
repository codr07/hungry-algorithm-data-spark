import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import amityLogo from "@/assets/amity-logo.png";
import datalogixLogo from "@/assets/datalogix-logo.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Hungry Algorithm
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A Sentiment Analysis Event by DataLogix Club
            </p>
            <div className="flex items-center justify-center gap-6">
              <img src={datalogixLogo} alt="DataLogix Club" className="h-16 w-16 rounded-full object-cover" />
              <img src={amityLogo} alt="Amity University Bengaluru" className="h-16" />
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Department of M.Sc Data Science, AIIT</span>
              <span>•</span>
              <span>Amity University, Bengaluru</span>
            </div>
          </div>

          {/* Event Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border space-y-3 hover:border-primary transition-colors">
              <Calendar className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-foreground">Data Collection</h3>
              <p className="text-sm text-muted-foreground">
                6th Nov - 9th Nov, 2025
              </p>
            </Card>

            <Card className="p-6 bg-card border-border space-y-3 hover:border-primary transition-colors">
              <FileText className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-foreground">Questionnaire</h3>
              <p className="text-sm text-muted-foreground">
                25 Questions on Sentiment Analysis
              </p>
            </Card>

            <Card className="p-6 bg-card border-border space-y-3 hover:border-primary transition-colors">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-foreground">Community Driven</h3>
              <p className="text-sm text-muted-foreground">
                By students, for students
              </p>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 py-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-foreground">
                Ready to Participate?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Complete our sentiment analysis questionnaire and contribute to our research.
                Your responses will help us understand emotional patterns in data.
              </p>
            </div>
            
            <Button 
              onClick={() => navigate("/questionnaire")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              Start Questionnaire
            </Button>
          </div>

          {/* Additional Info */}
          <Card className="p-8 bg-card border-border">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">About the Event</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hungry Algorithm is a sentiment analysis research event organized by the DataLogix Club. 
                This initiative aims to collect and analyze emotional responses through a structured questionnaire, 
                providing valuable insights into human sentiment patterns. Join us in this exciting journey of data 
                exploration and machine learning research.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Landing;
