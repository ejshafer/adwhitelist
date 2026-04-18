import React, { useEffect } from "react";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Zap, Award, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-purple-50 text-purple-700 border-purple-200 px-6 py-2 text-sm hover:bg-purple-100">
              <Heart className="w-4 h-4 mr-2 inline" />
              Trusted by 1,000+ Marketing Agencies
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Adwhitelist
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to empower marketing agencies with premium, reliable advertising infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2020, Adwhitelist was born from a simple observation: marketing agencies 
                were constantly battling ad account restrictions, bans, and spending limits that 
                prevented them from scaling their clients' campaigns.
              </p>
              <p>
                We saw talented marketers unable to deliver results not because of their skills, 
                but because of platform limitations. That's when we decided to build a solution 
                that would eliminate these barriers forever.
              </p>
              <p>
                Today, we're proud to serve over 1,000 agencies worldwide, providing them with 
                premium Facebook and Google agency accounts that enable unlimited scaling without 
                the fear of bans or restrictions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Security First",
                description: "We prioritize the security and reliability of your accounts above all else.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Users,
                title: "Customer Success",
                description: "Your success is our success. We're committed to helping you achieve your goals.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "We constantly evolve our services to stay ahead of platform changes.",
                gradient: "from-pink-500 to-pink-600"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We maintain the highest standards in everything we deliver.",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: Target,
                title: "Transparency",
                description: "No hidden fees, no surprises. Just honest, straightforward service.",
                gradient: "from-orange-500 to-orange-600"
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "We build long-term relationships based on trust and reliability.",
                gradient: "from-red-500 to-red-600"
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              By the Numbers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "1,000+", label: "Active Agencies" },
              { value: "$250MM+", label: "Ad Spend Managed" },
              { value: "47%", label: "Average ROI Increase" },
              { value: "24/7", label: "Premium Support" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Become part of the world's largest network of successful marketing agencies.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}