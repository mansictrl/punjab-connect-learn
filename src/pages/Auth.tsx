import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, GraduationCap, Building, Shield, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({ 
    name: "", 
    email: "", 
    password: "", 
    role: "student",
    organization: "",
    schoolCode: ""
  });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication with Supabase
    console.log("Login:", loginForm);
    
    // Mock login - redirect based on mock user role
    if (loginForm.email.includes("teacher")) {
      navigate("/teacher-dashboard");
    } else if (loginForm.email.includes("parent")) {
      navigate("/parent-dashboard");
    } else if (loginForm.email.includes("school")) {
      navigate("/school-dashboard");  
    } else if (loginForm.email.includes("punjab") || loginForm.email.includes("dept")) {
      navigate("/punjab-dashboard");
    } else {
      navigate("/student-dashboard");
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication with Supabase
    console.log("Signup:", signupForm);
    
    // Mock signup - redirect based on selected role
    if (signupForm.role === "teacher") {
      navigate("/teacher-dashboard");
    } else if (signupForm.role === "parent") {
      navigate("/parent-dashboard");
    } else if (signupForm.role === "school") {
      navigate("/school-dashboard");
    } else if (signupForm.role === "punjab-dept") {
      navigate("/punjab-dashboard");
    } else {
      navigate("/student-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="gradient-primary p-3 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-foreground">NabhaLearn</span>
          </div>
          <p className="text-muted-foreground">
            Access your digital learning platform
          </p>
        </div>

        <Tabs defaultValue="login" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-primary text-white">
                    Login
                  </Button>
                </form>

                {/* Demo Login Buttons */}
                <div className="mt-6 space-y-2">
                  <p className="text-sm text-muted-foreground text-center">Demo Access:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setLoginForm({ email: "student@demo.com", password: "demo123" });
                        setTimeout(() => navigate("/student-dashboard"), 100);
                      }}
                    >
                      <GraduationCap className="h-3 w-3 mr-1" />
                      <span className="text-xs">Student</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setLoginForm({ email: "teacher@demo.com", password: "demo123" });
                        setTimeout(() => navigate("/teacher-dashboard"), 100);
                      }}
                    >
                      <Users className="h-3 w-3 mr-1" />
                      <span className="text-xs">Teacher</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setLoginForm({ email: "parent@demo.com", password: "demo123" });
                        setTimeout(() => navigate("/parent-dashboard"), 100);
                      }}
                    >
                      <Heart className="h-3 w-3 mr-1" />
                      <span className="text-xs">Parent</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setLoginForm({ email: "school@demo.com", password: "demo123" });
                        setTimeout(() => navigate("/school-dashboard"), 100);
                      }}
                    >
                      <Building className="h-3 w-3 mr-1" />
                      <span className="text-xs">School</span>
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setLoginForm({ email: "punjab-dept@demo.com", password: "demo123" });
                        setTimeout(() => navigate("/punjab-dashboard"), 100);
                      }}
                    >
                      <Shield className="h-3 w-3 mr-1" />
                      <span className="text-xs">Punjab Ed Dept</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={signupForm.name}
                      onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={signupForm.email}
                      onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      value={signupForm.password}
                      onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>I am a:</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        type="button"
                        variant={signupForm.role === "student" ? "default" : "outline"}
                        onClick={() => setSignupForm({ ...signupForm, role: "student" })}
                        className="h-11 text-xs"
                      >
                        <GraduationCap className="h-3 w-3 mr-1" />
                        Student
                      </Button>
                      <Button
                        type="button"
                        variant={signupForm.role === "teacher" ? "default" : "outline"}
                        onClick={() => setSignupForm({ ...signupForm, role: "teacher" })}
                        className="h-11 text-xs"
                      >
                        <Users className="h-3 w-3 mr-1" />
                        Teacher
                      </Button>
                      <Button
                        type="button"
                        variant={signupForm.role === "parent" ? "default" : "outline"}
                        onClick={() => setSignupForm({ ...signupForm, role: "parent" })}
                        className="h-11 text-xs"
                      >
                        <Heart className="h-3 w-3 mr-1" />
                        Parent
                      </Button>
                      <Button
                        type="button"
                        variant={signupForm.role === "school" ? "default" : "outline"}
                        onClick={() => setSignupForm({ ...signupForm, role: "school" })}
                        className="h-11 text-xs"
                      >
                        <Building className="h-3 w-3 mr-1" />
                        School Admin
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <Button
                        type="button"
                        variant={signupForm.role === "punjab-dept" ? "default" : "outline"}
                        onClick={() => setSignupForm({ ...signupForm, role: "punjab-dept" })}
                        className="h-11 text-xs"
                      >
                        <Shield className="h-3 w-3 mr-1" />
                        Punjab Education Department
                      </Button>
                    </div>
                  </div>

                  {/* Additional Fields for Specific Roles */}
                  {(signupForm.role === "school" || signupForm.role === "teacher") && (
                    <div className="space-y-2">
                      <Label htmlFor="school-code">School Code</Label>
                      <Input
                        id="school-code"
                        type="text"
                        placeholder="Enter your school code"
                        value={signupForm.schoolCode}
                        onChange={(e) => setSignupForm({ ...signupForm, schoolCode: e.target.value })}
                      />
                    </div>
                  )}

                  {signupForm.role === "punjab-dept" && (
                    <div className="space-y-2">
                      <Label htmlFor="organization">Department/Organization</Label>
                      <Input
                        id="organization"
                        type="text"
                        placeholder="e.g., Punjab Education Department"
                        value={signupForm.organization}
                        onChange={(e) => setSignupForm({ ...signupForm, organization: e.target.value })}
                      />
                    </div>
                  )}

                  <Button type="submit" className="w-full gradient-primary text-white">
                    Create Account
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-6">
          <Button variant="ghost" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;