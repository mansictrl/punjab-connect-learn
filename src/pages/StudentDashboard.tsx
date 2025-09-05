import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Trophy, Target, Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const enrolledCourses = [
    {
      id: 'math-grade-8',
      title: "Mathematics Grade 8",
      progress: 65,
      nextLesson: "Geometry Basics",
      dueDate: "Tomorrow"
    },
    {
      id: 'english-communication',
      title: "English Communication",
      progress: 40,
      nextLesson: "Grammar Fundamentals",
      dueDate: "In 2 days"
    },
    {
      id: 'digital-basics',
      title: "Digital Basics",
      progress: 80,
      nextLesson: "Internet Safety",
      dueDate: "Next week"
    }
  ];

  const recentAchievements = [
    { title: "First Course Completed", description: "Completed Digital Basics course", date: "2 days ago" },
    { title: "Quick Learner", description: "Completed 5 lessons in one day", date: "1 week ago" },
    { title: "Perfect Score", description: "100% on Math Quiz 3", date: "1 week ago" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, Student!</h1>
              <p className="text-muted-foreground">Continue your learning journey</p>
            </div>
            <Button onClick={() => navigate("/")} variant="outline">
              Browse Courses
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Active Courses</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <Clock className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">45h</p>
                <p className="text-sm text-muted-foreground">Learning Time</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <Trophy className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Achievements</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">85%</p>
                <p className="text-sm text-muted-foreground">Avg. Score</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* My Courses */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>My Courses</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="p-4 border border-border rounded-lg hover:shadow-card smooth-transition">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-foreground">{course.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {course.dueDate}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Next lesson:</p>
                          <p className="text-sm font-medium text-foreground">{course.nextLesson}</p>
                        </div>
                        <Button 
                          size="sm" 
                          onClick={() => navigate(`/course/${course.id}`)}
                          className="gradient-primary text-white"
                        >
                          Continue
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Achievements */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="p-3 bg-card border border-border rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="p-1 bg-warning/10 rounded-full">
                        <Trophy className="h-4 w-4 text-warning" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground text-sm">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => navigate("/")}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse All Courses
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => navigate("/profile")}
                >
                  <Target className="h-4 w-4 mr-2" />
                  View Progress Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;