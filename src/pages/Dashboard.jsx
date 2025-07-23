 import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  Link,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout, updateUser  } = useAuth();
  const [activeSection, setActiveSection] = useState("overview");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    apiKey: "sk-xxxxxxxxxxxxxxxxxxxxxxxx",
  });

  useEffect(() => {
    if (!isAuthenticated || !user) {
      navigate("/auth");
      return;
    }

    setFormData({
      email: user.email || "",
      name: user.name || "",
      apiKey: "sk-xxxxxxxxxxxxxxxxxxxxxxxx",
    });
  }, [isAuthenticated, user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleUpdateProfile = () => {
    if (user) {
      updateUser ({
        name: formData.name,
        email: formData.email,
      });
      alert("Profile updated successfully!");
    }
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
     <Navbar/>

      <div className="flex mt-14">
        {/* Sidebar */}
        <div className="w-64 bg-tw-gray/40 border-r border-gray-700 min-h-screen">
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
                <button
  onClick={() => navigate(-1)}
  className="mb-6 flex items-center space-x-2 bg-white dark:bg-gray-100 text-black hover:text-white dark:text-black px-4 py-2 rounded-lg shadow hover:bg-black dark:hover:bg-black-600 transition"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
  Back
</button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
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

          {activeSection === "profile" && user && (
            
            <div>

              <h1 className="text-3xl font-bold text-white mb-8">Profile</h1>

              <div className="grid gap-8">
                {/* Profile Overview */}
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
                          {new Date(user.memberSince).toLocaleDateString()}
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

                {/* Edit Profile Form */}
                <div className="bg-tw-gray/60 border border-gray-700 rounded-xl p-8 backdrop-blur-xl">
                  <h3 className="text-lg font-semibold text-white mb-6">
                    Edit Profile
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full p-3 bg-tw-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors"
                      />
                    </div>
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
                        className="w-full p-3 bg-tw-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={handleUpdateProfile}
                      className="bg-gradient-to-r from-tw-primary to-tw-accent text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
      
     
    </div>
  );
}
