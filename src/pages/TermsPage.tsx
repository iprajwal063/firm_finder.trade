import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function TermsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-dark-300">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p>By using FirmFinder, you agree to these terms and conditions. If you do not agree, please do not use our service.</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials on FirmFinder for personal, non-commercial viewing only.</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
              <p>FirmFinder is an informational platform and does not provide financial or investment advice.</p>
            </motion.section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
