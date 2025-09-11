import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/HeroSection";
import LearningCard from "@/components/LearningCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, BarChart3, Download, Globe, Smartphone, Award } from "lucide-react";

const Index = () => {
  const courses = [
    {
      title: "Digital Basics",
      titleHindi: "डिजिटल बेसिक्स",
      titlePunjabi: "ਡਿਜੀਟਲ ਬੇਸਿਕਸ",
      description: "Learn fundamental computer skills, internet safety, and basic digital literacy",
      duration: "4 weeks",
      students: 150,
      difficulty: "Beginner" as const,
      category: "Digital Literacy",
      progress: 0,
      isOfflineAvailable: true,
      onStart: () => window.location.href = "/digital-literacy"
    },
    {
      title: "Mathematics Grade 8",
      titleHindi: "गणित कक्षा 8",
      titlePunjabi: "ਗਣਿਤ ਕਲਾਸ 8",
      description: "Interactive math lessons covering algebra, geometry, and problem-solving",
      duration: "12 weeks",
      students: 200,
      difficulty: "Intermediate" as const,
      category: "Mathematics",
      progress: 35,
      isOfflineAvailable: true,
      onStart: () => window.location.href = "/course/math-grade-8"
    },
    {
      title: "Science Experiments",
      titleHindi: "विज्ञान प्रयोग",
      titlePunjabi: "ਸਾਇੰਸ ਪ੍ਰਯੋਗ",
      description: "Virtual lab experiments and interactive science concepts",
      duration: "8 weeks",
      students: 120,
      difficulty: "Intermediate" as const,
      category: "Science",
      progress: 0,
      isOfflineAvailable: false,
      onStart: () => window.location.href = "/course/science-experiments"
    },
    {
      title: "English Communication",
      titleHindi: "अंग्रेजी संवाद",
      titlePunjabi: "ਅੰਗਰੇਜ਼ੀ ਸੰਵਾਦ",
      description: "Improve spoken English skills through interactive exercises",
      duration: "10 weeks",
      students: 180,
      difficulty: "Beginner" as const,
      category: "Language",
      progress: 60,
      isOfflineAvailable: true,
      onStart: () => window.location.href = "/course/english-communication"
    },
    {
      title: "Typing Practice",
      titleHindi: "टाइपिंग अभ्यास",
      titlePunjabi: "ਟਾਈਪਿੰਗ ਅਭਿਆਸ",
      description: "Master keyboard typing skills with interactive exercises and speed tests",
      duration: "6 weeks",
      students: 95,
      difficulty: "Beginner" as const,
      category: "Digital Skills",
      progress: 0,
      isOfflineAvailable: true,
      onStart: () => window.location.href = "/typing-practice"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Courses Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Available Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interactive lessons designed for rural students with multilingual support and offline capability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <LearningCard key={index} {...course} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <BookOpen className="h-5 w-5 mr-2" />
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Rural Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Addressing the unique challenges of digital education in government schools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-card hover:shadow-glow smooth-transition">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Offline Learning</h3>
              <p className="text-muted-foreground">
                Download lessons and continue learning even without internet connectivity. 
                Perfect for areas with unreliable network coverage.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-glow smooth-transition">
              <div className="w-16 h-16 gradient-learning rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Multi-Language</h3>
              <p className="text-muted-foreground">
                Content available in Punjabi, Hindi, and English to ensure every 
                student can learn in their preferred language.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-glow smooth-transition">
              <div className="w-16 h-16 gradient-success rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Mobile Optimized</h3>
              <p className="text-muted-foreground">
                Designed to work smoothly on basic smartphones and tablets, 
                making digital education accessible to all students.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-glow smooth-transition">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Teachers can monitor student progress, identify learning gaps, 
                and provide personalized support where needed.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-glow smooth-transition">
              <div className="w-16 h-16 gradient-learning rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Teacher Support</h3>
              <p className="text-muted-foreground">
                Comprehensive dashboard for teachers to manage classes, 
                assign lessons, and track overall classroom performance.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-glow smooth-transition">
              <div className="w-16 h-16 gradient-success rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Digital Literacy</h3>
              <p className="text-muted-foreground">
                Special modules to build essential digital skills, preparing 
                students for the modern world and future opportunities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Rural Education?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students and teachers already using NabhaLearn to bridge 
            the digital divide in rural Punjab
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-8"
              onClick={() => window.location.href = "/auth"}
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Start as Student
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8"
              onClick={() => window.location.href = "/auth"}
            >
              <Users className="h-5 w-5 mr-2" />
              Teacher Registration
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="gradient-primary p-2 rounded-lg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-lg text-foreground">NabhaLearn</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Empowering rural education through accessible digital learning solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">For Students</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Browse Courses</li>
                <li>Digital Literacy</li>
                <li>Offline Learning</li>
                <li>Progress Reports</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">For Teachers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Dashboard</li>
                <li>Class Management</li>
                <li>Student Analytics</li>
                <li>Lesson Plans</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Technical Support</li>
                <li>Training Videos</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 NabhaLearn. Built for Punjab Education Department.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;