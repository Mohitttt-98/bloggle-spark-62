
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset submission status after delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-muted-foreground">
              Have a question or feedback? We'd love to hear from you.
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-12 max-w-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-transparent px-4 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-transparent px-4 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-transparent px-4 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-transparent px-4 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:pointer-events-none ${
                  isSubmitted ? "bg-green-600 hover:bg-green-600" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 rounded-2xl border border-border/50 bg-secondary/20"
          >
            <div className="grid gap-8 p-8 md:grid-cols-3 md:p-12">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-medium">Email</h3>
                <p className="mt-2 text-muted-foreground">contact@minimalist.com</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-medium">Location</h3>
                <p className="mt-2 text-muted-foreground">San Francisco, CA</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-medium">Follow Us</h3>
                <div className="mt-2 flex justify-center gap-4 md:justify-start">
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Twitter
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
