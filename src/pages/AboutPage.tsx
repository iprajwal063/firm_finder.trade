import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold mb-8">About FirmFinder</h1>
          
          <div className="space-y-6 text-dark-300 text-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              FirmFinder is a comprehensive directory and comparison platform for proprietary trading firms. We help traders discover, evaluate, and choose the right prop firm for their trading style and goals.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Our mission is to provide transparent, accurate information about proprietary trading firms, enabling traders to make informed decisions about their funding journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-2">
                <li>✓ Transparency in all information</li>
                <li>✓ Unbiased firm comparisons</li>
                <li>✓ Real trader feedback</li>
                <li>✓ Educational resources</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
