
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Play, Clock, User, Filter, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Tutorials() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const tutorials = [
    // AI Fundamentals (5 videos)
    {
      id: 1,
      title: "Introduction to Artificial Intelligence",
      description: "Learn the basics of AI and how it's changing the world",
      duration: "12:30",
      category: "AI Fundamentals",
      channel: "Apna College",
      level: "Beginner",
      thumbnail: "🤖",
      videoUrl: "https://youtu.be/rJ1Qao09CFI?si=eX2bGH6i2o74cdbK",
      views: 15432,
    },
    {
      id: 2,
      title: "Machine Learning vs Deep Learning",
      description: "Understand the key differences and applications",
      duration: "18:45",
      category: "AI Fundamentals",
      channel: "Engineering",
      level: "Beginner",
      thumbnail: "🧠",
      videoUrl: "https://youtu.be/Z27llwBA0Uw?si=425j44eAnoqOeu2Q",
      views: 12890,
    },
    {
      id: 3,
      title: "Neural Networks Explained Simply",
      description: "A beginner-friendly introduction to neural networks",
      duration: "25:10",
      category: "AI Fundamentals",
      channel: "IBM Tchnology",
      level: "Intermediate",
      thumbnail: "🕸️",
      videoUrl: "https://youtu.be/jmmW0F0biz0?si=6SvsDiKUn0BauIR4",
      views: 9876,
    },
    {
      id: 4,
      title: "AI Ethics and Responsible Development",
      description: "Understanding the ethical implications of AI",
      duration: "22:15",
      category: "AI Fundamentals",
      channel: "ISG Group",
      level: "Beginner",
      thumbnail: "⚖️",
      videoUrl: "https://youtu.be/v0Pg6jHKHfI?si=u4-83f5OWOIVkQGh",
      views: 8234,
    },
    {
      id: 5,
      title: "The Future of AI: Trends and Predictions",
      description: "Explore upcoming AI trends and technologies",
      duration: "28:30",
      category: "AI Fundamentals",
      channel: "AI Uncovered",
      level: "Intermediate",
      thumbnail: "🔮",
      videoUrl: "https://youtu.be/z5lD3i-6Eng?si=e8DQRnDIj7DBTQiC",
      views: 11567,
    },

    // Prompt Engineering (5 videos)
    {
      id: 6,
      title: "Prompt Engineering Basics",
      description: "Learn to write effective prompts for AI models",
      duration: "15:20",
      category: "Prompt Engineering",
      channel: "Simplilearn",
      level: "Beginner",
      thumbnail: "💡",
      videoUrl: "https://youtu.be/BzIF4hrEgyk?si=b45LRXu-BFPxzH23",
      views: 18543,
    },
    {
      id: 7,
      title: "Advanced Prompt Techniques",
      description: "Master complex prompting strategies",
      duration: "32:45",
      category: "Prompt Engineering",
      channel: "Great Learning",
      level: "Advanced",
      thumbnail: "🎯",
      videoUrl: "https://youtu.be/5i2Hn8OG94o?si=pWNfkYeXAyTu4g6S",
      views: 7892,
    },
    {
      id: 8,
      title: "Chain-of-Thought Prompting",
      description: "Guide AI through step-by-step reasoning",
      duration: "19:10",
      category: "Prompt Engineering",
      channel: "Analytics Vidhya",
      level: "Intermediate",
      thumbnail: "⛓️",
      videoUrl: "https://youtu.be/5-Fv_ZoAwrE?si=_6gGfN26d6SIq7te",
      views: 6543,
    },
    {
      id: 9,
      title: "Prompt Templates for Different Use Cases",
      description: "Ready-to-use templates for various scenarios",
      duration: "24:35",
      category: "Prompt Engineering",
      channel: "Nisthek AI",
      level: "Beginner",
      thumbnail: "📝",
      videoUrl: "https://youtu.be/UlGbNf_Hjeg?si=hnlaV0TRKwstzBdV",
      views: 13247,
    },
    {
      id: 10,
      title: "Debugging and Optimizing Prompts",
      description: "Troubleshoot and improve your prompts",
      duration: "21:50",
      category: "Prompt Engineering",
      channel: "IBM Technology",
      level: "Intermediate",
      thumbnail: "🔧",
      videoUrl: "https://youtu.be/zYGDpG-pTho?si=Osdz-otFFhp5K5KK",
      views: 5634,
    },

    // Content Creation (5 videos)
    {
      id: 11,
      title: "AI-Powered Content Writing",
      description: "Create compelling content with AI assistance",
      duration: "16:25",
      category: "Content Creation",
      channel: "App Wiz Tutorial",
      level: "Beginner",
      thumbnail: "✍️",
      videoUrl: "https://youtu.be/bA6ARlW74SE?si=SIal4Wik400PxLLI",
      views: 20145,
    },
    {
      id: 12,
      title: "Image Generation with AI",
      description: "Master AI image creation tools like Midjourney",
      duration: "29:40",
      category: "Content Creation",
      channel: "IBM Technology",
      level: "Intermediate",
      thumbnail: "🎨",
      videoUrl: "https://youtu.be/x2GRE-RzmD8?si=CWp1jbj0oPB_7sBM",
      views: 16789,
    },
    {
      id: 13,
      title: "Video Creation and Editing with AI",
      description: "Produce professional videos using AI tools",
      duration: "35:15",
      category: "Content Creation",
      channel: "Digital Raj",
      level: "Advanced",
      thumbnail: "🎬",
      videoUrl: "https://youtu.be/xJhbirj2tnw?si=Ffa4xyri5WQOQ-K9",
      views: 9823,
    },
    {
      id: 14,
      title: "AI Voice and Audio Generation",
      description: "Create realistic voices and audio content",
      duration: "18:30",
      category: "Content Creation",
      channel: "The Grow",
      level: "Intermediate",
      thumbnail: "🎙️",
      videoUrl: "https://youtu.be/UXvuqsihiHI?si=KmlM3iMazEqtcqaR",
      views: 7456,
    },
    {
      id: 15,
      title: "Social Media Content with AI",
      description: "Scale your social media presence with AI",
      duration: "22:05",
      category: "Content Creation",
      channel: "Website Learner",
      level: "Beginner",
      thumbnail: "📱",
      videoUrl: "https://youtu.be/RvkchPh7JSU?si=8HvcjWsFHZwrsdxU",
      views: 14321,
    },

    // Business Applications (5 videos)
    {
      id: 16,
      title: "AI for Business Automation",
      description: "Streamline business processes with AI",
      duration: "26:40",
      category: "Business Applications",
      channel: "The AI Advantage",
      level: "Intermediate",
      thumbnail: "🏢",
      videoUrl: "https://youtu.be/KSOxkhWs2Ic?si=0TSGi0N01UGlCyq-",
      views: 11987,
    },
    {
      id: 17,
      title: "Customer Service AI Solutions",
      description: "Implement AI chatbots and support systems",
      duration: "31:20",
      category: "Business Applications",
      channel: "IBM Technology",
      level: "Advanced",
      thumbnail: "🎧",
      videoUrl: "https://youtu.be/_3-ZOKKo7II?si=G_QVTFWdyDgUvM7u",
      views: 8765,
    },
    {
      id: 18,
      title: "AI-Driven Marketing Strategies",
      description: "Leverage AI for better marketing outcomes",
      duration: "23:55",
      category: "Business Applications",
      channel: "TED",
      level: "Intermediate",
      thumbnail: "📊",
      videoUrl: "https://youtu.be/3MwMII8n1qM?si=WwELE_Fix_s6b7mj",
      views: 10234,
    },
    {
      id: 19,
      title: "Data Analysis with AI Tools",
      description: "Extract insights from data using AI",
      duration: "28:15",
      category: "Business Applications",
      channel: "Code With Harry",
      level: "Advanced",
      thumbnail: "📈",
      videoUrl: "https://youtu.be/-O5aqZ55QR8?si=R_jWE-QhYVx7eqTm",
      views: 6789,
    },
    {
      id: 20,
      title: "AI Project Management",
      description: "Manage projects more efficiently with AI",
      duration: "20:45",
      category: "Business Applications",
      channel: "Sheryians Coding School",
      level: "Beginner",
      thumbnail: "📋",
      videoUrl: "https://youtu.be/J-S-zdfyCDo?si=K_HE1MNIQzMzF0iy",
      views: 9456,
    },

    // Development & Technical (5 videos)
    {
      id: 21,
      title: "AI-Assisted Programming",
      description: "Code faster with AI development tools",
      duration: "33:10",
      category: "Development & Technical",
      channel: "Code Evaluation",
      level: "Intermediate",
      thumbnail: "💻",
      videoUrl: "https://youtu.be/rM0xpwENa8I?si=JaL2r7-gGmy9iJNk",
      views: 15678,
    },
    {
      id: 22,
      title: "Building AI Applications",
      description: "Create your own AI-powered applications",
      duration: "45:30",
      category: "Development & Technical",
      channel: "IBM Technology",
      level: "Advanced",
      thumbnail: "🛠️",
      videoUrl: "https://youtu.be/xBSMBEowLcY?si=3rUNqyZ68ccIngfs",
      views: 5234,
    },
    {
      id: 23,
      title: "API Integration for AI Services",
      description: "Connect AI APIs to your applications",
      duration: "27:20",
      category: "Development & Technical",
      channel: "IBM Technology",
      level: "Intermediate",
      thumbnail: "🔗",
      videoUrl: "https://youtu.be/7j1t3UZA1TY?si=a4ld-d7-vyOCYR46",
      views: 8901,
    },
    {
      id: 24,
      title: "No-Code AI Solutions",
      description: "Build AI solutions without coding",
      duration: "19:45",
      category: "Development & Technical",
      channel: "Builder centeral",
      level: "Beginner",
      thumbnail: "🎮",
      videoUrl: "https://youtu.be/8s-mse5AnKo?si=00f8wVVLFrPp4csY",
      views: 12456,
    },
    {
      id: 25,
      title: "AI Model Training and Fine-tuning",
      description: "Train and customize AI models",
      duration: "41:25",
      category: "Development & Technical",
      channel: "Sheryians Coding School",
      level: "Advanced",
      thumbnail: "⚙️",
      videoUrl: "https://youtu.be/UFAHXZW2hU8?si=y-J8PKWo_naoD0g9",
      views: 4567,
    },
  ];

  const categories = [
    "All",
    "AI Fundamentals",
    "Prompt Engineering",
    "Content Creation",
    "Business Applications",
    "Development & Technical",
  ];

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesSearch =
      tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutorial.channel.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || tutorial.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All" || tutorial.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const getCategoryColor = (category) => {
    const colors = {
      "AI Fundamentals": "tw-primary",
      "Prompt Engineering": "tw-accent",
      "Content Creation": "tw-pink",
      "Business Applications": "tw-blue",
      "Development & Technical": "tw-orange",
    };
    return colors[category] || "tw-primary";
  };

  const getLevelColor = (level) => {
    const colors = {
      Beginner: "tw-accent",
      Intermediate: "tw-blue",
      Advanced: "tw-orange",
    };
    return colors[level] || "tw-primary";
  };

  const navigate =useNavigate()

  return (
    <div className="min-h-screen bg-tw-dark">
      <Navbar />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <button
  onClick={() => navigate(-1)}
  className="mb-6 flex items-center space-x-2 bg-white dark:bg-gray-100 text-black hover:text-white dark:text-black px-4 py-2 rounded-lg shadow hover:bg-black dark:hover:bg-black-600 transition"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
  Back
</button>



          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Learning{" "}
              <span className="bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink bg-clip-text text-transparent">
                Hub
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Master AI tools with our comprehensive video tutorials. From
              beginner guides to advanced techniques across 5 specialized
              categories.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-tw-gray/60 border border-gray-700 rounded-2xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tutorials, instructors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-tw-dark/80 border border-gray-600 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-tw-dark/80 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tw-primary transition-colors"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-tw-dark/80 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tw-primary transition-colors"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level} Level
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-300">
              Showing {filteredTutorials.length} of {tutorials.length} tutorials
            </p>
          </div>

          {/* Tutorials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-tw-gray/80 border border-gray-700 rounded-2xl overflow-hidden hover:border-tw-primary/40 transition-all duration-300 group"
              >
                {/* Thumbnail */}
                <div className="relative bg-gradient-to-br from-tw-primary/20 to-tw-accent/20 h-48 flex items-center justify-center">
                  <span className="text-6xl">{tutorial.thumbnail}</span>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => window.open(tutorial.videoUrl, '_blank')}
                      className="bg-white/90 text-tw-dark w-16 h-16 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {tutorial.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span
                      className={`bg-${getCategoryColor(tutorial.category)}/20 text-${getCategoryColor(tutorial.category)} px-2 py-1 rounded-lg text-xs font-medium`}
                    >
                      {tutorial.category}
                    </span>
                    <span
                      className={`bg-${getLevelColor(tutorial.level)}/20 text-${getLevelColor(tutorial.level)} px-2 py-1 rounded-lg text-xs font-medium`}
                    >
                      {tutorial.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tw-primary transition-colors">
                    {tutorial.title}
                  </h3>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {tutorial.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{tutorial.channel}</span>
                    </div>
                    <span className="text-sm text-gray-400">
                      {tutorial.views.toLocaleString()} views
                    </span>
                  </div>

                  <button
                    onClick={() => window.open(tutorial.videoUrl, '_blank')}
                    className="w-full bg-gradient-to-r from-tw-primary to-tw-accent text-white py-3 rounded-xl hover:shadow-lg hover:shadow-tw-primary/25 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Watch Tutorial
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Category Overview */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Learning{" "}
                <span className="bg-gradient-to-r from-tw-blue to-tw-pink bg-clip-text text-transparent">
                  Paths
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Structured learning across different AI domains
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(1).map((category, index) => {
                const categoryTutorials = tutorials.filter(
                  (t) => t.category === category,
                );
                const gradients = [
                  "from-tw-primary to-tw-accent",
                  "from-tw-accent to-tw-pink",
                  "from-tw-pink to-tw-blue",
                  "from-tw-blue to-tw-orange",
                  "from-tw-orange to-tw-primary",
                ];

                return (
                  <div
                    key={category}
                    className="bg-tw-gray/60 border border-gray-700 rounded-xl p-6 hover:border-tw-primary/40 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${gradients[index]} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <span className="text-white font-bold text-lg">
                        {categoryTutorials.length}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {category}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {categoryTutorials.length} comprehensive tutorials
                    </p>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className="text-tw-primary hover:text-tw-accent transition-colors text-sm font-medium"
                    >
                      Explore →
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
