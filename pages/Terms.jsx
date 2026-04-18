import React from "react";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Terms() {
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
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Terms of Service
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using Adwhitelist's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Permission is granted to temporarily access and use Adwhitelist's services for personal or commercial advertising purposes. This license shall automatically terminate if you violate any of these restrictions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Under this license, you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Modify or copy the materials or services</li>
                  <li>Use the services for any unlawful purpose</li>
                  <li>Attempt to reverse engineer any software or technology</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the services to another person or entity</li>
                  <li>Use the services to violate Facebook's Terms of Service or Advertising Policies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Registration and Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring your use complies with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Plans and Billing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Adwhitelist offers various subscription plans with different features and pricing:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Normal Plan:</strong> 3% spend fee on ad spend</li>
                  <li><strong>Professional Plan:</strong> $999/month flat fee</li>
                  <li><strong>Enterprise Plan:</strong> $2,499/month flat fee</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  All fees are non-refundable except as required by law or as explicitly stated in our refund policy. We reserve the right to change pricing with 30 days notice to existing customers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Facebook Ad Accounts</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By using our premium Facebook ad accounts, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Comply with all Facebook Advertising Policies and Community Standards</li>
                  <li>Not engage in prohibited advertising practices</li>
                  <li>Maintain accurate and truthful advertising content</li>
                  <li>Not share account credentials with unauthorized parties</li>
                  <li>Report any issues or violations immediately</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  While we provide premium accounts with enhanced protection, we cannot guarantee accounts will never face restrictions or bans due to policy violations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability and Support</h2>
                <p className="text-gray-700 leading-relaxed">
                  We strive to maintain 99.9% service uptime but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of our services at any time. Support response times vary by plan level.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content, features, and functionality of Adwhitelist's services are owned by us and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  To the maximum extent permitted by law, Adwhitelist shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of our services. Our total liability shall not exceed the amount you paid us in the past 12 months.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold Adwhitelist harmless from any claims, damages, losses, liabilities, and expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the services will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You waive your right to participate in class action lawsuits.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through our services. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                  <p className="text-gray-900 font-medium">Email: legal@adwhitelist.com</p>
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