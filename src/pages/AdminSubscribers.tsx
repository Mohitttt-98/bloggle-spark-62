
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { useToast } from "../hooks/use-toast";

type Subscriber = {
  email: string;
  date: string;
};

const AdminSubscribers = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Load subscribers from localStorage
    const storedSubscribers = JSON.parse(localStorage.getItem("newsletter_subscribers") || "[]");
    setSubscribers(storedSubscribers);
  }, []);

  const handleExport = () => {
    // Create CSV content
    const csvContent = 
      "data:text/csv;charset=utf-8," + 
      "Email,Subscription Date\n" + 
      subscribers.map(s => `${s.email},${new Date(s.date).toLocaleString()}`).join("\n");
    
    // Create download link
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "newsletter_subscribers.csv");
    document.body.appendChild(link);
    
    // Trigger download
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Export successful",
      description: `Exported ${subscribers.length} subscribers to CSV`,
    });
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all subscribers? This cannot be undone.")) {
      localStorage.removeItem("newsletter_subscribers");
      setSubscribers([]);
      toast({
        title: "Subscribers cleared",
        description: "All subscribers have been removed",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container px-4 pt-28 pb-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground">Newsletter Subscribers</h1>
          
          <div className="mb-6 flex gap-4">
            <Button onClick={handleExport} disabled={subscribers.length === 0}>
              Export to CSV
            </Button>
            <Button variant="destructive" onClick={handleClearAll} disabled={subscribers.length === 0}>
              Clear All
            </Button>
          </div>
          
          {subscribers.length > 0 ? (
            <div className="rounded-lg border border-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Email</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Date Subscribed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((subscriber, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="px-4 py-3 text-sm text-foreground">{subscriber.email}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">
                          {new Date(subscriber.date).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-border p-8 text-center">
              <p className="text-muted-foreground">No subscribers yet</p>
            </div>
          )}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminSubscribers;
