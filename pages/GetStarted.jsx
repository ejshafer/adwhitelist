import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, CheckCircle2, Shield, Zap, TrendingUp, Users, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const benefits = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your accounts are protected with enterprise-level security measures"
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Get your premium accounts activated in minutes, not days"
  },
  {
    icon: TrendingUp,
    title: "Unlimited Scaling",
    description: "Scale your campaigns without worrying about spending limits"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "24/7 dedicated support team ready to help you succeed"
  }
];

const steps = [
  {
    number: "1",
    title: "Create Your Account",
    description: "Sign up with your email and choose your perfect plan"
  },
  {
    number: "2",
    title: "Get Verified",
    description: "Quick verification process to ensure account security"
  },
  {
    number: "3",
    title: "Start Advertising",
    description: "Launch your campaigns immediately with premium accounts"
  }
];

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to={createPageUrl("Home")} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                <Facebook className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Adwhitelist</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to={createPageUrl("Dashboard")}>
                <Button variant="ghost" className="rounded-full">
                  Sign In
                </Button>
              </Link>
              <Link to={createPageUrl("Signup")}>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg shadow-purple-500/30">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-purple-50 text-purple-700 border-purple-200 px-6 py-2 text-sm">
              <CheckCircle2 className="w-4 h-4 mr-2 inline" />
              Join 10,000+ Successful Agencies
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Scale Your
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Facebook Campaigns?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Create your account in minutes and start running premium Facebook campaigns with confidence. No bans, no restrictions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to={createPageUrl("Signup")}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-7 text-lg rounded-full shadow-xl shadow-purple-500/30 transition-all hover:scale-105"
                >
                  Create Free Account
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-7 text-lg rounded-full"
                onClick={() => window.location.href = "#how-it-works"}
              >
                See How It Works
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* How It Works */}
          <div id="how-it-works" className="scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get Started in{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  3 Simple Steps
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We've made it incredibly simple to get started with premium Facebook advertising
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 border-purple-200 hover:shadow-2xl transition-all relative overflow-hidden">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Advertising?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of agencies already scaling their Facebook campaigns with premium accounts
              </p>
              <Link to={createPageUrl("Signup")}>
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-50 px-10 py-7 text-lg rounded-full shadow-xl transition-all hover:scale-105"
                >
                  Create Your Account Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <p className="text-white/80 text-sm mt-6">
                No credit card required • Setup in 5 minutes • Cancel anytime
              </p>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-gray-600 mb-8 text-lg">Trusted by leading marketing agencies worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-100 rounded-xl h-20 flex items-center justify-center">
                  <span className="text-gray-400 font-semibold text-lg">Brand Logo {i}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}