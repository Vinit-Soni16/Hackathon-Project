import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  Star,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Automation",
      description: "Streamline workflows with intelligent automation tools",
      gradient: "from-tw-primary to-tw-accent",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security for all your data and operations",
      gradient: "from-tw-blue to-tw-primary",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Experience unprecedented speed and performance",
      gradient: "from-tw-pink to-tw-orange",
    },
  ];

  const useCases = [
    {
      industry: "Content Creation",
      description: "Generate, edit, and optimize content across all platforms",
      benefits: [
        "10x faster writing",
        "SEO optimization",
        "Multi-language support",
      ],
      gradient: "from-tw-primary to-tw-accent",
    },
    {
      industry: "Development",
      description: "Code generation, debugging, and project management tools",
      benefits: ["Auto code completion", "Bug detection", "Project templates"],
      gradient: "from-tw-blue to-tw-primary",
    },
    {
      industry: "Marketing",
      description: "Campaign creation, analytics, and customer engagement",
      benefits: [
        "Campaign automation",
        "Real-time analytics",
        "Lead generation",
      ],
      gradient: "from-tw-pink to-tw-orange",
    },
    {
      industry: "Education",
      description: "Learning paths, assessments, and knowledge management",
      benefits: [
        "Personalized learning",
        "Progress tracking",
        "Interactive content",
      ],
      gradient: "from-tw-accent to-tw-neon",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      content:
        "Toolworld.ai revolutionized our workflow. We're 300% more productive!",
      rating: 5,
      gradient: "from-tw-primary to-tw-accent",
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer, CodeCorp",
      content:
        "The AI tools here are game-changers. Development time cut in half.",
      rating: 5,
      gradient: "from-tw-blue to-tw-pink",
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director",
      content: "Unparalleled insights and automation. Exactly what we needed.",
      rating: 5,
      gradient: "from-tw-orange to-tw-accent",
    },
  ];

  const faqs = [
    {
      question: "What makes Toolworld.ai different?",
      answer:
        "We offer the most comprehensive collection of AI tools with seamless integration, real-time updates, and a community-driven approach.",
    },
    {
      question: "Is there a free plan available?",
      answer:
        "Yes! Our free plan includes access to most features. Upgrade to Pro for advanced tools and the Gemini-powered chatbot.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use enterprise-grade encryption and follow strict privacy protocols. Your data is always protected and never shared.",
    },
    {
      question: "Can I integrate with existing tools?",
      answer:
        "Absolutely! We support integration with 500+ popular tools and platforms through our API and webhooks.",
    },
  ];
     const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-tw-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-tw-primary/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-tw-accent/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-tw-pink/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-48 h-48 bg-tw-blue/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-tw-orange/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-tw-primary/20 to-tw-accent/20 border border-tw-primary/30 rounded-full px-6 py-2 text-tw-primary font-medium">
              <Zap className="w-4 h-4" />
              <span>Next-Generation AI Platform</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-tw-primary via-tw-pink to-tw-blue bg-clip-text text-transparent">
                AI Tools
              </span>
              <br />
              Starts Here
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover, compare, and master 100+ cutting-edge AI tools. From
              automation to creativity, we're your gateway to unlimited
              productivity and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button onClick={()=> navigate("/services/tools")} className="bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-tw-primary/25 transition-all duration-200 transform hover:scale-105 flex items-center gap-2 text-lg">
                Explore Tools <ArrowRight className="w-5 h-5" />
              </button>
              <button   onClick={() => navigate("/demo")} className="border-2 border-tw-primary text-tw-primary px-8 py-4 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-tw-primary hover:to-tw-accent hover:text-white transition-all duration-200 flex items-center gap-2 text-lg">
                Watch Demo <Rocket className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-tw-accent" />
                <span>100+ AI Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-tw-blue" />
                <span>50+ Tutorials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-tw-pink" />
                <span>Real-time Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-tw-orange" />
                <span>Community Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-tw-gray/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-tw-primary to-tw-accent bg-clip-text text-transparent">
                Toolworld.ai
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the most comprehensive AI platform designed for
              productivity, creativity, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-tw-gray/80 border border-gray-700 rounded-2xl p-8 hover:border-tw-primary/40 transition-all duration-300 group hover:shadow-lg hover:shadow-tw-primary/10"
              >
                <div
                  className={`text-transparent bg-gradient-to-r ${feature.gradient} bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Perfect for Every{" "}
              <span className="bg-gradient-to-r from-tw-blue to-tw-pink bg-clip-text text-transparent">
                Industry
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startups to enterprises, our AI tools adapt to your specific
              needs and workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-tw-gray/60 border border-gray-700 rounded-2xl p-6 hover:border-tw-primary/40 transition-all duration-300 group"
              >
                <h3
                  className={`text-xl font-bold mb-3 bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}
                >
                  {useCase.industry}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <ChevronRight className="w-4 h-4 text-tw-accent" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-tw-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Loved by{" "}
              <span className="bg-gradient-to-r from-tw-orange to-tw-pink bg-clip-text text-transparent">
                Thousands
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Join the community of innovators transforming their work with AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-tw-gray/80 border border-gray-700 rounded-2xl p-6 hover:border-tw-primary/40 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p
                    className={`font-semibold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}
                  >
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-tw-neon to-tw-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-tw-gray/60 border border-gray-700 rounded-xl p-6 hover:border-tw-primary/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tw-primary/20 via-tw-pink/20 to-tw-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've already discovered the power
            of AI automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-tw-primary/25 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
           
          </div>
        </div>
      </section>

      {/* Footer */}
       <footer class=" text-white bg-tw-dark border-t border-gray-800 py-16">
             <div class="container mx-auto px-6">
                 <div class="grid md:grid-cols-4 gap-8">
                     <div>
                         <div className="flex items-center space-x-3 mb-4">
                     <div className="w-10 h-10 bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink rounded-lg flex items-center justify-center">
                       <Zap className="text-white w-6 h-6" />
                     </div>
                     <span className="text-2xl font-bold bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink bg-clip-text text-transparent">
                       Toolworld.ai
                     </span>
                   </div>
     <p className="text-gray-400 mb-6 max-w-md">
                     The most comprehensive AI platform for discovering, learning,
                     & mastering the tools that will define the future of work.
                   </p>
                   <div className="flex items-center gap-4 text-gray-400">
                     <Users className="w-5 h-5" />
                     <span>Join 50,000+ AI enthusiasts worldwide</span>
                   </div>
                                   </div>
                   <div>
                         <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                         <ul class="space-y-2">
                             <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                             <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                             <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                             <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
     
                             
                         </ul>
                     </div>
                     <div>
      <h4 class="text-lg font-semibold mb-4">Services</h4>
                         <ul class="space-y-2">
                              <li><Link to="/services/tools" className="text-gray-400 hover:text-white">Tools</Link></li>
                             <li><Link to="/services/tutorials" className="text-gray-400 hover:text-white">Tutorials</Link></li>
                             <li><Link to="/services/prompts" className="text-gray-400 hover:text-white">Prompts</Link></li>
                             <li><Link to="/services/compare" className="text-gray-400 hover:text-white">Compare</Link></li>
                               <li><Link to="/services/news" className="text-gray-400 hover:text-white">News</Link></li>
                             <li><Link to="/services/community" className="text-gray-400 hover:text-white">Community</Link></li>
                            
                         </ul>
                     </div>
                     <div>
                         <h4 class="text-lg font-semibold mb-4">Connect With Us</h4>
                           <div class="flex space-x-8">
                              <a href="#" class="w-10 h-10 hover:text-white bg-gray-800 hover:bg-tw-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 "><i class="fab fa-twitter text-xl"></i></a>
                                  <a href="#" class="w-10 h-10 hover:text-white bg-gray-800 hover:bg-tw-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 "><i class="fab fa-linkedin text-xl"></i></a>
                                  <a href="#" class="w-10 h-10 hover:text-white bg-gray-800 hover:bg-tw-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 "><i class="fab fa-github text-xl"></i></a>
                                  <a href="#" class="w-10 h-10 hover:text-white bg-gray-800 hover:bg-tw-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 "><i class="fab fa-instagram text-xl"></i></a>
                           
                         </div>
                         <p class="text-gray-400 mt-4">Email:  contact@toolworld.in</p>
                         <p class="text-gray-400">+91  XXXXXXXXXX</p>
                     </div> </div>
                 <div class="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
                     <p>© 2025  Toolworld.ai, All rights reserved.</p>
                 </div>
             </div>
         </footer>
    </div>
  );
}
