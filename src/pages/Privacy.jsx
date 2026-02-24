import React from "react";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Privacy() {
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Privacy Policy
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  At Adwhitelist, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Account credentials and authentication information</li>
                  <li>Payment and billing information</li>
                  <li>Facebook Business Manager and Ad Account details</li>
                  <li>Communication preferences and history</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative information, updates, and security alerts</li>
                  <li>Respond to comments, questions, and provide customer support</li>
                  <li>Monitor and analyze usage and trends</li>
                  <li>Detect, prevent, and address technical issues and fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>With Service Providers:</strong> We share information with third-party vendors who perform services on our behalf</li>
                  <li><strong>For Legal Reasons:</strong> If required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale of assets, or acquisition</li>
                  <li><strong>With Your Consent:</strong> When you explicitly agree to share your information</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us at privacy@adwhitelist.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to collect and track information about your use of our services. You can control cookies through your browser settings. For more information, please see our Cookie Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions or concerns about this Privacy Policy, please contact us at:
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