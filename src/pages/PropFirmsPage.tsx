import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { propFirms, PropFirm } from '../data/propFirms';

type SortKey = 'name' | 'rating' | 'maxAllocation' | 'founded';
type SortOrder = 'asc' | 'desc';

export default function PropFirmsPage() {
  const [sortKey, setSortKey] = useState<SortKey>('rating');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [tabFilter, setTabFilter] = useState<'all' | 'popular' | 'new'>('all');
  const [evaluationFilter, setEvaluationFilter] = useState<string>('all');
  const [maxFeeFilter, setMaxFeeFilter] = useState<number>(150);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10;

  // Filter firms
  const filteredFirms = useMemo(() => {
    let filtered = [...propFirms];

    // Tab filter
    if (tabFilter === 'popular') {
      filtered = filtered.filter((f) => f.rating >= 4.6);
    } else if (tabFilter === 'new') {
      filtered = filtered.filter((f) => f.founded >= 2021);
    }

    // Evaluation type filter
    if (evaluationFilter !== 'all') {
      filtered = filtered.filter((f) => f.evaluationType === evaluationFilter);
    }

    // Max fee filter
    filtered = filtered.filter((f) => f.startingFee <= maxFeeFilter);

    return filtered;
  }, [tabFilter, evaluationFilter, maxFeeFilter]);

  // Sort firms
  const sortedFirms = useMemo(() => {
    const sorted = [...filteredFirms];
    sorted.sort((a, b) => {
      let aVal: any = a[sortKey];
      let bVal: any = b[sortKey];

      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = (bVal as string).toLowerCase();
      }

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [filteredFirms, sortKey, sortOrder]);

  // Paginate
  const totalPages = Math.ceil(sortedFirms.length / itemsPerPage);
  const paginatedFirms = sortedFirms.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) return <span className="text-dark-600">⇅</span>;
    return sortOrder === 'asc' ? (
      <ChevronUp className="w-4 h-4 inline" />
    ) : (
      <ChevronDown className="w-4 h-4 inline" />
    );
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-950">
        {/* Header */}
        <div className="glass-effect border-b border-accent-500/10 py-8 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Proprietary Trading Firms</h1>
            <p className="text-dark-400">{sortedFirms.length} firms found</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Tab Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-dark-300">View</label>
              <div className="flex gap-2">
                {['all', 'popular', 'new'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setTabFilter(tab as any);
                      setCurrentPage(0);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
                      tabFilter === tab
                        ? 'bg-accent-500 text-dark-950'
                        : 'glass-effect hover:bg-dark-900/50'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Evaluation Type Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-dark-300">Evaluation Type</label>
              <select
                value={evaluationFilter}
                onChange={(e) => {
                  setEvaluationFilter(e.target.value);
                  setCurrentPage(0);
                }}
                className="w-full px-3 py-2 rounded-lg glass-effect focus:outline-none focus:ring-2 focus:ring-accent-500 transition-smooth"
              >
                <option value="all">All Types</option>
                <option value="1 Phase">1 Phase</option>
                <option value="2 Phase">2 Phase</option>
                <option value="Instant">Instant</option>
              </select>
            </div>

            {/* Max Fee Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-dark-300">
                Max Fee: ${maxFeeFilter}
              </label>
              <input
                type="range"
                min="0"
                max="150"
                value={maxFeeFilter}
                onChange={(e) => {
                  setMaxFeeFilter(Number(e.target.value));
                  setCurrentPage(0);
                }}
                className="w-full h-2 bg-dark-800 rounded-lg appearance-none cursor-pointer accent-accent-500"
              />
            </div>

            {/* Reset Button */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setTabFilter('all');
                  setEvaluationFilter('all');
                  setMaxFeeFilter(150);
                  setCurrentPage(0);
                }}
                className="w-full px-4 py-2 rounded-lg glass-effect hover:bg-dark-900/50 transition-smooth text-sm font-semibold"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block glass-effect rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-accent-500/10 bg-dark-900/30">
                  <tr>
                    <th
                      onClick={() => handleSort('name')}
                      className="px-6 py-4 text-left text-sm font-semibold cursor-pointer hover:bg-dark-800/50 transition-smooth"
                    >
                      Firm <SortIcon column="name" />
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Rating</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Fee</th>
                    <th
                      onClick={() => handleSort('maxAllocation')}
                      className="px-6 py-4 text-left text-sm font-semibold cursor-pointer hover:bg-dark-800/50 transition-smooth"
                    >
                      Max Alloc <SortIcon column="maxAllocation" />
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Assets</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Platforms</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedFirms.map((firm) => (
                    <motion.tr
                      key={firm.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border-b border-dark-800 hover:bg-dark-900/30 transition-smooth"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{firm.logo}</div>
                          <div>
                            <div className="font-semibold">{firm.name}</div>
                            <div className="text-xs text-dark-500">{firm.country}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center text-sm font-bold text-accent-400">
                            {firm.rating}
                          </div>
                          <span className="text-xs text-dark-400">({firm.reviewCount})</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full badge text-xs">{firm.evaluationType}</span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-accent-400">${firm.startingFee}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1">
                            <div className="text-sm font-semibold">${(firm.maxAllocation / 1000).toFixed(0)}k</div>
                            <div className="w-24 h-2 bg-dark-800 rounded-full overflow-hidden mt-1">
                              <div
                                className="h-full bg-accent-500"
                                style={{
                                  width: `${(firm.maxAllocation / 1000000) * 100}%`,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {firm.assets.slice(0, 2).map((asset) => (
                            <span key={asset} className="px-2 py-1 rounded text-xs bg-dark-800 text-dark-300">
                              {asset}
                            </span>
                          ))}
                          {firm.assets.length > 2 && (
                            <span className="px-2 py-1 rounded text-xs bg-dark-800 text-dark-300">
                              +{firm.assets.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {firm.platforms.slice(0, 2).map((platform) => (
                            <span key={platform} className="px-2 py-1 rounded text-xs bg-dark-800 text-dark-300">
                              {platform}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {/* Enhanced Desktop Action */}
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {}}
                            className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                              firm.discount > 0
                                ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-dark-950 hover:shadow-lg hover:shadow-accent-500/50'
                                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                            }`}
                          >
                            {firm.discount > 0 ? '🚀 Get Funded' : 'Explore'}
                          </motion.button>

                          <Link
                            to={`/prop-firms/${firm.slug}`}
                            className="px-3 py-2 rounded-lg text-accent-400 hover:bg-accent-500/10 transition-smooth text-sm font-semibold"
                          >
                            Details →
                          </Link>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {paginatedFirms.map((firm) => (
              <motion.div
                key={firm.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-effect p-4 rounded-lg space-y-3"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="text-2xl">{firm.logo}</div>
                    <div className="flex-1">
                      <h3 className="font-bold">{firm.name}</h3>
                      <p className="text-xs text-dark-500">{firm.country}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center text-sm font-bold text-accent-400 flex-shrink-0">
                    {firm.rating}
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-dark-900/50 p-2 rounded">
                    <span className="text-dark-500 text-xs">Type</span>
                    <div className="font-semibold text-accent-400">{firm.evaluationType}</div>
                  </div>
                  <div className="bg-dark-900/50 p-2 rounded">
                    <span className="text-dark-500 text-xs">Fee</span>
                    <div className="font-semibold text-accent-400">${firm.startingFee}</div>
                  </div>
                  <div className="bg-dark-900/50 p-2 rounded">
                    <span className="text-dark-500 text-xs">Max Alloc</span>
                    <div className="font-semibold text-accent-400">${(firm.maxAllocation / 1000).toFixed(0)}k</div>
                  </div>
                  <div className="bg-dark-900/50 p-2 rounded">
                    <span className="text-dark-500 text-xs">Reviews</span>
                    <div className="font-semibold">{firm.reviewCount}</div>
                  </div>
                </div>

                {/* Assets & Platforms */}
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {firm.assets.map((asset) => (
                      <span key={asset} className="px-2 py-1 rounded text-xs bg-dark-800 text-dark-300">
                        {asset}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {firm.platforms.map((platform) => (
                      <span key={platform} className="px-2 py-1 rounded text-xs bg-dark-800 text-dark-300">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Mobile Actions */}
                <div className="space-y-2">
                  {firm.discount > 0 && (
                    <motion.button
                      onClick={() => {}}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 text-dark-950 font-bold hover:shadow-lg hover:shadow-accent-500/50 transition-all"
                    >
                      🚀 Get Funded - {firm.discount}% OFF
                    </motion.button>
                  )}

                  <Link
                    to={`/prop-firms/${firm.slug}`}
                    className="w-full px-4 py-2 rounded-lg border border-accent-500/30 text-accent-400 font-semibold hover:bg-accent-500/10 transition-smooth text-center text-sm block"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="p-2 rounded-lg glass-effect hover:bg-dark-900/50 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-smooth ${
                    i === currentPage
                      ? 'bg-accent-500 text-dark-950'
                      : 'glass-effect hover:bg-dark-900/50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className="p-2 rounded-lg glass-effect hover:bg-dark-900/50 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
