import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function DisclaimerPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold mb-8">Disclaimer</h1>
          
          <div className="space-y-6 text-dark-300">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4">General Disclaimer</h2>
              <p>FirmFinder is an informational directory platform. We are not affiliated with any trading firms and do not provide financial or investment advice.</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">Trading Risks</h2>
              <p>Proprietary trading involves significant financial risks. Past performance is not indicative of future results. Always conduct your own due diligence before applying to any firm.</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Information Accuracy</h2>
              <p>While we strive to provide accurate information, FirmFinder does not guarantee the accuracy of firm details and encourage users to verify information directly with firms.</p>
            </motion.section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
