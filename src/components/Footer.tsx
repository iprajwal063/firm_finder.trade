import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-effect border-t border-accent-500/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center text-xl">
                🚀
              </div>
              <span className="font-bold text-lg">FirmFinder</span>
            </div>
            <p className="text-dark-400 text-sm">Discover your perfect proprietary trading firm.</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-dark-400 hover:text-accent-400 transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-accent-400 transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-accent-400 transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-accent-400 transition-smooth">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/prop-firms" className="text-dark-400 hover:text-accent-400 transition-smooth">
                  Browse Firms
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-dark-400 hover:text-accent-400 transition-smooth">
                  Compare
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-dark-400 hover:text-accent-400 transition-smooth">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-dark-400 hover:text-accent-400 transition-smooth">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-dark-400 hover:text-accent-400 transition-smooth">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:support@firmfinder.com" className="text-dark-400 hover:text-accent-400 transition-smooth">
                  Email Support
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-400 hover:text-accent-400 transition-smooth">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-400 hover:text-accent-400 transition-smooth">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-dark-400 hover:text-accent-400 transition-smooth">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-dark-400 hover:text-accent-400 transition-smooth">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-dark-400 hover:text-accent-400 transition-smooth">
                  Disclaimer
                </Link>
              </li>
              <li>
                <a href="#" className="text-dark-400 hover:text-accent-400 transition-smooth">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-500/10 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-dark-400">
            <p>&copy; {currentYear} FirmFinder. All rights reserved.</p>
            <p className="text-center">
              Disclaimer: FirmFinder is an informational platform. We are not affiliated with any trading firms.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
