
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPostById, BlogPost as BlogPostType } from "../lib/blogData";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Simulate loading
      setIsLoading(true);
      setTimeout(() => {
        const foundPost = getPostById(id);
        if (foundPost) {
          setPost(foundPost);
        }
        setIsLoading(false);
      }, 500);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container flex items-center justify-center min-h-[70vh]">
          <div className="flex flex-col items-center gap-4">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
            <p className="text-muted-foreground">Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container flex flex-col items-center justify-center gap-4 min-h-[70vh] px-4 md:px-8">
          <h1 className="text-2xl font-bold text-foreground">Article not found</h1>
          <p className="text-muted-foreground">The article you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate("/")}
            className="mt-4 inline-flex items-center text-sm font-medium text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <article className="container px-4 md:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              onClick={() => navigate("/")}
              className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </button>
          </motion.div>
          
          {/* Article Header */}
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center gap-3">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-medium text-foreground">{post.author.name}</span>
              </div>
            </motion.div>
            
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12 aspect-[16/9] w-full overflow-hidden rounded-2xl"
            >
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="h-full w-full object-cover"
              />
            </motion.div>
            
            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg mx-auto max-w-3xl dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
