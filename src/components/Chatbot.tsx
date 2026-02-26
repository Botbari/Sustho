
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

interface ChatbotProps {
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "আসসালামু আলাইকুম! আমি সুুস্থ AI। আমি আপনাকে কিভাবে সাহায্য করতে পারি?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setLoading(true);

    const aiResponse = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
      <div className="bg-[#006A4E] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
             <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="font-bold">Sustho AI Assistant</span>
        </div>
        <button onClick={onClose} className="hover:bg-white/20 p-1 rounded">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
              m.sender === 'user' 
                ? 'bg-[#006A4E] text-white rounded-tr-none' 
                : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl text-sm shadow-sm border border-gray-100 animate-pulse">
              Thinking...
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your health question..."
          className="flex-grow p-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006A4E]"
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="bg-[#006A4E] text-white p-2 rounded-xl hover:bg-[#0F5132] disabled:opacity-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
