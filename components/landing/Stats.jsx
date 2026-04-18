import React from "react";
import { TrendingUp, Users, DollarSign, Zap } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: "1,000+",
    label: "Active Agencies",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: DollarSign,
    value: "$250MM+",
    label: "Ad Spend Managed",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: TrendingUp,
    value: "47%",
    label: "Average ROI Increase",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Premium Support",
    color: "from-purple-500 to-pink-500"
  }
];

export default function Stats() {
  return (
    <section className="relative py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:scale-105 hover:border-purple-200">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}