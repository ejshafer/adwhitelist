import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Crown, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const plans = [
  {
    name: "Support Only",
    icon: Rocket,
    price: "1,999",
    period: "month",
    description: "Get support for your own accounts",
    features: [
      "Use your own ad account",
      "Ad rewards access",
      "META rep access for support escalation for restrictions and ad approvals"
    ],
    gradient: "from-blue-500 to-blue-600",
    popular: false
  },
  {
    name: "Scale",
    icon: Sparkles,
    price: "799",
    period: "month",
    description: "Most popular choice for growing agencies",
    features: [
      "Prepay",
      "0% fee",
      "Ad rewards enabled",
      "META rep access",
      "1 ad account included, additional ad accounts $50/month each"
    ],
    gradient: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    name: "Elite",
    icon: Crown,
    price: "1,999",
    period: "month",
    description: "For agencies that need unlimited scale",
    features: [
      "0% fee",
      "2% cashback or use your own card",
      "Ad rewards enabled",
      "META rep access",
      "1 ad account included, additional ad accounts $50/month each"
    ],
    gradient: "from-purple-600 to-pink-600",
    popular: false
  }
];

export default function Pricing() {
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
            Comprehensive plans with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              premium features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. All plans include our industry-leading ban protection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-1.5 shadow-lg">
                  Most Popular
                </Badge>
              )}

              <div className={`relative bg-white border-2 ${plan.popular ? 'border-purple-300 shadow-2xl shadow-purple-200' : 'border-gray-200'} rounded-3xl p-8 hover:shadow-xl transition-all ${plan.popular ? 'scale-105' : 'hover:scale-105'}`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

<a 
                  href={
                    plan.name === "Support Only" 
                      ? "https://whop.com/checkout/plan_PNMF06R3jHf3E"
                      : plan.name === "Scale"
                      ? "https://whop.com/checkout/plan_qXXgBnq8E9bNr"
                      : "https://whop.com/checkout/plan_bI3zMWJEu0LCM"
                  } 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`w-full py-6 text-lg rounded-full mb-8 transition-all hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/30'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    Get Package
                  </Button>
                </a>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            All plans are satisfaction guaranteed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}