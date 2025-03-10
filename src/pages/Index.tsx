
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
import { blogPosts, blogCategories, searchPosts } from "../lib/blogData";

const Index = () => {
  const navigate = useNavigate();
  // Get only the latest 3 posts for the home page
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
    
  const [filteredPosts, setFilteredPosts] = useState(latestPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smoother animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredPosts(latestPosts);
    } else {
      const results = searchPosts(query);
      // Still limit to the latest posts that match the search query
      const filteredLatest = results
        .filter(post => latestPosts.some(latest => latest.id === post.id));
      setFilteredPosts(filteredLatest);
    }
  };

  const handleCardClick = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              <span className="block">Stories that inspire.</span>
              <span className="block">Ideas that matter.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Welcome to Minimalist, where thoughtful content meets beautiful design.
              Discover articles that challenge, inform, and inspire.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <button 
                onClick={() => navigate('/blog')}
                className="rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View All Posts
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Latest Blog Posts Grid */}
        <section className="container mt-16 px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Latest Articles
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our newest content, hot off the press
            </p>
          </div>
          
          <motion.div
            variants={container}
            initial="hidden"
            animate={isLoading ? "hidden" : "show"}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  category={post.category}
                  coverImage={post.coverImage}
                  onClick={() => handleCardClick(post.id)}
                />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <h3 className="text-xl font-medium text-foreground">No posts found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Featured Section */}
        <section className="container mt-24 px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-3xl bg-secondary/50 p-8 md:p-12"
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Join our newsletter
              </h2>
              <p className="mt-4 text-muted-foreground">
                Get notified when we publish new content. We promise not to spam your inbox.
              </p>
              <div className="mt-6 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <form className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/20"
                      required
                    />
                    <button
                      type="submit"
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
