import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function NotFoundPage() {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-dark-950">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-3xl font-bold">Page Not Found</h2>
          <p className="text-dark-400 text-lg">The page you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-gradient-accent text-dark-950 font-bold rounded-lg hover:shadow-lg transition-smooth"
          >
            Go Home
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
}
