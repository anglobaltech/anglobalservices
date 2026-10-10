"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "model", text: "Hello! I am the AN Global Services assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Smart auto-scroll logic
  useEffect(() => {
    const container = document.getElementById("chat-scroll-container");
    const latestMessage = document.getElementById("latest-message");
    
    if (container) {
      if (latestMessage && latestMessage.offsetHeight > container.clientHeight * 0.7) {
        // If message is very long (takes up >70% of view), scroll to its top so user can read from beginning
        container.scrollTo({ top: latestMessage.offsetTop - 16, behavior: "smooth" });
      } else {
        // Otherwise, standard chat behavior: scroll to the very bottom
        container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
      }
    }
  }, [messages, isOpen]);

  // Autofocus input when loading finishes
  useEffect(() => {
    if (!isLoading && isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLoading, isOpen]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    
    // Add user message to UI
    const newMessages = [...messages, { role: "user", text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Format history for Gemini API
      // Gemini expects format: { role: "user" | "model", parts: [{ text: "..." }] }
      // We slice(1) to remove the initial hardcoded greeting because Gemini history must start with a 'user' turn.
      const history = messages.slice(1).map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history, message: userMessage })
      });

      const data = await response.json();
      
      if (data.reply) {
        setMessages([...newMessages, { role: "model", text: data.reply }]);
      } else {
        throw new Error("Failed to get reply");
      }
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: "model", text: "Sorry, I am having trouble connecting right now. Please try again later or contact info@anglobalservices.com." }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to safely render text with URLs as clickable links
  const renderMessageText = (text) => {
    // Basic URL regex
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-200 underline break-words">
            {part}
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 py-3 px-5 bg-[#0075B6] text-white rounded-full shadow-[0_10px_25px_-5px_rgba(0,117,182,0.5)] hover:scale-105 hover:bg-[#005a8f] transition-all duration-300 ease-in-out items-center gap-3 group ${isOpen ? "hidden" : "flex"}`}
        aria-label="Open Chat"
      >
        <div className="relative">
          <Bot size={28} className="group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-[#0075B6] rounded-full animate-pulse"></span>
        </div>
        <div className="flex flex-col items-start leading-tight">
          <span className="font-extrabold text-[15px] tracking-wide">Ask AI Assistant</span>
          <span className="text-[10px] text-blue-100 uppercase tracking-widest font-semibold">Online</span>
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div id="chatbot-window" className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] max-h-[600px] h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="bg-[#0075B6] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={24} />
              <h3 className="font-bold text-lg">Support Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-[#005a8f] p-1 rounded transition-colors cursor-pointer"
              title="Close chat"
            >
              <X size={24} />
            </button>
          </div>

          {/* Messages Area */}
          <div id="chat-scroll-container" className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4 scroll-smooth">
            {messages.map((msg, index) => (
              <div 
                key={index}
                id={index === messages.length - 1 ? "latest-message" : undefined}
                className={`flex items-start gap-2 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-[#0a192f] text-white' : 'bg-blue-100 text-[#0075B6]'}`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={18} />}
                </div>
                <div className={`p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-[#0a192f] text-white rounded-tr-none' 
                    : 'bg-[#0075B6] text-white rounded-tl-none shadow-sm'
                }`}>
                  {renderMessageText(msg.text)}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start gap-2 mr-auto max-w-[85%]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-[#0075B6] flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div className="p-4 rounded-2xl rounded-tl-none bg-[#0075B6] text-white flex items-center">
                  <Loader2 size={16} className="animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form onSubmit={sendMessage} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0075B6] text-sm text-gray-800"
                disabled={isLoading}
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-3 bg-[#0075B6] text-white rounded-full hover:bg-[#005a8f] disabled:opacity-50 disabled:hover:bg-[#0075B6] transition-colors flex-shrink-0"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
          
        </div>
      )}
    </>
  );
}
