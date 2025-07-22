import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Calendar,
  TrendingUp,
  Globe,
  Zap,
  ArrowRight,
  Clock,
  Tag,
} from "lucide-react";

export default function News() {
  const featuredNews = [
    {
      id: 1,
      title: "OpenAI Releases GPT-4 Turbo with Enhanced Capabilities",
      excerpt:
        "The latest model brings improved reasoning, faster processing, and reduced costs for developers worldwide.",
      category: "AI Models",
      date: "2024-01-15",
      readTime: "3 min",
      image: "🤖",
      gradient: "from-tw-primary to-tw-accent",
      trending: true,
    },
    {
      id: 2,
      title:
        "Google's Gemini AI Shows Breakthrough in Multimodal Understanding",
      excerpt:
        "New research demonstrates significant improvements in image, text, and audio processing capabilities.",
      category: "Research",
      date: "2024-01-14",
      readTime: "5 min",
      image: "🧠",
      gradient: "from-tw-blue to-tw-pink",
      trending: true,
    },
    {
      id: 3,
      title: "Microsoft Copilot Integration Expands to New Platforms",
      excerpt:
        "AI-powered assistance now available across more enterprise applications and workflows.",
      category: "Enterprise",
      date: "2024-01-13",
      readTime: "4 min",
      image: "💼",
      gradient: "from-tw-accent to-tw-orange",
      trending: false,
    },
  ];

  const recentNews = [
    {
      title: "AI Ethics Framework Released by Leading Tech Companies",
      category: "Policy",
      date: "2024-01-12",
      readTime: "2 min",
    },
    {
      title: "Breakthrough in AI-Powered Drug Discovery",
      category: "Healthcare",
      date: "2024-01-11",
      readTime: "6 min",
    },
    {
      title: "New AI Tools for Creative Content Generation",
      category: "Creative AI",
      date: "2024-01-10",
      readTime: "3 min",
    },
    {
      title: "Robotics and AI Integration Reaches New Milestone",
      category: "Robotics",
      date: "2024-01-09",
      readTime: "4 min",
    },
  ];

  const categories = [
    { name: "AI Models", count: 15, color: "tw-primary" },
    { name: "Research", count: 23, color: "tw-accent" },
    { name: "Enterprise", count: 18, color: "tw-blue" },
    { name: "Creative AI", count: 12, color: "tw-pink" },
    { name: "Healthcare", count: 8, color: "tw-orange" },
    { name: "Policy", count: 6, color: "tw-neon" },
  ];
 
  const navigate =useNavigate()
  return (
    <div className="min-h-screen bg-tw-dark">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tw-primary/20 via-tw-dark to-tw-accent/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
           <button
  onClick={() => navigate(-1)}
  className="mb-6 flex items-center space-x-2 bg-white dark:bg-gray-100 text-black hover:text-white dark:text-black px-4 py-2 rounded-lg shadow hover:bg-black dark:hover:bg-black-600 transition"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
  Back
</button>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-tw-primary to-tw-accent rounded-2xl mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI News &{" "}
              <span className="bg-gradient-to-r from-tw-primary to-tw-accent bg-clip-text text-transparent">
                Updates
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with the latest developments in artificial
              intelligence, breakthrough research, and industry insights from
              around the globe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-tw-primary">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">Trending Stories</span>
              </div>
              <div className="flex items-center gap-2 text-tw-accent">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Updated Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured News */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Featured Stories
          </h2>
          <p className="text-gray-400">
            The most important AI developments this week
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredNews.map((article) => (
            <div
              key={article.id}
              className="group bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div
                className={`h-48 bg-gradient-to-br ${article.gradient} flex items-center justify-center relative`}
              >
                <span className="text-6xl">{article.image}</span>
                {article.trending && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                  <Tag className="w-3 h-3 inline mr-1" />
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tw-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                  <button className="text-tw-primary hover:text-tw-accent transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories and Recent News */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Categories */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">Categories</h3>
            <div className="space-y-4">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white group-hover:text-tw-primary transition-colors">
                      {category.name}
                    </span>
                    <span className={`text-${category.color} font-medium`}>
                      {category.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent News */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">
              Recent Updates
            </h3>
            <div className="space-y-4">
              {recentNews.map((article, index) => (
                <div
                  key={index}
                  className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-tw-primary transition-colors">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-tw-primary transition-colors ml-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-tw-primary/20 to-tw-accent/20 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Zap className="w-12 h-12 text-tw-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our AI news digest and never miss important updates
              from the world of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-tw-gray/60 backdrop-blur-xl border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors"
              />
              <button className="bg-gradient-to-r from-tw-primary to-tw-accent text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-tw-dark border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-tw-primary to-tw-accent rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-tw-primary to-tw-accent bg-clip-text text-transparent">
                Toolworld.ai
              </span>
            </div>
            <p className="text-gray-400">
              Your gateway to the world of AI tools and innovations
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
