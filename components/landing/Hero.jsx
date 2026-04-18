import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, CheckCircle2, Shield, Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { createPageUrl } from "@/utils";
import { base44 } from "@/api/base44Client";

const floatingIcons = [
  { Icon: Facebook, delay: 0, duration: 15, x: "10%", y: "20%", color: "from-blue-500 to-blue-600" },
  { Icon: Instagram, delay: 2, duration: 18, x: "80%", y: "15%", color: "from-pink-500 to-purple-600" },
  { Icon: Twitter, delay: 4, duration: 16, x: "15%", y: "70%", color: "from-sky-400 to-blue-500" },
  { Icon: Linkedin, delay: 1, duration: 17, x: "85%", y: "60%", color: "from-blue-600 to-blue-700" },
  { Icon: Youtube, delay: 3, duration: 19, x: "50%", y: "10%", color: "from-red-500 to-red-600" },
  { Icon: MessageCircle, delay: 5, duration: 16, x: "70%", y: "75%", color: "from-green-500 to-emerald-600" },
  { Icon: Facebook, delay: 2.5, duration: 20, x: "30%", y: "50%", color: "from-indigo-500 to-purple-600" },
  { Icon: Instagram, delay: 4.5, duration: 15, x: "90%", y: "85%", color: "from-purple-500 to-pink-600" },
  { Icon: Twitter, delay: 1.5, duration: 17, x: "5%", y: "45%", color: "from-cyan-400 to-blue-500" },
  { Icon: Youtube, delay: 3.5, duration: 18, x: "92%", y: "35%", color: "from-red-600 to-pink-600" },
  { Icon: Linkedin, delay: 6, duration: 16, x: "40%", y: "80%", color: "from-blue-500 to-indigo-600" },
  { Icon: MessageCircle, delay: 0.5, duration: 19, x: "60%", y: "25%", color: "from-teal-500 to-green-600" },
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("Facebook");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Facebook", "Google"];

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          // Switch to next word
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]); // Added 'words' to dependency array for completeness

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-20">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
      </div>

      {/* Floating Social Media Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0.5, 0.4, 0],
              scale: [0, 1.2, 1, 1.2, 0],
              y: [0, -80, -160, -240, -320],
              x: [0, Math.random() * 60 - 30, Math.random() * 80 - 40, Math.random() * 60 - 30, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} shadow-2xl flex items-center justify-center backdrop-blur-sm`}>
              <item.Icon className="w-7 h-7 text-white drop-shadow-lg" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 bg-purple-50 text-purple-700 border-purple-200 px-6 py-2 text-sm hover:bg-purple-100">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Trusted by 1000+ Marketing Agencies
          </Badge>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Premium <span className="inline-block min-w-[280px] md:min-w-[400px] lg:min-w-[500px] text-left">{displayText}<span className="animate-pulse">|</span></span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Agency Accounts
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Scale your advertising with verified, high-limit Facebook and Google agency accounts.
          Avoid bans and restrictions and improve campaign performance.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#pricing">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <a href="#pricing">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            >
              View Pricing
            </Button>
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-8 justify-center items-center text-sm text-gray-600 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>Instant Activation</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-500" />
            <span>99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <Facebook className="w-5 h-5 text-purple-500" />
            <span>Official Partner</span>
          </div>
        </motion.div>

        {/* Hero image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 shadow-2xl">
            <div className="aspect-video bg-white rounded-2xl shadow-inner flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop"
                alt="Dashboard Preview"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-200">
            <div className="text-2xl font-bold text-purple-600">$250K+</div>
            <div className="text-sm text-gray-600">Daily Limit</div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-200">
            <div className="text-2xl font-bold text-pink-600">99.8%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}