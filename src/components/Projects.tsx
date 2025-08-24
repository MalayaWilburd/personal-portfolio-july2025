import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Natural Gas Forecasting",
      description: "",
      image: "/natural-gas-forecasting.jpg",
      technologies: ["Python", "Pandas", "Numpy", "Scikit-Learn", "Matplotlib", "SciPy"],
      githubUrl: "https://github.com/MalayaWilburd/natural-gas-forecasting",
      liveUrl: "#",
      featured: true
    },
    {
      title: "AI Voice Assistant",
      description: "",
      image: "/ai-voice-assistant.png",
      technologies: ["Python", "LiveKit", "Google LLMs", "Tool Use"],
      githubUrl: "https://github.com/MalayaWilburd/nexa-voice-ai-assistant",
      liveUrl: "#",
      featured: false
    },
    {
      title: "S&P 500 Companies: Sector, Location, and Diversity Analysis",
      description: "",
      image: "/data-analysis.webp",
      technologies: ["Python", "Pandas", "Streamlit", "Matplotlib", "Seaborn", "Numpy"],
      githubUrl: "https://github.com/MalayaWilburd/sp500-companies-sector-location-diversity-analysis",
      liveUrl: "https://malayawilburd-sp500-companies-sector--sp500-analysis-app-yej2ih.streamlit.app/",
      featured: true
    },
    {
      title: "Rental Property Management System",
      description: "",
      image: "/rental-database.jpeg",
      technologies: ["SQL"],
      githubURL: "https://github.com/MalayaWilburd/Real-Estate-Management-System",
      liveUrl: "#",
      featured: false
    },
    {
      title: "NIST JARVIS Research Project",
      description: "",
      image: "/jarvis.png",
      technologies: ["Pandas"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Personal Portfolio Website (June 2025)",
      description: "",
      image: "/personalportfolio.png",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "Framer Motion", "Email API"],
      githubUrl: "https://github.com/MalayaWilburd/Personal-Portfolio-Website",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Interactive Adventure Game",
      description: "",
      image: "/leaves.jpg",
      technologies: ["C++"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Flappy Bird Clone",
      description: "",
      image: "/flappybird.png",
      technologies: ["C#", "Unity"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-surface-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">
              Featured <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up delay-1">
              A showcase of my best work, featuring modern technologies and innovative solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6 fade-in-up delay-2"></div>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12">
              {featuredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className={`group relative overflow-hidden rounded-2xl shadow-large hover:shadow-2xl transition-slow fade-in-up delay-${index + 1}`}
                >
                  {/* Project Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-slow"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        <Star className="h-3 w-3 fill-current" />
                        Featured
                      </span>
                    </div>

                    {/* Project Links */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                      <a 
                        href={project.githubUrl}
                        className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a 
                        href={project.liveUrl}
                        className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 fade-in-up">
              More <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Projects</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div 
                  key={index} 
                  className={`project-card group fade-in-up delay-${index + 1}`}
                >
                  {/* Project Image */}
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Project Content */}
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="skill-badge text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl}>
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.liveUrl}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View More */}
          <div className="text-center mt-16 fade-in-up delay-3">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              asChild
            >
              <a href="https://github.com/MalayaWilburd" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
        <div className="border-t border-border mx-auto mt-20"></div> {/* Divider */}
      </div>
    </section>
  );
};

export default Projects;