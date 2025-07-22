import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Zap, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleServicesClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(true);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleLogoClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(false);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const serviceItems = [
    {
      name: "Tools",
      href: "/services/tools",
      icon: "🔧",
      color: "text-tw-primary",
    },
    {
      name: "Tutorials",
      href: "/services/tutorials",
      icon: "🎓",
      color: "text-tw-accent",
    },
    {
      name: "Prompts",
      href: "/services/prompts",
      icon: "💡",
      color: "text-tw-neon",
    },
    {
      name: "Compare",
      href: "/services/compare",
      icon: "⚖️",
      color: "text-tw-blue",
    },
    {
      name: "News",
      href: "/services/news",
      icon: "📰",
      color: "text-tw-orange",
    },
    {
      name: "Community",
      href: "/services/community",
      icon: "👥",
      color: "text-tw-pink",
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-tw-dark/95 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-16">
          {/* Flip Container */}
          <div
            className={`navbar-flip-container w-full h-full transition-transform duration-800 ease-in-out transform-gpu ${isFlipped ? "rotate-y-180" : ""}`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front Face - Default Navigation */}
            <div
              className="navbar-face absolute inset-0 flex justify-between items-center px-0"
              style={{ backfaceVisibility: "hidden" }}
            >
              {/* Logo */}
              <button
                onClick={handleLogoClick}
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink rounded-lg flex items-center justify-center transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                    <Zap className="text-white w-6 h-6" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink bg-clip-text text-transparent">
                  Toolworld.ai
                </span>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  to="/"
                  className="text-white hover:text-tw-primary transition-colors duration-200 font-medium relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tw-primary to-tw-accent group-hover:w-full transition-all duration-300"></span>
                </Link>

                <button
                  onClick={handleServicesClick}
                  className="text-white hover:text-tw-primary transition-colors duration-200 font-medium relative group flex items-center gap-2"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tw-primary to-tw-accent group-hover:w-full transition-all duration-300"></span>
                </button>

                <Link
                  to="/about"
                  className="text-white hover:text-tw-accent transition-colors duration-200 font-medium relative group"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tw-accent to-tw-blue group-hover:w-full transition-all duration-300"></span>
                </Link>

                <Link
                  to="/pricing"
                  className="text-white hover:text-tw-pink transition-colors duration-200 font-medium relative group"
                >
                  Pricing
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tw-pink to-tw-orange group-hover:w-full transition-all duration-300"></span>
                </Link>
                 <Link
                  to="/contact"
                  className="text-white hover:text-tw-accent transition-colors duration-200 font-medium relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tw-accent to-tw-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>

              {/* Auth Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <Link
                  to="/auth"
                  className="text-tw-primary hover:text-tw-accent font-medium transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/auth?mode=signup"
                  className="bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-tw-primary/25 transition-all duration-200 transform hover:scale-105 font-medium"
                >
                  Sign Up
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-tw-primary transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Back Face - Services Navigation */}
            <div
              className="navbar-face absolute inset-0 flex justify-between items-center px-0"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              {/* Logo */}
              <button
                onClick={handleLogoClick}
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-tw-secondary via-tw-blue to-tw-neon rounded-lg flex items-center justify-center transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                    <Zap className="text-white w-6 h-6" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-tw-secondary via-tw-blue to-tw-neon rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-tw-secondary via-tw-blue to-tw-neon bg-clip-text text-transparent">
                  Services
                </span>
              </button>

              {/* Services Navigation */}
              <div className="hidden lg:flex items-center space-x-6">
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${item.color} hover:text-white transition-colors duration-200 font-medium flex items-center gap-2`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Auth Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <Link
                  to="/auth"
                  className="text-tw-blue hover:text-tw-accent font-medium transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/auth?mode=signup"
                  className="bg-gradient-to-r from-tw-blue via-tw-neon to-tw-secondary text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-tw-blue/25 transition-all duration-200 transform hover:scale-105 font-medium"
                >
                  Sign Up
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-tw-primary transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-tw-dark/95 backdrop-blur-xl border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white hover:text-tw-primary transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div className="px-4">
                <button
                  onClick={handleServicesClick}
                  className="text-white hover:text-tw-primary transition-all duration-200 font-medium flex items-center gap-2"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isFlipped && (
                  <div className="ml-4 mt-2 space-y-2">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`flex items-center gap-2 ${item.color} hover:text-white transition-colors py-2`}
                        onClick={() => {
                          setIsFlipped(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="text-white hover:text-tw-accent transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                to="/pricing"
                className="text-white hover:text-tw-pink transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>

              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-800">
                <Link
                  to="/auth"
                  className="text-tw-primary hover:text-tw-accent font-medium text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/auth?mode=signup"
                  className="bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 w-fit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style >{`
        .navbar-flip-container {
          perspective: 1000px;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
