import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Check,
  X,
  Zap,
  Users,
  MessageCircle,
  Crown,
  Star,
  ArrowRight,
  Shield,
  Headphones,
} from "lucide-react";

export default function Pricing() {
  const freeFeatures = [
    "Access to 100+ AI tools directory",
    "Basic tool comparisons",
    "Community forum access",
    "50+ curated prompts library",
    "Tutorial videos",
    "News and updates",
    "Tool favorites and bookmarks",
    "Email support",
  ];

  const proFeatures = [
    "Everything in Free plan",
    "Gemini-powered AI chatbot",
    "Real-time data services",
    "Advanced tool analytics",
    "Priority customer support",
    "Exclusive Pro community",
    "Early access to new features",
    "API access for integrations",
    "Custom tool recommendations",
    "Advanced search filters",
    "Export and sharing capabilities",
    "White-label solutions",
  ];

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. All payments are processed securely with GST compliance.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your Pro subscription at any time. You'll continue to have access to Pro features until the end of your billing period.",
    },
    {
      question: "Is there a free trial for Pro plan?",
      answer:
        "Yes! New users get a 7-day free trial of the Pro plan. No credit card required to start your trial.",
    },
    {
      question: "What's included in the AI chatbot?",
      answer:
        "Our Gemini-powered chatbot can help you find tools, answer questions about AI, provide recommendations, troubleshoot issues, and much more. It's available 24/7 for Pro users.",
    },
    {
      question: "Do you offer discounts for students or non-profits?",
      answer:
        "Yes! We offer 50% discount for verified students and educational institutions, and 30% discount for registered non-profit organizations. Contact our support team for details.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Content Creator",
      content:
        "The Pro plan chatbot saves me hours every week. Best investment for my AI workflow!",
      rating: 5,
      gradient: "from-tw-primary to-tw-accent",
    },
    {
      name: "Rajesh Kumar",
      role: "Startup Founder",
      content:
        "Toolworld.ai helped us find the perfect AI tools for our team. The ROI is incredible.",
      rating: 5,
      gradient: "from-tw-blue to-tw-pink",
    },
    {
      name: "Ananya Patel",
      role: "Digital Marketer",
      content:
        "Free plan got me started, Pro plan took my productivity to the next level.",
      rating: 5,
      gradient: "from-tw-orange to-tw-neon",
    },
  ];
