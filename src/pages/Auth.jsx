import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Eye, EyeOff, Github, Chrome, X } from "lucide-react";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(searchParams.get("mode") !== "signup");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

const handleSubmit = (e) => {
  e.preventDefault();

    // Simulate login/signup success
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: formData.name || "Alex Chen",
        email: formData.email,
        plan: "Pro",
        avatar: "👨‍💻",
      }),
    );

    // Redirect to dashboard
    navigate("/dashboard");
  };

  const handleGoogleAuth = () => {
    // Simulate Google OAuth
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Alex Chen",
        email: "alex@toolworld.ai",
        plan: "Pro",
        avatar: "👨‍💻",
      }),
    );
    navigate("/dashboard");
  };

  const handleGithubAuth = () => {
    // Simulate GitHub OAuth
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Alex Chen",
        email: "alex@toolworld.ai",
        plan: "Free",
        avatar: "👨‍💻",
      }),
    );
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-tw-dark">
      <Navbar />

      <div className="pt-20 pb-16">
        <div className="max-w-md mx-auto px-4">
          {/* Auth Container */}
          <div className="bg-tw-gray/60 border border-gray-700 rounded-2xl overflow-hidden backdrop-blur-xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink p-6 text-center">
               <button
  onClick={() => navigate(-1)}
 className="mb-6 flex items-center space-x-2 text-white hover:text-white transition-colors "
            >
 
  
              <X className=" w-5 h-5 text-white" />
</button>
              <h1 className="text-3xl font-bold text-white mb-2">
                {isLogin ? "Welcome Back" : "Join Toolworld.ai"}
              </h1>
              <p className="text-white/80">
                {isLogin ? "Sign in to your account" : "Create your account"}
              </p>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full p-3 bg-tw-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full p-3 bg-tw-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="w-full p-3 bg-tw-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors pr-10"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="w-full p-3 bg-tw-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors"
                      placeholder="Confirm your password"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink text-white py-3 rounded-lg hover:shadow-lg hover:shadow-tw-primary/25 transition-all duration-200 transform hover:scale-105 font-medium"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                </button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-gray-600"></div>
                <span className="px-4 text-gray-400 text-sm">or</span>
                <div className="flex-1 border-t border-gray-600"></div>
              </div>

              {/* OAuth Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleGoogleAuth}
                  className="w-full flex items-center justify-center gap-3 p-3 border border-gray-600 rounded-lg hover:border-tw-primary hover:bg-tw-primary/10 transition-all duration-200 text-white"
                >
                  <Chrome size={20} />
                  Continue with Google
                </button>
                <button
                  onClick={handleGithubAuth}
                  className="w-full flex items-center justify-center gap-3 p-3 border border-gray-600 rounded-lg hover:border-tw-accent hover:bg-tw-accent/10 transition-all duration-200 text-white"
                >
                  <Github size={20} />
                  Continue with GitHub
                </button>
              </div>

              {/* Switch Mode */}
              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-tw-primary hover:text-tw-accent transition-colors font-medium"
                  >
                    {isLogin ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
