import React from "react";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Licenses() {
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
              <Award className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Licenses & Attributions
            </h1>
            <p className="text-lg text-gray-600">
              Open source software and resources we use
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
                  Adwhitelist is built using various open source libraries and resources. We are grateful to the open source community for their contributions. This page lists the key software components and their respective licenses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Technologies</h2>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">React</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      A JavaScript library for building user interfaces
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>License:</strong> MIT License<br />
                      <strong>Copyright:</strong> Facebook, Inc. and its affiliates
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      A utility-first CSS framework for rapid UI development
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>License:</strong> MIT License<br />
                      <strong>Copyright:</strong> Tailwind Labs, Inc.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Base44 Platform</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      Backend infrastructure and authentication system
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>License:</strong> Proprietary<br />
                      <strong>Provider:</strong> Base44
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">UI Components & Libraries</h2>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Lucide React</h3>
                    <p className="text-gray-700 text-sm mb-2">Icon library for React applications</p>
                    <p className="text-gray-600 text-sm"><strong>License:</strong> ISC License</p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Framer Motion</h3>
                    <p className="text-gray-700 text-sm mb-2">Animation library for React</p>
                    <p className="text-gray-600 text-sm"><strong>License:</strong> MIT License</p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Radix UI</h3>
                    <p className="text-gray-700 text-sm mb-2">Unstyled, accessible UI components</p>
                    <p className="text-gray-600 text-sm"><strong>License:</strong> MIT License</p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">React Router</h3>
                    <p className="text-gray-700 text-sm mb-2">Declarative routing for React</p>
                    <p className="text-gray-600 text-sm"><strong>License:</strong> MIT License</p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">TanStack Query</h3>
                    <p className="text-gray-700 text-sm mb-2">Powerful data synchronization for React</p>
                    <p className="text-gray-600 text-sm"><strong>License:</strong> MIT License</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Image Resources</h2>
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Unsplash</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    High-quality stock photography used throughout the site
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>License:</strong> Unsplash License (Free to use)<br />
                    Images are used under the Unsplash License which allows free use for commercial and non-commercial purposes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">MIT License Text</h2>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono">
{`MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
                  </pre>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance</h2>
                <p className="text-gray-700 leading-relaxed">
                  We strive to comply with all open source licenses and respect the work of the open source community. If you believe we have not properly attributed a library or resource, please contact us immediately so we can rectify the situation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about licenses or attributions, please contact:
                </p>
                <div className="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                  <p className="text-gray-900 font-medium">Email: legal@adwhitelist.com</p>
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