import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Heart, Home, User, BookOpen, BarChart3, Clock, Award, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ParentDashboard = () => {
  const navigate = useNavigate();
  const [selectedChild, setSelectedChild] = useState(0);

  const children = [
    {
      name: "Priya Singh",
      class: "Grade 8",
      school: "Govt. Senior Secondary School, Nabha",
      totalCourses: 4,
      completedCourses: 2,
      weeklyStudyTime: 12,
      recentActivity: "Completed Math Chapter 5",
      nextAssignment: "Science Quiz - Due Tomorrow"
    },
    {
      name: "Arjun Singh", 
      class: "Grade 6",
      school: "Govt. Primary School, Village Kheri",
      totalCourses: 3,
      completedCourses: 1,
      weeklyStudyTime: 8,
      recentActivity: "Started Digital Literacy Course",
      nextAssignment: "English Reading - Due in 3 days"
    }
  ];

  const currentChild = children[selectedChild];

  const recentProgress = [
    { subject: "Mathematics", progress: 85, lastStudied: "2 hours ago", status: "good" },
    { subject: "Digital Literacy", progress: 60, lastStudied: "1 day ago", status: "average" },
    { subject: "Science", progress: 40, lastStudied: "3 days ago", status: "needs-attention" },
    { subject: "English", progress: 75, lastStudied: "5 hours ago", status: "good" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-success';
      case 'average': return 'text-warning';
      case 'needs-attention': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'good': return <Badge variant="outline" className="border-success text-success">Good Progress</Badge>;
      case 'average': return <Badge variant="outline" className="border-warning text-warning">Needs Encouragement</Badge>;
      case 'needs-attention': return <Badge variant="outline" className="border-destructive text-destructive">Needs Attention</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="gradient-primary p-3 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Parent Dashboard</h1>
              <p className="text-muted-foreground">Monitor your children's learning progress</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications (2)
            </Button>
            <Button variant="outline" onClick={() => navigate("/")} className="border-primary text-primary">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </div>
        </div>

        {/* Child Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Child</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {children.map((child, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer border-2 transition-colors ${
                    selectedChild === index ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedChild(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                        {child.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{child.name}</h3>
                        <p className="text-sm text-muted-foreground">{child.class} • {child.school}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">{currentChild.totalCourses}</p>
                      <p className="text-sm text-muted-foreground">Total Courses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8 text-success" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">{currentChild.completedCourses}</p>
                      <p className="text-sm text-muted-foreground">Completed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-8 w-8 text-accent" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">{currentChild.weeklyStudyTime}h</p>
                      <p className="text-sm text-muted-foreground">This Week</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="h-8 w-8 text-warning" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">
                        {Math.round((currentChild.completedCourses / currentChild.totalCourses) * 100)}%
                      </p>
                      <p className="text-sm text-muted-foreground">Overall Progress</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity & Next Assignment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                    <div className="w-10 h-10 gradient-success rounded-full flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{currentChild.recentActivity}</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Next Assignment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                    <div className="w-10 h-10 bg-warning/20 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-warning" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{currentChild.nextAssignment}</p>
                      <Badge variant="outline" className="border-warning text-warning mt-1">Due Soon</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Subject-wise Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {recentProgress.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-medium text-foreground">{subject.subject}</h3>
                        {getStatusBadge(subject.status)}
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-foreground">{subject.progress}%</p>
                        <p className="text-xs text-muted-foreground">Last studied: {subject.lastStudied}</p>
                      </div>
                    </div>
                    <Progress value={subject.progress} className="w-full" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Assignments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-warning/20 bg-warning/5 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">Science Quiz - Light and Sound</h3>
                      <p className="text-sm text-muted-foreground">Chapter 12 Assessment</p>
                    </div>
                    <Badge variant="outline" className="border-warning text-warning">Due Tomorrow</Badge>
                  </div>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">English Reading Comprehension</h3>
                      <p className="text-sm text-muted-foreground">Story Analysis Exercise</p>
                    </div>
                    <Badge variant="outline">Due in 3 days</Badge>
                  </div>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">Math Problem Set</h3>
                      <p className="text-sm text-muted-foreground">Algebra Practice Problems</p>
                    </div>
                    <Badge variant="outline">Due in 5 days</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communication" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Teacher Messages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      T
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-foreground">Mrs. Kaur (Math Teacher)</h4>
                        <span className="text-xs text-muted-foreground">2 hours ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Priya is doing excellent work in algebra. She should practice word problems for better understanding.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-learning rounded-full flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-foreground">Mr. Singh (Science Teacher)</h4>
                        <span className="text-xs text-muted-foreground">1 day ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Please remind Priya to complete the light and sound experiment worksheet by tomorrow.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ParentDashboard;