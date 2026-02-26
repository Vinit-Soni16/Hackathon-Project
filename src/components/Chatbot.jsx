import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Zap, Loader2, Sparkles, Trash2 } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initialMessage = {
    id: 1,
    type: "bot",
    content:
      "Hi! I'm your Toolworld AI assistant. I can help you find tools, answer questions about our platform, and guide you through our features. How can I assist you today?",
    timestamp: new Date(),
  };
  const [messages, setMessages] = useState([initialMessage]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickOptions = [
    "What is Toolworld.ai?",
    "Show me Pricing",
    "Who is the Founder?",
    "Available AI Tools",
    "How to use tools?",
  ];

  const clearChat = () => {
    if (window.confirm("Are you sure you want to clear the chat history?")) {
      setMessages([initialMessage]);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const systemPrompt = `You are the official AI assistant for Toolworld.ai. Your name is Toolworld AI.
You ONLY answer questions related to Toolworld.ai, its features, pricing, the founder, and the AI tools listed on the platform.
Toolworld.ai info:
- Purpose: A platform for discovering, learning, and mastering AI tools.
- Founder: Vinit Kumar Soni (Web Developer from Jaipur, pursuing BCA in Cyber Security).
- Key Features: 100+ AI tools directory, 50+ tutorials, Community library, Real-time data.
- Pricing: Free (₹0) and Pro (₹99/month). Pro includes Gemini bot, real-time data, and API access.
- Contact: contact@toolworld.in.
If a user asks about anything unrelated (e.g., world news, general coding not related to our tools, personal questions, or any topic outside of Toolworld.ai), politely decline. Say: "I'm specialized in Toolworld.ai related queries. I can't help with that, but I can tell you all about our platform and AI tools!"
Keep responses concise, professional, and helpful. Use markdown for better formatting if needed.`;

  const sendMessage = async (overrideMessage = null) => {
    const textToSend = overrideMessage || inputMessage;
    if (!textToSend.trim() || isTyping) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!overrideMessage) setInputMessage("");
    setIsTyping(true);

    try {
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash", 
        systemInstruction: systemPrompt
      });

      // Robustly format history: Must start with 'user' role
      const history = [];
      let foundFirstUser = false;
      
      for (const msg of messages) {
        if (msg.type === "user") foundFirstUser = true;
        
        if (foundFirstUser) {
          history.push({
            role: msg.type === "user" ? "user" : "model",
            parts: [{ text: msg.content }],
          });
        }
      }

      const chat = model.startChat({
        history: history,
      });

      const result = await chat.sendMessage(textToSend);
      const response = await result.response;
      const botText = response.text();

      const botResponse = {
        id: Date.now(),
        type: "bot",
        content: botText,
        timestamp: new Date(),
        isRealTime: true,
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Gemini Error:", error);
      const errorResponse = {
        id: Date.now(),
        type: "bot",
        content: "I'm having trouble connecting right now. Please check your connection and try again! I'm here to help with any Toolworld.ai questions.",
        timestamp: new Date(),
        isRealTime: false,
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-tw-primary to-tw-accent text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center animate-glow-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="bg-tw-dark/95 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl w-96 max-w-[calc(100vw-32px)] h-[600px] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-tw-primary to-tw-accent p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Toolworld AI</h3>
                <p className="text-white/80 text-xs">Gemini 2.5 Flash • Real-time</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                title="Clear Chat"
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    message.type === "user"
                      ? "bg-gradient-to-r from-tw-primary to-tw-accent text-white rounded-tr-none shadow-md"
                      : "bg-tw-gray border border-gray-700 text-gray-200 rounded-tl-none shadow-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  <div className="flex justify-between items-center mt-2 gap-2">
                    <p className={`text-[10px] ${message.type === "user" ? "text-white/60" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                    {message.type === "bot" && message.isRealTime && (
                      <span className="text-[10px] text-tw-accent flex items-center gap-1 font-medium">
                        <Zap className="w-2.5 h-2.5" />
                        Live
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-tw-gray border border-gray-700 text-gray-200 p-3 rounded-2xl rounded-tl-none max-w-[85%]">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-tw-primary" />
                    <span className="text-xs text-gray-400 font-medium">Assistant is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer with Quick Options and Input */}
          <div className="p-4 border-t border-gray-800 bg-tw-dark/50 flex-shrink-0">
            {!isTyping && messages.length < 5 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {quickOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => sendMessage(option)}
                    className="text-[11px] bg-tw-gray hover:bg-gray-700 border border-gray-700 text-gray-300 px-3 py-1.5 rounded-full transition-all hover:border-tw-primary/50"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about Toolworld.ai..."
                disabled={isTyping}
                className="flex-1 bg-tw-gray border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-tw-primary transition-all text-sm disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage()}
                disabled={isTyping || !inputMessage.trim()}
                className="bg-gradient-to-r from-tw-primary to-tw-accent text-white p-2.5 rounded-xl hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:scale-100 flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
