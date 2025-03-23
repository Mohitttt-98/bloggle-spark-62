import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const TermsOfService = () => {
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
          <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}</p>
            
            <h2 className="mt-8 text-xl font-semibold">1. Acceptance of Terms</h2>
            <p>By being here, you agree to whatever nonsense we slap on this page. Don’t like it? Then leave. Not our problem.</p>
            
            <h2 className="mt-6 text-xl font-semibold">2. Use of Content</h2>
            <p>Some of the content is ours. Some of it belongs to random people on the internet. We steal. You steal. It’s the circle of life. Just don’t be annoying about it.</p>
            
            <h2 className="mt-6 text-xl font-semibold">3. User Conduct</h2>
            <p>When using this site, don’t:</p>
            <ul className="list-disc pl-6">
              <li>Break any laws (or at least don’t get caught).</li>
              <li>Annoy us or other people (or do, we’re not your parents).</li>
              <li>Post garbage (but if you must, make it entertaining).</li>
              <li>Try hacking us (seriously, go touch grass).</li>
            </ul>
            
            <h2 className="mt-6 text-xl font-semibold">4. Newsletter Subscription</h2>
            <p>Sign up, get emails, probably ignore them. That’s the deal. Want out? Hit unsubscribe like a normal human.</p>
            
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
    </div>;
};
export default TermsOfService;