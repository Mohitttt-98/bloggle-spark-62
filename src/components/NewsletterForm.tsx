
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";
import { z } from "zod";
import emailjs from "emailjs-com";
import { Alert, AlertDescription } from "./ui/alert";
import { Loader2 } from "lucide-react";

const emailSchema = z.string().email("Please enter a valid email address");

// Configuration for EmailJS - replace these with your actual values
// You'll need to sign up at emailjs.com and get these values
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace this
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace this
const EMAILJS_USER_ID = "YOUR_USER_ID"; // Replace this

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [setupNeeded, setSetupNeeded] = useState(true);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if EmailJS is properly configured
    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_USER_ID === "YOUR_USER_ID"
    ) {
      setSetupNeeded(true);
      toast({
        title: "Setup needed",
        description: "Please configure EmailJS before using this feature.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }
    
    try {
      // Validate email
      emailSchema.parse(email);
      
      setIsSubmitting(true);
      
      // Prepare template parameters
      const templateParams = {
        to_email: email,
        subscription_date: new Date().toLocaleString(),
        website_name: "Molesting Tech",
        from_name: "Molesting Tech Newsletter"
      };

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      // Success toast
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter. You'll receive updates about new posts.",
        duration: 5000,
      });
      
      // Store subscriber in localStorage
      const subscribers = JSON.parse(localStorage.getItem("newsletter_subscribers") || "[]");
      subscribers.push({
        email,
        date: new Date().toISOString()
      });
      localStorage.setItem("newsletter_subscribers", JSON.stringify(subscribers));
      
      // Reset form
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid email",
          description: error.errors[0].message,
          variant: "destructive",
          duration: 5000,
        });
      } else {
        console.error("Subscription error:", error);
        toast({
          title: "Subscription failed",
          description: "Please try again later.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full max-w-md"
    >
      {setupNeeded && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>
            To enable email delivery, you need to sign up at <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="underline">EmailJS</a> and replace the placeholder values in NewsletterForm.tsx with your actual EmailJS credentials.
          </AlertDescription>
        </Alert>
      )}
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/20"
          required
          aria-label="Email address"
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default NewsletterForm;
