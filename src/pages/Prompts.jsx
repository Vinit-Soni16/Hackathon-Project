import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Copy, Heart, Search, Filter, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

// interface Prompt {
//   id: number;
//   title: string;
//   description: string;
//   prompt: string;
//   category: string;
//   useCase: string;
//   difficulty: "Beginner" | "Intermediate" | "Advanced";
//   tags: string[];
//   rating: number;
//   uses: number;
// }

export default function Prompts() {
  const [prompts, setPrompts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [copiedPrompt, setCopiedPrompt] = useState(null);

  const promptsData = [
    // ...aapka pura data yahan same rahega...


    // Content Creation (10 prompts)
    {
      id: 1,
      title: "Blog Post Generator",
      description: "Create comprehensive blog posts on any topic",
      prompt:
        "Write a comprehensive, SEO-optimized blog post about [TOPIC]. Include: 1) An engaging introduction that hooks the reader, 2) 5-7 main sections with descriptive subheadings, 3) Practical examples and actionable tips, 4) A compelling conclusion with a call-to-action. Target word count: 1500-2000 words. Write in a conversational, authoritative tone.",
      category: "Content Creation",
      useCase: "Blogging & SEO",
      difficulty: "Beginner",
      tags: ["blog", "seo", "content", "writing"],
      rating: 4.8,
      uses: 15420,
    },
    {
      id: 2,
      title: "Social Media Caption Creator",
      description: "Generate engaging captions for social media posts",
      prompt:
        "Create 5 engaging social media captions for [PLATFORM] about [TOPIC/PRODUCT]. Each caption should: 1) Hook the audience in the first line, 2) Include relevant hashtags (3-5 per caption), 3) Include a clear call-to-action, 4) Be optimized for [PLATFORM]'s algorithm. Vary the tone from professional to casual across the 5 options.",
      category: "Content Creation",
      useCase: "Social Media Marketing",
      difficulty: "Beginner",
      tags: ["social", "captions", "marketing", "engagement"],
      rating: 4.7,
      uses: 12890,
    },
    {
      id: 3,
      title: "Email Newsletter Template",
      description: "Professional newsletter content with sections",
      prompt:
        "Create an email newsletter template for [INDUSTRY/NICHE] with the following structure: 1) Compelling subject line, 2) Personal greeting, 3) Main story/update (200-300 words), 4) 3 quick news items or tips, 5) Featured product/service spotlight, 6) Community highlight or testimonial, 7) Clear call-to-action, 8) Professional sign-off. Tone: friendly yet professional.",
      category: "Content Creation",
      useCase: "Email Marketing",
      difficulty: "Intermediate",
      tags: ["email", "newsletter", "marketing", "engagement"],
      rating: 4.9,
      uses: 8765,
    },
    {
      id: 4,
      title: "Product Description Writer",
      description: "Compelling product descriptions that convert",
      prompt:
        "Write a compelling product description for [PRODUCT NAME]. Structure: 1) Attention-grabbing headline, 2) Problem identification (what pain point does this solve?), 3) Solution presentation (how the product solves it), 4) Key features and benefits (3-5 bullet points), 5) Social proof element, 6) Urgency or scarcity element, 7) Strong call-to-action. Focus on benefits over features. Target length: 150-250 words.",
      category: "Content Creation",
      useCase: "E-commerce",
      difficulty: "Intermediate",
      tags: ["product", "description", "sales", "conversion"],
      rating: 4.6,
      uses: 11234,
    },
    {
      id: 5,
      title: "Video Script Creator",
      description: "Structured scripts for engaging videos",
      prompt:
        "Create a video script for a [DURATION] minute video about [TOPIC]. Format: 1) Hook (first 5 seconds to grab attention), 2) Introduction (introduce yourself and the topic), 3) Main content (3-5 key points with examples), 4) Transitions between sections, 5) Call-to-action, 6) Outro. Include [VISUAL CUES] and [TIMING NOTES]. Target audience: [AUDIENCE]. Tone: [TONE].",
      category: "Content Creation",
      useCase: "Video Marketing",
      difficulty: "Advanced",
      tags: ["video", "script", "youtube", "content"],
      rating: 4.8,
      uses: 9876,
    },
    {
      id: 6,
      title: "Press Release Template",
      description: "Professional press releases for announcements",
      prompt:
        "Write a professional press release for [COMPANY/EVENT]. Structure: 1) Compelling headline, 2) Dateline (city, date), 3) Lead paragraph (who, what, when, where, why), 4) Supporting details (2-3 paragraphs), 5) Quote from company spokesperson, 6) Additional context or background, 7) Company boilerplate, 8) Contact information. Follow AP style. Length: 400-600 words.",
      category: "Content Creation",
      useCase: "Public Relations",
      difficulty: "Advanced",
      tags: ["press", "release", "pr", "media"],
      rating: 4.5,
      uses: 5432,
    },
    {
      id: 7,
      title: "Case Study Generator",
      description: "Detailed case studies showcasing success",
      prompt:
        "Create a comprehensive case study about [CLIENT/PROJECT]. Structure: 1) Executive summary, 2) Client background and challenges, 3) Our approach and methodology, 4) Implementation timeline, 5) Results and metrics (with specific numbers), 6) Client testimonial, 7) Key learnings and takeaways, 8) Call-to-action for similar services. Include charts/graphs suggestions where relevant.",
      category: "Content Creation",
      useCase: "Business Development",
      difficulty: "Advanced",
      tags: ["case study", "business", "results", "proof"],
      rating: 4.7,
      uses: 6789,
    },
    {
      id: 8,
      title: "Landing Page Copy",
      description: "High-converting landing page content",
      prompt:
        "Write landing page copy for [PRODUCT/SERVICE]. Include: 1) Powerful headline (under 10 words), 2) Subheadline explaining the value proposition, 3) Problem agitation (3-4 sentences), 4) Solution introduction, 5) Benefits list (5-7 bullet points), 6) Social proof section, 7) FAQ section (5 questions), 8) Multiple call-to-action buttons, 9) Risk reversal/guarantee. Focus on conversion optimization.",
      category: "Content Creation",
      useCase: "Conversion Optimization",
      difficulty: "Advanced",
      tags: ["landing page", "conversion", "sales", "copy"],
      rating: 4.9,
      uses: 13456,
    },
    {
      id: 9,
      title: "Podcast Episode Outline",
      description: "Structured outlines for engaging podcasts",
      prompt:
        "Create a detailed podcast episode outline for '[EPISODE TITLE]' (target length: [DURATION]). Include: 1) Cold open (30 seconds), 2) Intro music and sponsor mention, 3) Host introduction and episode overview, 4) Main content segments with timestamps, 5) Guest introduction (if applicable), 6) Key discussion points and questions, 7) Sponsor breaks placement, 8) Outro and next episode teaser. Add [NOTES] for host.",
      category: "Content Creation",
      useCase: "Podcasting",
      difficulty: "Intermediate",
      tags: ["podcast", "outline", "audio", "content"],
      rating: 4.6,
      uses: 7234,
    },
    {
      id: 10,
      title: "Storytelling Framework",
      description: "Compelling narratives for any content",
      prompt:
        "Using the [STORY FRAMEWORK] (Hero's Journey/Before-After-Bridge/PAS), craft a compelling story about [TOPIC/EXPERIENCE]. Elements to include: 1) Relatable protagonist, 2) Clear conflict or challenge, 3) Emotional journey, 4) Transformation or resolution, 5) Universal lesson or moral, 6) Call-to-action that connects to the story. Target audience: [AUDIENCE]. Emotional tone: [TONE].",
      category: "Content Creation",
      useCase: "Brand Storytelling",
      difficulty: "Intermediate",
      tags: ["storytelling", "narrative", "brand", "emotion"],
      rating: 4.8,
      uses: 9123,
    },

    // Business & Marketing (10 prompts)
    {
      id: 11,
      title: "Market Research Analysis",
      description: "Comprehensive market analysis framework",
      prompt:
        "Conduct a market research analysis for [INDUSTRY/PRODUCT]. Provide: 1) Market size and growth trends, 2) Target audience demographics and psychographics, 3) Competitor analysis (top 5 competitors), 4) SWOT analysis, 5) Market opportunities and threats, 6) Pricing strategy recommendations, 7) Go-to-market strategy, 8) Success metrics to track. Include data sources and methodology.",
      category: "Business & Marketing",
      useCase: "Market Research",
      difficulty: "Advanced",
      tags: ["research", "market", "analysis", "strategy"],
      rating: 4.7,
      uses: 8901,
    },
    {
      id: 12,
      title: "Customer Persona Builder",
      description: "Detailed customer personas for targeting",
      prompt:
        "Create a detailed customer persona for [PRODUCT/SERVICE]. Include: 1) Demographics (age, gender, income, location), 2) Psychographics (values, interests, lifestyle), 3) Pain points and challenges, 4) Goals and motivations, 5) Preferred communication channels, 6) Buying behavior and decision factors, 7) A day in their life scenario, 8) How they discover and research products, 9) Objections and concerns. Give them a name and photo description.",
      category: "Business & Marketing",
      useCase: "Customer Development",
      difficulty: "Intermediate",
      tags: ["persona", "customer", "targeting", "marketing"],
      rating: 4.8,
      uses: 11567,
    },
    {
      id: 13,
      title: "Sales Email Sequence",
      description: "Multi-touch email sequences for sales",
      prompt:
        "Create a 5-email sales sequence for [PRODUCT/SERVICE]. Email structure: 1) Email 1: Introduction and value proposition, 2) Email 2: Problem agitation and solution, 3) Email 3: Social proof and case study, 4) Email 4: Objection handling and FAQ, 5) Email 5: Final offer with urgency. Each email should be 100-150 words with clear subject lines and CTAs. Include timing between emails.",
      category: "Business & Marketing",
      useCase: "Sales Automation",
      difficulty: "Advanced",
      tags: ["sales", "email", "sequence", "conversion"],
      rating: 4.9,
      uses: 9876,
    },
    {
      id: 14,
      title: "Competitive Analysis Report",
      description: "In-depth competitor research and insights",
      prompt:
        "Analyze the competitive landscape for [INDUSTRY/NICHE]. For each top 5 competitors, provide: 1) Company overview and positioning, 2) Product/service offerings, 3) Pricing strategy, 4) Marketing channels and messaging, 5) Strengths and weaknesses, 6) Market share and customer base, 7) Recent developments and news, 8) Opportunities for differentiation. Conclude with strategic recommendations.",
      category: "Business & Marketing",
      useCase: "Competitive Intelligence",
      difficulty: "Advanced",
      tags: ["competitive", "analysis", "research", "strategy"],
      rating: 4.6,
      uses: 6543,
    },
    {
      id: 15,
      title: "Brand Positioning Statement",
      description: "Clear brand positioning and messaging",
      prompt:
        "Develop a brand positioning statement for [COMPANY/PRODUCT]. Framework: 'For [target audience] who [need/problem], [brand name] is the [category] that [unique benefit] because [reasons to believe].' Additionally provide: 1) Brand mission statement, 2) Core values (3-5), 3) Value proposition, 4) Brand personality traits, 5) Messaging pillars, 6) Differentiation factors, 7) Elevator pitch (30 seconds).",
      category: "Business & Marketing",
      useCase: "Brand Strategy",
      difficulty: "Advanced",
      tags: ["brand", "positioning", "messaging", "strategy"],
      rating: 4.8,
      uses: 7890,
    },
    {
      id: 16,
      title: "Lead Magnet Ideas",
      description: "Irresistible lead magnets for list building",
      prompt:
        "Generate 10 lead magnet ideas for [INDUSTRY/NICHE]. For each idea provide: 1) Title and format (ebook, checklist, template, etc.), 2) Target audience and their specific problem, 3) Value proposition and benefits, 4) Content outline (3-5 main points), 5) How it connects to your paid offerings, 6) Promotion strategy suggestions. Focus on high-value, immediately actionable content that builds trust.",
      category: "Business & Marketing",
      useCase: "Lead Generation",
      difficulty: "Intermediate",
      tags: ["lead magnet", "conversion", "email", "marketing"],
      rating: 4.7,
      uses: 10234,
    },
    {
      id: 17,
      title: "Customer Journey Map",
      description: "Detailed customer journey and touchpoints",
      prompt:
        "Map the customer journey for [PRODUCT/SERVICE]. For each stage (Awareness, Consideration, Decision, Purchase, Onboarding, Advocacy), provide: 1) Customer thoughts and emotions, 2) Pain points and challenges, 3) Questions they're asking, 4) Touchpoints and channels, 5) Content needed at this stage, 6) Metrics to measure, 7) Opportunities for improvement. Include pre and post-purchase stages.",
      category: "Business & Marketing",
      useCase: "Customer Experience",
      difficulty: "Advanced",
      tags: ["customer journey", "experience", "mapping", "touchpoints"],
      rating: 4.8,
      uses: 8123,
    },
    {
      id: 18,
      title: "Pricing Strategy Framework",
      description: "Strategic pricing models and analysis",
      prompt:
        "Develop a pricing strategy for [PRODUCT/SERVICE]. Include: 1) Cost analysis (fixed and variable costs), 2) Competitor pricing research, 3) Value-based pricing assessment, 4) Price sensitivity analysis, 5) Multiple pricing tier options, 6) Psychological pricing tactics, 7) Pricing model recommendation (subscription, one-time, freemium, etc.), 8) Testing and optimization plan, 9) Revenue projections for each tier.",
      category: "Business & Marketing",
      useCase: "Pricing Strategy",
      difficulty: "Advanced",
      tags: ["pricing", "strategy", "revenue", "optimization"],
      rating: 4.6,
      uses: 5678,
    },
    {
      id: 19,
      title: "Content Marketing Calendar",
      description: "Strategic content planning and scheduling",
      prompt:
        "Create a 3-month content marketing calendar for [BUSINESS/NICHE]. Include: 1) Content themes for each month, 2) Content types and formats, 3) Publishing schedule across platforms, 4) Seasonal and industry events to leverage, 5) Content repurposing opportunities, 6) Performance metrics to track, 7) Team responsibilities and deadlines, 8) Budget allocation per content type. Ensure content supports business goals.",
      category: "Business & Marketing",
      useCase: "Content Strategy",
      difficulty: "Intermediate",
      tags: ["content", "calendar", "planning", "strategy"],
      rating: 4.7,
      uses: 9456,
    },
    {
      id: 20,
      title: "Partnership Pitch Deck",
      description: "Compelling partnership proposals",
      prompt:
        "Create a partnership pitch deck for [PARTNERSHIP TYPE] with [TARGET COMPANY]. Slides should include: 1) Executive summary and opportunity, 2) Company introduction and credibility, 3) Partnership value proposition, 4) Mutual benefits and ROI, 5) Success metrics and KPIs, 6) Implementation timeline, 7) Resource requirements, 8) Risk mitigation, 9) Next steps and call-to-action. Keep each slide focused and benefit-driven.",
      category: "Business & Marketing",
      useCase: "Business Development",
      difficulty: "Advanced",
      tags: ["partnership", "pitch", "business", "collaboration"],
      rating: 4.8,
      uses: 6789,
    },

    // Technical & Development (10 prompts)
    {
      id: 21,
      title: "Code Documentation Generator",
      description: "Comprehensive code documentation",
      prompt:
        "Generate complete documentation for this [PROGRAMMING LANGUAGE] code: [CODE BLOCK]. Include: 1) Function/class overview and purpose, 2) Parameters with types and descriptions, 3) Return values and types, 4) Usage examples with expected outputs, 5) Error handling and edge cases, 6) Dependencies and requirements, 7) Performance considerations, 8) Related functions or classes. Follow [DOCUMENTATION STANDARD] format.",
      category: "Technical & Development",
      useCase: "Code Documentation",
      difficulty: "Intermediate",
      tags: ["code", "documentation", "programming", "development"],
      rating: 4.7,
      uses: 12345,
    },
    {
      id: 22,
      title: "API Endpoint Design",
      description: "RESTful API endpoint specifications",
      prompt:
        "Design RESTful API endpoints for [APPLICATION/FEATURE]. For each endpoint provide: 1) HTTP method and URL pattern, 2) Request parameters and body schema, 3) Response format and status codes, 4) Authentication requirements, 5) Rate limiting considerations, 6) Error responses and handling, 7) Example requests and responses, 8) Documentation following OpenAPI/Swagger standards. Include CRUD operations where applicable.",
      category: "Technical & Development",
      useCase: "API Design",
      difficulty: "Advanced",
      tags: ["api", "rest", "endpoints", "documentation"],
      rating: 4.8,
      uses: 8765,
    },
    {
      id: 23,
      title: "Database Schema Design",
      description: "Optimized database structure planning",
      prompt:
        "Design a database schema for [APPLICATION/SYSTEM]. Include: 1) Entity relationship diagram, 2) Table structures with fields and data types, 3) Primary and foreign key relationships, 4) Indexes for performance optimization, 5) Constraints and validation rules, 6) Normalization considerations, 7) Sample data for testing, 8) Migration scripts, 9) Performance and scalability considerations. Target database: [DATABASE_TYPE].",
      category: "Technical & Development",
      useCase: "Database Design",
      difficulty: "Advanced",
      tags: ["database", "schema", "design", "sql"],
      rating: 4.6,
      uses: 6543,
    },
    {
      id: 24,
      title: "Code Review Checklist",
      description: "Comprehensive code quality assessment",
      prompt:
        "Create a code review checklist for [PROGRAMMING LANGUAGE/FRAMEWORK]. Categories: 1) Code quality and readability, 2) Performance and optimization, 3) Security considerations, 4) Testing coverage and quality, 5) Documentation completeness, 6) Architecture and design patterns, 7) Error handling and logging, 8) Accessibility and usability, 9) Deployment and configuration. Include specific items to check and common issues to watch for.",
      category: "Technical & Development",
      useCase: "Code Quality",
      difficulty: "Advanced",
      tags: ["code review", "quality", "checklist", "standards"],
      rating: 4.9,
      uses: 9876,
    },
    {
      id: 25,
      title: "Technical Architecture Proposal",
      description: "System architecture documentation",
      prompt:
        "Create a technical architecture proposal for [PROJECT/SYSTEM]. Include: 1) High-level system overview, 2) Technology stack recommendations with justifications, 3) System components and their interactions, 4) Data flow diagrams, 5) Scalability and performance considerations, 6) Security architecture, 7) Deployment strategy, 8) Monitoring and logging approach, 9) Risk assessment and mitigation, 10) Timeline and resource requirements.",
      category: "Technical & Development",
      useCase: "System Architecture",
      difficulty: "Advanced",
      tags: ["architecture", "system", "technical", "design"],
      rating: 4.8,
      uses: 5432,
    },
    {
      id: 26,
      title: "Bug Report Template",
      description: "Detailed bug reporting for developers",
      prompt:
        "Create a comprehensive bug report for [ISSUE/PROBLEM]. Include: 1) Bug summary and severity level, 2) Steps to reproduce (detailed), 3) Expected vs actual behavior, 4) Environment details (OS, browser, version), 5) Screenshots or video if applicable, 6) Error messages and logs, 7) Workaround if available, 8) Impact on users/business, 9) Related issues or dependencies. Use clear, actionable language for developers.",
      category: "Technical & Development",
      useCase: "Quality Assurance",
      difficulty: "Beginner",
      tags: ["bug", "report", "testing", "qa"],
      rating: 4.5,
      uses: 11234,
    },
    {
      id: 27,
      title: "Deployment Guide",
      description: "Step-by-step deployment instructions",
      prompt:
        "Write deployment instructions for [APPLICATION] to [ENVIRONMENT]. Include: 1) Prerequisites and system requirements, 2) Environment setup steps, 3) Configuration file templates, 4) Database migration procedures, 5) Build and deployment commands, 6) Verification and testing steps, 7) Rollback procedures, 8) Monitoring and alerting setup, 9) Troubleshooting common issues, 10) Post-deployment checklist.",
      category: "Technical & Development",
      useCase: "DevOps",
      difficulty: "Intermediate",
      tags: ["deployment", "devops", "infrastructure", "guide"],
      rating: 4.7,
      uses: 7890,
    },
    {
      id: 28,
      title: "Performance Optimization Plan",
      description: "System performance improvement strategy",
      prompt:
        "Develop a performance optimization plan for [APPLICATION/SYSTEM]. Analyze: 1) Current performance bottlenecks, 2) Profiling and monitoring results, 3) Database query optimization opportunities, 4) Caching strategy implementation, 5) Front-end optimization techniques, 6) Server and infrastructure improvements, 7) Code-level optimizations, 8) Load testing and benchmarking plan, 9) Success metrics and monitoring.",
      category: "Technical & Development",
      useCase: "Performance Optimization",
      difficulty: "Advanced",
      tags: ["performance", "optimization", "monitoring", "scalability"],
      rating: 4.8,
      uses: 6123,
    },
    {
      id: 29,
      title: "Security Audit Checklist",
      description: "Comprehensive security assessment",
      prompt:
        "Create a security audit checklist for [APPLICATION/SYSTEM]. Cover: 1) Authentication and authorization, 2) Data encryption and protection, 3) Input validation and sanitization, 4) SQL injection and XSS prevention, 5) API security best practices, 6) Infrastructure and network security, 7) Dependency and third-party security, 8) Logging and monitoring, 9) Incident response procedures, 10) Compliance requirements [SPECIFY STANDARDS].",
      category: "Technical & Development",
      useCase: "Security",
      difficulty: "Advanced",
      tags: ["security", "audit", "checklist", "compliance"],
      rating: 4.9,
      uses: 8456,
    },
    {
      id: 30,
      title: "Technical Specification Document",
      description: "Detailed technical requirements documentation",
      prompt:
        "Write a technical specification document for [FEATURE/PROJECT]. Structure: 1) Executive summary and objectives, 2) Functional requirements with user stories, 3) Non-functional requirements (performance, security, etc.), 4) Technical constraints and assumptions, 5) System interfaces and integration points, 6) Data models and business logic, 7) UI/UX requirements and mockups, 8) Testing strategy and acceptance criteria, 9) Timeline and milestones.",
      category: "Technical & Development",
      useCase: "Documentation",
      difficulty: "Advanced",
      tags: ["specification", "requirements", "documentation", "planning"],
      rating: 4.7,
      uses: 5789,
    },

    // Creative & Design (10 prompts)
    {
      id: 31,
      title: "Creative Brief Generator",
      description: "Comprehensive creative project briefs",
      prompt:
        "Generate a creative brief for [PROJECT/CAMPAIGN]. Include: 1) Project overview and objectives, 2) Target audience and personas, 3) Key message and tone of voice, 4) Creative requirements and deliverables, 5) Brand guidelines and visual style, 6) Competitive landscape and differentiation, 7) Budget and timeline constraints, 8) Success metrics and KPIs, 9) Approval process and stakeholders, 10) Reference materials and inspiration.",
      category: "Creative & Design",
      useCase: "Project Planning",
      difficulty: "Intermediate",
      tags: ["creative", "brief", "design", "planning"],
      rating: 4.6,
      uses: 9234,
    },
    {
      id: 32,
      title: "Brand Identity System",
      description: "Complete brand identity guidelines",
      prompt:
        "Design a comprehensive brand identity system for [COMPANY/PRODUCT]. Elements: 1) Logo concepts and variations, 2) Color palette with hex codes and usage rules, 3) Typography hierarchy and font pairings, 4) Visual style and aesthetic direction, 5) Photography and illustration guidelines, 6) Brand voice and messaging framework, 7) Application examples (business cards, letterhead, digital), 8) Do's and don'ts for brand usage.",
      category: "Creative & Design",
      useCase: "Brand Design",
      difficulty: "Advanced",
      tags: ["brand", "identity", "logo", "guidelines"],
      rating: 4.8,
      uses: 7123,
    },
    {
      id: 33,
      title: "User Interface Design Brief",
      description: "Detailed UI design specifications",
      prompt:
        "Create a UI design brief for [APPLICATION/WEBSITE]. Specify: 1) User personas and use cases, 2) Information architecture and navigation, 3) Visual design requirements and style, 4) Component library and design system, 5) Responsive design considerations, 6) Accessibility requirements (WCAG compliance), 7) Interaction patterns and micro-animations, 8) Performance and technical constraints, 9) Testing and validation approach.",
      category: "Creative & Design",
      useCase: "UI/UX Design",
      difficulty: "Advanced",
      tags: ["ui", "design", "interface", "user experience"],
      rating: 4.9,
      uses: 11456,
    },
    {
      id: 34,
      title: "Visual Content Strategy",
      description: "Strategic visual content planning",
      prompt:
        "Develop a visual content strategy for [BRAND/PLATFORM]. Include: 1) Visual brand positioning and style, 2) Content themes and visual categories, 3) Color schemes and photography style, 4) Content calendar with visual themes, 5) Platform-specific optimization (Instagram, Pinterest, etc.), 6) User-generated content integration, 7) Performance metrics and KPIs, 8) Content creation workflow and tools, 9) Budget and resource allocation.",
      category: "Creative & Design",
      useCase: "Content Strategy",
      difficulty: "Intermediate",
      tags: ["visual", "content", "strategy", "social media"],
      rating: 4.7,
      uses: 8765,
    },
    {
      id: 35,
      title: "Design System Documentation",
      description: "Comprehensive design system guidelines",
      prompt:
        "Document a design system for [PRODUCT/PLATFORM]. Components: 1) Design principles and philosophy, 2) Color system with semantic naming, 3) Typography scale and usage rules, 4) Spacing and layout grid system, 5) Component library with code examples, 6) Icon system and guidelines, 7) Animation and interaction patterns, 8) Accessibility standards and testing, 9) Implementation guidelines for developers, 10) Governance and maintenance processes.",
      category: "Creative & Design",
      useCase: "Design Systems",
      difficulty: "Advanced",
      tags: ["design system", "components", "documentation", "standards"],
      rating: 4.8,
      uses: 6543,
    },
    {
      id: 36,
      title: "Photography Art Direction",
      description: "Professional photo shoot planning",
      prompt:
        "Create art direction for a photography shoot for [BRAND/PRODUCT]. Details: 1) Creative concept and mood board, 2) Shot list with specific compositions, 3) Styling requirements (props, wardrobe, makeup), 4) Location scouting and setup needs, 5) Lighting setup and technical requirements, 6) Model casting and direction notes, 7) Post-production and editing guidelines, 8) Usage rights and licensing requirements, 9) Timeline and budget breakdown.",
      category: "Creative & Design",
      useCase: "Photography",
      difficulty: "Advanced",
      tags: ["photography", "art direction", "creative", "production"],
      rating: 4.6,
      uses: 5432,
    },
    {
      id: 37,
      title: "Packaging Design Brief",
      description: "Product packaging design specifications",
      prompt:
        "Design packaging for [PRODUCT]. Requirements: 1) Product protection and shipping considerations, 2) Target audience and shelf appeal, 3) Brand integration and visual hierarchy, 4) Regulatory and legal requirements, 5) Sustainability and material considerations, 6) Manufacturing constraints and costs, 7) Unboxing experience design, 8) Information architecture and labeling, 9) Competitive analysis and differentiation, 10) Testing and validation plan.",
      category: "Creative & Design",
      useCase: "Packaging Design",
      difficulty: "Advanced",
      tags: ["packaging", "product", "design", "retail"],
      rating: 4.7,
      uses: 4321,
    },
    {
      id: 38,
      title: "Infographic Content Planner",
      description: "Data visualization and infographic planning",
      prompt:
        "Plan an infographic about [TOPIC/DATA]. Structure: 1) Key message and takeaway, 2) Data sources and statistics, 3) Visual hierarchy and flow, 4) Chart and graph types for different data, 5) Color coding and legend system, 6) Typography and readability considerations, 7) Visual metaphors and icons, 8) Call-to-action and contact information, 9) Social sharing optimization, 10) Accessibility and mobile considerations.",
      category: "Creative & Design",
      useCase: "Data Visualization",
      difficulty: "Intermediate",
      tags: ["infographic", "data", "visualization", "content"],
      rating: 4.5,
      uses: 7890,
    },
    {
      id: 39,
      title: "Motion Graphics Storyboard",
      description: "Animated content planning and storyboarding",
      prompt:
        "Create a storyboard for a [DURATION] motion graphics piece about [TOPIC]. Include: 1) Scene-by-scene breakdown with timing, 2) Visual style and animation techniques, 3) Text and voiceover integration, 4) Transition effects between scenes, 5) Color palette and visual consistency, 6) Audio and sound effect notes, 7) Technical specifications and formats, 8) Brand integration and logo placement, 9) Call-to-action and end screen, 10) Revision and approval process.",
      category: "Creative & Design",
      useCase: "Motion Graphics",
      difficulty: "Advanced",
      tags: ["motion graphics", "animation", "storyboard", "video"],
      rating: 4.8,
      uses: 6234,
    },
    {
      id: 40,
      title: "Exhibition Design Concept",
      description: "Trade show and exhibition planning",
      prompt:
        "Design an exhibition booth for [COMPANY/EVENT]. Elements: 1) Space planning and traffic flow, 2) Visual impact and brand presence, 3) Interactive elements and demonstrations, 4) Product display and messaging hierarchy, 5) Technology integration (screens, VR, etc.), 6) Lead capture and engagement strategy, 7) Storage and functional requirements, 8) Setup and breakdown logistics, 9) Budget breakdown and ROI projections, 10) Staff training and presentation materials.",
      category: "Creative & Design",
      useCase: "Exhibition Design",
      difficulty: "Advanced",
      tags: ["exhibition", "trade show", "design", "events"],
      rating: 4.6,
      uses: 3456,
    },

    // Personal & Productivity (10 prompts)
    {
      id: 41,
      title: "Personal Productivity System",
      description: "Comprehensive productivity framework",
      prompt:
        "Design a personal productivity system for [PROFESSION/ROLE]. Include: 1) Daily and weekly planning routines, 2) Task prioritization methodology (Eisenhower Matrix, GTD, etc.), 3) Time blocking and calendar management, 4) Digital tools and app recommendations, 5) Email and communication management, 6) Goal setting and tracking system, 7) Energy and focus optimization techniques, 8) Review and reflection processes, 9) Work-life balance strategies, 10) Habit formation and maintenance.",
      category: "Personal & Productivity",
      useCase: "Life Organization",
      difficulty: "Intermediate",
      tags: ["productivity", "organization", "time management", "goals"],
      rating: 4.8,
      uses: 13245,
    },
    {
      id: 42,
      title: "Learning Plan Creator",
      description: "Structured learning and skill development",
      prompt:
        "Create a learning plan for mastering [SKILL/SUBJECT]. Structure: 1) Current skill assessment and gaps, 2) Learning objectives and milestones, 3) Resource recommendations (books, courses, tutorials), 4) Practice exercises and projects, 5) Progress tracking and measurement, 6) Timeline and scheduling, 7) Community and networking opportunities, 8) Application and real-world practice, 9) Certification or validation goals, 10) Long-term mastery pathway.",
      category: "Personal & Productivity",
      useCase: "Skill Development",
      difficulty: "Intermediate",
      tags: ["learning", "skills", "development", "education"],
      rating: 4.7,
      uses: 10987,
    },
    {
      id: 43,
      title: "Resume Optimization Guide",
      description: "Professional resume enhancement",
      prompt:
        "Optimize a resume for [JOB TITLE/INDUSTRY]. Improvements: 1) Professional summary with keywords, 2) Skills section with relevant technologies, 3) Experience descriptions with quantified achievements, 4) Education and certification presentation, 5) ATS optimization and keyword integration, 6) Visual design and formatting, 7) Personal projects and portfolio links, 8) Industry-specific customization, 9) Cover letter template, 10) LinkedIn profile alignment.",
      category: "Personal & Productivity",
      useCase: "Career Development",
      difficulty: "Intermediate",
      tags: ["resume", "career", "job search", "professional"],
      rating: 4.9,
      uses: 15432,
    },
    {
      id: 44,
      title: "Financial Planning Template",
      description: "Personal finance management system",
      prompt:
        "Create a personal financial plan for [FINANCIAL GOAL]. Include: 1) Current financial assessment and net worth, 2) Budget creation and expense tracking, 3) Debt reduction strategy and timeline, 4) Emergency fund building plan, 5) Investment strategy and portfolio allocation, 6) Retirement planning and projections, 7) Insurance needs assessment, 8) Tax optimization strategies, 9) Financial milestone tracking, 10) Regular review and adjustment process.",
      category: "Personal & Productivity",
      useCase: "Financial Planning",
      difficulty: "Advanced",
      tags: ["finance", "budgeting", "investment", "planning"],
      rating: 4.6,
      uses: 8765,
    },
    {
      id: 45,
      title: "Habit Formation System",
      description: "Evidence-based habit building framework",
      prompt:
        "Design a habit formation system for [SPECIFIC HABIT/GOAL]. Components: 1) Habit stacking and trigger identification, 2) Environment design and cue optimization, 3) Reward system and motivation maintenance, 4) Progress tracking and measurement, 5) Obstacle identification and contingency planning, 6) Social accountability and support systems, 7) Gradual progression and scaling, 8) Relapse recovery strategies, 9) Long-term maintenance and automation, 10) Integration with existing routines.",
      category: "Personal & Productivity",
      useCase: "Behavior Change",
      difficulty: "Intermediate",
      tags: ["habits", "behavior", "change", "self-improvement"],
      rating: 4.8,
      uses: 11234,
    },
    {
      id: 46,
      title: "Digital Detox Plan",
      description: "Technology usage optimization",
      prompt:
        "Create a digital detox plan for [TIMEFRAME/GOAL]. Elements: 1) Current technology usage audit, 2) Digital wellness goals and boundaries, 3) App and platform prioritization, 4) Notification management and focus strategies, 5) Alternative activities and hobbies, 6) Physical environment optimization, 7) Social media strategy and limits, 8) Work-life digital boundaries, 9) Progress monitoring and accountability, 10) Long-term sustainable practices.",
      category: "Personal & Productivity",
      useCase: "Digital Wellness",
      difficulty: "Beginner",
      tags: ["digital detox", "wellness", "technology", "mindfulness"],
      rating: 4.5,
      uses: 7890,
    },
    {
      id: 47,
      title: "Morning Routine Optimizer",
      description: "Personalized morning routine design",
      prompt:
        "Design an optimal morning routine for [LIFESTYLE/GOALS]. Include: 1) Wake-up time and sleep optimization, 2) Physical activity and exercise integration, 3) Mindfulness and mental preparation, 4) Nutrition and hydration planning, 5) Priority task identification and planning, 6) Personal care and grooming efficiency, 7) Learning and skill development time, 8) Family and relationship time, 9) Flexibility for different days/schedules, 10) Evening preparation for morning success.",
      category: "Personal & Productivity",
      useCase: "Routine Optimization",
      difficulty: "Beginner",
      tags: ["morning routine", "habits", "optimization", "wellness"],
      rating: 4.7,
      uses: 12456,
    },
    {
      id: 48,
      title: "Goal Achievement Framework",
      description: "Strategic goal setting and execution",
      prompt:
        "Create a goal achievement system for [SPECIFIC GOAL]. Framework: 1) SMART goal refinement and clarity, 2) Why-based motivation and purpose identification, 3) Milestone breakdown and timeline creation, 4) Resource requirements and skill gaps, 5) Action plan with daily/weekly tasks, 6) Accountability system and check-ins, 7) Obstacle anticipation and contingency plans, 8) Progress measurement and tracking methods, 9) Celebration and reward milestones, 10) Course correction and adaptation strategies.",
      category: "Personal & Productivity",
      useCase: "Goal Achievement",
      difficulty: "Intermediate",
      tags: ["goals", "achievement", "planning", "success"],
      rating: 4.9,
      uses: 14321,
    },
    {
      id: 49,
      title: "Home Organization System",
      description: "Comprehensive home organization strategy",
      prompt:
        "Design a home organization system for [SPACE/FAMILY SIZE]. Areas: 1) Decluttering methodology and decision framework, 2) Storage solutions and space optimization, 3) Room-by-room organization strategies, 4) Maintenance routines and schedules, 5) Family member responsibilities and systems, 6) Inventory management and tracking, 7) Seasonal rotation and storage, 8) Important document organization, 9) Digital organization integration, 10) Long-term maintenance and adaptation.",
      category: "Personal & Productivity",
      useCase: "Home Organization",
      difficulty: "Intermediate",
      tags: ["organization", "home", "decluttering", "systems"],
      rating: 4.6,
      uses: 9876,
    },
    {
      id: 50,
      title: "Travel Planning Template",
      description: "Comprehensive travel planning guide",
      prompt:
        "Create a complete travel plan for [DESTINATION/TRIP TYPE]. Include: 1) Pre-trip research and preparation, 2) Budget planning and expense tracking, 3) Itinerary with activities and reservations, 4) Packing lists and travel gear, 5) Documentation and visa requirements, 6) Health and safety preparations, 7) Transportation and accommodation details, 8) Local culture and etiquette research, 9) Emergency contacts and contingency plans, 10) Post-trip reflection and documentation.",
      category: "Personal & Productivity",
      useCase: "Travel Planning",
      difficulty: "Beginner",
      tags: ["travel", "planning", "organization", "adventure"],
      rating: 4.7,
      uses: 10543,
    },
  ];

  const categories = [
    "All",
    "Content Creation",
    "Business & Marketing",
    "Technical & Development",
    "Creative & Design",
    "Personal & Productivity",
  ];

  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  useEffect(() => {
    setPrompts(promptsData);
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem("toolworld-prompt-favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesSearch =
      prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.useCase.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "All" || prompt.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "All" || prompt.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const toggleFavorite = (promptId) => {
    const newFavorites = favorites.includes(promptId)
      ? favorites.filter((id) => id !== promptId)
      : [...favorites, promptId];
    setFavorites(newFavorites);
    localStorage.setItem(
      "toolworld-prompt-favorites",
      JSON.stringify(newFavorites)
    );
  };

  const copyPrompt = async (prompt, promptId) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedPrompt(promptId);
      setTimeout(() => setCopiedPrompt(null), 2000);
    } catch (err) {
      console.error("Failed to copy prompt:", err);
    }
  };


 const getCategoryColor = (category) => {
    const colors = {
      "Content Creation": "tw-primary",
      "Business & Marketing": "tw-accent",
      "Technical & Development": "tw-blue",
      "Creative & Design": "tw-pink",
      "Personal & Productivity": "tw-orange",
    };
    return colors[category] || "tw-primary";
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Beginner: "tw-accent",
      Intermediate: "tw-blue",
      Advanced: "tw-orange",
    };
    return colors[difficulty] || "tw-primary";
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
              Prompt{" "}
              <span className="bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink bg-clip-text text-transparent">
                Library
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access 50+ high-quality, tested prompts for every AI tool and use
              case. Copy, customize, and get results instantly.
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
                  placeholder="Search prompts, use cases, or categories..."
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

              {/* Difficulty Filter */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-tw-dark/80 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tw-primary transition-colors"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-300">
              Showing {filteredPrompts.length} of {prompts.length} prompts
            </p>
            {favorites.length > 0 && (
              <p className="text-tw-primary">
                {favorites.length} favorite{favorites.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>

          {/* Prompts Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPrompts.map((prompt) => (
              <div
                key={prompt.id}
                className="bg-tw-gray/80 border border-gray-700 rounded-2xl p-6 hover:border-tw-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span
                        className={`bg-${getCategoryColor(prompt.category)}/20 text-${getCategoryColor(prompt.category)} px-2 py-1 rounded-lg text-xs font-medium`}
                      >
                        {prompt.category}
                      </span>
                      <span
                        className={`bg-${getDifficultyColor(prompt.difficulty)}/20 text-${getDifficultyColor(prompt.difficulty)} px-2 py-1 rounded-lg text-xs font-medium`}
                      >
                        {prompt.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tw-primary transition-colors">
                      {prompt.title}
                    </h3>
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                      {prompt.description}
                    </p>
                    <p className="text-tw-accent font-medium text-sm mb-4">
                      Use Case: {prompt.useCase}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleFavorite(prompt.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      favorites.includes(prompt.id)
                        ? "text-red-500 hover:text-red-400"
                        : "text-gray-400 hover:text-red-500"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${favorites.includes(prompt.id) ? "fill-current" : ""}`}
                    />
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {prompt.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{prompt.rating}</span>
                  </div>
                  <span>{prompt.uses.toLocaleString()} uses</span>
                </div>

                {/* Prompt Preview */}
                <div className="bg-tw-dark/60 border border-gray-600 rounded-lg p-4 mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {prompt.prompt}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => copyPrompt(prompt.prompt, prompt.id)}
                    className="flex-1 bg-gradient-to-r from-tw-primary to-tw-accent text-white py-3 rounded-xl hover:shadow-lg hover:shadow-tw-primary/25 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 font-medium"
                  >
                    {copiedPrompt === prompt.id ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Prompt
                      </>
                    )}
                  </button>
                  <button className="px-4 py-3 border border-tw-primary text-tw-primary rounded-xl hover:bg-tw-primary hover:text-white transition-all duration-200">
                    View Full
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Category Overview */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Browse by{" "}
                <span className="bg-gradient-to-r from-tw-blue to-tw-pink bg-clip-text text-transparent">
                  Category
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Discover prompts organized by your specific needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(1).map((category, index) => {
                const categoryPrompts = prompts.filter(
                  (p) => p.category === category,
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
                        {categoryPrompts.length}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {category}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {categoryPrompts.length} high-quality prompts
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
