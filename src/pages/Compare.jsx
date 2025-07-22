import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Search,
  Plus,
  X,
  Star,
  Check,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Compare() {
  const [selectedTools, setSelectedTools] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const availableTools = [
    {
      id: 1,
      name: "ChatGPT",
      category: "Conversational AI",
      description: "Advanced AI assistant for various tasks and conversations",
      rating: 4.8,
      pricing: "Free/Premium",
      pricePerMonth: 20,
      logo: "🤖",
      features: {
        freeTrials: true,
        apiAccess: true,
        customModels: false,
        multiLanguage: true,
        cloudBased: true,
        onPremise: false,
        support247: true,
        customIntegrations: true,
        analytics: false,
        collaboration: false,
      },
      specifications: {
        maxUsers: "Unlimited",
        storageLimit: "N/A",
        apiCalls: "3M/month",
        accuracy: "95%",
        responseTime: "1-3s",
        uptime: "99.9%",
      },
      pros: [
        "Excellent natural language understanding",
        "Wide range of capabilities",
        "Regular updates and improvements",
        "Strong community support",
      ],
      cons: [
        "Rate limits on free tier",
        "Can be verbose",
        "Knowledge cutoff limitations",
        "No real-time internet access",
      ],
      bestFor: [
        "Content writing",
        "Code assistance",
        "General Q&A",
        "Creative tasks",
      ],
      popularity: 98,
      releaseDate: "2022-11-30",
      lastUpdate: "2024-01-15",
    },
    {
      id: 2,
      name: "Claude",
      category: "Conversational AI",
      description: "Constitutional AI with strong reasoning capabilities",
      rating: 4.7,
      pricing: "Free/Premium",
      pricePerMonth: 15,
      logo: "🧠",
      features: {
        freeTrials: true,
        apiAccess: true,
        customModels: false,
        multiLanguage: true,
        cloudBased: true,
        onPremise: false,
        support247: false,
        customIntegrations: true,
        analytics: false,
        collaboration: false,
      },
      specifications: {
        maxUsers: "Unlimited",
        storageLimit: "N/A",
        apiCalls: "1M/month",
        accuracy: "94%",
        responseTime: "2-4s",
        uptime: "99.8%",
      },
      pros: [
        "Strong ethical reasoning",
        "Excellent for analysis",
        "Transparent about limitations",
        "Good safety measures",
      ],
      cons: [
        "Smaller community",
        "Limited free usage",
        "Newer platform",
        "Less creative than GPT",
      ],
      bestFor: [
        "Research and analysis",
        "Ethical discussions",
        "Professional writing",
        "Complex reasoning",
      ],
      popularity: 75,
      releaseDate: "2023-03-15",
      lastUpdate: "2024-01-10",
    },
    {
      id: 3,
      name: "Midjourney",
      category: "Image Generation",
      description: "AI-powered image generation from text descriptions",
      rating: 4.9,
      pricing: "Premium Only",
      pricePerMonth: 30,
      logo: "🎨",
      features: {
        freeTrials: false,
        apiAccess: false,
        customModels: true,
        multiLanguage: false,
        cloudBased: true,
        onPremise: false,
        support247: false,
        customIntegrations: false,
        analytics: false,
        collaboration: true,
      },
      specifications: {
        maxUsers: "Unlimited",
        storageLimit: "Unlimited",
        apiCalls: "N/A",
        accuracy: "90%",
        responseTime: "60-120s",
        uptime: "99.5%",
      },
      pros: [
        "Exceptional image quality",
        "Artistic and creative outputs",
        "Strong community",
        "Regular model updates",
      ],
      cons: [
        "No free tier",
        "Discord-only interface",
        "Can be slow during peak",
        "Learning curve for prompts",
      ],
      bestFor: [
        "Digital art creation",
        "Concept visualization",
        "Marketing materials",
        "Creative projects",
      ],
      popularity: 92,
      releaseDate: "2022-02-28",
      lastUpdate: "2024-01-05",
    },
    {
      id: 4,
      name: "GitHub Copilot",
      category: "Code Assistant",
      description: "AI pair programmer for software development",
      rating: 4.6,
      pricing: "Premium",
      pricePerMonth: 10,
      logo: "👨‍💻",
      features: {
        freeTrials: true,
        apiAccess: false,
        customModels: false,
        multiLanguage: true,
        cloudBased: true,
        onPremise: false,
        support247: true,
        customIntegrations: true,
        analytics: true,
        collaboration: true,
      },
      specifications: {
        maxUsers: "1 per license",
        storageLimit: "N/A",
        apiCalls: "Unlimited",
        accuracy: "85%",
        responseTime: "<1s",
        uptime: "99.9%",
      },
      pros: [
        "Excellent code completion",
        "Supports many languages",
        "IDE integration",
        "Learns from context",
      ],
      cons: [
        "Requires subscription",
        "Sometimes suggests insecure code",
        "Can create dependencies",
        "Limited to coding tasks",
      ],
      bestFor: [
        "Software development",
        "Code completion",
        "Learning programming",
        "Productivity boost",
      ],
      popularity: 88,
      releaseDate: "2021-06-29",
      lastUpdate: "2024-01-20",
    },
    {
      id: 5,
      name: "Jasper",
      category: "Content Writing",
      description: "AI content creation platform for marketing",
      rating: 4.5,
      pricing: "Premium",
      pricePerMonth: 49,
      logo: "✍️",
      features: {
        freeTrials: true,
        apiAccess: true,
        customModels: false,
        multiLanguage: true,
        cloudBased: true,
        onPremise: false,
        support247: true,
        customIntegrations: true,
        analytics: true,
        collaboration: true,
      },
      specifications: {
        maxUsers: "5-50",
        storageLimit: "Unlimited",
        apiCalls: "100K/month",
        accuracy: "88%",
        responseTime: "3-5s",
        uptime: "99.7%",
      },
      pros: [
        "Marketing-focused templates",
        "Brand voice training",
        "Team collaboration",
        "Plagiarism checker",
      ],
      cons: [
        "Expensive pricing",
        "Learning curve",
        "Quality can vary",
        "Limited free options",
      ],
      bestFor: [
        "Marketing content",
        "Blog writing",
        "Social media posts",
        "Email campaigns",
      ],
      popularity: 72,
      releaseDate: "2021-01-15",
      lastUpdate: "2024-01-12",
    },
    {
      id: 6,
      name: "Stable Diffusion",
      category: "Image Generation",
      description: "Open-source image generation model",
      rating: 4.4,
      pricing: "Free/Premium",
      pricePerMonth: 0,
      logo: "🌟",
      features: {
        freeTrials: true,
        apiAccess: true,
        customModels: true,
        multiLanguage: false,
        cloudBased: false,
        onPremise: true,
        support247: false,
        customIntegrations: true,
        analytics: false,
        collaboration: false,
      },
      specifications: {
        maxUsers: "Unlimited",
        storageLimit: "Self-hosted",
        apiCalls: "Unlimited",
        accuracy: "85%",
        responseTime: "10-30s",
        uptime: "Self-managed",
      },
      pros: [
        "Completely free",
        "Open source",
        "Highly customizable",
        "Active community",
      ],
      cons: [
        "Requires technical setup",
        "Hardware requirements",
        "No official support",
        "Complex for beginners",
      ],
      bestFor: [
        "Custom image generation",
        "Research projects",
        "Cost-sensitive users",
        "Technical enthusiasts",
      ],
      popularity: 65,
      releaseDate: "2022-08-22",
      lastUpdate: "2024-01-08",
    },
  ];

  const filteredTools = availableTools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addTool = (tool) => {
    if (
      selectedTools.length < 4 &&
      !selectedTools.find((t) => t.id === tool.id)
    ) {
      setSelectedTools([...selectedTools, tool]);
      setShowSearch(false);
      setSearchTerm("");
    }
  };

  const removeTool = (toolId) => {
    setSelectedTools(selectedTools.filter((tool) => tool.id !== toolId));
  };

  const FeatureIcon = ({ available }) =>
    available ? (
      <Check className="w-4 h-4 text-tw-accent" />
    ) : (
      <X className="w-4 h-4 text-red-400" />
    );
const navigate =useNavigate()
  return (
    <div className="min-h-screen bg-tw-dark">
      <Navbar />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
             <button
  onClick={() => navigate(-1)}
  className="mb-6 flex items-center space-x-2 bg-white dark:bg-gray-100 text-black hover:text-white dark:text-black px-4 py-2 rounded-lg shadow hover:bg-black dark:hover:bg-black-600 transition"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
  Back
</button>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Tools{" "}
              <span className="bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink bg-clip-text text-transparent">
                Comparison
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Compare up to 4 AI tools side-by-side. Make informed decisions
              with detailed feature comparisons, pricing, and user ratings.
            </p>
          </div>

          {/* Tool Selection */}
          <div className="bg-tw-gray/60 border border-gray-700 rounded-2xl p-6 mb-8">
            <div className="flex flex-wrap gap-4 mb-4">
              {selectedTools.map((tool) => (
                <div
                  key={tool.id}
                  className="flex items-center gap-2 bg-tw-gray border border-gray-600 rounded-lg px-4 py-2"
                >
                  <span className="text-2xl">{tool.logo}</span>
                  <span className="text-white font-medium">{tool.name}</span>
                  <button
                    onClick={() => removeTool(tool.id)}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {selectedTools.length < 4 && (
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className="flex items-center gap-2 bg-gradient-to-r from-tw-primary to-tw-accent text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  <Plus className="w-4 h-4" />
                  Add Tool
                </button>
              )}
            </div>

            {/* Search Interface */}
            {showSearch && (
              <div className="border-t border-gray-600 pt-4">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for AI tools to compare..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-tw-dark/80 border border-gray-600 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-60 overflow-y-auto">
                  {filteredTools.map((tool) => {
                    const isSelected = selectedTools.find(
                      (t) => t.id === tool.id
                    );
                    const isDisabled = selectedTools.length >= 4;

                    return (
                      <button
                        key={tool.id}
                        onClick={() => addTool(tool)}
                        disabled={isSelected || isDisabled}
                        className={`p-3 rounded-lg border transition-all duration-200 ${
                          isSelected
                            ? "bg-tw-primary/20 border-tw-primary text-tw-primary cursor-not-allowed"
                            : isDisabled
                              ? "bg-gray-800 border-gray-600 text-gray-500 cursor-not-allowed"
                              : "bg-tw-gray border-gray-600 text-white hover:border-tw-primary hover:bg-tw-primary/10"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">{tool.logo}</span>
                          <span className="font-medium text-sm">
                            {tool.name}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400">{tool.category}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Comparison Table */}
          {selectedTools.length > 0 ? (
            <div className="space-y-8">
              {/* Basic Information */}
              <div className="bg-tw-gray/60 border border-gray-700 rounded-2xl overflow-hidden">
                <div className="bg-tw-gray border-b border-gray-600 p-4">
                  <h2 className="text-xl font-bold text-white">
                    Basic Information
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left p-4 text-gray-300 font-medium">
                          Feature
                        </th>
                        {selectedTools.map((tool) => (
                          <th
                            key={tool.id}
                            className="text-center p-4 min-w-[200px]"
                          >
                            <div className="flex flex-col items-center gap-2">
                              <span className="text-3xl">{tool.logo}</span>
                              <span className="font-bold text-white">
                                {tool.name}
                              </span>
                              <span className="text-sm text-gray-400">
                                {tool.category}
                              </span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-600 hover:bg-tw-gray/30">
                        <td className="p-4 font-medium text-gray-300">
                          Description
                        </td>
                        {selectedTools.map((tool) => (
                          <td
                            key={tool.id}
                            className="p-4 text-center text-gray-300 text-sm"
                          >
                            {tool.description}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-gray-600 hover:bg-tw-gray/30">
                        <td className="p-4 font-medium text-gray-300">
                          Rating
                        </td>
                        {selectedTools.map((tool) => (
                          <td key={tool.id} className="p-4 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-white font-medium">
                                {tool.rating}
                              </span>
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-gray-600 hover:bg-tw-gray/30">
                        <td className="p-4 font-medium text-gray-300">
                          Pricing
                        </td>
                        {selectedTools.map((tool) => (
                          <td key={tool.id} className="p-4 text-center">
                            <div className="flex flex-col items-center gap-1">
                              <span className="text-white font-medium">
                                {tool.pricing}
                              </span>
                              {tool.pricePerMonth && (
                                <span className="text-tw-accent text-sm">
                                  ${tool.pricePerMonth}/mo
                                </span>
                              )}
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-gray-600 hover:bg-tw-gray/30">
                        <td className="p-4 font-medium text-gray-300">
                          Popularity
                        </td>
                        {selectedTools.map((tool) => (
                          <td key={tool.id} className="p-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <TrendingUp className="w-4 h-4 text-tw-accent" />
                              <span className="text-white">
                                {tool.popularity}%
                              </span>
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Features Comparison */}
              <div className="bg-tw-gray/60 border border-gray-700 rounded-2xl overflow-hidden">
                <div className="bg-tw-gray border-b border-gray-600 p-4">
                  <h2 className="text-xl font-bold text-white">Features</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left p-4 text-gray-300 font-medium">
                          Feature
                        </th>
                        {selectedTools.map((tool) => (
                          <th
                            key={tool.id}
                            className="text-center p-4 text-white font-medium"
                          >
                            {tool.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Free Trial", "freeTrials"],
                        ["API Access", "apiAccess"],
                        ["Custom Models", "customModels"],
                        ["Multi-Language", "multiLanguage"],
                        ["Cloud Based", "cloudBased"],
                        ["On-Premise", "onPremise"],
                        ["24/7 Support", "support247"],
                        ["Custom Integrations", "customIntegrations"],
                        ["Analytics", "analytics"],
                        ["Collaboration", "collaboration"],
                      ].map(([label, key]) => (
                        <tr
                          key={key}
                          className="border-b border-gray-600 hover:bg-tw-gray/30"
                        >
                          <td className="p-4 font-medium text-gray-300">
                            {label}
                          </td>
                          {selectedTools.map((tool) => (
                            <td key={tool.id} className="p-4 text-center">
                              <FeatureIcon
                                available={tool.features[key]}
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-tw-gray/60 border border-gray-700 rounded-2xl overflow-hidden">
                <div className="bg-tw-gray border-b border-gray-600 p-4">
                  <h2 className="text-xl font-bold text-white">
                    Specifications
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left p-4 text-gray-300 font-medium">
                          Specification
                        </th>
                        {selectedTools.map((tool) => (
                          <th
                            key={tool.id}
                            className="text-center p-4 text-white font-medium"
                          >
                            {tool.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Max Users", "maxUsers"],
                        ["Storage Limit", "storageLimit"],
                        ["API Calls", "apiCalls"],
                        ["Accuracy", "accuracy"],
                        ["Response Time", "responseTime"],
                        ["Uptime", "uptime"],
                      ].map(([label, key]) => (
                        <tr
                          key={key}
                          className="border-b border-gray-600 hover:bg-tw-gray/30"
                        >
                          <td className="p-4 font-medium text-gray-300">
                            {label}
                          </td>
                          {selectedTools.map((tool) => (
                            <td
                              key={tool.id}
                              className="p-4 text-center text-gray-300"
                            >
                              {tool.specifications[key]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {selectedTools.map((tool) => (
                  <div
                    key={tool.id}
                    className="bg-tw-gray/60 border border-gray-700 rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">{tool.logo}</span>
                      <h3 className="text-xl font-bold text-white">
                        {tool.name}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-tw-accent font-semibold mb-3">
                          Pros
                        </h4>
                        <ul className="space-y-2">
                          {tool.pros.map((pro, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm text-gray-300"
                            >
                              <Check className="w-4 h-4 text-tw-accent flex-shrink-0 mt-0.5" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-red-400 font-semibold mb-3">
                          Cons
                        </h4>
                        <ul className="space-y-2">
                          {tool.cons.map((con, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm text-gray-300"
                            >
                              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-tw-blue font-semibold mb-3">
                        Best For
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tool.bestFor.map((use, index) => (
                          <span
                            key={index}
                            className="bg-tw-blue/20 text-tw-blue px-2 py-1 rounded text-xs"
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">⚖️</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Start Comparing AI Tools
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Select up to 4 AI tools to compare their features, pricing, and
                specifications side-by-side. Make informed decisions for your
                projects.
              </p>
              <button
                onClick={() => setShowSearch(true)}
                className="bg-gradient-to-r from-tw-primary to-tw-accent text-white px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-tw-primary/25 transition-all duration-200 transform hover:scale-105 flex items-center gap-2 mx-auto"
              >
                <Plus className="w-5 h-5" />
                Add Your First Tool
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
