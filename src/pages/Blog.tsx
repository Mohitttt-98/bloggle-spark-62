
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
import { blogPosts, blogCategories } from "../lib/blogData";

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    // Filter posts based on search term and category
    let results = blogPosts;
    
    if (searchTerm) {
      results = results.filter(
        post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (activeCategory) {
      results = results.filter(post => post.category === activeCategory);
    }
    
    setFilteredPosts(results);
  }, [searchTerm, activeCategory]);

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  const handleCardClick = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <section className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Our Blog
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Explore our complete collection of articles on design, technology, productivity, and more.
            </p>
          </motion.div>
          
          <div className="mt-12">
            <SearchBar 
              onSearch={handleSearch}
              categories={blogCategories}
            />
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                activeCategory === ""
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              onClick={() => setActiveCategory("")}
            >
              All
            </button>
            {blogCategories.map(category => (
              <button
                key={category}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
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
              <div className="col-span-full py-12 text-center">
                <h3 className="text-xl font-medium text-foreground">No articles found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("");
                  }}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/90"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
