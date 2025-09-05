import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Globe, Smartphone, Award, Download } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students learning with digital devices in rural Punjab" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Digital Education for
                <span className="gradient-primary bg-clip-text text-transparent"> Rural Punjab</span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground">
                  ਨਾਭਾ ਦੇ ਸਰਕਾਰੀ ਸਕੂਲਾਂ ਲਈ ਆਧੁਨਿਕ ਸਿੱਖਿਆ
                </p>
                <p className="text-lg text-muted-foreground">
                  नाभा के सरकारी स्कूलों के लिए आधुनिक शिक्षा
                </p>
              </div>
              
              <p className="text-xl text-foreground leading-relaxed">
                Offline-capable learning platform designed for low-connectivity areas. 
                Interactive lessons in local languages, digital literacy training, and 
                teacher progress tracking tools.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:shadow-glow smooth-transition px-8"
                onClick={() => window.location.href = "/auth"}
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Start Learning
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary/10 px-8"
                onClick={() => window.location.href = "/auth"}
              >
                <Users className="h-5 w-5 mr-2" />
                Teacher Dashboard
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span className="text-sm text-foreground">Offline Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm text-foreground">Multi-Language</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm text-foreground">Low Bandwidth</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-sm text-foreground">Rural Focused</span>
              </div>
            </div>
          </div>

          {/* Right Stats Cards */}
          <div className="lg:pl-8">
            <div className="grid gap-6">
              {/* Impact Stats */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border shadow-card">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Platform Impact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-xs text-muted-foreground">Students</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">25+</div>
                      <div className="text-xs text-muted-foreground">Teachers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">15+</div>
                      <div className="text-xs text-muted-foreground">Schools</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-warning">95%</div>
                      <div className="text-xs text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Feature Highlights */}
              <div className="space-y-4">
                <Card className="p-4 bg-card/80 backdrop-blur-sm border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                      <Smartphone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Mobile Optimized</h4>
                      <p className="text-xs text-muted-foreground">Works on basic smartphones</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-card/80 backdrop-blur-sm border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 gradient-learning rounded-lg flex items-center justify-center">
                      <Download className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Offline Learning</h4>
                      <p className="text-xs text-muted-foreground">Download lessons for offline use</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-card/80 backdrop-blur-sm border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 gradient-success rounded-lg flex items-center justify-center">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Local Languages</h4>
                      <p className="text-xs text-muted-foreground">Punjabi, Hindi & English</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;