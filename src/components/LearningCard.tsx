import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Users, Download } from "lucide-react";

interface LearningCardProps {
  title: string;
  titleHindi?: string;
  titlePunjabi?: string;
  description: string;
  progress?: number;
  duration: string;
  students: number;
  isOfflineAvailable?: boolean;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  onStart: () => void;
}

const LearningCard = ({ 
  title, 
  titleHindi, 
  titlePunjabi, 
  description, 
  progress = 0, 
  duration, 
  students, 
  isOfflineAvailable = false,
  difficulty,
  category,
  onStart 
}: LearningCardProps) => {
  const difficultyColors = {
    Beginner: "bg-success/10 text-success border-success/20",
    Intermediate: "bg-warning/10 text-warning-foreground border-warning/20",
    Advanced: "bg-destructive/10 text-destructive border-destructive/20"
  };

  return (
    <Card className="group hover:shadow-card smooth-transition bg-card border-border overflow-hidden">
      {/* Category Badge */}
      <div className="p-4 pb-0">
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
          {category}
        </span>
      </div>

      <div className="p-4 pt-2">
        {/* Title - Multilingual */}
        <div className="mb-3">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary smooth-transition mb-1">
            {title}
          </h3>
          {titleHindi && (
            <p className="text-sm text-muted-foreground font-medium">
              {titleHindi}
            </p>
          )}
          {titlePunjabi && (
            <p className="text-sm text-muted-foreground">
              {titlePunjabi}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Progress Bar (if enrolled) */}
        {progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-muted-foreground">Progress</span>
              <span className="text-xs font-medium text-foreground">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-3 w-3" />
              <span>{students}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {isOfflineAvailable && (
              <div className="flex items-center space-x-1 text-success">
                <Download className="h-3 w-3" />
                <span>Offline</span>
              </div>
            )}
            <span className={`px-2 py-1 rounded text-xs border ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          onClick={onStart}
          className="w-full gradient-primary text-white hover:shadow-glow smooth-transition"
        >
          <BookOpen className="h-4 w-4 mr-2" />
          {progress > 0 ? "Continue Learning" : "Start Course"}
        </Button>
      </div>
    </Card>
  );
};

export default LearningCard;