import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function PrivacyPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-dark-300">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p>We collect information about your use of FirmFinder to improve our service and provide you with better recommendations.</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p>Your information is used solely to enhance your experience on our platform and provide you with relevant firm comparisons and recommendations.</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>For privacy concerns, contact us at privacy@firmfinder.com</p>
            </motion.section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
