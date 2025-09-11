import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Building, Home, Users, BookOpen, BarChart3, GraduationCap, Award, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SchoolDashboard = () => {
  const navigate = useNavigate();

  const schoolStats = {
    totalStudents: 245,
    totalTeachers: 18,
    activeClasses: 12,
    coursesOffered: 6,
    averageProgress: 72,
    monthlyGrowth: 15
  };

  const classPerformance = [
    { class: "Grade 8A", students: 25, avgProgress: 85, teacher: "Mrs. Kaur", performance: "excellent" },
    { class: "Grade 8B", students: 23, avgProgress: 78, teacher: "Mr. Singh", performance: "good" },
    { class: "Grade 7A", students: 28, avgProgress: 65, teacher: "Ms. Sharma", performance: "average" },
    { class: "Grade 7B", students: 26, avgProgress: 58, teacher: "Mr. Kumar", performance: "needs-improvement" },
    { class: "Grade 6A", students: 30, avgProgress: 82, teacher: "Mrs. Gupta", performance: "excellent" },
    { class: "Grade 6B", students: 29, avgProgress: 70, teacher: "Ms. Arora", performance: "good" }
  ];

  const topPerformers = [
    { name: "Priya Singh", class: "Grade 8A", progress: 95, courses: 4 },
    { name: "Arjun Kumar", class: "Grade 7A", progress: 92, courses: 3 },
    { name: "Simran Kaur", class: "Grade 8B", progress: 90, courses: 4 },
    { name: "Rohit Sharma", class: "Grade 6A", progress: 88, courses: 3 },
    { name: "Ananya Gupta", class: "Grade 7B", progress: 85, courses: 3 }
  ];

  const teacherStats = [
    { name: "Mrs. Kaur", subject: "Mathematics", students: 48, avgProgress: 82, rating: "excellent" },
    { name: "Mr. Singh", subject: "Science", students: 51, avgProgress: 79, rating: "good" },
    { name: "Ms. Sharma", subject: "English", students: 54, avgProgress: 75, rating: "good" },
    { name: "Mr. Kumar", subject: "Digital Literacy", students: 42, avgProgress: 68, rating: "average" }
  ];

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'excellent': return 'border-success text-success';
      case 'good': return 'border-primary text-primary';
      case 'average': return 'border-warning text-warning';
      case 'needs-improvement': return 'border-destructive text-destructive';
      default: return 'border-muted-foreground text-muted-foreground';
    }
  };

  const getPerformanceBadge = (performance: string) => {
    return <Badge variant="outline" className={getPerformanceColor(performance)}>{performance}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="gradient-primary p-3 rounded-lg">
              <Building className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">School Dashboard</h1>
              <p className="text-muted-foreground">Govt. Senior Secondary School, Nabha</p>
            </div>
          </div>
          <Button variant="outline" onClick={() => navigate("/")} className="border-primary text-primary">
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{schoolStats.totalStudents}</p>
              <p className="text-xs text-muted-foreground">Total Students</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <GraduationCap className="h-8 w-8 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{schoolStats.totalTeachers}</p>
              <p className="text-xs text-muted-foreground">Teachers</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{schoolStats.activeClasses}</p>
              <p className="text-xs text-muted-foreground">Active Classes</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 text-warning mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{schoolStats.coursesOffered}</p>
              <p className="text-xs text-muted-foreground">Courses</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <BarChart3 className="h-8 w-8 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{schoolStats.averageProgress}%</p>
              <p className="text-xs text-muted-foreground">Avg Progress</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">+{schoolStats.monthlyGrowth}%</p>
              <p className="text-xs text-muted-foreground">This Month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <Tabs defaultValue="classes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
            <TabsTrigger value="students">Top Students</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="classes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Class Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {classPerformance.map((classData, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="font-semibold text-foreground">{classData.class}</h3>
                            <p className="text-sm text-muted-foreground">
                              {classData.students} students • {classData.teacher}
                            </p>
                          </div>
                          {getPerformanceBadge(classData.performance)}
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-foreground">{classData.avgProgress}%</p>
                          <p className="text-xs text-muted-foreground">Average Progress</p>
                        </div>
                      </div>
                      <Progress value={classData.avgProgress} className="w-full" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teachers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Teacher Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teacherStats.map((teacher, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                            {teacher.name.split(' ')[0][0]}{teacher.name.split(' ')[1][0]}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{teacher.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {teacher.subject} • {teacher.students} students
                            </p>
                          </div>
                          {getPerformanceBadge(teacher.rating)}
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-foreground">{teacher.avgProgress}%</p>
                          <p className="text-xs text-muted-foreground">Student Progress</p>
                        </div>
                      </div>
                      <Progress value={teacher.avgProgress} className="w-full" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topPerformers.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-success rounded-full flex items-center justify-center text-white font-bold text-sm">
                          #{index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{student.name}</h4>
                          <p className="text-sm text-muted-foreground">{student.class}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">{student.progress}%</p>
                        <p className="text-xs text-muted-foreground">{student.courses} courses</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Active Students</span>
                      <span className="font-semibold text-foreground">92%</span>
                    </div>
                    <Progress value={92} className="w-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Course Completion</span>
                      <span className="font-semibold text-foreground">68%</span>
                    </div>
                    <Progress value={68} className="w-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Assignment Submission</span>
                      <span className="font-semibold text-foreground">85%</span>
                    </div>
                    <Progress value={85} className="w-full" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subject Popularity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Mathematics</span>
                      <span className="font-semibold text-foreground">95%</span>
                    </div>
                    <Progress value={95} className="w-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Digital Literacy</span>
                      <span className="font-semibold text-foreground">88%</span>
                    </div>
                    <Progress value={88} className="w-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Science</span>
                      <span className="font-semibold text-foreground">82%</span>
                    </div>
                    <Progress value={82} className="w-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">English</span>
                      <span className="font-semibold text-foreground">75%</span>
                    </div>
                    <Progress value={75} className="w-full" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SchoolDashboard;