
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
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
          <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="mt-8 text-xl font-semibold">1. Introduction</h2>
            <p>
              At Minimalist, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you 
              visit our website or subscribe to our newsletter.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">2. Information We Collect</h2>
            <p>
              We collect email addresses when you subscribe to our newsletter. 
              We may also collect anonymous usage data through cookies and similar technologies 
              to improve our website and services.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">3. How We Use Your Information</h2>
            <p>We use your email address to:</p>
            <ul className="list-disc pl-6">
              <li>Send you our newsletter with blog updates and relevant content</li>
              <li>Respond to your inquiries or requests</li>
              <li>Improve our website and newsletter content</li>
            </ul>
            
            <h2 className="mt-6 text-xl font-semibold">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the Internet is 100% secure, and we cannot 
              guarantee absolute security.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Unsubscribe from our newsletter at any time</li>
              <li>Request access to your personal data</li>
              <li>Request correction or deletion of your personal data</li>
            </ul>
            
            <h2 className="mt-6 text-xl font-semibold">6. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>
            
            <h2 className="mt-6 text-xl font-semibold">7. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at 
              privacy@minimalist.com.
            </p>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
