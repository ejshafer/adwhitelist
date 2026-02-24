import React from "react";
import { Shield, Zap, Globe, DollarSign, BarChart3, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Strong Performance",
    description: "Your campaigns will run on the highest tier, strongest ad accounts.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Get your agency account activated and ready to run campaigns in under 5 minutes.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: DollarSign,
    title: "High Spending Limits",
    description: "Scale without limits. Our accounts support daily spending up to $250,000+.",
    gradient: "from-pink-500 to-pink-600"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Run campaigns in any country with full geo-targeting capabilities.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track performance with detailed analytics and reporting dashboards.",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated account managers available around the clock for your success.",
    gradient: "from-pink-500 to-purple-600"
  }
];

export default function Features() {
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
            Advanced features to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              elevate your advertising
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our premium Facebook agency accounts come packed with features designed to maximize your advertising ROI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:scale-105 hover:border-purple-200 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}