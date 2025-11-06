import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Brain, Target, TrendingUp, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              THE HUNGRY ALGORITHM
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding emotions through data science
            </p>
          </div>

          {/* Event Details */}
          <Card className="p-8 bg-card border-border">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground text-center">Event Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Event Name</p>
                  <p className="text-lg font-semibold text-foreground">THE HUNGRY ALGORITHM</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="text-lg font-semibold text-foreground">11th November 2025 (Tuesday)</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Venue</p>
                  <p className="text-lg font-semibold text-foreground">Seminar Hall</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="text-lg font-semibold text-foreground">Will be disclosed soon</p>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <p className="text-sm text-muted-foreground">Host</p>
                  <p className="text-lg font-semibold text-foreground">Will be disclosed soon</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Main Description */}
          <Card className="p-8 bg-card border-border">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">The Event</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hungry Algorithm is an innovative sentiment analysis research initiative spearheaded by 
                the DataLogix Club from the Department of M.Sc Data Science at AIIT, Amity University Bengaluru. 
                This event represents a unique opportunity for students and data enthusiasts to participate in 
                cutting-edge research that explores the complex landscape of human emotions and sentiments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through a carefully designed 25-question questionnaire, we aim to gather comprehensive data 
                that will be analyzed using advanced machine learning algorithms. Your participation directly 
                contributes to building a robust dataset for sentiment analysis research.
              </p>
            </div>
          </Card>

          {/* Objectives */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border space-y-4">
              <Brain className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Research Goals</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To develop and validate sentiment analysis models using real-world data collected from 
                diverse participants, contributing to the field of emotional AI and natural language processing.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border space-y-4">
              <Target className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Data Collection</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Structured data collection from November 6-9, 2025, ensuring a comprehensive dataset 
                that captures various emotional expressions and sentiment patterns across different contexts.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border space-y-4">
              <TrendingUp className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Analysis Phase</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Post-collection, our team will employ state-of-the-art machine learning techniques to 
                analyze sentiment patterns, emotional trends, and derive meaningful insights from the data.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border space-y-4">
              <Users className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Community Impact</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building a collaborative research environment that empowers students to engage with 
                real-world data science projects and contribute to academic knowledge in sentiment analysis.
              </p>
            </Card>
          </div>

          {/* Timeline */}
          <Card className="p-8 bg-card border-border">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Event Timeline</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-32 text-sm font-medium text-primary">Nov 6, 2025</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Data Collection Begins</h4>
                    <p className="text-sm text-muted-foreground">Questionnaire opens for participants</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-32 text-sm font-medium text-primary">Nov 6-9, 2025</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Active Collection Period</h4>
                    <p className="text-sm text-muted-foreground">Participants submit their responses</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-32 text-sm font-medium text-primary">Nov 9, 2025</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Collection Closes</h4>
                    <p className="text-sm text-muted-foreground">Final submissions accepted</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-32 text-sm font-medium text-primary">Post Nov 9</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">Analysis Phase</h4>
                    <p className="text-sm text-muted-foreground">Data processing and sentiment analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* About DataLogix Club */}
          <Card className="p-8 bg-card border-border">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">About DataLogix Club</h2>
              <p className="text-muted-foreground leading-relaxed">
                DataLogix Club is the premier data science student organization at the Department of M.Sc Data Science, 
                AIIT, Amity University Bengaluru. We are dedicated to fostering a culture of data-driven research, 
                innovation, and collaboration among students passionate about machine learning, artificial intelligence, 
                and data analytics.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through events like Hungry Algorithm, workshops, hackathons, and research initiatives, we provide 
                students with hands-on experience in real-world data science applications while building a supportive 
                community of future data professionals.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
