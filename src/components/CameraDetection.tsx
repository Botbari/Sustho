import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, CameraOff, AlertTriangle, CheckCircle, Car, User, TrafficLight, Loader2, Volume2, VolumeX } from 'lucide-react';

interface Detection {
  bbox: [number, number, number, number];
  class: string;
  score: number;
}

interface CameraDetectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const CameraDetection: React.FC<CameraDetectionProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [detections, setDetections] = useState<Detection[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [lastVoiceMessage, setLastVoiceMessage] = useState('');
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      initializeCamera();
      initializeModel();
    }

    // Initialize speech synthesis
    if ('speechSynthesis' in window) {
      setSpeechSynthesis(window.speechSynthesis);
    }

    return () => {
      cleanup();
    };
  }, [isOpen]);

  const initializeCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'environment'
        }
      });
      
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          if (videoRef.current && canvasRef.current) {
            canvasRef.current.width = videoRef.current.videoWidth;
            canvasRef.current.height = videoRef.current.videoHeight;
            setIsLoading(false);
          }
        };
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setIsLoading(false);
    }
  };

  const initializeModel = async () => {
    try {
      setIsLoading(true);
      // Simulate model loading for now
      setTimeout(() => {
        setIsModelLoaded(true);
        setIsLoading(false);
        startDetection();
      }, 2000);
    } catch (error) {
      console.error('Error loading model:', error);
      setIsLoading(false);
    }
  };

  const startDetection = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const detect = async () => {
      if (videoRef.current && canvasRef.current) {
        // Simulate detections for now
        const mockDetections: Detection[] = [
          {
            bbox: [100, 100, 200, 150],
            class: 'car',
            score: 0.85
          }
        ];
        
        setDetections(mockDetections);
        
        // Draw detections on canvas
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          
          mockDetections.forEach((prediction: any) => {
            const [x, y, width, height] = prediction.bbox;
            
            // Draw bounding box
            ctx.strokeStyle = getColorForClass(prediction.class);
            ctx.lineWidth = 3;
            ctx.strokeRect(x, y, width, height);
            
            // Draw label
            ctx.fillStyle = getColorForClass(prediction.class);
            ctx.fillRect(x, y - 25, ctx.measureText(prediction.class).width + 10, 25);
            ctx.fillStyle = 'white';
            ctx.font = '16px Arial';
            ctx.fillText(prediction.class, x + 5, y - 8);
          });
        }

        // Voice feedback
        if (voiceEnabled && mockDetections.length > 0) {
          const voiceMessage = generateVoiceMessage(mockDetections);
          if (voiceMessage !== lastVoiceMessage) {
            speak(voiceMessage);
            setLastVoiceMessage(voiceMessage);
          }
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(detect);
    };

    detect();
  };

  const getColorForClass = (className: string): string => {
    const colors: { [key: string]: string } = {
      'car': '#FF6B6B',
      'truck': '#4ECDC4',
      'bus': '#45B7D1',
      'person': '#96CEB4',
      'bicycle': '#FFEAA7',
      'motorcycle': '#DDA0DD',
      'traffic light': '#FFD93D',
      'stop sign': '#FF6B6B',
      'fire hydrant': '#FF8E53',
      'bench': '#6C5CE7'
    };
    return colors[className] || '#FF6B6B';
  };

  const generateVoiceMessage = (predictions: Detection[]): string => {
    const cars = predictions.filter(p => p.class === 'car' || p.class === 'truck' || p.class === 'bus');
    const people = predictions.filter(p => p.class === 'person');
    const trafficLights = predictions.filter(p => p.class === 'traffic light');
    const stopSigns = predictions.filter(p => p.class === 'stop sign');

    if (cars.length > 0) {
      return `গাড়ি আসছে, দয়া করে অপেক্ষা করুন। ${cars.length}টি গাড়ি সনাক্ত হয়েছে।`;
    } else if (people.length > 0) {
      return `মানুষ সনাক্ত হয়েছে। সাবধান থাকুন।`;
    } else if (trafficLights.length > 0) {
      return `ট্রাফিক লাইট সনাক্ত হয়েছে। সিগনাল দেখুন।`;
    } else if (stopSigns.length > 0) {
      return `স্টপ সাইন সনাক্ত হয়েছে। থামুন।`;
    } else {
      return 'রাস্তা পরিষ্কার। আপনি পার হতে পারেন।';
    }
  };

  const speak = (text: string) => {
    if (speechSynthesis && voiceEnabled) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'bn-BD';
      utterance.rate = 0.8;
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

  const cleanup = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled);
    if (speechSynthesis && voiceEnabled) {
      speechSynthesis.cancel();
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            onClick={onClose}
          />
          
          {/* Camera Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-6 lg:inset-12 xl:inset-16 bg-black rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
            style={{
              maxHeight: '90vh',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white p-4 relative overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 animate-pulse" />
              
              <div className="relative flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-2xl"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 15,
                      boxShadow: '0 20px 40px rgba(255,255,255,0.3)'
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Camera className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold">রাস্তা পার হওয়ার সহায়ক</h3>
                    <p className="text-blue-100 text-sm">বস্তু সনাক্তকরণ এবং নেভিগেশন গাইডেন্স</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {/* Voice Toggle */}
                  <motion.button
                    onClick={toggleVoice}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm transition-colors ${
                      voiceEnabled ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {voiceEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                  </motion.button>
                  
                  {/* Close Button */}
                  <motion.button
                    onClick={onClose}
                    className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Camera View */}
            <div className="flex-1 relative bg-black min-h-0">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Loader2 className="w-8 h-8 text-white" />
                    </motion.div>
                    <p className="text-white text-lg">
                      {!isModelLoaded ? 'AI মডেল লোড হচ্ছে...' : 'ক্যামেরা শুরু হচ্ছে...'}
                    </p>
                  </div>
                </div>
              )}

              {/* Video and Canvas */}
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                />
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full"
                  style={{ pointerEvents: 'none' }}
                />
              </div>

              {/* Detection Info Overlay */}
              {detections.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-2xl p-4 text-white max-w-xs"
                >
                  <h4 className="font-bold mb-2">সনাক্তকৃত বস্তু:</h4>
                  <div className="space-y-1">
                    {detections.map((detection, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getColorForClass(detection.class) }}
                        />
                        <span className="text-sm">
                          {detection.class} ({(detection.score * 100).toFixed(1)}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Voice Status */}
              {isSpeaking && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute bottom-4 right-4 bg-blue-500/80 backdrop-blur-sm rounded-2xl p-3 text-white"
                >
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                    <span className="text-sm">কথা বলছি...</span>
                  </div>
                </motion.div>
              )}

              {/* Safety Instructions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute bottom-4 left-4 bg-green-500/80 backdrop-blur-sm rounded-2xl p-4 text-white max-w-xs"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-bold">নিরাপত্তা নির্দেশনা</span>
                </div>
                <p className="text-sm">
                  গাড়ি আসলে অপেক্ষা করুন। রাস্তা পরিষ্কার হলে পার হন। সবসময় সাবধান থাকুন।
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CameraDetection;
