import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Check } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import CandlestickBackground from '../components/CandlestickBackground';
import { propFirms } from '../data/propFirms';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentOfferPage, setCurrentOfferPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('firms');

  const filteredFirms = useMemo(
    () =>
      propFirms.filter((firm) =>
        firm.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  const featuredFirms = propFirms.filter((f) => f.featured);
  const topFirms = [...propFirms].sort((a, b) => b.rating - a.rating).slice(0, 3);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredFirms.length / itemsPerPage);
  const currentOffers = filteredFirms.slice(
    currentOfferPage * itemsPerPage,
    (currentOfferPage + 1) * itemsPerPage
  );

  const categories = [
    { id: 'firms', label: 'Firms', count: propFirms.length },
    { id: 'challenges', label: 'Challenges', count: 1000 },
    { id: 'offers', label: 'Offers', count: propFirms.filter((f) => f.discount > 0).length },
    { id: 'reviews', label: 'Reviews', count: 9000 },
  ];

  const stats = [
    { value: '25+', label: 'Verified Firms' },
    { value: '$2.5B+', label: 'Total Funding' },
    { value: '$180M+', label: 'Paid to Traders' },
  ];

  const trustStats = [
    { value: '50+', label: 'Verified Firms' },
    { value: '1000+', label: 'Challenges' },
    { value: '9000+', label: 'Reviews' },
    { value: '4M+', label: 'Views' },
  ];

  return (
    <PageTransition>
      <div className="w-full">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <CandlestickBackground />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center space-y-8">
              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Find the
                  <span className="block bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                    Perfect Prop Firm
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto">
                  Compare 25+ proprietary trading firms, explore exclusive offers, and start your trading journey
                  with data-driven insights.
                </p>
              </motion.div>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
              >
                <input
                  type="text"
                  placeholder="Search firms by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-6 py-3 rounded-lg glass-effect text-dark-50 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-smooth"
                />
                <Link
                  to="/prop-firms"
                  className="px-8 py-3 rounded-lg bg-gradient-accent text-white font-semibold hover:shadow-lg hover:shadow-accent-500/50 transition-smooth flex items-center justify-center gap-2 group"
                >
                  Compare Firms
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-2"
              >
                {featuredFirms.slice(0, 5).map((firm) => (
                  <Link
                    key={firm.id}
                    to={`/prop-firms/${firm.slug}`}
                    className="px-4 py-2 rounded-full badge hover:bg-accent-500/20 transition-smooth text-sm"
                  >
                    {firm.name}
                  </Link>
                ))}
              </motion.div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-12"
              >
                {stats.map((stat, i) => (
                  <div key={i} className="glass-effect p-4 rounded-lg hover-glow transition-smooth">
                    <div className="text-2xl sm:text-3xl font-bold text-accent-400">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-dark-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Stats Bar */}
        <section className="glass-effect border-y border-accent-500/10 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trustStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-lg sm:text-2xl font-bold text-accent-400">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-dark-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusive Offers Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Exclusive Offers</h2>
              <p className="text-dark-400 text-lg">Limited-time discounts from top-rated prop firms</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Offers Carousel */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {currentOffers.map((firm) => (
                    <motion.div
                      key={firm.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="glass-effect p-6 rounded-lg card-hover group relative overflow-hidden flex flex-col"
                    >
                      {/* Glow Background */}
                      <div className="absolute inset-0 bg-accent-500/5 group-hover:bg-accent-500/10 transition-colors"></div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        
                        {/* Header */}
                        <div className="mb-4">
                          <div className="text-4xl mb-3">{firm.logo}</div>
                          <h3 className="text-lg font-bold mb-1">{firm.name}</h3>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-sm ${i < Math.floor(firm.rating) ? 'text-accent-400' : 'text-dark-600'}`}>★</span>
                              ))}
                            </div>
                            <span className="text-xs text-dark-500">({firm.reviewCount})</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-dark-400 mb-4 flex-grow">
                          {firm.description.substring(0, 60)}...
                        </p>

                        {/* Key Info */}
                        <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-y border-dark-700">
                          <div>
                            <span className="text-xs text-dark-500">Fee</span>
                            <div className="font-bold text-accent-400">${firm.startingFee}</div>
                          </div>
                          <div>
                            <span className="text-xs text-dark-500">Max Alloc</span>
                            <div className="font-bold text-accent-400">${(firm.maxAllocation / 1000).toFixed(0)}k</div>
                          </div>
                        </div>

                        {/* CTA Section */}
                        <div className="space-y-2 mt-auto">
                          {/* Discount Badge */}
                          {firm.discount > 0 && (
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              className="px-3 py-2 bg-accent-500/20 text-accent-400 rounded-lg text-center text-sm font-bold border border-accent-500/30 hover:bg-accent-500/30 transition-smooth cursor-pointer"
                            >
                              💰 {firm.discount}% LIMITED OFFER
                            </motion.div>
                          )}

                          {/* Get Funded Button */}
                          {firm.discount > 0 && (
                            <motion.button
                              onClick={() => {}}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 text-dark-950 font-bold hover:shadow-lg hover:shadow-accent-500/50 transition-all"
                            >
                              🚀 Get Funded
                            </motion.button>
                          )}

                          {/* View Details */}
                          <Link
                            to={`/prop-firms/${firm.slug}`}
                            className="w-full px-4 py-2 rounded-lg border border-accent-500/30 text-accent-400 font-semibold hover:bg-accent-500/10 transition-smooth text-center text-sm block"
                          >
                            View Details →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mt-8">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentOfferPage(i)}
                      className={`w-2 h-2 rounded-full transition-smooth ${
                        i === currentOfferPage ? 'bg-accent-500 w-8' : 'bg-dark-600'
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Most Popular Sidebar */}
              <div className="glass-effect p-6 rounded-lg h-fit sticky top-32">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent-400" />
                  Most Popular
                </h3>

                <div className="space-y-4">
                  {topFirms.map((firm, i) => (
                    <motion.div
                      key={firm.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 pb-4 border-b border-dark-700 last:border-0"
                    >
                      <div className="text-2xl">
                        {i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉'}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{firm.name}</div>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-accent-400 text-accent-400" />
                          <span className="text-xs text-dark-400">{firm.rating}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Browse by Category</h2>
            </motion.div>

            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition-smooth ${
                    selectedCategory === category.id
                      ? 'bg-accent-500 text-dark-950'
                      : 'glass-effect hover:bg-dark-900/50'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-sm opacity-75">{category.count}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect p-8 rounded-lg text-center"
            >
              <p className="text-dark-400 text-lg mb-6">
                Explore {selectedCategory === 'firms' ? '25+ prop firms' : `our ${selectedCategory}`}
              </p>
              <Link
                to="/prop-firms"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-dark-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-500/50 transition-smooth"
              >
                Start Exploring
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-24 glass-effect border-t border-accent-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-dark-400 text-lg max-w-2xl mx-auto">
                Get funded in 4 simple steps
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: 1, title: 'Browse', desc: 'Explore and compare 25+ prop firms' },
                { num: 2, title: 'Apply', desc: 'Choose your evaluation and apply' },
                { num: 3, title: 'Evaluate', desc: 'Pass the trading challenge' },
                { num: 4, title: 'Trade', desc: 'Get funded and start trading' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center text-xl font-bold text-dark-950 mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-dark-400 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose FirmFinder?</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Verified firm information',
                'Real trader reviews',
                'Exclusive discounts',
                'Side-by-side comparison',
                'Success stories',
                'Expert guides',
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 glass-effect p-4 rounded-lg"
                >
                  <Check className="w-6 h-6 text-accent-400 flex-shrink-0" />
                  <span className="font-semibold">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 glass-effect border-t border-accent-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Find Your Prop Firm?</h2>
              <p className="text-dark-300 text-lg mb-8">
                Start comparing firms today and get exclusive discounts
              </p>
              <Link
                to="/prop-firms"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-accent text-dark-950 font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-accent-500/50 transition-smooth group"
              >
                Explore All Firms
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
