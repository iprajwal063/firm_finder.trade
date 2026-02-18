import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Check, X, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { propFirms } from '../data/propFirms';

export default function PropFirmDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const firm = propFirms.find((f) => f.slug === slug);

  if (!firm) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Firm Not Found</h1>
            <p className="text-dark-400 mb-8">The firm you're looking for doesn't exist.</p>
            <Link to="/prop-firms" className="px-6 py-3 bg-accent-500 text-dark-950 font-semibold rounded-lg hover:shadow-lg transition-smooth">
              Back to Firms
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-950">
        {/* Hero */}
        <div className="glass-effect border-b border-accent-500/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-accent-400 hover:text-accent-300 mb-6 transition-smooth"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="text-6xl">{firm.logo}</div>
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">{firm.name}</h1>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(firm.rating) ? 'fill-accent-400 text-accent-400' : 'text-dark-600'}`}
                        />
                      ))}
                    </div>
                    <span className="text-dark-400">{firm.rating} ({firm.reviewCount} reviews)</span>
                  </div>
                  <span className="px-3 py-1 rounded-full badge">{firm.country} {firm.flag}</span>
                  <span className="px-3 py-1 rounded-full badge">Est. {firm.founded}</span>
                </div>
              </div>
              {firm.discount > 0 && (
                <div className="px-6 py-3 bg-accent-500 text-dark-950 rounded-lg font-bold text-lg text-center">
                  {firm.discount}% OFF
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-effect p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-dark-300 text-lg leading-relaxed">{firm.description}</p>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-effect p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-accent-400 mb-3">Evaluation Type</h3>
                    <p className="text-dark-300">{firm.evaluationType}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent-400 mb-3">Starting Fee</h3>
                    <p className="text-dark-300">${firm.startingFee}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent-400 mb-3">Account Sizes</h3>
                    <p className="text-dark-300">${firm.accountSizes.join(', $')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent-400 mb-3">Max Allocation</h3>
                    <p className="text-dark-300">${firm.maxAllocation.toLocaleString()}</p>
                  </div>
                </div>
              </motion.div>

              {/* Profit Split */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-effect p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-6">Profit Split</h2>
                <div className="space-y-4">
                  {firm.profitSplit.map((split, i) => (
                    <div key={i} className="flex items-center justify-between bg-dark-900/30 p-4 rounded-lg">
                      <span className="font-semibold">{split.phase}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 h-3 bg-dark-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-accent"
                            style={{ width: `${split.split}%` }}
                          />
                        </div>
                        <span className="text-lg font-bold text-accent-400 w-12 text-right">
                          {split.split}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Assets & Platforms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-effect p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-6">Available Assets & Platforms</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-accent-400 mb-3">Assets</h3>
                    <div className="flex flex-wrap gap-2">
                      {firm.assets.map((asset) => (
                        <span key={asset} className="px-3 py-1 rounded-full badge">
                          {asset}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent-400 mb-3">Platforms</h3>
                    <div className="flex flex-wrap gap-2">
                      {firm.platforms.map((platform) => (
                        <span key={platform} className="px-3 py-1 rounded-full badge">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Pros & Cons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-effect p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-6">Pros & Cons</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-green-400 mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {firm.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-dark-300">
                          <span className="text-green-400 mt-1">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-400 mb-4 flex items-center gap-2">
                      <X className="w-5 h-5" />
                      Cons
                    </h3>
                    <ul className="space-y-2">
                      {firm.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-dark-300">
                          <span className="text-red-400 mt-1">✗</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Interactive Premium CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="sticky top-24 space-y-4"
              >
                {/* Floating Card */}
                <div className="glass-effect rounded-lg p-6 border border-accent-500/20 hover:border-accent-500/50 transition-all duration-300">
                  
                  {/* Header with Icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center text-2xl">
                      🎯
                    </div>
                    <div>
                      <div className="text-sm text-dark-500">Ready to trade?</div>
                      <div className="text-lg font-bold">Get Funded Today</div>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="mb-6 p-4 bg-dark-900/50 rounded-lg">
                    <div className="text-sm text-dark-500 mb-1">Evaluation Fee</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">${firm.startingFee}</span>
                      {firm.discount > 0 && (
                        <span className="text-sm text-accent-400 font-semibold">Save {firm.discount}%</span>
                      )}
                    </div>
                  </div>

                  {/* Main CTA with Hover Effect */}
                  <motion.button
                    onClick={() => {}}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-600 text-dark-950 rounded-lg font-bold text-base hover:shadow-lg hover:shadow-accent-500/50 transition-all"
                  >
                    💳 Start Evaluation Now
                  </motion.button>

                  {/* Benefits Pills */}
                  <div className="mt-4 space-y-2">
                    {[
                      "📊 Instant Results",
                      "⚡ 24hr Funding",
                      "🎓 Free Training"
                    ].map((benefit, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2 text-sm text-dark-300 p-2 rounded hover:bg-dark-900/30 transition-smooth cursor-pointer"
                      >
                        <span className="text-lg">{benefit.split(' ')[0]}</span>
                        <span>{benefit.split(' ').slice(1).join(' ')}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* FAQ Accordion */}
                  <div className="mt-6 pt-6 border-t border-dark-700 space-y-2">
                    <details className="group cursor-pointer">
                      <summary className="flex items-center justify-between py-2 text-sm font-semibold hover:text-accent-400 transition-colors">
                        <span>What happens next?</span>
                        <span className="group-open:rotate-180 transition-transform">⌄</span>
                      </summary>
                      <p className="text-xs text-dark-400 mt-2 pl-2">
                        Complete the evaluation, prove your skills, and get funded within 24 hours.
                      </p>
                    </details>
                    
                    <details className="group cursor-pointer">
                      <summary className="flex items-center justify-between py-2 text-sm font-semibold hover:text-accent-400 transition-colors">
                        <span>How long is the evaluation?</span>
                        <span className="group-open:rotate-180 transition-transform">⌄</span>
                      </summary>
                      <p className="text-xs text-dark-400 mt-2 pl-2">
                        {firm.evaluationType} evaluation - {firm.evaluationType === 'Instant' ? '1-3 days' : '10-30 days'}
                      </p>
                    </details>
                  </div>
                </div>

                {/* Secondary Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/compare"
                    className="px-4 py-2 rounded-lg border border-accent-500/30 text-accent-400 font-semibold hover:bg-accent-500/10 transition-smooth text-center text-sm"
                  >
                    Compare
                  </Link>
                  <Link
                    to="/prop-firms"
                    className="px-4 py-2 rounded-lg glass-effect hover:bg-dark-900/50 transition-smooth text-center font-semibold text-sm"
                  >
                    View All
                  </Link>
                </div>
              </motion.div>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-effect p-6 rounded-lg space-y-4"
              >
                <h3 className="font-bold text-lg">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-dark-400">Established</div>
                    <div className="font-semibold">{firm.founded}</div>
                  </div>
                  <div>
                    <div className="text-dark-400">Location</div>
                    <div className="font-semibold">{firm.country}</div>
                  </div>
                  <div>
                    <div className="text-dark-400">Rating</div>
                    <div className="font-semibold text-accent-400">{firm.rating}/5.0</div>
                  </div>
                  <div>
                    <div className="text-dark-400">Reviews</div>
                    <div className="font-semibold">{firm.reviewCount}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
