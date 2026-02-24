import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Advertising Professional",
    role: "Digital Marketer since 2016",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    content: "I've been in the advertising space since 2016 and have tried almost every provider available in the market for agency accounts and Meta support. Since onboarding all my campaigns under the Ad Whitelist agency, my performance has significantly improved. We no longer experience ad rejections or disabled accounts. Their support has been outstanding, consistently following up on every single request from our team. Their compliance review team is by far the best in the market and extremely knowledgeable when it comes to running compliant advertising campaigns.",
    rating: 5,
    date: "Jan 21, 2025"
  },
  {
    name: "Agency Owner",
    role: "Performance Marketing",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "Best support I've ever gotten with agency ad accounts. They really understand meta and how to keep your campaigns live. Glad I found Ad Whitelist!",
    rating: 5,
    date: "Jan 21, 2025"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            We've been helping{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              customers globally
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">3.8</span>
            <span className="text-gray-600">rating on Trustpilot (2 reviews)</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:scale-105 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">{testimonial.date}</span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}