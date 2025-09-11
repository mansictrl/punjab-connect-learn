import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Shield, Home, Building, Users, BookOpen, BarChart3, MapPin, TrendingUp, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PunjabDashboard = () => {
  const navigate = useNavigate();

  const stateStats = {
    totalSchools: 18500,
    totalStudents: 2850000,
    totalTeachers: 125000,
    activeSchools: 15200,
    digitalAdoption: 68,
    stateRanking: 3
  };

  const districtPerformance = [
    { district: "Ludhiana", schools: 1250, students: 185000, adoption: 78, performance: "excellent" },
    { district: "Amritsar", schools: 1100, students: 162000, adoption: 72, performance: "good" },
    { district: "Jalandhar", schools: 980, students: 148000, adoption: 69, performance: "good" },
    { district: "Patiala", schools: 850, students: 125000, adoption: 65, performance: "average" },
    { district: "Bathinda", schools: 720, students: 98000, adoption: 58, performance: "needs-improvement" },
    { district: "Mohali", schools: 650, students: 95000, adoption: 75, performance: "good" }
  ];

  const keyInitiatives = [
    { 
      name: "Digital Punjab Mission",
      progress: 82,
      target: "100% school digitization by 2025",
      status: "on-track"
    },
    {
      name: "Teacher Training Program", 
      progress: 65,
      target: "Train 50,000 teachers in digital literacy",
      status: "on-track"
    },
    {
      name: "Rural Connectivity Project",
      progress: 45,
      target: "Internet access to 5000 rural schools",
      status: "behind"
    },
    {
      name: "Smart Classroom Initiative",
      progress: 38,
      target: "10,000 smart classrooms installation",
      status: "behind"
    }
  ];

  const monthlyStats = [
    { metric: "New Student Enrollments", value: "12,500", change: "+8%" },
    { metric: "Teacher Certifications", value: "1,200", change: "+15%" },
    { metric: "Course Completions", value: "8,500", change: "+22%" },
    { metric: "School Activations", value: "45", change: "+5%" }
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track': return 'border-success text-success';
      case 'behind': return 'border-warning text-warning';
      case 'critical': return 'border-destructive text-destructive';
      default: return 'border-muted-foreground text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="gradient-primary p-3 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Punjab Education Department</h1>
              <p className="text-muted-foreground">Digital Education Analytics & Management</p>
            </div>
          </div>
          <Button variant="outline" onClick={() => navigate("/")} className="border-primary text-primary">
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
        </div>

        {/* State-wide Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Building className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-xl font-bold text-foreground">{stateStats.totalSchools.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Total Schools</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-success mx-auto mb-2" />
              <p className="text-xl font-bold text-foreground">{(stateStats.totalStudents / 1000000).toFixed(1)}M</p>
              <p className="text-xs text-muted-foreground">Students</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 text-accent mx-auto mb-2" />
              <p className="text-xl font-bold text-foreground">{(stateStats.totalTeachers / 1000).toFixed(0)}K</p>
              <p className="text-xs text-muted-foreground">Teachers</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-warning mx-auto mb-2" />
              <p className="text-xl font-bold text-foreground">{stateStats.activeSchools.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Active Schools</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <BarChart3 className="h-8 w-8 text-success mx-auto mb-2" />
              <p className="text-xl font-bold text-foreground">{stateStats.digitalAdoption}%</p>
              <p className="text-xs text-muted-foreground">Digital Adoption</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-xl font-bold text-foreground">#{stateStats.stateRanking}</p>
              <p className="text-xs text-muted-foreground">National Rank</p>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>This Month's Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {monthlyStats.map((stat, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.metric}</p>
                  <Badge variant="outline" className="border-success text-success mt-2">
                    {stat.change} vs last month
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard */}
        <Tabs defaultValue="districts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="districts">Districts</TabsTrigger>
            <TabsTrigger value="initiatives">Key Initiatives</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="districts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>District-wise Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {districtPerformance.map((district, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-4">
                          <MapPin className="h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-semibold text-foreground">{district.district}</h3>
                            <p className="text-sm text-muted-foreground">
                              {district.schools.toLocaleString()} schools • {(district.students / 1000).toFixed(0)}K students
                            </p>
                          </div>
                          <Badge variant="outline" className={getPerformanceColor(district.performance)}>
                            {district.performance}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-foreground">{district.adoption}%</p>
                          <p className="text-xs text-muted-foreground">Digital Adoption</p>
                        </div>
                      </div>
                      <Progress value={district.adoption} className="w-full" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="initiatives" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Government Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyInitiatives.map((initiative, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{initiative.name}</h3>
                          <p className="text-sm text-muted-foreground">{initiative.target}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className={getStatusColor(initiative.status)}>
                            {initiative.status}
                          </Badge>
                          <p className="text-lg font-semibold text-foreground mt-1">{initiative.progress}%</p>
                        </div>
                      </div>
                      <Progress value={initiative.progress} className="w-full" />
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
                  <CardTitle>Quarterly Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Student Enrollment</span>
                      <span className="font-semibold text-success">+12%</span>
                    </div>
                    <Progress value={75} className="w-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Digital Course Adoption</span>
                      <span className="font-semibold text-success">+25%</span>
                    </div>
                    <Progress value={68} className="w-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Teacher Training</span>
                      <span className="font-semibold text-primary">+18%</span>
                    </div>
                    <Progress value={65} className="w-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Infrastructure Deployment</span>
                      <span className="font-semibold text-warning">+8%</span>
                    </div>
                    <Progress value={42} className="w-full" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Budget Utilization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Infrastructure (₹500 Cr)</span>
                      <span className="font-semibold text-foreground">72%</span>
                    </div>
                    <Progress value={72} className="w-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Training Programs (₹150 Cr)</span>
                      <span className="font-semibold text-foreground">84%</span>
                    </div>
                    <Progress value={84} className="w-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Content Development (₹80 Cr)</span>
                      <span className="font-semibold text-foreground">91%</span>
                    </div>
                    <Progress value={91} className="w-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Operations (₹200 Cr)</span>
                      <span className="font-semibold text-foreground">65%</span>
                    </div>
                    <Progress value={65} className="w-full" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generate Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-16 flex-col border-primary text-primary hover:bg-primary/10">
                    <BarChart3 className="h-6 w-6 mb-2" />
                    District Performance Report
                  </Button>
                  
                  <Button variant="outline" className="h-16 flex-col border-success text-success hover:bg-success/10">
                    <Users className="h-6 w-6 mb-2" />
                    Student Enrollment Report
                  </Button>
                  
                  <Button variant="outline" className="h-16 flex-col border-accent text-accent hover:bg-accent/10">
                    <BookOpen className="h-6 w-6 mb-2" />
                    Curriculum Progress Report
                  </Button>
                  
                  <Button variant="outline" className="h-16 flex-col border-warning text-warning hover:bg-warning/10">
                    <TrendingUp className="h-6 w-6 mb-2" />
                    Budget Utilization Report
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> All reports are generated based on real-time data from connected schools 
                    across Punjab. Reports include district-wise breakdowns, performance metrics, and budget tracking.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PunjabDashboard;