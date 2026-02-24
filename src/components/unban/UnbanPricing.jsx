import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, User, Building2, ShoppingBag, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Personal Profile",
    icon: User,
    price: "3,000",
    description: "For individual Facebook accounts",
    features: [
      "Personal account recovery",
      "Identity verification support",
      "24-48 hour turnaround",
      "Email support",
      "Policy violation review",
      "100% money-back guarantee"
    ],
    gradient: "from-blue-500 to-blue-600",
    borderHover: "hover:border-blue-300",
    popular: false
  },
  {
    name: "Facebook Page",
    icon: ShoppingBag,
    price: "3,000",
    description: "For business pages and fan pages",
    features: [
      "Page restoration",
      "Admin access recovery",
      "Content preservation",
      "Priority support",
      "24-48 hour turnaround",
      "Audience data retention",
      "100% money-back guarantee"
    ],
    gradient: "from-green-500 to-green-600",
    borderHover: "hover:border-green-300",
    popular: false
  },
  {
    name: "Ad Account",
    icon: BarChart,
    price: "1,500",
    description: "For disabled advertising accounts",
    features: [
      "Ad account restoration",
      "Spending limit recovery",
      "Campaign preservation",
      "Payment method reactivation",
      "Priority support",
      "24-48 hour turnaround",
      "100% money-back guarantee"
    ],
    gradient: "from-purple-500 to-purple-600",
    borderHover: "hover:border-purple-300",
    popular: true
  },
  {
    name: "Business Manager",
    icon: Building2,
    price: "3,000+",
    description: "For complete Business Manager recovery",
    features: [
      "Full BM restoration",
      "All assets reconnected",
      "Ad account recovery",
      "Page access restoration",
      "Dedicated support manager",
      "12-24 hour turnaround",
      "100% money-back guarantee",
      "Post-recovery consultation"
    ],
    gradient: "from-pink-500 to-pink-600",
    borderHover: "hover:border-pink-300",
    popular: false
  }
];

export default function UnbanPricing() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One-time payment. No hidden fees. Full refund if we can't recover your asset.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'lg:-mt-4' : ''}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 px-4 py-1.5 shadow-lg">
                  Most Popular
                </Badge>
              )}

              <div className={`relative bg-white border-2 ${plan.popular ? 'border-purple-300 shadow-2xl shadow-purple-200' : `border-gray-200 ${plan.borderHover}`} rounded-3xl p-6 hover:shadow-xl transition-all ${plan.popular ? 'scale-105' : 'hover:scale-105'}`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">one-time</span>
                  </div>
                </div>

                <Button
                  className="w-full py-5 text-base rounded-full mb-6 bg-gray-400 text-white cursor-not-allowed opacity-60"
                  disabled
                >
                  Service Paused
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-2">
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
      </div>
    </section>
  );
}