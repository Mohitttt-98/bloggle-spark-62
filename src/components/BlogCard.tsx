
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
  onClick?: () => void;
}

const BlogCard = ({ id, title, excerpt, date, category, coverImage, onClick }: BlogCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 }
      }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card"
    >
      <div className="aspect-[16/9] w-full overflow-hidden">
        <motion.img 
          src={coverImage} 
          alt={title} 
          className="h-full w-full object-cover" 
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="flex flex-col gap-2 p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-xl font-semibold leading-tight tracking-tight text-foreground"
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="mt-1 text-muted-foreground line-clamp-2"
        >
          {excerpt}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <Link 
            to={`/blog/${id}`} 
            className="mt-4 inline-flex items-center text-sm font-medium text-foreground group-hover:text-primary"
            onClick={onClick}
          >
            Read more 
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="ml-1 h-4 w-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
