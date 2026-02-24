import React from "react";
import { User, Building2, ShoppingBag, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const assetTypes = [
  {
    icon: User,
    title: "Personal Profiles",
    price: "$3,000",
    description: "Recover your personal Facebook account that was disabled or restricted.",
    features: ["Identity verification", "Policy violation review", "Full account access restored"],
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: ShoppingBag,
    title: "Facebook Pages",
    price: "$3,000",
    description: "Get your business page or fan page back online and fully operational.",
    features: ["Page restoration", "Admin access recovery", "Content preservation"],
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: Building2,
    title: "Business Managers",
    price: "$3,000+",
    description: "Restore your Business Manager account and all connected assets.",
    features: ["Full BM recovery", "Asset reconnection", "Ad account restoration"],
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: BarChart,
    title: "Ad Accounts",
    price: "$1,500",
    description: "Reinstate disabled ad accounts and resume your advertising campaigns.",
    features: ["Spending limit restoration", "Campaign recovery", "Payment method reactivation"],
    gradient: "from-pink-500 to-pink-600"
  }
];

export default function AssetTypes() {
  return (
    <section className="relative py-32 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            We recover all{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Facebook assets
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No matter what type of Facebook asset you need recovered, our expert team has you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {assetTypes.map((asset, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:scale-105 hover:border-blue-200 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${asset.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <asset.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {asset.title}
                  </h3>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {asset.price}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {asset.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {asset.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center gap-2 text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${asset.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-gray-300 rounded-full cursor-not-allowed opacity-60"
                  disabled
                >
                  Service Paused
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}