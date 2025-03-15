
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container px-4 py-16 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="mt-8 text-xl font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Minimalist website and newsletter, you agree to be bound by these Terms of Service.
              If you do not agree to all these terms, you may not use our services.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">2. Use of Content</h2>
            <p>
              All content published on Minimalist, including articles, images, and graphics, is owned by us and 
              protected by copyright laws. You may not reproduce, distribute, or create derivative works without 
              our express permission.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">3. User Conduct</h2>
            <p>When using our website or interacting with our content, you agree not to:</p>
            <ul className="list-disc pl-6">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Post or transmit harmful content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
            
            <h2 className="mt-6 text-xl font-semibold">4. Newsletter Subscription</h2>
            <p>
              By subscribing to our newsletter, you consent to receive periodic emails from us. 
              We will handle your information in accordance with our Privacy Policy. 
              You may unsubscribe at any time by clicking the unsubscribe link in our emails.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">5. Disclaimer of Warranties</h2>
            <p>
              Our content is provided "as is" without warranties of any kind, either express or implied. 
              We do not guarantee the accuracy, completeness, or reliability of any content.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">6. Limitation of Liability</h2>
            <p>
              We will not be liable for any damages arising from the use of our website or newsletter, 
              including but not limited to direct, indirect, incidental, or consequential damages.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any 
              significant changes by posting the new terms on this page.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at 
              terms@minimalist.com.
            </p>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
