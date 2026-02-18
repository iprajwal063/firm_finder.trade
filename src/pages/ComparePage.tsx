import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { propFirms } from '../data/propFirms';

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleFirm = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id].slice(-3)
    );
  };

  const selectedFirms = propFirms.filter((f) => selected.includes(f.id));

  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-950">
        {/* Header */}
        <div className="glass-effect border-b border-accent-500/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-2">Compare Prop Firms</h1>
            <p className="text-dark-400">Select up to 3 firms to compare side-by-side</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Firm Selection Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Select Firms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {propFirms.map((firm) => (
                <motion.button
                  key={firm.id}
                  onClick={() => toggleFirm(firm.id)}
                  className={`glass-effect p-4 rounded-lg text-left transition-smooth ${
                    selected.includes(firm.id)
                      ? 'ring-2 ring-accent-500 bg-accent-500/10'
                      : 'hover:bg-dark-900/50'
                  }`}
                >
                  <div className="text-3xl mb-2">{firm.logo}</div>
                  <div className="font-semibold text-sm">{firm.name}</div>
                  <div className="text-xs text-dark-500">{firm.rating}/5 • {firm.reviewCount} reviews</div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          {selectedFirms.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-lg overflow-x-auto"
            >
              <table className="w-full">
                <thead className="border-b border-accent-500/10 bg-dark-900/30">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold min-w-[200px]">Attribute</th>
                    {selectedFirms.map((firm) => (
                      <th key={firm.id} className="px-6 py-4 text-left text-sm font-semibold min-w-[200px]">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-lg">{firm.logo}</div>
                            <div className="font-bold">{firm.name}</div>
                          </div>
                          <button
                            onClick={() => toggleFirm(firm.id)}
                            className="p-1 hover:bg-dark-800 rounded transition-smooth"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Rating', key: 'rating' },
                    { label: 'Reviews', key: 'reviewCount' },
                    { label: 'Founded', key: 'founded' },
                    { label: 'Evaluation Type', key: 'evaluationType' },
                    { label: 'Starting Fee', key: 'startingFee' },
                    { label: 'Max Allocation', key: 'maxAllocation' },
                    { label: 'Country', key: 'country' },
                  ].map((attr) => (
                    <tr key={attr.key} className="border-b border-dark-800 hover:bg-dark-900/30 transition-smooth">
                      <td className="px-6 py-4 font-semibold text-sm">{attr.label}</td>
                      {selectedFirms.map((firm) => (
                        <td key={firm.id} className="px-6 py-4 text-sm">
                          {attr.key === 'startingFee' && `$${(firm as any)[attr.key]}`}
                          {attr.key === 'maxAllocation' && `$${((firm as any)[attr.key]).toLocaleString()}`}
                          {attr.key === 'rating' && (
                            <span className="text-accent-400 font-bold">{(firm as any)[attr.key]}/5.0</span>
                          )}
                          {!['startingFee', 'maxAllocation', 'rating'].includes(attr.key) &&
                            (firm as any)[attr.key]}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Assets Comparison */}
                  <tr className="border-b border-dark-800 hover:bg-dark-900/30 transition-smooth">
                    <td className="px-6 py-4 font-semibold text-sm">Assets</td>
                    {selectedFirms.map((firm) => (
                      <td key={firm.id} className="px-6 py-4 text-sm">
                        <div className="flex flex-wrap gap-1">
                          {firm.assets.map((asset) => (
                            <span key={asset} className="px-2 py-1 rounded text-xs bg-dark-800">
                              {asset}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Platforms Comparison */}
                  <tr className="border-b border-dark-800 hover:bg-dark-900/30 transition-smooth">
                    <td className="px-6 py-4 font-semibold text-sm">Platforms</td>
                    {selectedFirms.map((firm) => (
                      <td key={firm.id} className="px-6 py-4 text-sm">
                        <div className="flex flex-wrap gap-1">
                          {firm.platforms.map((platform) => (
                            <span key={platform} className="px-2 py-1 rounded text-xs bg-dark-800">
                              {platform}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Profit Split */}
                  <tr className="border-b border-dark-800 hover:bg-dark-900/30 transition-smooth">
                    <td className="px-6 py-4 font-semibold text-sm">Best Profit Split</td>
                    {selectedFirms.map((firm) => (
                      <td key={firm.id} className="px-6 py-4 text-sm">
                        <span className="font-bold text-accent-400">
                          {Math.max(...firm.profitSplit.map((p) => p.split))}%
                        </span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </motion.div>
          )}

          {selectedFirms.length === 0 && (
            <div className="glass-effect p-12 rounded-lg text-center">
              <p className="text-dark-400 text-lg">Select firms from above to start comparing</p>
            </div>
          )}

          {/* Action Buttons */}
          {selectedFirms.length > 0 && (
            <div className="flex gap-4 mt-8 justify-center">
              {selectedFirms.map((firm) => (
                <Link
                  key={firm.id}
                  to={`/prop-firms/${firm.slug}`}
                  className="px-6 py-3 bg-accent-500/20 text-accent-400 font-semibold rounded-lg hover:bg-accent-500/30 transition-smooth"
                >
                  {firm.name} Details
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
