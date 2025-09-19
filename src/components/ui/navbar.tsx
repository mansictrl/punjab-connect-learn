import { Button } from "@/components/ui/button";
import { BookOpen, Menu, Globe, Wifi, WifiOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [language, setLanguage] = useState("en");
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-card/95 backdrop-blur-sm border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <div className="gradient-primary p-2 rounded-xl shadow-soft">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">NabhaLearn</h1>
            <p className="text-xs text-muted-foreground">Digital Shiksha</p>
          </div>
        </div>

        {/* Navigation Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Courses
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Progress
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Teachers
          </Button>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-3">
          {/* Authentication Section */}
          {user ? (
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground hidden sm:inline">
                {profile?.full_name || user.email}
              </span>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  switch (profile?.role) {
                    case 'student':
                      navigate('/student-dashboard');
                      break;
                    case 'teacher':
                      navigate('/teacher-dashboard');
                      break;
                    case 'parent':
                      navigate('/parent-dashboard');
                      break;
                    case 'school_admin':
                      navigate('/school-dashboard');
                      break;
                    case 'punjab_dept':
                      navigate('/punjab-dashboard');
                      break;
                    default:
                      navigate('/student-dashboard');
                  }
                }}
                className="text-xs"
              >
                Dashboard
              </Button>
              <Button variant="ghost" size="sm" onClick={signOut} className="text-xs">
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth">Login</Link>
              </Button>
            </div>
          )}

          {/* Online/Offline Indicator */}
          <div className="flex items-center space-x-1 text-xs">
            {isOnline ? (
              <Wifi className="h-4 w-4 text-success" />
            ) : (
              <WifiOff className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="hidden sm:inline text-muted-foreground">
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>

          {/* Language Switcher */}
          <Button variant="outline" size="sm" className="text-xs">
            <Globe className="h-3 w-3 mr-1" />
            {language === "en" ? "EN" : language === "hi" ? "हिं" : "ਪੰ"}
          </Button>

          {/* Mobile Menu */}
          <Button variant="outline" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;