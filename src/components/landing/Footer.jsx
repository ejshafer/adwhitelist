import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Unban Service", href: createPageUrl("UnbanService") },
    { name: "How It Works", href: "#how-it-works" }
  ],
  Company: [
    { name: "About", href: createPageUrl("About") },
    { name: "Contact", href: createPageUrl("Contact") },
    { name: "Testimonials", href: "#testimonials" }
  ],
  Resources: [
    { name: "FAQ", href: "#faq" },
    { name: "Support", href: createPageUrl("Contact") }
  ],
  Legal: [
    { name: "Privacy Policy", href: createPageUrl("Privacy") },
    { name: "Terms of Service", href: createPageUrl("Terms") },
    { name: "Cookie Policy", href: createPageUrl("Cookies") },
    { name: "Licenses", href: createPageUrl("Licenses") }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                <Facebook className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Adwhitelist</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium Facebook agency account provider and Google agency account provider for agencies that demand excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.includes('#') ? (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Adwhitelist. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to={createPageUrl("Privacy")} className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to={createPageUrl("Terms")} className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to={createPageUrl("Cookies")} className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}