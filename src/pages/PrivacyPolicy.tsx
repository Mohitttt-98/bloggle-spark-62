import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const PrivacyPolicy = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container px-4 py-16 md:px-8 md:py-24">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}</p>
            
            <h2 className="mt-8 text-xl font-semibold">1. Introduction</h2>
            <p>Welcome to Molester’s Tech. This is the part where we pretend to care about your privacy. If you're reading this, congratulations—you’re one of the few people on the internet who actually reads privacy policies. We collect some data. We use it. That’s about it.</p>
            
            <h2 className="mt-6 text-xl font-semibold">2. Information We Collect</h2>
            <p>Some anonymous data gets collected through cookies because, well, every website does that. Don’t worry, we don’t care enough to stalk you.</p>
            
            <h2 className="mt-6 text-xl font-semibold">3. How We Use Your Information</h2>
            <p>Honestly, we just:</p>
            <ul className="list-disc pl-6">
              <li>Send you emails you’ll probably ignore.</li>
              <li>Occasionally responding to your complaints (if we feel like it).</li>
              <li>Pretend to "improve" the website when we feel productive (rarely).</li>
            </ul>
            
            <h2 className="mt-6 text-xl font-semibold">4. Data Security</h2>
            <p>We try to keep your data safe, but let’s be honest—no internet transmission is 100% secure. So if the aliens, hackers, or government decide to take a peek, we assume they have bigger problems than this blog.</p>
            
            <h2 className="mt-6 text-xl font-semibold">5. Your Rights (Yeah, You Have Some)</h2>
            
            <ul className="list-disc pl-6">
              <li>You can unsubscribe whenever (but that’s your loss, buddy).</li>
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
    </div>;
};
export default PrivacyPolicy;