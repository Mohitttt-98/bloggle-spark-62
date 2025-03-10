
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-7xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to Home
          </Link>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
