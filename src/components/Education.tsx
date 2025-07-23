import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      type: "degree",
      institution: "Arkansas Tech University",
      degree: "Bachelor of Science in Computer Science",
      duration: "August 2022 - May 2026",
      gpa: "3.97/4.0",
      description: "",
      courses: ["Algorithm Design & Analysis", "Data Structures", "Artificial Intelligence", 
      "Software Engineering", "Advanced Operating Systems", "Web Development", 
      "Database Design & Implementation", "Programming in Python", "Calculus I & II", "Linear Algebra",
      "Applied Statistics"]
    },
    {
      type: "degree",
      institution: "Arkansas Tech University",
      degree: "Associate of Applied Science Information Technology",
      duration: "August 2022 - December 2024",
      gpa: "4.0/4.0",
      description: "",
      courses: ["Networking", "Programming I & II", "Computer Hardware & Architecture", "Cybersecurity", 
      "Computer Organization/Programming"]
    },
    {
      type: "degree",
      institution: "Arkansas Tech University",
      degree: "Associate of Arts General Education",
      duration: "August 2022 - May 2025",
      gpa: "3.97/4.0",
      description: "",
      courses: ["Finance", "Mathematics", "Government", "Composition I & II", "Science"]
    }
  ];

  const certifications = [
    {
      name: "Crash Course on Python",
      issuer: "Google",
      date: "July 2025",
      status: "Active",
      description: ""
    },
    {
      name: "Certificate of Competency Building LLM Applications with Prompt Engineering",
      issuer: "NVIDIA",
      date: "June 2025",
      status: "Active", 
      description: ""
    },
    {
      name: "Certificated of Proficiency in Mathematics",
      issuer: "Arkansas Tech University",
      date: "May 2025",
      status: "Active",
      description: ""
    },
    {
      name: "Certificate of Proficiency in Computer Programming",
      issuer: "Arkansas Tech University",
      date: "May 2024",
      status: "Active",
      description: ""
    }
  ];

  return (
    <section id="education" className="py-20 bg-surface border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My Academic Journey and Professional Certifications that Shape My Expertise
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="fade-in-up bg-card/50 border-border/50 hover:border-primary/30 transition-smooth hover:shadow-glow group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                      {edu.degree}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {edu.gpa}
                    </Badge>
                  </div>
                  <CardDescription className="text-lg font-medium text-primary">
                    {edu.institution}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-foreground">Key Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <Badge 
                          key={courseIndex} 
                          variant="outline" 
                          className="text-xs bg-surface-alt/50 border-border/50 hover:border-primary/30 transition-smooth"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="fade-in-up bg-card/50 border-border/50 hover:border-primary/30 transition-smooth hover:shadow-glow group"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                      {cert.name}
                    </CardTitle>
                    <Badge 
                      variant={cert.status === "Active" ? "default" : "secondary"}
                      className="bg-green-500/10 text-green-400 border-green-500/20"
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <CardDescription className="font-medium text-primary">
                    {cert.issuer}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-3 w-3" />
                    <span>{cert.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;