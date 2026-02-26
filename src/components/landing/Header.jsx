import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { base44 } from "@/api/base44Client";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
              <Facebook className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Adwhitelist</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to={createPageUrl("Home")}
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to={createPageUrl("Contact")}
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#pricing">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6 shadow-lg shadow-purple-500/30"
              >
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                to={createPageUrl("Home")}
                className="block text-gray-600 hover:text-purple-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to={createPageUrl("Contact")}
                className="block text-gray-600 hover:text-purple-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg shadow-purple-500/30"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}