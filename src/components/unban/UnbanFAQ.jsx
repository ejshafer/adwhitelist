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
    question: "What is your success rate for recovering banned assets?",
    answer: "We have a 95% success rate across all asset types. We've successfully recovered over 15,000 Facebook assets including personal accounts, pages, business managers, and ad accounts. If we can't recover your asset, you receive a full refund."
  },
  {
    question: "How long does the recovery process take?",
    answer: "Most cases are resolved within 24-48 hours. Business Manager recoveries are often faster, with typical turnaround times of 12-24 hours. Complex cases may take slightly longer, but we keep you updated throughout the entire process."
  },
  {
    question: "What happens if you can't unban my asset?",
    answer: "If we're unable to successfully recover your asset, you receive a complete 100% refund. No questions asked, no hidden conditions. We only succeed when you succeed."
  },
  {
    question: "Do you need access to my Facebook account?",
    answer: "We typically only need basic information about your banned asset and the circumstances of the ban. In some cases, we may need limited access or credentials to work directly with Facebook on your behalf. All information is handled securely and confidentially."
  },
  {
    question: "Can you unban permanently disabled accounts?",
    answer: "Yes, we specialize in recovering even permanently disabled accounts. While these cases can be more challenging, our success rate remains high due to our relationships and expertise with Facebook's appeals process."
  },
  {
    question: "What types of bans can you resolve?",
    answer: "We handle all types of Facebook bans including policy violations, suspicious activity flags, intellectual property disputes, spam accusations, and more. Each case is unique, and our team has experience with virtually every ban scenario."
  },
  {
    question: "Is my information secure?",
    answer: "Absolutely. We use enterprise-grade security measures to protect all client information. Your data is encrypted, never shared with third parties, and handled in strict accordance with privacy regulations."
  },
  {
    question: "What information do I need to provide?",
    answer: "You'll need to provide the URL or ID of the banned asset, the approximate date of the ban, any messages or notifications you received from Facebook, and basic contact information. The more details you can provide, the faster we can work on your case."
  }
];

export default function UnbanFAQ() {
  return (
    <section className="relative py-32 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our Facebook asset recovery service.
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
                className="bg-white border border-gray-200 rounded-2xl px-6 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <AccordionTrigger className="text-left text-gray-900 hover:text-blue-600 py-6 font-semibold">
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