
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string;
  onClick?: () => void;  // Make onClick optional
}

const BlogCard = ({ id, title, excerpt, date, category, coverImage, onClick }: BlogCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover-scale"
    >
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img 
          src={coverImage} 
          alt={title} 
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105" 
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-2 p-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-1 text-muted-foreground line-clamp-2">
          {excerpt}
        </p>
        
        <Link 
          to={`/blog/${id}`} 
          className="mt-4 inline-flex items-center text-sm font-medium text-foreground group-hover:text-primary"
          onClick={onClick}
        >
          Read more 
          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
