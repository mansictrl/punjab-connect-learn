import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Users, Download, Play, CheckCircle2, ArrowLeft } from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // Mock course data - this would come from Supabase in a real app
  const courses = {
    'digital-basics': {
      title: "Digital Basics",
      titleHindi: "डिजिटल बेसिक्स",
      titlePunjabi: "ਡਿਜੀਟਲ ਬੇਸਿਕਸ",
      description: "Learn fundamental computer skills, internet safety, and basic digital literacy",
      duration: "4 weeks",
      students: 150,
      difficulty: "Beginner",
      category: "Digital Literacy",
      progress: 0,
      isOfflineAvailable: true,
      lessons: [
        { id: 1, title: "Introduction to Computers", duration: "30 min", completed: false },
        { id: 2, title: "Using a Mouse and Keyboard", duration: "25 min", completed: false },
        { id: 3, title: "Internet Basics", duration: "40 min", completed: false },
        { id: 4, title: "Email and Communication", duration: "35 min", completed: false },
      ]
    },
    'math-grade-8': {
      title: "Mathematics Grade 8",
      titleHindi: "गणित कक्षा 8",
      titlePunjabi: "ਗਣਿਤ ਕਲਾਸ 8",
      description: "Interactive math lessons covering algebra, geometry, and problem-solving",
      duration: "12 weeks",
      students: 200,
      difficulty: "Intermediate",
      category: "Mathematics",
      progress: 35,
      isOfflineAvailable: true,
      lessons: [
        { id: 1, title: "Introduction to Algebra", duration: "45 min", completed: true },
        { id: 2, title: "Linear Equations", duration: "50 min", completed: true },
        { id: 3, title: "Geometry Basics", duration: "40 min", completed: false },
        { id: 4, title: "Area and Perimeter", duration: "35 min", completed: false },
      ]
    },
    'science-experiments': {
      title: "Science Experiments",
      titleHindi: "विज्ञान प्रयोग",
      titlePunjabi: "ਸਾਇੰਸ ਪ੍ਰਯੋਗ",
      description: "Virtual lab experiments and interactive science concepts",
      duration: "8 weeks",
      students: 120,
      difficulty: "Intermediate",
      category: "Science",
      progress: 0,
      isOfflineAvailable: false,
      lessons: [
        { id: 1, title: "States of Matter", duration: "35 min", completed: false },
        { id: 2, title: "Chemical Reactions", duration: "40 min", completed: false },
        { id: 3, title: "Physics - Motion", duration: "45 min", completed: false },
        { id: 4, title: "Biology - Plants", duration: "30 min", completed: false },
      ]
    },
    'english-communication': {
      title: "English Communication",
      titleHindi: "अंग्रेजी संवाद",
      titlePunjabi: "ਅੰਗਰੇਜ਼ੀ ਸੰਵਾਦ",
      description: "Improve spoken English skills through interactive exercises",
      duration: "10 weeks",
      students: 180,
      difficulty: "Beginner",
      category: "Language",
      progress: 60,
      isOfflineAvailable: true,
      lessons: [
        { id: 1, title: "Basic Greetings", duration: "25 min", completed: true },
        { id: 2, title: "Daily Conversations", duration: "30 min", completed: true },
        { id: 3, title: "Grammar Basics", duration: "35 min", completed: true },
        { id: 4, title: "Pronunciation Practice", duration: "40 min", completed: false },
      ]
    }
  };

  const course = courses[courseId as keyof typeof courses];

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 max-w-md mx-auto text-center">
          <CardHeader>
            <CardTitle>Course Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">The course you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const difficultyColors = {
    Beginner: "bg-success/10 text-success border-success/20",
    Intermediate: "bg-warning/10 text-warning-foreground border-warning/20",
    Advanced: "bg-destructive/10 text-destructive border-destructive/20"
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Button>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Badge className="mb-4">{course.category}</Badge>
              <h1 className="text-3xl font-bold text-foreground mb-2">{course.title}</h1>
              {course.titleHindi && (
                <p className="text-lg text-muted-foreground mb-1">{course.titleHindi}</p>
              )}
              {course.titlePunjabi && (
                <p className="text-lg text-muted-foreground mb-4">{course.titlePunjabi}</p>
              )}
              <p className="text-muted-foreground text-lg">{course.description}</p>
            </div>
            
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <span className="text-sm font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.students}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge className={difficultyColors[course.difficulty as keyof typeof difficultyColors]}>
                    {course.difficulty}
                  </Badge>
                  {course.isOfflineAvailable && (
                    <div className="flex items-center space-x-1 text-success text-sm">
                      <Download className="h-4 w-4" />
                      <span>Offline</span>
                    </div>
                  )}
                </div>
                
                <Button className="w-full gradient-primary text-white">
                  {course.progress > 0 ? "Continue Learning" : "Start Course"}
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Course Content */}
        <Tabs defaultValue="lessons" className="space-y-6">
          <TabsList>
            <TabsTrigger value="lessons">Lessons</TabsTrigger>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="lessons" className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Course Lessons</h2>
            <div className="space-y-3">
              {course.lessons.map((lesson, index) => (
                <Card key={lesson.id} className="p-4 hover:shadow-card smooth-transition">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {lesson.completed ? (
                        <CheckCircle2 className="h-6 w-6 text-success" />
                      ) : (
                        <Play className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{lesson.title}</h3>
                      <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                    </div>
                    <Button variant={lesson.completed ? "secondary" : "default"} size="sm">
                      {lesson.completed ? "Review" : "Start"}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="overview">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Course Overview</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  This course is designed to provide students with essential skills and knowledge. 
                  Each lesson includes interactive content, practical exercises, and assessments.
                </p>
                <h3 className="text-lg font-medium text-foreground">What you'll learn:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Fundamental concepts and practical applications</li>
                  <li>Interactive exercises and real-world examples</li>
                  <li>Progressive learning with hands-on practice</li>
                  <li>Assessment and progress tracking</li>
                </ul>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="resources">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Additional Resources</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Download these resources to enhance your learning experience:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">Course Handbook (PDF)</h4>
                      <p className="text-sm text-muted-foreground">Complete reference guide</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">Practice Exercises</h4>
                      <p className="text-sm text-muted-foreground">Additional worksheets</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseDetail;