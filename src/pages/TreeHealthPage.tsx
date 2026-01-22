'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Leaf,
  TreePine,
  Droplets,
  Sun,
  ShieldCheck,
  Send,
  Loader2,
  Check,
  Image as ImageIcon,
  Bot,
  User,
  Sparkles
} from 'lucide-react';
import { generateHealthResponse } from '../utils/openaiApi';

/* ================= TYPES ================= */

interface Message {
  id: string;
  text?: string;
  image?: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

/* ================= PAGE ================= */

const TreeHealthPage: React.FC = () => {
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
  const [chatQueue, setChatQueue] = useState<string[]>([]);

  const treeProblems = [
    { name: 'পাতা হলুদ হওয়া', icon: '🍂', desc: 'পুষ্টি বা পানি সমস্যা' },
    { name: 'পোকামাকড় আক্রমণ', icon: '🐛', desc: 'কীট দ্বারা ক্ষতি' },
    { name: 'ছত্রাক রোগ', icon: '🍄', desc: 'ফাঙ্গাল সংক্রমণ' },
    { name: 'গাছের বৃদ্ধি কম', icon: '🌱', desc: 'মাটি দুর্বল' },
    { name: 'ফল না ধরা', icon: '🍎', desc: 'পুষ্টির অভাব' },
    { name: 'পানি জমে থাকা', icon: '💧', desc: 'ড্রেনেজ সমস্যা' }
  ];

  const toggle = (name: string) => {
    setSelectedProblems(p =>
      p.includes(name) ? p.filter(x => x !== name) : [...p, name]
    );
  };

  const sendToAI = () => {
    const msg = `আমার গাছের সমস্যা: ${selectedProblems.join(', ')}। করণীয় কী?`;
    setChatQueue(q => [...q, msg]);
    setSelectedProblems([]);
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="container mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <TreePine size={48} />
          </motion.div>
          <h1 className="text-5xl font-bold mt-4 text-gray-800">
            গাছের রোগ ও যত্ন
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            সমস্যা নির্বাচন করুন অথবা পাতার ছবি পাঠান
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* PROBLEMS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-8 border border-green-100"
            >
              <h2 className="text-3xl font-bold text-center mb-6">
                সাধারণ গাছের সমস্যা
              </h2>

              <div className="grid md:grid-cols-3 gap-4">
                {treeProblems.map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.06,
                      y: -4,
                      boxShadow: '0 15px 30px rgba(16,185,129,0.25)'
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => toggle(p.name)}
                    className={`relative cursor-pointer p-5 rounded-2xl border  transition-all ${
                      selectedProblems.includes(p.name)
                        ? 'bg-gradient-to-br from-green-100 to-emerald-50 border-green-400'
                        : 'bg-gradient-to-br from-gray-200 to-white border-gray-200'
                    }`}
                  >
                    {selectedProblems.includes(p.name) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full"
                      >
                        <Check size={14} />
                      </motion.div>
                    )}

                    <motion.div
                      className="text-4xl text-center mb-2"
                      whileHover={{ scale: 1.2, rotate: 8 }}
                    >
                      {p.icon}
                    </motion.div>
                    <h3 className="font-bold text-center">{p.name}</h3>
                    <p className="text-sm text-center text-gray-600">
                      {p.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {selectedProblems.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-6"
                >
                  <motion.button
                    onClick={sendToAI}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-bold shadow-lg flex items-center gap-2 mx-auto"
                  >
                    <Leaf size={18} />
                    AI-কে পাঠান ({selectedProblems.length})
                  </motion.button>
                </motion.div>
              )}
            </motion.div>

            {/* TIPS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl p-8 border border-green-100"
            >
              <h2 className="text-3xl font-bold text-center mb-6">
                গাছের যত্নের টিপস
              </h2>

              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { icon: Droplets, t: 'সঠিক সেচ', d: 'পরিমিত পানি দিন' },
                  { icon: Sun, t: 'সূর্যালোক', d: 'পর্যাপ্ত আলো দিন' },
                  { icon: Leaf, t: 'জৈব সার', d: 'কম্পোস্ট ব্যবহার করুন' },
                  { icon: ShieldCheck, t: 'রোগ নিয়ন্ত্রণ', d: 'আক্রান্ত অংশ কাটুন' }
                ].map((x, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      boxShadow: '0 15px 30px rgba(34,197,94,0.2)'
                    }}
                    className="text-center p-4 bg-gradient-to-br from-green-100 to-emerald-50 rounded-2xl border border-green-100"
                  >
                    <motion.div
                      className="w-12 h-12 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl flex items-center justify-center mb-3 shadow-lg"
                      whileHover={{ rotate: 12, scale: 1.15 }}
                    >
                      <x.icon />
                    </motion.div>
                    <h3 className="font-bold">{x.t}</h3>
                    <p className="text-sm text-gray-600">{x.d}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT CHATBOT */}
          <TreeHealthChatbot externalMessages={chatQueue} />
        </div>
      </div>
    </div>
  );
};

