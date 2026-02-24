import React from "react";
import { UserPlus, CreditCard, Rocket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in seconds with our simple registration process.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: CreditCard,
    title: "Choose Your Plan",
    description: "Select the perfect plan that matches your advertising needs and budget.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Rocket,
    title: "Get Activated",
    description: "Your premium Facebook agency account is set up and ready to launch campaigns.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Scale & Grow",
    description: "Start running high-performing campaigns and watch your ROI soar.",
    color: "from-purple-500 to-pink-500"
  }
];

export default function HowItWorks() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get started in{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              4 simple steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From signup to scaling, we've streamlined the entire process to get you advertising faster.
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
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:scale-105 hover:border-purple-200">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
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