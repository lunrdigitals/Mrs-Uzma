import { AnimateOnScroll } from "./AnimateOnScroll";
import { Mail, Linkedin, Building2, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. I will respond shortly.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-academic-cream">
      <div className="section-container">
        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Get in Touch
            </p>
            <h2 className="heading-secondary mb-4">Contact</h2>
            <p className="text-body max-w-2xl mx-auto">
              For academic collaborations, mentorship opportunities, or professional inquiries, 
              please reach out through the form below or connect via professional networks.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <AnimateOnScroll animation="slide-in-left">
            <div className="space-y-6">
              <h3 className="heading-tertiary mb-6">Connect With Me</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:uzma.academic@email.com"
                  className="card-academic flex items-center gap-4 hover:-translate-y-0.5 transition-transform"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">uzma.academic@email.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-academic flex items-center gap-4 hover:-translate-y-0.5 transition-transform"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium text-foreground">linkedin.com/in/uzma</p>
                  </div>
                </a>

                <div className="card-academic flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Institution</p>
                    <p className="font-medium text-foreground">Academic Institution Profile</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll animation="slide-in-right" delay={200}>
            <form onSubmit={handleSubmit} className="card-academic">
              <h3 className="heading-tertiary mb-6">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Reason for contact"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
