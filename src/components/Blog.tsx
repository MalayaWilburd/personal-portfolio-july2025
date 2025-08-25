import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Data Analysis",
      excerpt: "Exploring how artificial intelligence is revolutionizing data analysis workflows and emerging trends for 2025.",
      image: " ",
      date: "2024-12-15",
      readTime: "5 min read",
      category: "AI & Machine Learning"
    },
    {
      title: "Building Scalable React Applications",
      excerpt: "A comprehensive guide to structuring React applications for scalability, maintainability, and optimal performance.",
      image: " ",
      date: "2024-12-10", 
      readTime: "8 min read",
      category: "Web Development"
    },
    {
      title: "Essential Python Libraries for Data Scientists",
      excerpt: "A curated list of must-know Python libraries that every data scientist should master for effective data analysis.",
      image: "",
      date: "2024-11-20",
      readTime: "10 min read", 
      category: "Programming"
    },
    {
      title: "Understanding Neural Networks: A Beginner's Guide",
      excerpt: "Demystifying neural network concepts and exploring real-world applications that are transforming technology.",
      image: "",
      date: "2024-11-15",
      readTime: "9 min read",
      category: "Machine Learning"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and experiences from my journey in AI, data science, and software development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6"></div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-glow">
                    Read More
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;