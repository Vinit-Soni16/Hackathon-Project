import Navbar from "./Navbar";
import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";


const PlaceholderPage = ({ title, description }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-ai-purple to-ai-electric rounded-full mb-6">
              <Construction className="text-white" size={40} />
            </div>
            <h1 className="text-4xl font-bold text-ai-dark mb-4">{title}</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-ai-dark mb-4">
              Coming Soon! 🚀
            </h2>
            <p className="text-gray-600 mb-6">
              We're working hard to bring you amazing content for this section.
              Check back soon or continue exploring our other features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-gradient-to-r from-ai-purple to-ai-electric text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>
              <button className="border-2 border-ai-purple text-ai-purple px-6 py-3 rounded-xl hover:bg-ai-purple hover:text-white transition-all duration-200">
                Notify Me When Ready
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Want this page completed? Continue prompting me to fill in the
            specific content you'd like to see here!
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;