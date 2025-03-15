import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
import NewsletterForm from "../components/NewsletterForm";
import { blogPosts, blogCategories, searchPosts } from "../lib/blogData";
const Index = () => {
  const navigate = useNavigate();
  // Get only the latest 3 posts for the home page
  const latestPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
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
      const filteredLatest = results.filter(post => latestPosts.some(latest => latest.id === post.id));
      setFilteredPosts(filteredLatest);
    }
  };
  const handleCardClick = (postId: string) => {
    navigate(`/blog/${postId}`);
  };
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const heroVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  const heroItemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container px-4 md:px-8">
          <motion.div variants={heroVariants} initial="hidden" animate="visible" className="mx-auto max-w-3xl text-center">
            <motion.h1 variants={heroItemVariants} className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <motion.span className="block" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }}>Just a Molester</motion.span>
              <motion.span className="block" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }}>in Tech</motion.span>
            </motion.h1>
            <motion.p variants={heroItemVariants} className="mt-6 text-lg text-muted-foreground">Welcome to Molester's Tech, where we molest tech, not people. Oh wait! Nor animals or any living organism (dead people included).</motion.p>
            <motion.div variants={heroItemVariants} className="mt-8">
              <motion.button onClick={() => navigate('/blog')} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                View All Posts
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Latest Blog Posts Grid */}
        <section className="container mt-16 px-4 md:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Latest Articles
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our newest content, hot off the press
            </p>
          </motion.div>
          
          <motion.div variants={container} initial="hidden" animate={isLoading ? "hidden" : "show"} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.length > 0 ? filteredPosts.map(post => <BlogCard key={post.id} id={post.id} title={post.title} excerpt={post.excerpt} date={post.date} category={post.category} coverImage={post.coverImage} onClick={() => handleCardClick(post.id)} />) : <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium text-foreground">No posts found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>}
          </motion.div>
        </section>

        {/* Featured Section */}
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7
      }} viewport={{
        once: true,
        margin: "-100px"
      }} className="container mt-24 px-4 md:px-8">
          <motion.div whileHover={{
          scale: 1.02
        }} transition={{
          duration: 0.3
        }} className="rounded-3xl bg-secondary/50 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <motion.h2 initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }} className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Join our newsletter
              </motion.h2>
              <motion.p initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="mt-4 text-muted-foreground">
                Get notified when we publish new content. We promise not to spam your inbox.
              </motion.p>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="mt-6 flex items-center justify-center">
                <NewsletterForm />
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>;
};
export default Index;