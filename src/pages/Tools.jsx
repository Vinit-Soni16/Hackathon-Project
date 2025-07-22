import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Search, Heart, ExternalLink, Filter, Grid, List } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Tools() {
  const [tools, setTools] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [favorites, setFavorites] = useState([]);
  const [visitedTools, setVisitedTools] = useState([]);
  const [displayCount, setDisplayCount] = useState(20);

  // Mock data for 100 AI tools
  const aiTools = [
    {
      id: 1,
      name: "ChatGPT",
      category: "Conversational AI",
      description: "Advanced conversational AI for various tasks",
      url: "https://chat.openai.com",
      icon: "🤖",
      rating: 4.9,
      pricing: "Free/Premium",
      tags: ["chat", "writing", "coding"],
    },
    {
      id: 2,
      name: "Claude",
      category: "Conversational AI",
      description: "Anthropic's AI assistant for complex reasoning",
      url: "https://claude.ai",
      icon: "🧠",
      rating: 4.8,
      pricing: "Free/Premium",
      tags: ["reasoning", "analysis", "writing"],
    },
    {
      id: 3,
      name: "Midjourney",
      category: "Image Generation",
      description: "AI-powered image generation from text prompts",
      url: "https://midjourney.com",
      icon: "🎨",
      rating: 4.9,
      pricing: "Premium",
      tags: ["art", "design", "creative"],
    },
    {
      id: 4,
      name: "DALL-E 3",
      category: "Image Generation",
      description: "OpenAI's advanced image generation model",
      url: "https://openai.com/dall-e-3",
      icon: "🖼️",
      rating: 4.8,
      pricing: "Premium",
      tags: ["art", "images", "creative"],
    },
    {
      id: 5,
      name: "GitHub Copilot",
      category: "Code Assistant",
      description: "AI pair programmer for developers",
      url: "https://github.com/features/copilot",
      icon: "👨‍💻",
      rating: 4.7,
      pricing: "Premium",
      tags: ["coding", "development", "programming"],
    },
    {
      id: 6,
      name: "Jasper",
      category: "Content Writing",
      description: "AI content generation for marketing",
      url: "https://jasper.ai",
      icon: "✍️",
      rating: 4.6,
      pricing: "Premium",
      tags: ["writing", "marketing", "content"],
    },
    {
      id: 7,
      name: "Copy.ai",
      category: "Content Writing",
      description: "AI-powered copywriting tool",
      url: "https://copy.ai",
      icon: "📝",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["copywriting", "marketing", "content"],
    },
    {
      id: 8,
      name: "Grammarly",
      category: "Writing Assistant",
      description: "AI writing assistant and grammar checker",
      url: "https://grammarly.com",
      icon: "📚",
      rating: 4.6,
      pricing: "Free/Premium",
      tags: ["grammar", "writing", "editing"],
    },
    {
      id: 9,
      name: "Notion AI",
      category: "Productivity",
      description: "AI-powered workspace and note-taking",
      url: "https://notion.so",
      icon: "📋",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["productivity", "notes", "organization"],
    },
    {
      id: 10,
      name: "Canva AI",
      category: "Design",
      description: "AI-powered design tool",
      url: "https://canva.com",
      icon: "🎨",
      rating: 4.7,
      pricing: "Free/Premium",
      tags: ["design", "graphics", "templates"],
    },
    {
      id: 11,
      name: "RunwayML",
      category: "Video Editing",
      description: "AI video editing and generation",
      url: "https://runwayml.com",
      icon: "🎬",
      rating: 4.6,
      pricing: "Premium",
      tags: ["video", "editing", "generation"],
    },
    {
      id: 12,
      name: "Stable Diffusion",
      category: "Image Generation",
      description: "Open-source image generation model",
      url: "https://stability.ai",
      icon: "🌟",
      rating: 4.7,
      pricing: "Free/Premium",
      tags: ["opensource", "images", "generation"],
    },
    {
      id: 13,
      name: "Loom AI",
      category: "Video",
      description: "AI-powered video messaging",
      url: "https://loom.com",
      icon: "📹",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["video", "communication", "recording"],
    },
    {
      id: 14,
      name: "Otter.ai",
      category: "Transcription",
      description: "AI meeting notes and transcription",
      url: "https://otter.ai",
      icon: "🎤",
      rating: 4.4,
      pricing: "Free/Premium",
      tags: ["transcription", "meetings", "notes"],
    },
    {
      id: 15,
      name: "DeepL",
      category: "Translation",
      description: "AI-powered translation service",
      url: "https://deepl.com",
      icon: "🌐",
      rating: 4.8,
      pricing: "Free/Premium",
      tags: ["translation", "languages", "communication"],
    },
    {
      id: 16,
      name: "Synthesia",
      category: "Video Generation",
      description: "AI video generation with avatars",
      url: "https://synthesia.io",
      icon: "🎭",
      rating: 4.6,
      pricing: "Premium",
      tags: ["video", "avatars", "generation"],
    },
    {
      id: 17,
      name: "Perplexity",
      category: "Search",
      description: "AI-powered search and research",
      url: "https://perplexity.ai",
      icon: "🔍",
      rating: 4.7,
      pricing: "Free/Premium",
      tags: ["search", "research", "information"],
    },
    {
      id: 18,
      name: "Character.AI",
      category: "Conversational AI",
      description: "Create and chat with AI characters",
      url: "https://character.ai",
      icon: "👥",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["characters", "roleplay", "entertainment"],
    },
    {
      id: 19,
      name: "Writesonic",
      category: "Content Writing",
      description: "AI content creation platform",
      url: "https://writesonic.com",
      icon: "🚀",
      rating: 4.4,
      pricing: "Free/Premium",
      tags: ["writing", "content", "marketing"],
    },
    {
      id: 20,
      name: "Murf",
      category: "Voice Synthesis",
      description: "AI voice generation for videos",
      url: "https://murf.ai",
      icon: "🎙️",
      rating: 4.5,
      pricing: "Premium",
      tags: ["voice", "audio", "generation"],
    },
    {
      id: 21,
      name: "Replika",
      category: "Conversational AI",
      description: "AI companion for conversations",
      url: "https://replika.ai",
      icon: "💬",
      rating: 4.3,
      pricing: "Free/Premium",
      tags: ["companion", "conversation", "personal"],
    },
    {
      id: 22,
      name: "Pictory",
      category: "Video Editing",
      description: "AI video creation from text",
      url: "https://pictory.ai",
      icon: "🎞️",
      rating: 4.4,
      pricing: "Premium",
      tags: ["video", "creation", "text-to-video"],
    },
    {
      id: 23,
      name: "Tome",
      category: "Presentation",
      description: "AI-powered presentation creation",
      url: "https://tome.app",
      icon: "📊",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["presentations", "slides", "creation"],
    },
    {
      id: 24,
      name: "Fireflies.ai",
      category: "Meeting Assistant",
      description: "AI meeting recorder and analyzer",
      url: "https://fireflies.ai",
      icon: "🔥",
      rating: 4.6,
      pricing: "Free/Premium",
      tags: ["meetings", "recording", "analysis"],
    },
    {
      id: 25,
      name: "Descript",
      category: "Audio/Video Editing",
      description: "AI-powered media editing",
      url: "https://descript.com",
      icon: "🎵",
      rating: 4.7,
      pricing: "Free/Premium",
      tags: ["editing", "audio", "video"],
    },
    {
      id: 26,
      name: "Replit",
      category: "Code Assistant",
      description: "AI-powered code editor",
      url: "https://replit.com",
      icon: "💻",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["coding", "editor", "collaboration"],
    },
    {
      id: 27,
      name: "Wordtune",
      category: "Writing Assistant",
      description: "AI writing companion",
      url: "https://wordtune.com",
      icon: "📖",
      rating: 4.4,
      pricing: "Free/Premium",
      tags: ["writing", "rewriting", "improvement"],
    },
    {
      id: 28,
      name: "Quillbot",
      category: "Writing Assistant",
      description: "AI paraphrasing tool",
      url: "https://quillbot.com",
      icon: "🪶",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["paraphrasing", "writing", "improvement"],
    },
    {
      id: 29,
      name: "Luma AI",
      category: "3D Generation",
      description: "AI-powered 3D capture and generation",
      url: "https://lumalabs.ai",
      icon: "🎯",
      rating: 4.6,
      pricing: "Free/Premium",
      tags: ["3D", "capture", "generation"],
    },
    {
      id: 30,
      name: "Anthropic Claude",
      category: "Conversational AI",
      description: "Constitutional AI assistant",
      url: "https://claude.ai",
      icon: "⚖️",
      rating: 4.8,
      pricing: "Free/Premium",
      tags: ["ethical", "reasoning", "assistant"],
    },
    {
      id: 31,
      name: "Leonardo AI",
      category: "Image Generation",
      description: "AI art generation platform",
      url: "https://leonardo.ai",
      icon: "🎨",
      rating: 4.6,
      pricing: "Free/Premium",
      tags: ["art", "generation", "creative"],
    },
    {
      id: 32,
      name: "Poe",
      category: "AI Aggregator",
      description: "Multiple AI models in one platform",
      url: "https://poe.com",
      icon: "🎭",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["aggregator", "multiple-models", "platform"],
    },
    {
      id: 33,
      name: "Bard",
      category: "Conversational AI",
      description: "Google's conversational AI",
      url: "https://bard.google.com",
      icon: "🎪",
      rating: 4.4,
      pricing: "Free",
      tags: ["google", "conversation", "research"],
    },
    {
      id: 34,
      name: "Bing Chat",
      category: "Conversational AI",
      description: "Microsoft's AI-powered search chat",
      url: "https://bing.com/chat",
      icon: "🔍",
      rating: 4.3,
      pricing: "Free",
      tags: ["search", "microsoft", "chat"],
    },
    {
      id: 35,
      name: "Hugging Face",
      category: "AI Platform",
      description: "Open-source AI model hub",
      url: "https://huggingface.co",
      icon: "🤗",
      rating: 4.8,
      pricing: "Free/Premium",
      tags: ["opensource", "models", "platform"],
    },
    {
      id: 36,
      name: "Cohere",
      category: "Language Model",
      description: "Enterprise language AI platform",
      url: "https://cohere.ai",
      icon: "🏢",
      rating: 4.5,
      pricing: "Premium",
      tags: ["enterprise", "language", "api"],
    },
    {
      id: 37,
      name: "AI21 Labs",
      category: "Language Model",
      description: "Advanced language models",
      url: "https://ai21.com",
      icon: "🧬",
      rating: 4.4,
      pricing: "Premium",
      tags: ["language", "advanced", "research"],
    },
    {
      id: 38,
      name: "Stability AI",
      category: "Generative AI",
      description: "Open generative AI models",
      url: "https://stability.ai",
      icon: "⚗️",
      rating: 4.6,
      pricing: "Free/Premium",
      tags: ["generative", "opensource", "models"],
    },
    {
      id: 39,
      name: "Runway",
      category: "Creative AI",
      description: "AI tools for creative professionals",
      url: "https://runwayml.com",
      icon: "🎨",
      rating: 4.7,
      pricing: "Premium",
      tags: ["creative", "professional", "tools"],
    },
    {
      id: 40,
      name: "Gamma",
      category: "Presentation",
      description: "AI presentation maker",
      url: "https://gamma.app",
      icon: "📈",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["presentations", "ai-generated", "design"],
    },
    {
      id: 41,
      name: "Superhuman",
      category: "Email Assistant",
      description: "AI-powered email client",
      url: "https://superhuman.com",
      icon: "⚡",
      rating: 4.6,
      pricing: "Premium",
      tags: ["email", "productivity", "ai-powered"],
    },
    {
      id: 42,
      name: "Zapier",
      category: "Automation",
      description: "AI-powered workflow automation",
      url: "https://zapier.com",
      icon: "🔗",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["automation", "workflows", "integration"],
    },
    {
      id: 43,
      name: "Monday.com",
      category: "Project Management",
      description: "AI-enhanced project management",
      url: "https://monday.com",
      icon: "📅",
      rating: 4.4,
      pricing: "Premium",
      tags: ["project-management", "ai-enhanced", "collaboration"],
    },
    {
      id: 44,
      name: "Clickup",
      category: "Productivity",
      description: "AI-powered productivity platform",
      url: "https://clickup.com",
      icon: "✅",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["productivity", "tasks", "ai-powered"],
    },
    {
      id: 45,
      name: "Figma",
      category: "Design",
      description: "AI-enhanced design tool",
      url: "https://figma.com",
      icon: "🎨",
      rating: 4.7,
      pricing: "Free/Premium",
      tags: ["design", "collaboration", "ai-enhanced"],
    },
    {
      id: 46,
      name: "Framer",
      category: "Web Design",
      description: "AI website builder",
      url: "https://framer.com",
      icon: "🌐",
      rating: 4.6,
      pricing: "Free/Premium",
      tags: ["web-design", "ai-builder", "websites"],
    },
    {
      id: 47,
      name: "Webflow",
      category: "Web Design",
      description: "AI-assisted web design",
      url: "https://webflow.com",
      icon: "💻",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["web-design", "ai-assisted", "no-code"],
    },
    {
      id: 48,
      name: "Bubble",
      category: "No-Code",
      description: "AI-powered app builder",
      url: "https://bubble.io",
      icon: "🛠️",
      rating: 4.4,
      pricing: "Free/Premium",
      tags: ["no-code", "app-builder", "ai-powered"],
    },
    {
      id: 49,
      name: "Airtable",
      category: "Database",
      description: "AI-enhanced database platform",
      url: "https://airtable.com",
      icon: "🗃️",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["database", "ai-enhanced", "collaboration"],
    },
    {
      id: 50,
      name: "Notion",
      category: "Productivity",
      description: "AI-powered workspace",
      url: "https://notion.so",
      icon: "📝",
      rating: 4.6,
      pricing: "Free/Premium",
      tags: ["workspace", "ai-powered", "notes"],
    },
    {
      id: 51,
      name: "Calendly",
      category: "Scheduling",
      description: "AI scheduling assistant",
      url: "https://calendly.com",
      icon: "📅",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["scheduling", "ai-assistant", "meetings"],
    },
    {
      id: 52,
      name: "Luma",
      category: "Event Management",
      description: "AI event discovery and management",
      url: "https://lu.ma",
      icon: "🎫",
      rating: 4.4,
      pricing: "Free",
      tags: ["events", "discovery", "management"],
    },
    {
      id: 53,
      name: "Typeform",
      category: "Forms",
      description: "AI-powered form builder",
      url: "https://typeform.com",
      icon: "📋",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["forms", "ai-powered", "surveys"],
    },
    {
      id: 54,
      name: "Tally",
      category: "Forms",
      description: "Simple AI form creator",
      url: "https://tally.so",
      icon: "📊",
      rating: 4.3,
      pricing: "Free/Premium",
      tags: ["forms", "simple", "creator"],
    },
    {
      id: 55,
      name: "ConvertKit",
      category: "Email Marketing",
      description: "AI email marketing platform",
      url: "https://convertkit.com",
      icon: "📧",
      rating: 4.4,
      pricing: "Free/Premium",
      tags: ["email-marketing", "ai-powered", "automation"],
    },
    {
      id: 56,
      name: "Mailchimp",
      category: "Email Marketing",
      description: "AI marketing automation",
      url: "https://mailchimp.com",
      icon: "🐵",
      rating: 4.3,
      pricing: "Free/Premium",
      tags: ["marketing", "automation", "email"],
    },
    {
      id: 57,
      name: "HubSpot",
      category: "CRM",
      description: "AI-powered CRM platform",
      url: "https://hubspot.com",
      icon: "🎯",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["crm", "ai-powered", "sales"],
    },
    {
      id: 58,
      name: "Salesforce",
      category: "CRM",
      description: "AI-enhanced customer platform",
      url: "https://salesforce.com",
      icon: "☁️",
      rating: 4.4,
      pricing: "Premium",
      tags: ["crm", "ai-enhanced", "enterprise"],
    },
    {
      id: 59,
      name: "Zendesk",
      category: "Customer Support",
      description: "AI customer service platform",
      url: "https://zendesk.com",
      icon: "🎧",
      rating: 4.3,
      pricing: "Premium",
      tags: ["customer-support", "ai-powered", "service"],
    },
    {
      id: 60,
      name: "Intercom",
      category: "Customer Support",
      description: "AI messenger for customer support",
      url: "https://intercom.com",
      icon: "💬",
      rating: 4.4,
      pricing: "Premium",
      tags: ["messenger", "customer-support", "ai"],
    },
    {
      id: 61,
      name: "Stripe",
      category: "Payments",
      description: "AI fraud detection payments",
      url: "https://stripe.com",
      icon: "💳",
      rating: 4.6,
      pricing: "Transaction-based",
      tags: ["payments", "fraud-detection", "ai"],
    },
    {
      id: 62,
      name: "Square",
      category: "Payments",
      description: "AI business management",
      url: "https://squareup.com",
      icon: "⬜",
      rating: 4.4,
      pricing: "Transaction-based",
      tags: ["business", "management", "payments"],
    },
    {
      id: 63,
      name: "Shopify",
      category: "E-commerce",
      description: "AI e-commerce platform",
      url: "https://shopify.com",
      icon: "🛒",
      rating: 4.5,
      pricing: "Premium",
      tags: ["e-commerce", "ai-powered", "online-store"],
    },
    {
      id: 64,
      name: "WooCommerce",
      category: "E-commerce",
      description: "AI WordPress e-commerce",
      url: "https://woocommerce.com",
      icon: "🛍️",
      rating: 4.3,
      pricing: "Free/Premium",
      tags: ["wordpress", "e-commerce", "ai"],
    },
    {
      id: 65,
      name: "Magento",
      category: "E-commerce",
      description: "AI commerce platform",
      url: "https://magento.com",
      icon: "🏪",
      rating: 4.2,
      pricing: "Free/Premium",
      tags: ["commerce", "platform", "ai"],
    },
    {
      id: 66,
      name: "BigCommerce",
      category: "E-commerce",
      description: "AI-powered online stores",
      url: "https://bigcommerce.com",
      icon: "🏬",
      rating: 4.4,
      pricing: "Premium",
      tags: ["online-stores", "ai-powered", "commerce"],
    },
    {
      id: 67,
      name: "Wix",
      category: "Website Builder",
      description: "AI website creation",
      url: "https://wix.com",
      icon: "🌐",
      rating: 4.3,
      pricing: "Free/Premium",
      tags: ["website-builder", "ai-creation", "drag-drop"],
    },
    {
      id: 68,
      name: "Squarespace",
      category: "Website Builder",
      description: "AI design assistance",
      url: "https://squarespace.com",
      icon: "⬛",
      rating: 4.4,
      pricing: "Premium",
      tags: ["design", "assistance", "websites"],
    },
    {
      id: 69,
      name: "WordPress",
      category: "CMS",
      description: "AI content management",
      url: "https://wordpress.com",
      icon: "📰",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["cms", "content-management", "ai"],
    },
    {
      id: 70,
      name: "Ghost",
      category: "CMS",
      description: "AI publishing platform",
      url: "https://ghost.org",
      icon: "👻",
      rating: 4.4,
      pricing: "Free/Premium",
      tags: ["publishing", "platform", "ai"],
    },
    {
      id: 71,
      name: "Medium",
      category: "Publishing",
      description: "AI writing platform",
      url: "https://medium.com",
      icon: "📖",
      rating: 4.2,
      pricing: "Free/Premium",
      tags: ["writing", "platform", "publishing"],
    },
    {
      id: 72,
      name: "Substack",
      category: "Newsletter",
      description: "AI newsletter platform",
      url: "https://substack.com",
      icon: "📮",
      rating: 4.3,
      pricing: "Free/Premium",
      tags: ["newsletter", "platform", "publishing"],
    },
    {
      id: 73,
      name: "Beehiiv",
      category: "Newsletter",
      description: "AI newsletter tools",
      url: "https://beehiiv.com",
      icon: "🐝",
      rating: 4.4,
      pricing: "Free/Premium",
      tags: ["newsletter", "tools", "ai-powered"],
    },
    {
      id: 74,
      name: "ConvertFlow",
      category: "Conversion",
      description: "AI conversion optimization",
      url: "https://convertflow.com",
      icon: "🔄",
      rating: 4.3,
      pricing: "Premium",
      tags: ["conversion", "optimization", "ai"],
    },
    {
      id: 75,
      name: "Optimizely",
      category: "A/B Testing",
      description: "AI experimentation platform",
      url: "https://optimizely.com",
      icon: "🧪",
      rating: 4.4,
      pricing: "Premium",
      tags: ["ab-testing", "experimentation", "ai"],
    },
    {
      id: 76,
      name: "Google Analytics",
      category: "Analytics",
      description: "AI insights and analytics",
      url: "https://analytics.google.com",
      icon: "📊",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["analytics", "insights", "ai"],
    },
    {
      id: 77,
      name: "Mixpanel",
      category: "Analytics",
      description: "AI product analytics",
      url: "https://mixpanel.com",
      icon: "📈",
      rating: 4.4,
      pricing: "Free/Premium",
      tags: ["product-analytics", "ai-insights", "tracking"],
    },
    {
      id: 78,
      name: "Amplitude",
      category: "Analytics",
      description: "AI behavioral analytics",
      url: "https://amplitude.com",
      icon: "📉",
      rating: 4.3,
      pricing: "Free/Premium",
      tags: ["behavioral", "analytics", "ai"],
    },
    {
      id: 79,
      name: "Hotjar",
      category: "User Experience",
      description: "AI user behavior analysis",
      url: "https://hotjar.com",
      icon: "🔥",
      rating: 4.4,
      pricing: "Free/Premium",
      tags: ["user-behavior", "analysis", "heatmaps"],
    },
    {
      id: 80,
      name: "FullStory",
      category: "User Experience",
      description: "AI session replay platform",
      url: "https://fullstory.com",
      icon: "🎬",
      rating: 4.5,
      pricing: "Premium",
      tags: ["session-replay", "user-experience", "ai"],
    },
    {
      id: 81,
      name: "Segment",
      category: "Data Platform",
      description: "AI customer data platform",
      url: "https://segment.com",
      icon: "🎯",
      rating: 4.4,
      pricing: "Premium",
      tags: ["customer-data", "platform", "ai"],
    },
    {
      id: 82,
      name: "Snowflake",
      category: "Data Warehouse",
      description: "AI data cloud platform",
      url: "https://snowflake.com",
      icon: "❄️",
      rating: 4.5,
      pricing: "Premium",
      tags: ["data-warehouse", "cloud", "ai"],
    },
    {
      id: 83,
      name: "Databricks",
      category: "Data Science",
      description: "AI and ML platform",
      url: "https://databricks.com",
      icon: "🧪",
      rating: 4.6,
      pricing: "Premium",
      tags: ["data-science", "ml-platform", "ai"],
    },
    {
      id: 84,
      name: "Tableau",
      category: "Data Visualization",
      description: "AI data visualization",
      url: "https://tableau.com",
      icon: "📊",
      rating: 4.4,
      pricing: "Premium",
      tags: ["data-visualization", "ai-insights", "analytics"],
    },
    {
      id: 85,
      name: "Power BI",
      category: "Data Visualization",
      description: "AI business intelligence",
      url: "https://powerbi.microsoft.com",
      icon: "📈",
      rating: 4.3,
      pricing: "Premium",
      tags: ["business-intelligence", "microsoft", "ai"],
    },
    {
      id: 86,
      name: "Looker",
      category: "Data Platform",
      description: "AI data platform",
      url: "https://looker.com",
      icon: "👀",
      rating: 4.4,
      pricing: "Premium",
      tags: ["data-platform", "ai-powered", "analytics"],
    },
    {
      id: 87,
      name: "Metabase",
      category: "Analytics",
      description: "Open-source BI with AI",
      url: "https://metabase.com",
      icon: "📊",
      rating: 4.2,
      pricing: "Free/Premium",
      tags: ["open-source", "business-intelligence", "ai"],
    },
    {
      id: 88,
      name: "Grafana",
      category: "Monitoring",
      description: "AI observability platform",
      url: "https://grafana.com",
      icon: "📉",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["monitoring", "observability", "ai"],
    },
    {
      id: 89,
      name: "Datadog",
      category: "Monitoring",
      description: "AI monitoring and security",
      url: "https://datadoghq.com",
      icon: "🐕",
      rating: 4.4,
      pricing: "Premium",
      tags: ["monitoring", "security", "ai"],
    },
    {
      id: 90,
      name: "New Relic",
      category: "Monitoring",
      description: "AI observability platform",
      url: "https://newrelic.com",
      icon: "🔍",
      rating: 4.3,
      pricing: "Free/Premium",
      tags: ["observability", "monitoring", "ai"],
    },
    {
      id: 91,
      name: "Sentry",
      category: "Error Tracking",
      description: "AI error monitoring",
      url: "https://sentry.io",
      icon: "🛡️",
      rating: 4.5,
      pricing: "Free/Premium",
      tags: ["error-tracking", "monitoring", "ai"],
    },
    {
      id: 92,
      name: "LogRocket",
      category: "Session Replay",
      description: "AI session replay and monitoring",
      url: "https://logrocket.com",
      icon: "📹",
      rating: 4.4,
      pricing: "Premium",
      tags: ["session-replay", "monitoring", "ai"],
    },
    {
      id: 93,
      name: "Bugsnag",
      category: "Error Tracking",
      description: "AI error monitoring platform",
      url: "https://bugsnag.com",
      icon: "🐛",
      rating: 4.3,
      pricing: "Premium",
      tags: ["error-monitoring", "platform", "ai"],
    },
    {
      id: 94,
      name: "Rollbar",
      category: "Error Tracking",
      description: "AI error tracking service",
      url: "https://rollbar.com",
      icon: "🎳",
      rating: 4.2,
      pricing: "Free/Premium",
      tags: ["error-tracking", "service", "ai"],
    },
    {
      id: 95,
      name: "Honeybadger",
      category: "Error Tracking",
      description: "AI exception monitoring",
      url: "https://honeybadger.io",
      icon: "🍯",
      rating: 4.3,
      pricing: "Premium",
      tags: ["exception-monitoring", "ai-powered", "tracking"],
    },
    {
      id: 96,
      name: "Airbrake",
      category: "Error Tracking",
      description: "AI error and performance monitoring",
      url: "https://airbrake.io",
      icon: "💨",
      rating: 4.2,
      pricing: "Premium",
      tags: ["error-monitoring", "performance", "ai"],
    },
    {
      id: 97,
      name: "Raygun",
      category: "Error Tracking",
      description: "AI crash reporting",
      url: "https://raygun.com",
      icon: "🔫",
      rating: 4.3,
      pricing: "Premium",
      tags: ["crash-reporting", "ai-powered", "monitoring"],
    },
    {
      id: 98,
      name: "Crashlytics",
      category: "Error Tracking",
      description: "AI crash reporting by Firebase",
      url: "https://firebase.google.com/products/crashlytics",
      icon: "💥",
      rating: 4.4,
      pricing: "Free",
      tags: ["crash-reporting", "firebase", "ai"],
    },
    {
      id: 99,
      name: "Instabug",
      category: "Bug Reporting",
      description: "AI bug reporting and feedback",
      url: "https://instabug.com",
      icon: "🪲",
      rating: 4.3,
      pricing: "Premium",
      tags: ["bug-reporting", "feedback", "ai"],
    },
    {
      id: 100,
      name: "TestFlight",
      category: "App Testing",
      description: "AI app testing platform",
      url: "https://developer.apple.com/testflight",
      icon: "✈️",
      rating: 4.4,
      pricing: "Free",
      tags: ["app-testing", "apple", "platform"],
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(aiTools.map((tool) => tool.category))),
  ];

  useEffect(() => {
    setTools(aiTools);
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem("toolworld-favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    // Load visited tools from localStorage
    const savedVisited = localStorage.getItem("toolworld-visited");
    if (savedVisited) {
      setVisitedTools(JSON.parse(savedVisited));
    }
  }, []);

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedTools = filteredTools.slice(0, displayCount);

  const toggleFavorite = (toolId) => {
    const newFavorites = favorites.includes(toolId)
      ? favorites.filter((id) => id !== toolId)
      : [...favorites, toolId];
    setFavorites(newFavorites);
    localStorage.setItem("toolworld-favorites", JSON.stringify(newFavorites));
  };

  const handleToolVisit = (toolId, url) => {
    const newVisited = [...new Set([...visitedTools, toolId])];
    setVisitedTools(newVisited);
    localStorage.setItem("toolworld-visited", JSON.stringify(newVisited));
    window.open(url, "_blank");
  };

  const loadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 20, filteredTools.length));
  };
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
              AI Tools <span className="text-tw-primary">Directory</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover and explore 100+ cutting-edge AI tools. Find the perfect
              solution for your workflow.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-tw-gray/60 border border-gray-700 rounded-2xl p-6 mb-8 backdrop-blur-xl">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tools, categories, or features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-tw-dark border border-gray-600 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-tw-dark border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tw-primary transition-colors"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode */}
              <div className="flex items-center gap-2 bg-tw-dark border border-gray-600 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-tw-primary text-white" : "text-gray-400 hover:text-white"}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-tw-primary text-white" : "text-gray-400 hover:text-white"}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-300">
              Showing {displayedTools.length} of {filteredTools.length} tools
            </p>
            {favorites.length > 0 && (
              <p className="text-tw-primary">
                {favorites.length} favorite{favorites.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>

          {/* Tools Grid/List */}
      <div
  className={
    viewMode === "grid"
      ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
      : "flex flex-col space-y-4 mb-8" // Changed to flex for list view
  }
>
  {displayedTools.map((tool) => (
    <div
      key={tool.id}
      className={`bg-tw-gray/60 border border-gray-700 rounded-2xl p-6 hover:border-tw-primary/40 transition-all duration-300 group backdrop-blur-xl hover:shadow-lg hover:shadow-tw-primary/10 ${
        viewMode === "list" ? "flex flex-col md:flex-row items-start gap-4" : ""
      }`}
    >
      <div className={viewMode === "list" ? "flex-shrink-0" : ""}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{tool.icon}</span>
            <div>
              <h3
                className={`font-bold text-white group-hover:text-tw-primary transition-colors ${
                  visitedTools.includes(tool.id) ? "text-tw-secondary" : ""
                }`}
              >
                {tool.name}
              </h3>
              <p className="text-sm text-gray-400">{tool.category}</p>
            </div>
          </div>
          <button
            onClick={() => toggleFavorite(tool.id)}
            className={`p-2 rounded-lg transition-colors ${
              favorites.includes(tool.id)
                ? "text-red-500 hover:text-red-400"
                : "text-gray-400 hover:text-red-500"
            }`}
          >
            <Heart
              className={`w-5 h-5 ${favorites.includes(tool.id) ? "fill-current" : ""}`}
            />
          </button>
        </div>
      </div>

      <div className={viewMode === "list" ? "flex-1" : ""}>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {tool.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-tw-primary/20 text-tw-primary px-2 py-1 rounded-lg text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="text-gray-300">{tool.rating}</span>
            </div>
            <span className="text-tw-accent">{tool.pricing}</span>
          </div>
          <button
            onClick={() => handleToolVisit(tool.id, tool.url)}
            className="bg-gradient-to-r from-tw-primary to-tw-secondary text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-tw-primary/25 transition-all duration-200 transform hover:scale-105 flex items-center gap-2 text-sm"
          >
            Visit <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

          {/* Load More */}
          {displayCount < filteredTools.length && (
            <div className="text-center">
              <button
                onClick={loadMore}
                className="bg-gradient-to-r from-tw-primary to-tw-secondary text-white px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-tw-primary/25 transition-all duration-200 transform hover:scale-105 font-medium"
              >
                Load More Tools ({filteredTools.length - displayCount}{" "}
                remaining)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
