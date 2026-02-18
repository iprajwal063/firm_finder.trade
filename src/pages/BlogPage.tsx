import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-dark-400 text-lg mb-12">Coming soon - Trading tips, firm reviews, and market insights</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'How to Choose a Prop Firm', date: 'Coming Soon' },
              { title: 'Prop Trading vs Retail', date: 'Coming Soon' },
              { title: 'Top Trading Rules', date: 'Coming Soon' },
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass-effect p-6 rounded-lg hover:bg-dark-900/30 transition-smooth"
              >
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-dark-500 text-sm">{post.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
