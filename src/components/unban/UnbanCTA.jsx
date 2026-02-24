import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function UnbanCTA() {
  return (
    <section className="relative py-32 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <ShieldCheck className="w-16 h-16 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Recover Your Asset?
              </h2>
              
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join 15,000+ satisfied clients who got their Facebook assets back. 
                Fast turnaround, high success rate, and 100% money-back guarantee.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105"
                >
                  Start Recovery Process
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link to={createPageUrl("Contact")}>
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105"
                  >
                    Talk to an Expert
                  </Button>
                </Link>
              </div>
              
              <p className="text-white/80 text-sm mt-8">
                24-48 hour turnaround • 95% success rate • Full refund guarantee
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}