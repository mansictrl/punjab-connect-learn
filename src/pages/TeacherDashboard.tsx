import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Users, BookOpen, TrendingUp, Calendar, Plus, Eye, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const classes = [
    {
      id: 1,
      name: "Class 8A - Mathematics",
      students: 35,
      activeStudents: 28,
      avgProgress: 72,
      assignments: 3
    },
    {
      id: 2,
      name: "Class 7B - Digital Literacy",
      students: 32,
      activeStudents: 30,
      avgProgress: 85,
      assignments: 2
    },
    {
      id: 3,
      name: "Class 9A - English",
      students: 40,
      activeStudents: 35,
      avgProgress: 68,
      assignments: 4
    }
  ];

  const recentActivity = [
    { student: "Rajesh Kumar", action: "Completed Math Assignment 3", course: "Mathematics", time: "2 hours ago" },
    { student: "Priya Singh", action: "Started Digital Basics Module", course: "Digital Literacy", time: "4 hours ago" },
    { student: "Harpreet Kaur", action: "Submitted English Essay", course: "English", time: "6 hours ago" },
    { student: "Amit Sharma", action: "Achieved 95% in Science Quiz", course: "Science", time: "1 day ago" }
  ];

  const upcomingDeadlines = [
    { assignment: "Math Problem Set 4", class: "Class 8A", dueDate: "Tomorrow", submitted: 15, total: 35 },
    { assignment: "Digital Safety Quiz", class: "Class 7B", dueDate: "In 2 days", submitted: 20, total: 32 },
    { assignment: "English Presentation", class: "Class 9A", dueDate: "Next week", submitted: 8, total: 40 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Teacher Dashboard</h1>
              <p className="text-muted-foreground">Manage your classes and track student progress</p>
            </div>
            <div className="flex space-x-3">
              <Button onClick={() => navigate("/")} variant="outline">
                <BookOpen className="h-4 w-4 mr-2" />
                Course Library
              </Button>
              <Button className="gradient-primary text-white">
                <Plus className="h-4 w-4 mr-2" />
                Create Assignment
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">107</p>
                <p className="text-sm text-muted-foreground">Total Students</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Active Classes</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">75%</p>
                <p className="text-sm text-muted-foreground">Avg. Progress</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">9</p>
                <p className="text-sm text-muted-foreground">Assignments Due</p>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="classes" className="space-y-6">
          <TabsList>
            <TabsTrigger value="classes">My Classes</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
          </TabsList>

          <TabsContent value="classes" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {classes.map((classItem) => (
                <Card key={classItem.id} className="hover:shadow-card smooth-transition">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{classItem.name}</CardTitle>
                      <Badge variant="outline">{classItem.students} students</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Active Students</p>
                        <p className="font-semibold text-foreground">{classItem.activeStudents}/{classItem.students}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Pending Assignments</p>
                        <p className="font-semibold text-foreground">{classItem.assignments}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Average Progress</span>
                        <span className="text-sm font-medium">{classItem.avgProgress}%</span>
                      </div>
                      <Progress value={classItem.avgProgress} className="h-2" />
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Settings className="h-4 w-4 mr-1" />
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Student Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{activity.student}</p>
                        <p className="text-sm text-muted-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.course}</p>
                      </div>
                      <Badge variant="outline">{activity.time}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Upcoming Deadlines</CardTitle>
                  <Button size="sm" className="gradient-primary text-white">
                    <Plus className="h-4 w-4 mr-1" />
                    New Assignment
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{deadline.assignment}</h3>
                          <p className="text-sm text-muted-foreground">{deadline.class}</p>
                        </div>
                        <Badge variant={deadline.dueDate === "Tomorrow" ? "destructive" : "outline"}>
                          {deadline.dueDate}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Submissions</span>
                          <span className="text-sm font-medium">{deadline.submitted}/{deadline.total}</span>
                        </div>
                        <Progress value={(deadline.submitted / deadline.total) * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeacherDashboard;