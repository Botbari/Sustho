import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mic, MicOff, Bot, User, Eye, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { generateHealthResponse } from "../utils/openaiApi";
import { renderFormatted } from "../utils/format";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type: "text" | "voice";
}

interface VoiceChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCamera: () => void;
}

const VoiceChatbot: React.FC<VoiceChatbotProps> = ({
  isOpen,
  onClose,
  onOpenCamera,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: 'আস্সালামু আলাইকুম! আমি আপনার ভয়েস AI সহায়ক। আপনি কথা বলতে পারেন এবং আমি আপনাকে সাহায্য করব। আপনি "Pregnancy support" বললে আমি আপনাকে প্রেগনেন্সি সাপোর্ট পেজে নিয়ে যাব, অথবা "I want to cross the road" বললে আমি ক্যামেরা খুলে রাস্তা পার হওয়ার সাহায্য করব।',
      sender: "bot",
      timestamp: new Date(),
      type: "text",
    },
  ]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [speechSynthesis, setSpeechSynthesis] =
    useState<SpeechSynthesis | null>(null);
  const [speechSupported, setSpeechSupported] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize speech recognition
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = "bn-BD"; // Bengali language

      recognitionInstance.onstart = () => {
        setIsListening(true);
        addMessage("শুনছি...", "bot");
      };

      recognitionInstance.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join("");

        if (event.results[0].isFinal) {
          handleVoiceCommand(transcript);
        }
      };

      recognitionInstance.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    } else {
      // Fallback for browsers that don't support speech recognition
      setSpeechSupported(false);
      addMessage(
        "দুঃখিত, আপনার ব্রাউজার ভয়েস রেকগনিশন সাপোর্ট করে না। আপনি টেক্সট চ্যাট ব্যবহার করতে পারেন।",
        "bot",
      );
    }

    // Initialize speech synthesis
    if ("speechSynthesis" in window) {
      setSpeechSynthesis(window.speechSynthesis);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addMessage = (
    text: string,
    sender: "user" | "bot",
    type: "text" | "voice" = "text",
  ) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      type,
    };
    setMessages((prev) => [...prev, message]);
  };

  const speak = (text: string) => {
    if (speechSynthesis && speechSupported) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "bn-BD";
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
      };

      speechSynthesis.speak(utterance);
    }
  };

  const handleVoiceCommand = async (transcript: string) => {
    const userMessage = transcript.toLowerCase();
    addMessage(userMessage, "user", "voice");

    // Check for specific commands
    if (
      userMessage.includes("pregnancy support") ||
      userMessage.includes("প্রেগনেন্সি সাপোর্ট")
    ) {
      const response = "আপনাকে প্রেগনেন্সি সাপোর্ট পেজে নিয়ে যাচ্ছি...";
      addMessage(response, "bot");
      speak(response);
      setTimeout(() => {
        navigate("/pregnancy-support");
        onClose();
      }, 2000);
      return;
    }

    if (
      userMessage.includes("cross the road") ||
      userMessage.includes("রাস্তা পার") ||
      userMessage.includes("রোড পার")
    ) {
      const response =
        "রাস্তা পার হওয়ার জন্য ক্যামেরা খুলছি। আমি আপনাকে বস্তু সনাক্তকরণ এবং নেভিগেশন গাইডেন্স দেব।";
      addMessage(response, "bot");
      speak(response);
      setTimeout(() => {
        onOpenCamera();
        onClose();
      }, 2000);
      return;
    }

    // Handle other health-related queries
    setIsLoading(true);
    try {
      const aiResponse = await generateHealthResponse(
        userMessage,
        "general-health",
      );
      addMessage(aiResponse, "bot");
      speak(aiResponse);
    } catch (error) {
      const errorResponse =
        "দুঃখিত, কিছু সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।";
      addMessage(errorResponse, "bot");
      speak(errorResponse);
    } finally {
      setIsLoading(false);
    }
  };

  const startListening = () => {
    if (recognition && speechSupported) {
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition && speechSupported) {
      recognition.stop();
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Chatbot Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-6 lg:inset-12 xl:inset-16 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
            style={{
              maxHeight: "90vh",
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white p-6 relative overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-red-400/20 animate-pulse" />

              {/* Floating particles */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce" />
              <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-pulse" />
              <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm shadow-2xl"
                    whileHover={{
                      scale: 1.15,
                      rotate: 15,
                      boxShadow: "0 20px 40px rgba(255,255,255,0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                    style={{
                      transform: "perspective(500px) rotateX(10deg)",
                    }}
                  >
                    <Eye className="w-8 h-8" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">ভয়েস AI সহায়ক</h3>
                    <p className="text-purple-100">কথা বলুন এবং সাহায্য পান</p>
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-gray-50 to-purple-50 min-h-0">
              <div className="space-y-4">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-start space-x-3 max-w-xs ${
                          message.sender === "user"
                            ? "flex-row-reverse space-x-reverse"
                            : ""
                        }`}
                      >
                        <motion.div
                          className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                              : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {message.sender === "user" ? (
                            <User className="w-5 h-5" />
                          ) : (
                            <Bot className="w-5 h-5" />
                          )}
                        </motion.div>

                        <motion.div
                          className={`rounded-3xl p-4 shadow-lg backdrop-blur-sm ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                              : "bg-white/80 text-gray-800 border border-gray-200"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          style={{
                            boxShadow:
                              message.sender === "user"
                                ? "0 10px 25px rgba(147, 51, 234, 0.3)"
                                : "0 10px 25px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          {message.sender === "bot" ? (
                            <div className="text-sm leading-relaxed">
                              {renderFormatted(message.text)}
                            </div>
                          ) : (
                            <p className="text-sm leading-relaxed">
                              {message.text}
                            </p>
                          )}
                          <p
                            className={`text-xs mt-2 ${
                              message.sender === "user"
                                ? "text-purple-100"
                                : "text-gray-500"
                            }`}
                          >
                            {message.timestamp.toLocaleTimeString("bn-BD", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Loading */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-white/80 rounded-3xl p-4 shadow-lg backdrop-blur-sm border border-gray-200">
                        <div className="flex items-center space-x-2">
                          <Loader2 className="w-4 h-4 animate-spin text-purple-500" />
                          <span className="text-sm text-gray-600">
                            উত্তর তৈরি করছি...
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Voice Control Panel */}
            <div className="p-6 bg-gradient-to-r from-gray-50 to-purple-50 flex-shrink-0">
              <div className="flex items-center justify-center space-x-4">
                {/* Voice Toggle Button */}
                <motion.button
                  onClick={toggleListening}
                  disabled={!speechSupported}
                  className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all ${
                    !speechSupported
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                      : isListening
                        ? "bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse"
                        : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                  }`}
                  whileHover={speechSupported ? { scale: 1.1 } : {}}
                  whileTap={speechSupported ? { scale: 0.9 } : {}}
                  style={{
                    boxShadow:
                      isListening && speechSupported
                        ? "0 0 30px rgba(239, 68, 68, 0.5)"
                        : speechSupported
                          ? "0 10px 30px rgba(147, 51, 234, 0.3)"
                          : "none",
                  }}
                >
                  {isListening ? (
                    <MicOff className="w-6 h-6" />
                  ) : (
                    <Mic className="w-6 h-6" />
                  )}
                </motion.button>

                {/* Status Indicators */}
                <div className="flex items-center space-x-3">
                  {isListening && speechSupported && (
                    <motion.div
                      className="w-3 h-3 bg-red-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                  )}
                  {isSpeaking && speechSupported && (
                    <motion.div
                      className="w-3 h-3 bg-blue-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                  )}
                </div>

                {/* Status Text */}
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-700">
                    {!speechSupported
                      ? "ভয়েস সাপোর্ট নেই"
                      : isListening
                        ? "শুনছি..."
                        : isSpeaking
                          ? "কথা বলছি..."
                          : "কথা বলুন"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {speechSupported
                      ? '"Pregnancy support" বা "Cross the road" বলুন'
                      : "আপনার ব্রাউজার ভয়েস রেকগনিশন সাপোর্ট করে না"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default VoiceChatbot;
