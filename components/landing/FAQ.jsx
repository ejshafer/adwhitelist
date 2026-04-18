import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Adwhitelist?",
    answer: "Adwhitelist is a premium Facebook agency account provider that allows agencies and businesses to scale their advertising with verified, high-limit accounts. We offer high tier agency ad accounts with enhanced ban protection and support."
  },
  {
    question: "Why should I choose Adwhitelist?",
    answer: "We provide verified agency accounts with spending limits up to $250K daily, industry-leading ban protection, instant activation, and 24/7 premium support. Our accounts are specifically designed for agencies managing multiple clients."
  },
  {
    question: "How long does it take to get my account activated?",
    answer: "Account activation is almost instant. Once you complete your purchase and verification, your account will be ready to run campaigns within 5 minutes."
  },
  {
    question: "What if my account gets banned?",
    answer: "We include comprehensive ban protection with all plans. In the rare event of a ban, we'll replace your account immediately at no additional cost. Our advanced monitoring systems prevent most bans before they happen."
  },
  {
    question: "How much does Adwhitelist cost?",
    answer: "We offer three pricing plans: Support Only at $1,999/month for using your own accounts with META rep access, Scale at $799/month with 0% fee and prepay, and Elite at $1,999/month with 0% fee and 2% cashback. All plans include ad rewards access and META rep support."
  },
  {
    question: "Do you offer any free trials?",
    answer: "Yes! We offer a 14-day money-back guarantee. If you're not satisfied with your account within the first 14 days, contact our support team for a full refund, no questions asked."
  },
  {
    question: "Can I manage multiple clients with one account?",
    answer: "Yes! Our agency accounts are designed for managing multiple clients. We can assign separate ad accounts for each client within your Business Manager."
  },
  {
    question: "How can I change my current subscription?",
    answer: "You can upgrade or downgrade your plan at any time by updating your subscription. Changes take effect immediately, and we'll prorate the difference in your next billing cycle."
  }
];

export default function FAQ() {
  return (
    <section className="relative py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Questions &{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              answers
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our premium Facebook agency accounts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-white border border-gray-200 rounded-2xl px-6 hover:shadow-lg hover:border-purple-200 transition-all"
              >
                <AccordionTrigger className="text-left text-gray-900 hover:text-purple-600 py-6 font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}