/* ================= CHATBOT ================= */

const TreeHealthChatbot: React.FC<{ externalMessages: string[] }> = ({
  externalMessages
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'আমি Tree Health AI। সমস্যা লিখুন বা পাতার ছবি পাঠান।',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (externalMessages.length) {
      const last = externalMessages.at(-1);
      if (last) handleUserSend(last);
    }
  }, [externalMessages]);

  const handleUserSend = (text?: string) => {
    const msg = text || input;
    if (!msg?.trim()) return;

    setMessages(m => [
      ...m,
      { id: Date.now().toString(), text: msg, sender: 'user', timestamp: new Date() }
    ]);
    setInput('');
    respondBot(false, msg);
  };

  const handleImageUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setMessages(m => [
      ...m,
      { id: Date.now().toString(), image: url, sender: 'user', timestamp: new Date() }
    ]);
    respondBot(true);
  };

  const respondBot = async (image: boolean, userText?: string) => {
    setLoading(true);
    try {
      let response: string;
      if (image) {
        response = 'পাতার ছবিটি বিশ্লেষণ করে মনে হচ্ছে এটি পুষ্টিহীনতা বা ছত্রাকজনিত সমস্যা হতে পারে। বিস্তারিত পরামর্শের জন্য গাছের সমস্যা সম্পর্কে আরও তথ্য দিন।';
      } else {
        const messageToSend = userText || '';
        response = await generateHealthResponse(messageToSend, 'tree-health');
      }
      
      setMessages(m => [
        ...m,
        {
          id: (Date.now() + 1).toString(),
          text: response,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      console.error('AI Response Error:', error);
      setMessages(m => [
        ...m,
        {
          id: (Date.now() + 1).toString(),
          text: 'দুঃখিত, এই মুহূর্তে পরামর্শ দিতে পারছি না। অনুগ্রহ করে আবার চেষ্টা করুন।',
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-8 bg-white rounded-3xl shadow-2xl p-6 h-[680px] flex flex-col border border-green-100"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl">
          <Sparkles />
        </div>
        <div>
          <h3 className="text-xl font-bold text-green-600">
            🌿 Tree Health AI
          </h3>
          <p className="text-sm text-gray-500">গাছের রোগ বিশ্লেষণ</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 bg-gradient-to-br from-gray-50 to-green-50 p-4 rounded-2xl">
        <AnimatePresence>
          {messages.map(m => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className="flex gap-2 items-end max-w-xs">
                {m.sender === 'bot' && (
                  <div className="w-8 h-8 bg-green-500 text-white rounded-xl flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                )}
                <div className={`rounded-2xl p-3 text-sm shadow ${
                  m.sender === 'user'
                    ? 'bg-green-500 text-white'
                    : 'bg-white border'
                }`}>
                  {m.text && <p>{m.text}</p>}
                  {m.image && (
                    <img src={m.image} className="mt-2 rounded-xl max-h-40" />
                  )}
                </div>
                {m.sender === 'user' && (
                  <div className="w-8 h-8 bg-gray-400 text-white rounded-xl flex items-center justify-center">
                    <User size={16} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <div className="flex items-center gap-2 text-gray-500">
            <Loader2 className="animate-spin" size={16} />
            বিশ্লেষণ চলছে...
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="flex mt-4 gap-2">
        <button
          onClick={() => fileRef.current?.click()}
          className="p-3 bg-gray-100 rounded-2xl"
        >
          <ImageIcon size={18} />
        </button>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={e => e.target.files && handleImageUpload(e.target.files[0])}
        />

        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="গাছের সমস্যা লিখুন..."
          className="flex-1 p-3 border rounded-2xl"
          onKeyDown={e => e.key === 'Enter' && handleUserSend()}
        />

        <button
          onClick={() => handleUserSend()}
          className="p-3 bg-green-500 text-white rounded-2xl"
        >
          <Send size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default TreeHealthPage;
