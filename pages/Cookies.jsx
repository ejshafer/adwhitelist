import React from "react";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import { Cookie } from "lucide-react";
import { motion } from "framer-motion";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our services. Cookies cannot harm your device or files.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Adwhitelist uses cookies for several purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>To keep you signed in to your account</li>
                  <li>To remember your preferences and settings</li>
                  <li>To understand how you use our services</li>
                  <li>To improve our website performance and user experience</li>
                  <li>To analyze traffic and usage patterns</li>
                  <li>To provide personalized content and recommendations</li>
                  <li>To prevent fraud and enhance security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, authentication, and network management. You cannot opt-out of these cookies.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our services and user experience.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Functionality Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies are used to track visitors across websites. They help us display relevant advertisements and measure the effectiveness of our marketing campaigns.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may use third-party service providers who may also set cookies on your device. These include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                  <li><strong>Facebook Pixel:</strong> For advertising and conversion tracking</li>
                  <li><strong>Payment Processors:</strong> For secure payment processing</li>
                  <li><strong>Customer Support:</strong> For live chat and support services</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  These third parties have their own privacy and cookie policies that we do not control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings</li>
                  <li><strong>Browser Extensions:</strong> You can use browser extensions to manage cookie preferences</li>
                  <li><strong>Opt-Out Tools:</strong> Many advertising networks provide opt-out tools</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Please note that blocking or deleting certain cookies may impact your experience and some features may not function properly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Duration</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cookies can be either session cookies or persistent cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Most of our cookies are persistent and will remain on your device for varying periods, typically ranging from a few days to several months.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Do Not Track Signals</h2>
                <p className="text-gray-700 leading-relaxed">
                  Some browsers have a "Do Not Track" feature that signals websites that you do not want your online activities tracked. Our website does not currently respond to Do Not Track signals, but you can disable certain cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <div className="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                  <p className="text-gray-900 font-medium">Email: privacy@adwhitelist.com</p>
                  <p className="text-gray-900 font-medium">Phone: +1 (555) 123-4567</p>
                  <p className="text-gray-900 font-medium">Address: 7901 4th Street North, Suite 300, St. Petersburg, FL 33702</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}