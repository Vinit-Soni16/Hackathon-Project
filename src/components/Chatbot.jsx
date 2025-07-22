import { useState } from "react";
import { MessageCircle, X, Send, Zap, Loader2 } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Hi! I'm your AI assistant powered by Gemini. I can help you find tools, answer questions about AI, and provide recommendations. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Mock user - in real app this would come from auth state
  const isProUser  = true; // Change to false to test non-Pro experience

  const sendMessage = async () => {
    if (!inputMessage.trim() || isTyping) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    // Add user message immediately
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage("");
    setIsTyping(true);

    try {
      // Call backend API endpoint
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Add bot response
      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        content: data.response,
        timestamp: new Date(),
        isRealTime: !data.fallback,
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error sending message:", error);

      // Fallback response for network errors
      const errorResponse = {
        id: messages.length + 2,
        type: "bot",
        content:
          "I'm experiencing some technical difficulties right now, but I'm still here to help! As your AI assistant for Toolworld.ai, I can help you discover AI tools, provide recommendations, and answer questions about artificial intelligence. Please try your question again, or let me know how else I can assist you!",
        timestamp: new Date(),
        isRealTime: false,
      };

      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isProUser ) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-tw-gray/95 backdrop-blur-xl border border-gray-700 rounded-xl p-4 shadow-2xl max-w-xs">
          <div className="text-center">
            <Zap className="w-8 h-8 text-tw-primary mx-auto mb-2" />
            <h3 className="text-white font-semibold mb-2">
              Upgrade to Pro for AI Chat
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Get instant AI assistance with our Gemini-powered chatbot
            </p>
            <button className="w-full bg-gradient-to-r from-tw-primary to-tw-accent text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200 text-sm">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-tw-primary to-tw-accent text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center animate-glow-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-tw-dark/95 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-tw-primary to-tw-accent p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">AI Assistant</h3>
                <p className="text-white/80 text-xs">Powered by Gemini</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-gradient-to-r from-tw-primary to-tw-accent text-white"
                      : "bg-tw-gray border border-gray-600 text-gray-200"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <div className="flex justify-between items-center mt-1">
                    <p
                      className={`text-xs ${
                        message.type === "user"
                          ? "text-white/70"
                          : "text-gray-400"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    {message.type === "bot" && message.isRealTime && (
                      <span className="text-xs text-green-400 flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        Real-time
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-tw-gray border border-gray-600 text-gray-200 p-3 rounded-lg max-w-[80%]">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-tw-primary" />
                    <span className="text-sm text-gray-400">
                      AI is thinking...
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && !isTyping && sendMessage()
                }
                placeholder={
                  isTyping
                    ? "AI is responding..."
                    : "Ask me anything about AI tools..."
                }
                disabled={isTyping}
                className="flex-1 bg-tw-gray border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-tw-primary transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={sendMessage}
                disabled={isTyping || !inputMessage.trim()}
                className="bg-gradient-to-r from-tw-primary to-tw-accent text-white p-2 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isTyping ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
            {isTyping && (
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                <Zap className="w-3 h-3 text-tw-primary" />
                <span>Getting real-time response from Gemini AI...</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