const navigate=useNavigate()
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
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the plan that works for you. Start free and upgrade when
              you're ready for advanced AI features.
            </p>
            <div className="inline-flex items-center gap-2 bg-tw-primary/10 border border-tw-primary/30 rounded-full px-4 py-2 text-tw-primary">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">
                30-day money-back guarantee
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* Free Plan */}
            <div className="bg-tw-gray/60 border border-gray-700 rounded-2xl p-8 relative overflow-hidden backdrop-blur-xl">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Free</h3>
                    <p className="text-gray-400">Perfect for getting started</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">₹0</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400 mt-2">
                    All essential features included
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {freeFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-tw-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm line-through">
                      AI chatbot
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm line-through">
                      Real-time data services
                    </span>
                  </li>
                </ul>

                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-semibold transition-colors duration-200">
                  Get Started Free
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-tw-primary/20 to-tw-secondary/20 border-2 border-tw-primary rounded-2xl p-8 relative overflow-hidden backdrop-blur-xl">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-tw-primary to-tw-secondary text-white px-6 py-2 rounded-bl-xl rounded-tr-2xl">
                <div className="flex items-center gap-1 text-sm font-medium">
                  <Crown className="w-4 h-4" />
                  Most Popular
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-tw-primary to-tw-secondary rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Pro</h3>
                    <p className="text-gray-300">For power users and teams</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">₹99</span>
                    <span className="text-gray-300">/month</span>
                  </div>
                  <p className="text-gray-300 mt-2">
                    Includes GST • Cancel anytime
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {proFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-tw-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-tw-primary to-tw-secondary text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-tw-primary/25 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                    Upgrade To Pro <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-xs text-gray-300">
                    7-day free trial • No credit card required
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Comparison */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Compare{" "}
                <span className="bg-gradient-to-r from-tw-blue to-tw-pink bg-clip-text text-transparent">
                  Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                See exactly what's included in each plan
              </p>
            </div>

            <div className="bg-tw-gray/60 border border-gray-700 rounded-2xl overflow-hidden backdrop-blur-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-6 px-6 text-white font-semibold">
                        Features
                      </th>
                      <th className="text-center py-6 px-6 text-white font-semibold">
                        Free
                      </th>
                      <th className="text-center py-6 px-6 text-white font-semibold">
                        Pro
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["AI Tools Directory", true, true],
                      ["Tutorial Videos", true, true],
                      ["Community Forum", true, true],
                      ["Basic Tool Comparison", true, true],
                      ["Gemini AI Chatbot", false, true],
                      ["Real-time Data Services", false, true],
                      ["Advanced Analytics", false, true],
                      ["Priority Support", false, true],
                      ["API Access", false, true],
                      ["White-label Solutions", false, true],
                    ].map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-700 hover:bg-tw-gray/30 transition-colors"
                      >
                        <td className="py-4 px-6 text-gray-300">
                          {row[0]}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {row[1] ? (
                            <Check className="w-5 h-5 text-tw-accent mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {row[2] ? (
                            <Check className="w-5 h-5 text-tw-accent mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                What Our Users{" "}
                <span className="bg-gradient-to-r from-tw-orange to-tw-neon bg-clip-text text-transparent">
                  Say
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-tw-gray/60 border border-gray-700 rounded-2xl p-6 backdrop-blur-xl"
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
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-tw-neon to-tw-accent bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-tw-gray/60 border border-gray-700 rounded-xl p-6 hover:border-tw-primary/40 transition-all duration-300 backdrop-blur-xl"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-tw-primary/20 via-tw-secondary/20 to-tw-accent/20 border border-gray-700 rounded-2xl p-8 lg:p-12 backdrop-blur-xl">
              <MessageCircle className="w-16 h-16 text-tw-primary mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team is here to help you choose the right plan and get the
                most out of Toolworld.ai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-tw-primary to-tw-secondary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-tw-primary/25 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Headphones className="w-5 h-5" />
                  Contact Support
                </button>
                <button className="border-2 border-tw-primary text-tw-primary px-8 py-3 rounded-xl font-semibold hover:bg-tw-primary hover:text-white transition-all duration-200">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
       <footer className=" text-white bg-tw-dark border-t border-gray-800 py-16">
             <div className="container mx-auto px-6">
                 <div className="grid md:grid-cols-4 gap-8">
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
                         <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                         <ul className="space-y-2">
                             <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                             <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                             <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                             <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
     
                             
                         </ul>
                     </div>
                     <div>
      <h4 className="text-lg font-semibold mb-4">Services</h4>
                         <ul className="space-y-2">
                              <li><Link to="/services/tools" className="text-gray-400 hover:text-white">Tools</Link></li>
                             <li><Link to="/services/tutorials" className="text-gray-400 hover:text-white">Tutorials</Link></li>
                             <li><Link to="/services/prompts" className="text-gray-400 hover:text-white">Prompts</Link></li>
                             <li><Link to="/services/compare" className="text-gray-400 hover:text-white">Compare</Link></li>
                               <li><Link to="/services/news" className="text-gray-400 hover:text-white">News</Link></li>
                             <li><Link to="/services/community" className="text-gray-400 hover:text-white">Community</Link></li>
                            
                         </ul>
                     </div>
                     <div>
                         <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                          <div className="flex space-x-8">
                              <a href="#" className="w-10 h-10 hover:text-white bg-gray-800 hover:bg-tw-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 "><i className="fab fa-twitter text-xl"></i></a>
                                  <a href="#" className="w-10 h-10 hover:text-white bg-gray-800 hover:bg-tw-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 "><i className="fab fa-linkedin text-xl"></i></a>
                                  <a href="#" className="w-10 h-10 hover:text-white bg-gray-800 hover:bg-tw-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 "><i className="fab fa-github text-xl"></i></a>
                                  <a href="#" className="w-10 h-10 hover:text-white bg-gray-800 hover:bg-tw-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 "><i className="fab fa-instagram text-xl"></i></a>
                           
                         </div>
                         <p className="text-gray-400 mt-4">Email:  contact@toolworld.in </p>
                         <p className="text-gray-400">+91 XXXXXXXXXX</p>
                     </div> </div>
                 <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
                     <p>© 2025  Toolworld.ai, All rights reserved.</p>
                 </div>
             </div>
         </footer>
    </div>
  );
}
