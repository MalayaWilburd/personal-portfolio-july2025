import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const heroImage = "/hero-image1.jpg";
const profilePicture = "/profile-picture1.png";

// Smooth typing animation component
const TypeAnimation = ({ sequence, speed = 100, repeat = true }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const texts = sequence.filter((item, index) => index % 2 === 0);
    const currentString = texts[currentIndex];
    
    if (isPaused) return;
    
    const getSpeed = () => {
      if (isDeleting) return speed / 3;
      return speed + Math.random() * 30 - 15;
    };
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (charIndex < currentString.length) {
          setDisplayText(currentString.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // finished typing, pause then start deleting
          setIsPaused(true);
          const pauseTime = currentIndex === 0 ? 2000 : 1500;
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // Deleting backward
        if (charIndex > 0) {
          setDisplayText(currentString.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // finished deleting, move to next word
          setDisplayText('');
          setIsDeleting(false);
          setIsPaused(true);
          
          setTimeout(() => {
            setCurrentIndex(repeat ? (currentIndex + 1) % texts.length : Math.min(currentIndex + 1, texts.length - 1));
            setCharIndex(0);
            setIsPaused(false);
          }, 300);
        }
      }
    }, getSpeed());

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, charIndex, isDeleting, isPaused, sequence, speed, repeat]);

  return (
    <span className="inline-block min-w-0">
      <span className="inline-block min-h-[1.2em]">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </span>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with hero image and overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Moon in space" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        <div className="absolute inset-0 gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-9xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Picture */}
            <div className="flex justify-center lg:justify-end fade-in-up">
              <div className="relative max-w-sm">
                {/* Profile Image */}
                <img 
                  src={profilePicture}
                  alt="Professional headshot" 
                  className="w-full h-full object-cover"
                />

                {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div> */}

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-dark rounded-full opacity-30"></div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-up delay-1">
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  <TypeAnimation 
                    sequence={[
                      "Malaya Wilburd",
                      1000,
                      "Aspiring Data Analyst",
                      1000,
                      "Web Developer",
                      1000,
                      "Passionate Learner",
                      1000,
                      "Problem Solver",
                      1000,
                      "Student",
                      1000
                    ]}
                    speed={100}
                    repeat={true}
                  />
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 fade-in-up delay-2">
                Innovating with Modern Tech: Crafting Data-Driven Solutions
              </h2>
              
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed fade-in-up delay-3">
                Passionate about leveraging data to drive insights and build impactful solutions. 
                I'm driven by the process of transforming complex data into clear, actionable intelligence, 
                with a strong focus on exceptional analytical rigor and performance. By leveraging AI and Machine Learning techniques, 
                I aim to uncover hidden patterns and create data-driven solutions that solve real-world problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 fade-in-up delay-3">
                <a href="#projects">
                  <Button className="btn-hero">
                  View My Work
                  </Button>
                </a>
                <a href="/MalayaWilburd2025.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                  Download Resume
                  </Button>
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 mb-12 fade-in-up delay-3">
                <a href="https://github.com/MalayaWilburd" className="p-3 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/malaya-wilburd-751aa82ba" className="p-3 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:malayawilburd.dev@gmail.com" className="p-3 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;