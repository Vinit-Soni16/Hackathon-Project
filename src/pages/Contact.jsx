import Navbar from "../components/Navbar";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Zap,
  Users,
  Headphones,
  Building,
  Globe,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      value: "contact@toolworld.in",
      link: "mailto:contact@toolworld.in",
      gradient: "from-tw-primary to-tw-accent",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      value: "+91 XXXXXXXXXX",
      link: "tel:+91XXXXXXXXXX",
      gradient: "from-tw-blue to-tw-pink",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our office",
      value: "Comming Soon",
      link: "#",
      gradient: "from-tw-accent to-tw-orange",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our AI assistant",
      value: "Available 24/7",
      link: "#",
      gradient: "from-tw-pink to-tw-neon",
    },
  ];

  const departments = [
    {
      name: "General Inquiries",
      email: "contact@toolworld.in",
      description: "Questions about our platform and services",
      icon: "\uD83D\uDCAC",
    },
    {
      name: "Technical Support",
      email: "support@toolworld.ai",
      description: "Help with tools, bugs, and technical issues",
      icon: "\uD83D\uDD27",
    },
    {
      name: "Business & Partnerships",
      email: "business@toolworld.ai",
      description: "Collaboration and partnership opportunities",
      icon: "\uD83E\uDD1D",
    },
    {
      name: "Press & Media",
      email: "press@toolworld.ai",
      description: "Media inquiries and press releases",
      icon: "\uD83D\uDCF0",
    },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/toolworldai",
      color: "text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/toolworldai",
      color: "text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/toolworldai",
      color: "text-gray-400",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "general",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
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
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-tw-primary to-tw-accent bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Have questions about AI tools? Need technical support? Want to
              explore partnerships? We're here to help you succeed with AI.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-tw-primary">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">24/7 AI Support</span>
              </div>
              <div className="flex items-center gap-2 text-tw-accent">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
              <div className="flex items-center gap-2 text-tw-blue">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="group bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl mb-4`}
              >
                <method.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-tw-primary transition-colors">
                {method.title}
              </h3>
              <p className="text-gray-400 text-sm mb-2">{method.description}</p>
              <p className="text-tw-primary font-medium">{method.value}</p>
            </a>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-400">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-tw-gray border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-tw-gray border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Subject Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-tw-gray border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tw-primary transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="business">Business & Partnerships</option>
                    <option value="press">Press & Media</option>
                    <option value="feedback">Feedback & Suggestions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-tw-gray border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-tw-gray border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors resize-none"
                    placeholder="Tell us more about how we can help you..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-500/20 border border-green-500 rounded-xl p-4">
                    <p className="text-green-400 text-center">
                      ✅ Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-500/20 border border-red-500 rounded-xl p-4">
                    <p className="text-red-400 text-center">
                      ❌ Something went wrong. Please try again.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-tw-primary to-tw-accent text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Departments */}
            <div className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">
                <Building className="w-5 h-5 inline mr-2" />
                Departments
              </h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-700 last:border-0 pb-4 last:pb-0"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{dept.icon}</span>
                      <div>
                        <h4 className="text-white font-medium mb-1">
                          {dept.name}
                        </h4>
                        <p className="text-gray-400 text-sm mb-2">
                          {dept.description}
                        </p>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-tw-primary hover:text-tw-accent transition-colors text-sm"
                        >
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">
                <Clock className="w-5 h-5 inline mr-2" />
                Office Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">8:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-2 text-tw-primary">
                    <Headphones className="w-4 h-4" />
                    <span className="text-sm">AI Support: 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 ${social.color} hover:text-white bg-gray-800 hover:bg-tw-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-r from-tw-primary/10 to-tw-accent/10 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">
              Quick answers to common questions about Toolworld.ai
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How quickly do you respond to inquiries?",
                a: "We typically respond within 24 hours for general inquiries and within 4 hours for technical support during business hours.",
              },
              {
                q: "Do you offer phone support?",
                a: "Yes! Phone support is available Monday-Friday 8 AM to 5 PM PST. Our AI assistant is available 24/7 for immediate help.",
              },
              {
                q: "Can I schedule a demo or consultation?",
                a: "Absolutely! Contact our business team to schedule a personalized demo or consultation for your organization.",
              },
              {
                q: "Do you have an office I can visit?",
                a: "Our main office is located in San Francisco, CA. Please contact us in advance to schedule a visit.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-tw-gray/40 backdrop-blur-xl border border-gray-700 rounded-xl p-6"
              >
                <h4 className="text-white font-semibold mb-3">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
