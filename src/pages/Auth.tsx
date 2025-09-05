import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({ name: "", email: "", password: "", role: "student" });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication with Supabase
    console.log("Login:", loginForm);
    
    // Mock login - redirect based on mock user role
    if (loginForm.email.includes("teacher")) {
      navigate("/teacher-dashboard");
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
                      <GraduationCap className="h-4 w-4 mr-1" />
                      Student
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setLoginForm({ email: "teacher@demo.com", password: "demo123" });
                        setTimeout(() => navigate("/teacher-dashboard"), 100);
                      }}
                    >
                      <Users className="h-4 w-4 mr-1" />
                      Teacher
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
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        variant={signupForm.role === "student" ? "default" : "outline"}
                        onClick={() => setSignupForm({ ...signupForm, role: "student" })}
                        className="h-12"
                      >
                        <GraduationCap className="h-4 w-4 mr-2" />
                        Student
                      </Button>
                      <Button
                        type="button"
                        variant={signupForm.role === "teacher" ? "default" : "outline"}
                        onClick={() => setSignupForm({ ...signupForm, role: "teacher" })}
                        className="h-12"
                      >
                        <Users className="h-4 w-4 mr-2" />
                        Teacher
                      </Button>
                    </div>
                  </div>

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