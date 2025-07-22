import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Users,
  MessageSquare,
  Heart,
  Zap,
  Trophy,
  TrendingUp,
  Calendar,
  Star,
  ArrowRight,
  Clock,
  MessageCircle,
  ThumbsUp,
} from "lucide-react";

export default function Community() {
  const communityStats = [
    {
      label: "Active Members",
      value: "25,000+",
      icon: Users,
      color: "tw-primary",
      gradient: "from-tw-primary to-tw-accent",
    },
    {
      label: "Discussions",
      value: "5,200+",
      icon: MessageSquare,
      color: "tw-blue",
      gradient: "from-tw-blue to-tw-pink",
    },
    {
      label: "Solutions Shared",
      value: "18,500+",
      icon: Heart,
      color: "tw-accent",
      gradient: "from-tw-accent to-tw-orange",
    },
    {
      label: "Expert Contributors",
      value: "1,200+",
      icon: Trophy,
      color: "tw-neon",
      gradient: "from-tw-pink to-tw-neon",
    },
  ];

  const featuredDiscussions = [
    {
      id: 1,
      title: "Best Practices for Prompt Engineering in 2024",
      author: "Alex Chen",
      avatar: "👨‍💼",
      category: "AI Prompting",
      replies: 47,
      likes: 156,
      timeAgo: "2 hours ago",
      tags: ["Prompting", "Best Practices", "GPT-4"],
      isHot: true,
      gradient: "from-tw-primary to-tw-accent",
    },
    {
      id: 2,
      title:
        "Comparing AI Image Generators: DALL-E vs Midjourney vs Stable Diffusion",
      author: "Sarah Kim",
      avatar: "👩‍🎨",
      category: "Creative AI",
      replies: 89,
      likes: 234,
      timeAgo: "4 hours ago",
      tags: ["Image Generation", "Comparison", "Creative"],
      isHot: true,
      gradient: "from-tw-blue to-tw-pink",
    },
    {
      id: 3,
      title: "Building Custom AI Workflows for Business Automation",
      author: "Marcus Rodriguez",
      avatar: "👨‍💻",
      category: "Enterprise AI",
      replies: 32,
      likes: 98,
      timeAgo: "6 hours ago",
      tags: ["Automation", "Business", "Workflows"],
      isHot: false,
      gradient: "from-tw-accent to-tw-orange",
    },
  ];

  const categories = [
    {
      name: "AI Tools Discussion",
      description: "Share experiences and get help with AI tools",
      posts: 1250,
      color: "tw-primary",
      icon: "🛠️",
    },
    {
      name: "Prompt Engineering",
      description: "Master the art of AI prompting",
      posts: 890,
      color: "tw-accent",
      icon: "💭",
    },
    {
      name: "Creative AI",
      description: "Art, music, writing, and creative applications",
      posts: 756,
      color: "tw-blue",
      icon: "🎨",
    },
    {
      name: "Business & Enterprise",
      description: "AI adoption in business environments",
      posts: 543,
      color: "tw-pink",
      icon: "💼",
    },
    {
      name: "Research & Development",
      description: "Latest AI research and developments",
      posts: 432,
      color: "tw-orange",
      icon: "🔬",
    },
    {
      name: "Getting Started",
      description: "New to AI? Start your journey here",
      posts: 321,
      color: "tw-neon",
      icon: "🚀",
    },
  ];

  const topContributors = [
    {
      name: "Dr. Emily Watson",
      title: "AI Research Scientist",
      avatar: "👩‍🔬",
      contributions: 245,
      badge: "Expert",
      gradient: "from-tw-primary to-tw-accent",
    },
    {
      name: "Michael Chen",
      title: "Full-Stack Developer",
      avatar: "👨‍💻",
      contributions: 189,
      badge: "Contributor",
      gradient: "from-tw-blue to-tw-pink",
    },
    {
      name: "Lisa Johnson",
      title: "Creative Director",
      avatar: "👩‍🎨",
      contributions: 156,
      badge: "Helper",
      gradient: "from-tw-accent to-tw-orange",
    },
  ];
const navigate=useNavigate()
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
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Community{" "}
              <span className="bg-gradient-to-r from-tw-primary to-tw-accent bg-clip-text text-transparent">
                Forum
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of AI enthusiasts, developers, and researchers.
              Share experiences, get help, ask questions, and stay connected
              with the latest trends in artificial intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-gradient-to-r from-tw-primary to-tw-accent text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Join Discussion
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Browse Topics
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div
              key={index}
              className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-200 group"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl mb-4`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Discussions */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                🔥 Hot Discussions
              </h2>
              <p className="text-gray-400">
                Most engaging conversations this week
              </p>
            </div>
            <button className="text-tw-primary hover:text-tw-accent transition-colors flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-6">
            {featuredDiscussions.map((discussion) => (
              <div
                key={discussion.id}
                className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${discussion.gradient} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}
                  >
                    {discussion.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {discussion.isHot && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          🔥 Hot
                        </span>
                      )}
                      <span className="text-tw-primary text-sm font-medium">
                        {discussion.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        • {discussion.timeAgo}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-tw-primary transition-colors">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span>by {discussion.author}</span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {discussion.replies} replies
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        {discussion.likes} likes
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {discussion.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-800 text-gray-300 px-2 py-1 rounded-lg text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories and Top Contributors */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">
              Discussion Categories
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-tw-primary transition-colors">
                        {category.name}
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">
                        {category.description}
                      </p>
                      <div className="text-xs text-gray-500">
                        {category.posts} posts
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Contributors */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Top Contributors
            </h3>
            <div className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div
                  key={index}
                  className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${contributor.gradient} rounded-lg flex items-center justify-center text-lg`}
                    >
                      {contributor.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-medium">
                          {contributor.name}
                        </h4>
                        <span className="bg-tw-primary text-white px-2 py-0.5 rounded-full text-xs">
                          {contributor.badge}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">
                        {contributor.title}
                      </p>
                      <div className="text-xs text-gray-500">
                        {contributor.contributions} contributions
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-tw-primary/20 to-tw-accent/20 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <MessageCircle className="w-12 h-12 text-tw-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join the Conversation?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with AI enthusiasts worldwide, share your knowledge, and
              learn from the best minds in artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-tw-primary to-tw-accent text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                Create Account
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200">
                Browse as Guest
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
