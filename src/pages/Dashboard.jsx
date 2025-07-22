import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BarChart3,
  Settings,
  User,
  LogOut,
  Zap,
  TrendingUp,
  Activity,
  Users,
  FileText,
  Calendar,
  Bell,
  Search,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser ] = useState(null);
  const [activeSection, setActiveSection] = useState("overview");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    apiKey: "sk-xxxxxxxxxxxxxxxxxxxxxxxx",
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userData = localStorage.getItem("user");

    if (!isLoggedIn || !userData) {
      navigate("/auth");
      return;
    }

    const parsedUser  = JSON.parse(userData);
    setUser (parsedUser );
    setFormData({
      email: parsedUser .email || "",
      name: parsedUser .name || "",
      apiKey: "sk-xxxxxxxxxxxxxxxxxxxxxxxx",
    });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/");
  };

  const stats = [
    {
      name: "Total Tools Used",
      value: "127",
      change: "+12%",
      icon: Zap,
      color: "text-tw-primary",
    },
    {
      name: "API Calls",
      value: "2,847",
      change: "+18%",
      icon: TrendingUp,
      color: "text-tw-accent",
    },
    {
      name: "Projects",
      value: "24",
      change: "+5%",
      icon: FileText,
      color: "text-tw-blue",
    },
    {
      name: "Team Members",
      value: "8",
      change: "+2",
      icon: Users,
      color: "text-tw-pink",
    },
  ];

  const recentActivity = [
    {
      action: "Created new AI model",
      time: "2 minutes ago",
      type: "success",
      icon: Zap,
    },
    {
      action: "Updated prompt library",
      time: "15 minutes ago",
      type: "info",
      icon: FileText,
    },
    {
      action: "Team member joined",
      time: "1 hour ago",
      type: "success",
      icon: Users,
    },
    {
      action: "API limit reached",
      time: "2 hours ago",
      type: "warning",
      icon: Activity,
    },
    {
      action: "Monthly report generated",
      time: "1 day ago",
      type: "info",
      icon: BarChart3,
    },
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-tw-dark flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tw-dark">
      {/* Header */}
      <header className="bg-tw-gray/60 border-b border-gray-700 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink rounded-lg flex items-center justify-center">
                <Zap className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink bg-clip-text text-transparent">
                Toolworld.ai
              </span>
            </div>

            {/* Search */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search tools, prompts, tutorials..."
                  className="w-full pl-10 pr-4 py-2 bg-tw-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors"
                />
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3">
                <div className="text-right hidden sm:block">
                  <div className="text-sm font-medium text-white">
                    {user.name}
                  </div>
                  <div className="text-xs text-gray-400">{user.plan} Plan</div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-tw-blue to-tw-purple rounded-full flex items-center justify-center text-lg">
                  {user.avatar}
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-tw-gray/40 border-r border-gray-700 min-h-screen">
          <div className="p-6">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveSection("overview")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === "overview"
                    ? "bg-tw-primary/20 text-tw-primary"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                <span>Overview</span>
              </button>

              <button
                onClick={() => setActiveSection("settings")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === "settings"
                    ? "bg-tw-accent/20 text-tw-accent"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>

              <button
                onClick={() => setActiveSection("profile")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === "profile"
                    ? "bg-tw-blue/20 text-tw-blue"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                <User  className="w-5 h-5" />
                <span>Profile</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8">
          {activeSection === "overview" && (
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">
                  Welcome back, {user.name}! 👋
                </h1>
                <p className="text-gray-400">
                  Here's what's happening with your AI tools today.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-tw-gray/60 border border-gray-700 rounded-xl p-6 backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      <span className="text-tw-accent text-sm font-medium">
                        {stat.change}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.name}</div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-tw-gray/60 border border-gray-700 rounded-xl p-6 backdrop-blur-xl">
                <h2 className="text-xl font-bold text-white mb-6">
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {recentActivity.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          item.type === "success"
                            ? "bg-tw-accent/20 text-tw-accent"
                            : item.type === "warning"
                            ? "bg-tw-orange/20 text-tw-orange"
                            : "bg-tw-blue/20 text-tw-blue"
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white">{item.action}</div>
                        <div className="text-gray-400 text-sm">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === "settings" && (
            <div>
              <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

              <div className="space-y-6">
                {/* Account Settings */}
                <div className="bg-tw-gray/60 border border-gray-700 rounded-xl p-6 backdrop-blur-xl">
                  <h2 className="text-xl font-bold text-white mb-6">
                    Account Settings
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full p-3 bg-tw-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:border-tw-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full p-3 bg-tw-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:border-tw-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* API Settings */}
                <div className="bg-tw-gray/60 border border-gray-700 rounded-xl p-6 backdrop-blur-xl">
                  <h2 className="text-xl font-bold text-white mb-6">
                    API Configuration
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        API Key
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="password"
                          value={formData.apiKey}
                          onChange={(e) =>
                            setFormData({ ...formData, apiKey: e.target.value })
                          }
                          className="flex-1 p-3 bg-tw-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:border-tw-primary transition-colors"
                          readOnly
                        />
                        <button className="px-4 py-3 bg-tw-primary text-white rounded-lg hover:bg-tw-primary/80 transition-colors">
                          Regenerate
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Rate Limit
                      </label>
                      <select className="w-full p-3 bg-tw-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:border-tw-primary transition-colors">
                        <option>1,000 requests/hour</option>
                        <option>5,000 requests/hour</option>
                        <option>Unlimited (Pro)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "profile" && (
            <div>
              <h1 className="text-3xl font-bold text-white mb-8">Profile</h1>

              <div className="bg-tw-gray/60 border border-gray-700 rounded-xl p-8 backdrop-blur-xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-tw-blue to-tw-purple rounded-full flex items-center justify-center text-4xl">
                    {user.avatar}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {user.name}
                    </h2>
                    <p className="text-gray-400">{user.email}</p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                        user.plan === "Pro"
                          ? "bg-tw-primary/20 text-tw-primary"
                          : "bg-gray-600/20 text-gray-300"
                      }`}
                    >
                      {user.plan} Member
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Account Information
                    </h3>
                    <div className="space-y-3 text-gray-300">
                      <div>
                        <span className="text-gray-400">Member since:</span>{" "}
                        January 2024
                      </div>
                      <div>
                        <span className="text-gray-400">Last login:</span> Today
                      </div>
                      <div>
                        <span className="text-gray-400">Total sessions:</span>{" "}
                        1,247
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Usage Statistics
                    </h3>
                    <div className="space-y-3 text-gray-300">
                      <div>
                        <span className="text-gray-400">Tools used:</span> 127
                      </div>
                      <div>
                        <span className="text-gray-400">API calls:</span> 2,847
                      </div>
                      <div>
                        <span className="text-gray-400">Storage used:</span> 2.1
                        GB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      



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
                               <p class="text-gray-400 mt-4">Email:  contact@toolworld.in </p>
                               <p class="text-gray-400">+91 XXXXXXXXXX</p>
                           </div> </div>
                       <div class="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
                           <p>© 2025  Toolworld.ai, All rights reserved.</p>
                       </div>
                   </div>
               </footer>
    </div>
  );
}
