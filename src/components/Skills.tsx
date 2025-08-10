const Skills = () => {
  const skillCategories = [
       {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "Java", "C++", "Javascript", "SQL"]
    },
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      skills: ["LLMs", "Pandas", "NumPy", "Classifier Algorithms", "Predictive Modeling"]
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React.js", "Next.js", "Javascript", "TypeScript", "HTML5/CSS3"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Python", "Java", "API Integration", "Server-Side Logic"]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [ "SQL", "MySQL", "Supabase", "Database Design"]
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      skills: ["Git", "Docker", "Linux", "Vercel", "Jupyter Notebook", "VS Code", "Powershell"]
    },
    {
      title: "Other",
      icon: "💡",
      skills: ["Software Development Cycle", "Problem Solving", "Analytical Thinking", "Data Analysis"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">
              Technical <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up delay-1">
              A comprehensive toolkit for building modern, scalable applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6 fade-in-up delay-2"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`project-card group fade-in-up delay-${index + 1}`}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="skill-badge hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center fade-in-up delay-3">
            <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Always Learning
              </h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                As an aspiring Data Analyst with a keen interest in AI and Machine Learning, 
                I'm driven by the field's rapid advancements and committed to continuous learning. 
                I'm actively exploring new algorithms, models, and frameworks, applying them in personal projects,
                and constantly deepening my understanding of data science principles to build intelligent solutions
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Currently Learning: Python
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Next Up: Machine Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;