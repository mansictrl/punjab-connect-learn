import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Keyboard, RotateCcw, Home, Clock, Target, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TypingStats {
  wpm: number;
  accuracy: number;
  timeElapsed: number;
  totalCharacters: number;
  correctCharacters: number;
}

const TypingPractice = () => {
  const navigate = useNavigate();
  
  // Sample texts for different difficulty levels
  const sampleTexts = {
    beginner: [
      "the quick brown fox jumps over the lazy dog",
      "hello world how are you today",
      "learning to type is very important skill",
    ],
    intermediate: [
      "Technology has transformed the way we communicate and learn in the modern world.",
      "Digital literacy includes basic computer skills, internet safety, and online communication.",
      "Students in rural areas benefit greatly from accessible digital education platforms.",
    ],
    advanced: [
      "The implementation of comprehensive digital education programs requires careful consideration of infrastructure, teacher training, and student accessibility to ensure equitable learning opportunities across diverse geographical and socioeconomic backgrounds.",
      "Effective keyboard proficiency enables efficient digital communication, academic research, and professional productivity in today's interconnected global economy.",
    ],
  };

  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [currentText, setCurrentText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [stats, setStats] = useState<TypingStats>({
    wpm: 0,
    accuracy: 0,
    timeElapsed: 0,
    totalCharacters: 0,
    correctCharacters: 0,
  });

  const startTest = () => {
    const randomText = sampleTexts[difficulty][Math.floor(Math.random() * sampleTexts[difficulty].length)];
    setCurrentText(randomText);
    setUserInput('');
    setIsActive(true);
    setStartTime(Date.now());
    setStats({
      wpm: 0,
      accuracy: 0,
      timeElapsed: 0,
      totalCharacters: 0,
      correctCharacters: 0,
    });
  };

  const resetTest = () => {
    setIsActive(false);
    setStartTime(null);
    setUserInput('');
    setCurrentText('');
    setStats({
      wpm: 0,
      accuracy: 0,
      timeElapsed: 0,
      totalCharacters: 0,
      correctCharacters: 0,
    });
  };

  const calculateStats = useCallback((input: string, text: string, startTime: number) => {
    const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
    const totalCharacters = input.length;
    let correctCharacters = 0;

    for (let i = 0; i < input.length; i++) {
      if (input[i] === text[i]) {
        correctCharacters++;
      }
    }

    const accuracy = totalCharacters > 0 ? (correctCharacters / totalCharacters) * 100 : 0;
    const wpm = timeElapsed > 0 ? (correctCharacters / 5) / timeElapsed : 0;

    return {
      wpm: Math.round(wpm),
      accuracy: Math.round(accuracy),
      timeElapsed: Math.round(timeElapsed * 60), // convert back to seconds
      totalCharacters,
      correctCharacters,
    };
  }, []);

  useEffect(() => {
    if (isActive && startTime && userInput.length > 0) {
      const newStats = calculateStats(userInput, currentText, startTime);
      setStats(newStats);

      if (userInput === currentText) {
        setIsActive(false);
      }
    }
  }, [userInput, currentText, isActive, startTime, calculateStats]);

  const getCharacterColor = (index: number) => {
    if (index >= userInput.length) return 'text-muted-foreground';
    if (userInput[index] === currentText[index]) return 'text-success bg-success/10';
    return 'text-destructive bg-destructive/10';
  };

  const progress = currentText ? (userInput.length / currentText.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="gradient-primary p-3 rounded-lg">
              <Keyboard className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Typing Practice</h1>
              <p className="text-muted-foreground">Improve your keyboard skills</p>
            </div>
          </div>
          <Button variant="outline" onClick={() => navigate("/")} className="border-primary text-primary">
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
        </div>

        {/* Difficulty Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Difficulty Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {['beginner', 'intermediate', 'advanced'].map((level) => (
                <Button
                  key={level}
                  variant={difficulty === level ? 'default' : 'outline'}
                  onClick={() => setDifficulty(level as any)}
                  disabled={isActive}
                  className="capitalize"
                >
                  {level}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">WPM</p>
                <p className="text-2xl font-bold text-foreground">{stats.wpm}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-success" />
              <div>
                <p className="text-sm text-muted-foreground">Accuracy</p>
                <p className="text-2xl font-bold text-foreground">{stats.accuracy}%</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="text-2xl font-bold text-foreground">{stats.timeElapsed}s</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div>
              <p className="text-sm text-muted-foreground">Progress</p>
              <p className="text-2xl font-bold text-foreground">{Math.round(progress)}%</p>
            </div>
          </Card>
        </div>

        {/* Main Typing Area */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Typing Test</CardTitle>
              {currentText && (
                <Badge variant="outline" className="border-primary text-primary">
                  {difficulty} level
                </Badge>
              )}
            </div>
            {currentText && (
              <Progress value={progress} className="w-full" />
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            {!currentText ? (
              <div className="text-center py-12">
                <Keyboard className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground mb-4">
                  Click "Start Test" to begin typing practice
                </p>
                <Button onClick={startTest} className="gradient-primary text-white">
                  Start Test
                </Button>
              </div>
            ) : (
              <>
                {/* Text Display */}
                <div className="bg-muted/30 p-6 rounded-lg border-2 border-border font-mono text-lg leading-relaxed">
                  {currentText.split('').map((char, index) => (
                    <span key={index} className={`${getCharacterColor(index)} px-0.5 rounded`}>
                      {char}
                    </span>
                  ))}
                </div>

                {/* Input Area */}
                <div className="space-y-4">
                  <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    disabled={!isActive}
                    placeholder="Start typing here..."
                    className="w-full p-4 border-2 border-border rounded-lg font-mono text-lg resize-none focus:border-primary focus:outline-none bg-background"
                    rows={4}
                    autoFocus
                  />

                  <div className="flex gap-3">
                    <Button
                      onClick={startTest}
                      disabled={isActive}
                      className="gradient-primary text-white"
                    >
                      New Test
                    </Button>
                    <Button
                      onClick={resetTest}
                      variant="outline"
                      className="border-destructive text-destructive hover:bg-destructive/10"
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>How to Use</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Select your difficulty level based on your typing experience</li>
              <li>• Click "Start Test" to begin the typing exercise</li>
              <li>• Type the displayed text as accurately and quickly as possible</li>
              <li>• Green highlighting shows correct characters, red shows errors</li>
              <li>• Your speed (WPM) and accuracy are calculated in real-time</li>
              <li>• Complete the entire text to finish the test</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TypingPractice;