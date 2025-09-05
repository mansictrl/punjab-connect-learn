import { Button } from "@/components/ui/button";
import { BookOpen, Menu, Globe, Wifi, WifiOff } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [language, setLanguage] = useState("en");

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