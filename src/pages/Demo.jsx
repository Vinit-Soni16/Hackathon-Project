import { useNavigate } from "react-router-dom";
import { Check, Zap, Users, Star, DollarSign, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    title: "Automation",
    desc: "Automate your workflows and save time with powerful integrations.",
  },
  {
    icon: <Users className="w-6 h-6 text-green-500" />,
    title: "Collaboration",
    desc: "Work together with your team in real-time, from anywhere.",
  },
  {
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    title: "Top Rated",
    desc: "Trusted by millions of users worldwide for reliability and performance.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-purple-500" />,
    title: "Flexible Pricing",
    desc: "Choose a plan that fits your needs, from free to premium.",
  },
];

export default function Demo() {
  const navigate = useNavigate();

  return (
    
    <div className="min-h-screen bg-tw-dark  flex flex-col items-center justify-center p-4">
                <Navbar/>

      <div className="mt-20 w-full max-w-3xl bg-gradient-to-r from-tw-primary/20 via-tw-secondary/20 to-tw-accent/20 rounded-2xl shadow-2xl p-8">
       <button
  onClick={() => navigate(-1)}
  className="mb-6 flex items-center space-x-2 bg-black dark:bg-gray-100 text-white hover:text-black dark:text-black px-4 py-2 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-black-600 transition"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
  Back
</button>
        <h1 className="text-4xl font-extrabold text-white dark:text-blue-300 mb-2 text-center">
          Welcome to Your Marketing Tools Hub!
        </h1>
        <p className="text-lg text-gray-400 dark:text-gray-300 mb-8 text-center">
          Discover, compare, and get the best out of modern marketing tools. Here’s what makes our platform special:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-start space-x-4 bg-tw-gray/40 dark:bg-gray-900 rounded-lg p-4 shadow hover:scale-105 transition"
            >
              <div>{f.icon}</div>
              <div>
                <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-1">{f.title}</h3>
                <p className="text-gray-400 dark:text-gray-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center text-blue-700 dark:text-blue-300 mb-4">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-400 dark:text-gray-200 space-y-2">
            <li>Browse and search for top marketing tools.</li>
            <li>Compare features, pricing, and user ratings side by side.</li>
            <li>Pick the best tool for your business needs.</li>
            <li>Stay updated with the latest trends and tutorials.</li>
          </ol>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/services/tools")}
            className="hover:bg-gradient-to-r from-tw-primary via-tw-accent to-tw-pink text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-tw-primary/25 transition-all duration-200 transform hover:scale-105 flex items-center gap-2 text-lg border-2 border-tw-primary text-tw-primary"
          >
            Explore Tools <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}