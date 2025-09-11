import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Monitor, Home, CheckCircle, XCircle, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Question {
  id: number;
  question: string;
  questionHindi: string;
  questionPunjabi: string;
  image: string;
  options: string[];
  optionsHindi: string[];
  optionsPunjabi: string[];
  correctAnswer: number;
  explanation: string;
}

const DigitalLiteracy = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [language, setLanguage] = useState<'english' | 'hindi' | 'punjabi'>('english');

  // Sample questions with base64 placeholder images (in real app, use actual device images)
  const questions: Question[] = [
    {
      id: 1,
      question: "Which device is shown in the image?",
      questionHindi: "छवि में कौन सा उपकरण दिखाया गया है?",
      questionPunjabi: "ਤਸਵੀਰ ਵਿੱਚ ਕਿਹੜਾ ਯੰਤਰ ਦਿਖਾਇਆ ਗਿਆ ਹੈ?",
      image: "🖨️", // In real app, use actual image URLs
      options: ["Mouse", "Printer", "Keyboard", "Monitor"],
      optionsHindi: ["माउस", "प्रिंटर", "कीबोर्ड", "मॉनिटर"],
      optionsPunjabi: ["ਮਾਊਸ", "ਪ੍ਰਿੰਟਰ", "ਕੀਬੋਰਡ", "ਮਾਨੀਟਰ"],
      correctAnswer: 1,
      explanation: "This is a printer, used to print documents and images on paper.",
    },
    {
      id: 2,
      question: "What is this input device called?",
      questionHindi: "इस इनपुट डिवाइस को क्या कहते हैं?",
      questionPunjabi: "ਇਸ ਇਨਪੁਟ ਡਿਵਾਈਸ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
      image: "⌨️",
      options: ["Speaker", "Microphone", "Keyboard", "Camera"],
      optionsHindi: ["स्पीकर", "माइक्रोफोन", "कीबोर्ड", "कैमरा"],
      optionsPunjabi: ["ਸਪੀਕਰ", "ਮਾਈਕ੍ਰੋਫੋਨ", "ਕੀਬੋਰਡ", "ਕੈਮਰਾ"],
      correctAnswer: 2,
      explanation: "This is a keyboard, used to type text and enter commands into a computer.",
    },
    {
      id: 3,
      question: "Which device is used for pointing and clicking?",
      questionHindi: "पॉइंटिंग और क्लिकिंग के लिए कौन सा उपकरण उपयोग किया जाता है?",
      questionPunjabi: "ਪੁਆਇੰਟਿੰਗ ਅਤੇ ਕਲਿਕਿੰਗ ਲਈ ਕਿਹੜਾ ਯੰਤਰ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
      image: "🖱️",
      options: ["Keyboard", "Monitor", "Mouse", "Printer"],
      optionsHindi: ["कीबोर्ड", "मॉनिटर", "माउस", "प्रिंटर"],
      optionsPunjabi: ["ਕੀਬੋਰਡ", "ਮਾਨੀਟਰ", "ਮਾਊਸ", "ਪ੍ਰਿੰਟਰ"],
      correctAnswer: 2,
      explanation: "This is a computer mouse, used to point, click, and navigate on the screen.",
    },
    {
      id: 4,
      question: "What do we call the main screen of a computer?",
      questionHindi: "कंप्यूटर की मुख्य स्क्रीन को क्या कहते हैं?",
      questionPunjabi: "ਕੰਪਿਊਟਰ ਦੀ ਮੁੱਖ ਸਕਰੀਨ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
      image: "🖥️",
      options: ["CPU", "Monitor", "Speaker", "Webcam"],
      optionsHindi: ["सीपीयू", "मॉनिटर", "स्पीकर", "वेबकैम"],
      optionsPunjabi: ["ਸੀਪੀਯੂ", "ਮਾਨੀਟਰ", "ਸਪੀਕਰ", "ਵੈਬਕੈਮ"],
      correctAnswer: 1,
      explanation: "This is a monitor (or display), which shows the visual output from the computer.",
    },
    {
      id: 5,
      question: "Which device captures photos and videos?",
      questionHindi: "कौन सा उपकरण फोटो और वीडियो कैप्चर करता है?",
      questionPunjabi: "ਕਿਹੜਾ ਯੰਤਰ ਫੋਟੋ ਅਤੇ ਵੀਡੀਓ ਕੈਪਚਰ ਕਰਦਾ ਹੈ?",
      image: "📷",
      options: ["Microphone", "Camera", "Speaker", "Headphones"],
      optionsHindi: ["माइक्रोफोन", "कैमरा", "स्पीकर", "हेडफोन"],
      optionsPunjabi: ["ਮਾਈਕ੍ਰੋਫੋਨ", "ਕੈਮਰਾ", "ਸਪੀਕਰ", "ਹੈਡਫੋਨ"],
      correctAnswer: 1,
      explanation: "This is a camera, used to take photographs and record videos.",
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    setShowResult(true);
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (isLastQuestion) {
        // Quiz completed
        return;
      }
      
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setAnsweredQuestions([...answeredQuestions, currentQuestion.id]);
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  const getOptionClass = (optionIndex: number) => {
    if (!showResult) {
      return selectedAnswer === optionIndex 
        ? "border-primary bg-primary/10 text-primary" 
        : "border-border hover:border-primary/50";
    }

    if (optionIndex === currentQuestion.correctAnswer) {
      return "border-success bg-success/10 text-success";
    }

    if (selectedAnswer === optionIndex && optionIndex !== currentQuestion.correctAnswer) {
      return "border-destructive bg-destructive/10 text-destructive";
    }

    return "border-border text-muted-foreground";
  };

  const getQuestionText = () => {
    switch (language) {
      case 'hindi': return currentQuestion.questionHindi;
      case 'punjabi': return currentQuestion.questionPunjabi;
      default: return currentQuestion.question;
    }
  };

  const getOptionsText = () => {
    switch (language) {
      case 'hindi': return currentQuestion.optionsHindi;
      case 'punjabi': return currentQuestion.optionsPunjabi;
      default: return currentQuestion.options;
    }
  };

  if (isLastQuestion && showResult) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="text-center">
            <CardHeader>
              <div className="w-20 h-20 gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {score}/{questions.length}
                </div>
                <p className="text-lg text-muted-foreground">
                  You got {score} out of {questions.length} questions correct!
                </p>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-lg font-medium text-foreground mb-2">
                  Accuracy: {Math.round((score / questions.length) * 100)}%
                </p>
                <Progress value={(score / questions.length) * 100} className="w-full" />
              </div>

              <div className="flex gap-3 justify-center">
                <Button onClick={resetQuiz} className="gradient-primary text-white">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
                <Button variant="outline" onClick={() => navigate("/")} className="border-primary text-primary">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="gradient-primary p-3 rounded-lg">
              <Monitor className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Digital Literacy Quiz</h1>
              <p className="text-muted-foreground">Learn about computer devices</p>
            </div>
          </div>
          <Button variant="outline" onClick={() => navigate("/")} className="border-primary text-primary">
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
        </div>

        {/* Language Selection */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Language:</span>
              <div className="flex gap-2">
                {['english', 'hindi', 'punjabi'].map((lang) => (
                  <Button
                    key={lang}
                    size="sm"
                    variant={language === lang ? 'default' : 'outline'}
                    onClick={() => setLanguage(lang as any)}
                    className="capitalize"
                  >
                    {lang === 'english' ? 'English' : lang === 'hindi' ? 'हिंदी' : 'ਪੰਜਾਬੀ'}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <Badge variant="outline" className="border-primary text-primary">
                Score: {score}/{answeredQuestions.length}
              </Badge>
            </div>
            <Progress value={progress} className="w-full" />
          </CardContent>
        </Card>

        {/* Question Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">{getQuestionText()}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Device Image */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-muted/30 rounded-lg border-2 border-border flex items-center justify-center text-6xl">
                {currentQuestion.image}
              </div>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-3">
              {getOptionsText().map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`p-4 text-left border-2 rounded-lg transition-all ${getOptionClass(index)}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="font-medium">{option}</span>
                    {showResult && index === currentQuestion.correctAnswer && (
                      <CheckCircle className="h-5 w-5 ml-auto text-success" />
                    )}
                    {showResult && selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                      <XCircle className="h-5 w-5 ml-auto text-destructive" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Result Explanation */}
            {showResult && (
              <div className={`p-4 rounded-lg border-2 ${
                selectedAnswer === currentQuestion.correctAnswer 
                  ? 'border-success bg-success/10' 
                  : 'border-destructive bg-destructive/10'
              }`}>
                <div className="flex items-start space-x-3">
                  {selectedAnswer === currentQuestion.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium mb-2">
                      {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Next Button */}
            {!showResult && (
              <Button 
                onClick={handleNext}
                disabled={selectedAnswer === null}
                className="w-full gradient-primary text-white"
              >
                {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DigitalLiteracy;