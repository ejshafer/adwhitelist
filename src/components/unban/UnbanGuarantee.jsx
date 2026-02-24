import React from "react";
import { Shield, RefreshCw, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

const guarantees = [
  {
    icon: Shield,
    title: "100% Money-Back Guarantee",
    description: "If we can't recover your asset, you get a full refund. No questions asked, no hidden conditions.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Clock,
    title: "24-48 Hour Resolution",
    description: "Most cases are resolved within 24-48 hours. Business Manager cases often faster with 12-24 hour turnaround.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: RefreshCw,
    title: "95% Success Rate",
    description: "We've successfully recovered over 15,000 Facebook assets with a proven 95% success rate across all asset types.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Award,
    title: "Expert Support Team",
    description: "Dedicated specialists with direct relationships at Facebook. We know the system inside and out.",
    color: "from-pink-500 to-pink-600"
  }
];

export default function UnbanGuarantee() {
  return (
    <section className="relative py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              guarantee to you
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand behind our service with rock-solid guarantees and transparent policies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {guarantees.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:scale-105 hover:border-blue-200 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}