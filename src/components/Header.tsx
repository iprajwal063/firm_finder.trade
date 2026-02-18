import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Prop Firms', href: '/prop-firms' },
    { label: 'Compare', href: '/compare' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-accent-500/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover-glow p-2 rounded-lg transition-smooth">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center text-xl">
              🚀
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent hidden sm:inline">
              FirmFinder
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg transition-smooth text-sm font-medium ${
                  isActive(item.href)
                    ? 'bg-accent-500/20 text-accent-400'
                    : 'text-dark-300 hover:text-accent-400 hover:bg-dark-900/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg glass-effect hover-glow transition-smooth"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-accent-400" />
              ) : (
                <Moon className="w-5 h-5 text-accent-400" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg glass-effect hover-glow transition-smooth"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-accent-400" />
              ) : (
                <Menu className="w-5 h-5 text-accent-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-accent-500/10 py-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-smooth text-sm font-medium ${
                  isActive(item.href)
                    ? 'bg-accent-500/20 text-accent-400'
                    : 'text-dark-300 hover:text-accent-400 hover:bg-dark-900/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
}
