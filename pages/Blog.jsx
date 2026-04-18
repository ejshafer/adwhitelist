
import React, { useEffect } from "react";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "10 Tips to Avoid Facebook Ad Account Bans",
    excerpt: "Learn the most common reasons why Facebook ad accounts get banned and how to protect yourself from policy violations.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    category: "Best Practices",
    date: "March 15, 2024",
    readTime: "8 min read",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "How to Scale Your Facebook Ads to $100K/Day",
    excerpt: "Discover proven strategies for scaling your Facebook advertising campaigns without triggering spending limits or bans.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    category: "Scaling",
    date: "March 12, 2024",
    readTime: "12 min read",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Understanding Facebook Business Manager Structure",
    excerpt: "A comprehensive guide to setting up and managing your Facebook Business Manager for optimal performance and security.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop",
    category: "Guide",
    date: "March 10, 2024",
    readTime: "10 min read",
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "The Ultimate Guide to Facebook Ad Account Recovery",
    excerpt: "Step-by-step instructions on what to do when your Facebook ad account gets disabled and how to successfully appeal.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    category: "Recovery",
    date: "March 8, 2024",
    readTime: "15 min read",
    gradient: "from-pink-500 to-pink-600"
  },
  {
    title: "Facebook Advertising Policy Changes for 2024",
    excerpt: "Stay up-to-date with the latest Facebook advertising policy changes and what they mean for your campaigns.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    category: "News",
    date: "March 5, 2024",
    readTime: "6 min read",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Maximizing ROI with Agency Ad Accounts",
    excerpt: "Learn how premium agency accounts can significantly improve your advertising ROI and campaign performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    category: "Strategy",
    date: "March 1, 2024",
    readTime: "9 min read",
    gradient: "from-blue-500 to-purple-600"
  }
];

export default function Blog() {
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
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Insights &{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                resources
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert tips, guides, and strategies for Facebook advertising success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${post.gradient} text-white border-0 shadow-lg`}>
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-purple-600 font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
