import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  const validateForm = () => {
    const errors: {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    } = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setFieldErrors({});
    setSubmitStatus(null);
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Use your actual EmailJS credentials from .env
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_b0z3ow1';
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID; // Make sure this is your actual template ID
      const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'nnP_m_vhrzev9Vdh2';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Malaya', // Your name
      };

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        USER_ID
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "malayawilburd.dev@gmail.com",
      href: "mailto:malayawilburd.dev@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (501) 283-1498",
      href: "tel:+15012831498"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Little Rock, AR",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/MalayaWilburd", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/malaya-wilburd-751aa82ba", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 bg-surface border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">
              Get In <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up delay-1">
              Seeking opportunities to contribute to cutting-edge software and AI/ML projects. 
              Let's connect and explore how my expertise can make an impact.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6 fade-in-up delay-2"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="fade-in-up">
              <div className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-glow transition-smooth border border-border">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Send me a message
                </h3>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">Failed to send message. Please try again or contact me directly.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full ${fieldErrors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                        placeholder="Full Name"
                        disabled={isSubmitting}
                      />
                      {fieldErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full ${fieldErrors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                        placeholder="emailaddress@example.com"
                        disabled={isSubmitting}
                      />
                      {fieldErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full ${fieldErrors.subject ? 'border-red-500 focus:border-red-500' : ''}`}
                      placeholder="Opportunity Inquiry"
                      disabled={isSubmitting}
                    />
                    {fieldErrors.subject && (
                      <p className="text-red-500 text-sm mt-1">{fieldErrors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full min-h-[120px] ${fieldErrors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                      placeholder="Good morning, I would like to discuss..."
                      disabled={isSubmitting}
                    />
                    {fieldErrors.message && (
                      <p className="text-red-500 text-sm mt-1">{fieldErrors.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full btn-hero"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="fade-in-up delay-1">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">
                    Let's Connect!
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    I'm eager to connect about creative projects and innovative ideas, 
                    especially those at the intersection of AI, data, and robust software solutions. 
                    If you're seeking fresh perspectives to build impactful technology, 
                    let's explore how we can work together.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-glow transition-smooth group border border-border"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        <info.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{info.label}</div>
                        <div className="text-muted-foreground group-hover:text-primary transition-smooth">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Follow me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="p-3 bg-card rounded-lg shadow-soft hover:shadow-glow hover:bg-primary hover:text-primary-foreground transition-smooth border border-border"
                      >
                        <social.icon className="h-6 w-6" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="p-6 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-xl border border-primary/20 shadow-soft hover:shadow-glow transition-smooth">
                  <h4 className="font-semibold text-foreground mb-2">Availability</h4>
                  <p className="text-muted-foreground mb-3">
                    Currently available for new opportunities and collaborations.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-success">Available for hire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;