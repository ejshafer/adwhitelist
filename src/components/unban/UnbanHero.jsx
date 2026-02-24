
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, ArrowRight, CheckCircle2, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function UnbanHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-20">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-green-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-6 py-2 text-sm hover:bg-blue-100">
            <ShieldCheck className="w-4 h-4 mr-2 inline" />
            95% Success Rate • 24-48 Hour Resolution
          </Badge>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Facebook Asset
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent">
            Unban Service
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Got banned? We specialize in recovering disabled Facebook accounts, pages, 
          business managers, and ad accounts. Fast, professional, and guaranteed.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
          >
            Get Your Asset Unbanned
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <a href="#pricing">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            >
              View Pricing
            </Button>
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-8 justify-center items-center text-sm text-gray-600 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>95% Success Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-500" />
            <span>24-48 Hour Turnaround</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-500" />
            <span>100% Money-Back Guarantee</span>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Assets Recovered", value: "15,000+" },
            { label: "Average Time", value: "36 hours" },
            { label: "Client Satisfaction", value: "98%" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                {item.value}
              </div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
