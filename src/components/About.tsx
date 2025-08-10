const About = () => {
  const stats = [
    { number: "Senior", label: "Year Standing" },
    { number: "10+", label: "Projects Completed" },
    { number: "15+", label: "Skills Acquired" },
    { number: "Continous", label: "Skill Development" },
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">
              About <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full fade-in-up delay-1"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="fade-in-up">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Aspiring Data Analyst | AI/ML & Data Enthusiast
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a Computer Science senior at Arkansas Tech University, I am a dedicated aspiring AI/Machine 
                  Learning Developer and Software Engineer driven by the ambition to create data-driven, impactful solutions. 
                  With a solid background in building scalable applications using modern technologies, 
                  I'm committed to engineering efficient systems that leverage cutting-edge AI/ML principles.
                </p>
                
                <p>
                  My journey in tech started with curiosity about how things work under the hood, 
                  and it has evolved into a career focused on crafting efficient, user-centric applications. 
                  I'm commited to writing clean, maintainable code and staying up-to-date with the latest 
                  industry trends and best practices.
                </p>
                
                <p>
                  In my continuous pursuit of growth, I'm committed to learning new technologies, 
                  deepening my understanding of systems, and building practical applications.
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-primary hover:text-primary-glow font-semibold transition-smooth"
                >
                  Let's work together →
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="fade-in-up delay-2">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-smooth"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-xl border border-primary/10">
                <h4 className="font-semibold text-foreground mb-3">Currently</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✨ Driving business impact with data analysis</p>
                  <p>🌐 Creating dashboards and reports for key insights</p>
                  <p>🤖 Building predictive models using machine learning</p>
                  <p>📈 Mastering modern data tools and platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;