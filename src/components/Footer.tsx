import { Github, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="border-t border-border/50 bg-background py-12">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="flex flex-col items-center gap-1 md:items-start">
              <h3 className="text-xl font-bold tracking-tight">Molester's Tech</h3>
              <p className="text-sm text-muted-foreground">Molesting Tech, Everyday, Everywhere.</p>
            </motion.div>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
        
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {currentYear} Minimalist. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;