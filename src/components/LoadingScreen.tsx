import { useEffect, useState } from "react";
import datalogixLogo from "@/assets/datalogix-logo.jpg";
import amityLogo from "@/assets/amity-logo.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="flex items-center justify-center gap-8">
          <img 
            src={datalogixLogo} 
            alt="DataLogix Club" 
            className="w-24 h-24 rounded-full animate-[scale-in_0.6s_ease-out]" 
            style={{ animationDelay: "0.1s" }}
          />
          <img 
            src={amityLogo} 
            alt="Amity University" 
            className="h-24 animate-[scale-in_0.6s_ease-out]" 
            style={{ animationDelay: "0.3s" }}
          />
        </div>
        
        <div className="space-y-2 animate-[fade-in_0.6s_ease-out]" style={{ animationDelay: "0.5s" }}>
          <h1 className="text-4xl font-bold text-foreground">DataLogix Club</h1>
          <p className="text-xl text-muted-foreground">Amity University, Bengaluru</p>
        </div>

        <div className="w-64 h-1.5 bg-secondary rounded-full overflow-hidden mx-auto animate-[fade-in_0.6s_ease-out]" style={{ animationDelay: "0.7s" }}>
          <div 
            className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-300 ease-out shadow-lg shadow-primary/20"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-sm text-muted-foreground animate-pulse animate-[fade-in_0.6s_ease-out]" style={{ animationDelay: "0.9s" }}>
          Loading Hungry Algorithm...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
