import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

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
        <div className="flex items-center justify-center gap-4">
          <Code2 className="w-16 h-16 text-primary animate-pulse-slow" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">DataLogix Club</h1>
          <p className="text-xl text-muted-foreground">Amity University, Bengaluru</p>
        </div>

        <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-sm text-muted-foreground animate-pulse-slow">
          Loading Hungry Algorithm...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
