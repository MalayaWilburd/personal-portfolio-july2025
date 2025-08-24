import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Star } from "lucide-react";

const Research = () => {
  const research = [
    {
      title: "Coming soon",
      description: "",
      image: "/ai-research.jpg",
      areas: [""],
      conference: "",
      publicationUrl: "#",
      paperUrl: "#",
      featured: true
    },
    {
      title: "Coming soon",
      description: "",
      image: "",
      areas: [""],
      conference: "",
      publicationUrl: "#",
      paperUrl: "#",
      featured: false
    }
  ];

  const featuredResearch = research.filter(item => item.featured);
  const otherResearch = research.filter(item => !item.featured);

  return (
    <section id="research" className="py-20 bg-surface-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">
              Research & <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Publications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up delay-1">
              Exploring cutting-edge technologies and contributing to the advancement of AI and data science
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6 fade-in-up delay-2"></div>
          </div>

          {/* Featured Research */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12">
              {featuredResearch.map((item, index) => (
                <div 
                  key={index} 
                  className={`group relative overflow-hidden rounded-2xl shadow-large hover:shadow-2xl transition-slow fade-in-up delay-${index + 1}`}
                >
                  {/* Research Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
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

                    {/* Research Links */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                      <a 
                        href={item.paperUrl}
                        className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        <FileText className="h-4 w-4" />
                      </a>
                      <a 
                        href={item.publicationUrl}
                        className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Research Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="mb-2">
                      <span className="text-sm font-medium text-white/80">{item.conference}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    {/* Research Areas */}
                    <div className="flex flex-wrap gap-2">
                      {item.areas.slice(0, 3).map((area, areaIndex) => (
                        <span 
                          key={areaIndex}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                        >
                          {area}
                        </span>
                      ))}
                      {item.areas.length > 3 && (
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                          +{item.areas.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Research */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 fade-in-up">
              Additional <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Research</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {otherResearch.map((item, index) => (
                <div 
                  key={index} 
                  className={`project-card group fade-in-up delay-${index + 1}`}
                >
                  {/* Research Image */}
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Research Content */}
                  <div>
                    <div className="mb-2">
                      <span className="text-sm font-medium text-muted-foreground">{item.conference}</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Research Areas */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.areas.slice(0, 3).map((area, areaIndex) => (
                        <span 
                          key={areaIndex}
                          className="skill-badge text-xs"
                        >
                          {area}
                        </span>
                      ))}
                    </div>

                    {/* Research Links */}
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={item.paperUrl}>
                          <FileText className="h-4 w-4 mr-2" />
                          Paper
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={item.publicationUrl}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Publication
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <div className="text-center mt-16 fade-in-up delay-3">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-medium">
              <h3 className="text-2xl font-bold mb-4">Research Interests</h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                My research focuses on the intersection of artificial intelligence, data science, and practical applications. 
                I'm particularly interested in developing AI systems that can understand and process natural language, 
                analyze large-scale datasets, and provide intelligent automation solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Machine Learning", "Natural Language Processing", "Data Science", "AI Systems", "Computer Vision", "Research Automation"].map((interest, index) => (
                  <span key={index} className="skill-badge">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
