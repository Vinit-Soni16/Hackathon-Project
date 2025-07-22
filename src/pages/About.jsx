import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Zap,
  Users,
  Target,
  Award,
  Rocket,
  Heart,
  Code,
  Shield,
  School,
  University,
  Globe2,
  Lightbulb,
} from "lucide-react";

export default function About() {
  const founder = {
    name: "Vinit Kumar Soni",
    role: "Founder & Developer",
    bio: "Web Developer passionate about making AI accessible to everyone. Currently pursuing BCA in Cyber Security while building the future of AI tools.",
    avatar: "👨‍💻",
    gradient: "from-tw-primary to-tw-accent",
    education: [
      {
        level: "10th Grade",
        school: "Jai Durga School, Jaipur",
        year: "Completed",
        icon: "🎓",
      },
      {
        level: "12th Grade",
        school: "Jai Durga School, Jaipur",
        year: "Completed",
        icon: "📚",
      },
      {
        level: "BCA in Cyber Security",
        school: "ICFAI University, Jaipur",
        year: "Currently Pursuing",
        icon: "🔒",
      },
    ],
  };

  const team = [
    {
      name: "Vinit Kumar Soni",
      role: "Founder & Full-Stack Developer",
      bio: "Building AI tools platform from Jaipur. Combining web development skills with cybersecurity knowledge.",
      avatar: "👨‍💻",
      gradient: "from-tw-primary to-tw-accent",
    },
    {
      name: "AI Community",
      role: "Contributors & Testers",
      bio: "Amazing community members who help test features and provide valuable feedback.",
      avatar: "👥",
      gradient: "from-tw-blue to-tw-pink",
    },
    {
      name: "Future Team",
      role: "Join Us!",
      bio: "We're growing and looking for passionate developers and AI enthusiasts to join our mission.",
      avatar: "🚀",
      gradient: "from-tw-accent to-tw-orange",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Started Web Development Journey",
      description:
        "Began learning web development while studying cyber security",
      color: "tw-primary",
    },
    {
      year: "2025",
      title: "Founded Toolworld.ai",
      description:
        "Started building this platform as a startup to democratize AI tools",
      color: "tw-primary",
    },
   
  ];

  const values = [
    {
      title: "Accessibility",
      description:
        "Making AI tools accessible to everyone, regardless of technical background",
      icon: Users,
      gradient: "from-tw-primary to-tw-accent",
    },
    {
      title: "Education",
      description:
        "Providing tutorials and guides to help users master AI tools",
      icon: Lightbulb,
      gradient: "from-tw-blue to-tw-pink",
    },
    {
      title: "Innovation",
      description:
        "Constantly exploring new AI tools and technologies to feature",
      icon: Rocket,
      gradient: "from-tw-accent to-tw-orange",
    },
    {
      title: "Security",
      description:
        "Ensuring user data and privacy protection with cybersecurity expertise",
      icon: Shield,
      gradient: "from-tw-pink to-tw-neon",
    },
  ];

  const startupJourney = [
    {
      phase: "Idea",
      description: "Identified the need for a centralized AI tools platform",
      icon: "💡",
      status: "completed",
    },
    {
      phase: "Development",
      description: "Building the platform with modern web technologies",
      icon: "⚡",
      status: "in-progress",
    },
    {
      phase: "Launch",
      description: "Release MVP and gather user feedback",
      icon: "🚀",
      status: "upcoming",
    },
    {
      phase: "Scale",
      description: "Expand features and user base globally",
      icon: "🌍",
      status: "future",
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
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-tw-primary to-tw-accent bg-clip-text text-transparent">
                Toolworld.ai
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Hi! I'm Vinit Kumar Soni, a web developer from Jaipur building
              this platform to make AI tools accessible to everyone. This is my
              startup journey to democratize artificial intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-tw-primary">
                <Code className="w-5 h-5" />
                <span className="text-sm font-medium">Web Developer</span>
              </div>
              <div className="flex items-center gap-2 text-tw-accent">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">
                  Cyber Security Student
                </span>
              </div>
              <div className="flex items-center gap-2 text-tw-blue">
                <Rocket className="w-5 h-5" />
                <span className="text-sm font-medium">Startup Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${founder.gradient} rounded-2xl flex items-center justify-center text-3xl`}
                >
                  {founder.avatar}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {founder.name}
                  </h2>
                  <p className="text-tw-primary font-medium">{founder.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {founder.bio}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe2 className="w-5 h-5 text-tw-accent" />
                  <span>Based in Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Code className="w-5 h-5 text-tw-primary" />
                  <span>Full-Stack Web Developer</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Shield className="w-5 h-5 text-tw-blue" />
                  <span>Cybersecurity Enthusiast</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Educational Journey
              </h3>
              <div className="space-y-4">
                {founder.education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-tw-gray/40 rounded-xl p-4 border border-gray-700"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{edu.icon}</span>
                      <div>
                        <h4 className="text-white font-medium">{edu.level}</h4>
                        <p className="text-gray-400 text-sm">{edu.school}</p>
                        <p className="text-tw-primary text-xs">{edu.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Startup Vision */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              The Startup Vision
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Building a platform where users can discover, learn, and use AI
              tools with proper tutorials, prompts, and transparent pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {startupJourney.map((phase, index) => (
              <div
                key={index}
                className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{phase.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {phase.phase}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {phase.description}
                </p>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    phase.status === "completed"
                      ? "bg-green-500/20 text-green-400"
                      : phase.status === "in-progress"
                        ? "bg-blue-500/20 text-blue-400"
                        : phase.status === "upcoming"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {phase.status.replace("-", " ")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-400">
              The principles that guide our platform development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200 group"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-xl mb-4`}
                >
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-tw-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-gray-400">
              Small but passionate team building the future of AI accessibility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-200 group"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4`}
                >
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tw-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-tw-accent font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-gray-400">
              Key milestones in building Toolworld.ai
            </p>
          </div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-tw-gray/60 backdrop-blur-xl border border-gray-700 rounded-xl p-6 flex items-center gap-6 hover:shadow-lg transition-all duration-200"
              >
                <div
                  className={`w-16 h-16 bg-${milestone.color} rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                >
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-tw-primary/20 to-tw-accent/20 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Rocket className="w-12 h-12 text-tw-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Our Mission
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Help us make AI tools accessible to everyone. Whether you're a
              developer, AI enthusiast, or just curious about artificial
              intelligence, there's a place for you here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-tw-primary to-tw-accent text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="/services/community"
                className="border border-gray-600 text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200"
              >
                Join Community
              </a>
            </div>
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
