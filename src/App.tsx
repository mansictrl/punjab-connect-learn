import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { AuthGuard } from "@/components/AuthGuard";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CourseDetail from "./pages/CourseDetail";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import SchoolDashboard from "./pages/SchoolDashboard";
import PunjabDashboard from "./pages/PunjabDashboard";
import TypingPractice from "./pages/TypingPractice";
import DigitalLiteracy from "./pages/DigitalLiteracy";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route 
              path="/student-dashboard" 
              element={
                <AuthGuard requiredRole="student">
                  <StudentDashboard />
                </AuthGuard>
              } 
            />
            <Route 
              path="/teacher-dashboard" 
              element={
                <AuthGuard requiredRole="teacher">
                  <TeacherDashboard />
                </AuthGuard>
              } 
            />
            <Route 
              path="/parent-dashboard" 
              element={
                <AuthGuard requiredRole="parent">
                  <ParentDashboard />
                </AuthGuard>
              } 
            />
            <Route 
              path="/school-dashboard" 
              element={
                <AuthGuard requiredRole="school_admin">
                  <SchoolDashboard />
                </AuthGuard>
              } 
            />
            <Route 
              path="/punjab-dashboard" 
              element={
                <AuthGuard requiredRole="punjab_dept">
                  <PunjabDashboard />
                </AuthGuard>
              } 
            />
            <Route 
              path="/typing-practice" 
              element={
                <AuthGuard>
                  <TypingPractice />
                </AuthGuard>
              } 
            />
            <Route 
              path="/digital-literacy" 
              element={
                <AuthGuard>
                  <DigitalLiteracy />
                </AuthGuard>
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
