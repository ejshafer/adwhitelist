import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function CTA() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 overflow-hidden">
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to scale your campaigns?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Join thousands of agencies running premium Facebook campaigns and Google campaigns with confidence.
            Get started today and never worry about account limitations again.
          </p>

          <div className="flex justify-center items-center mb-16">
            <Link to={createPageUrl("Signup")}>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-6 text-lg rounded-full shadow-2xl transition-all hover:scale-105"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white text-left max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Shield className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">Strong Performance</h3>
              <p className="text-white/80 text-center">
                Your campaigns will run on the highest tier, strongest ad accounts.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Clock className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Setup</h3>
              <p className="text-white/80 text-center">
                Get your accounts ready in minutes, not days. Start scaling instantly.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CheckCircle2 className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-white/80 text-center">
                Trusted by thousands of agencies for consistent, reliable performance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}