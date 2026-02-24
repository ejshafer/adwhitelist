import React from "react";
import { FileSearch, MessageSquare, Wrench, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: FileSearch,
    title: "Submit Your Case",
    description: "Provide details about your banned asset and the reason for the ban. Our team reviews your case immediately.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: MessageSquare,
    title: "Expert Analysis",
    description: "Our specialists analyze your situation and determine the best approach for recovery.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Wrench,
    title: "Recovery Process",
    description: "We work directly with Facebook's support channels using proven methods to restore your asset.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: CheckCircle,
    title: "Asset Restored",
    description: "Your asset is unbanned and fully restored. If unsuccessful, you receive a complete refund.",
    color: "from-pink-500 to-pink-600"
  }
];

export default function UnbanProcess() {
  return (
    <section className="relative py-32 px-4 bg-white">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            How our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              recovery process works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, transparent process designed to get your assets back online as quickly as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:scale-105 hover:border-blue-200">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {idx + 1}
                </div>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}