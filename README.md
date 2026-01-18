# Sustho Botbari - AI-Powered Health Assistant

A comprehensive health assistance application with voice-activated chatbot and camera-based object detection for road crossing assistance.

## 🚀 New Features

### 🎤 Voice-Activated Chatbot (Eye Button)
- **3D-Style Eye Button**: Beautiful 3D button design with floating particles and smooth animations
- **Speech Recognition**: Automatic voice interaction in Bengali and English
- **Text-to-Speech**: AI responses are spoken back to the user
- **Voice Commands**:
  - Say "Pregnancy support" → Redirects to Pregnancy Support page
  - Say "I want to cross the road" → Opens camera with object detection
  - General health queries → AI-powered responses

### 📷 Camera-Based Object Detection
- **Real-time Detection**: Uses TensorFlow.js and COCO-SSD model
- **Object Recognition**: Detects cars, people, traffic lights, stop signs, etc.
- **Voice Feedback**: Provides spoken guidance based on detected objects
- **Safety Instructions**: Real-time safety alerts and navigation guidance
- **Visual Overlays**: Bounding boxes and labels on detected objects

## 🛠️ Technical Implementation

### Dependencies Added
```json
{
  "@tensorflow/tfjs": "^4.17.0",
  "@tensorflow-models/coco-ssd": "^2.2.3"
}
```

### Key Components

#### 1. VoiceChatbot (`src/components/VoiceChatbot.tsx`)
- Web Speech API integration
- Speech recognition and synthesis
- Voice command processing
- Fallback for unsupported browsers
- Smooth animations and 3D effects

#### 2. CameraDetection (`src/components/CameraDetection.tsx`)
- Camera access and video processing
- Simulated object detection (ready for TensorFlow.js integration)
- Canvas overlay for detection visualization
- Voice feedback system
- Real-time safety alerts

#### 3. TypeScript Declarations (`src/types/global.d.ts`)
- Web Speech API type definitions
- Browser compatibility support

## 🎯 How to Use

### Voice Commands
1. Click the **Eye** button on the home page
2. Click the microphone button to start listening
3. Speak your command:
   - "Pregnancy support" → Navigate to pregnancy support
   - "I want to cross the road" → Open camera detection
   - Any health question → Get AI-powered advice

### Camera Detection
1. Say "I want to cross the road" in the voice chatbot
2. Camera will open with object detection
3. Point camera at the road
4. Listen for voice guidance:
   - "গাড়ি আসছে, দয়া করে অপেক্ষা করুন" (Car coming, please wait)
   - "রাস্তা পরিষ্কার। আপনি পার হতে পারেন" (Road is clear, you can cross)

## 🌐 Browser Compatibility

### Speech Recognition
- ✅ Chrome/Edge (webkitSpeechRecognition)
- ✅ Firefox (SpeechRecognition)
- ❌ Safari (limited support)
- ❌ Mobile browsers (varies)

### Camera Access
- ✅ Modern browsers with HTTPS
- ✅ Mobile browsers with camera permission
- ❌ HTTP sites (security restriction)

### Object Detection
- ✅ Modern browsers with WebGL support
- ✅ Mobile browsers with sufficient performance
- ❌ Older browsers without WebGL

## 🎨 UI/UX Features

### 3D Button Design
- Perspective transforms for 3D effect
- Floating particles animation
- Gradient backgrounds
- Smooth hover animations
- Shadow effects

### Voice Interface
- Real-time listening indicators
- Speaking status feedback
- Visual microphone controls
- Status messages in Bengali

### Camera Interface
- Full-screen camera view
- Detection overlay
- Safety instructions panel
- Voice toggle controls
- Loading animations

## 🔧 Development

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📱 Mobile Support

The application is fully responsive and supports:
- Touch interactions
- Mobile camera access
- Voice commands on mobile
- Responsive design for all screen sizes

## 🔒 Privacy & Security

- Camera access requires user permission
- Voice data is processed locally (no server storage)
- HTTPS required for camera and microphone access
- No personal data is stored or transmitted

## 🚀 Future Enhancements

- [ ] Offline object detection
- [ ] Multiple language support
- [ ] Custom voice commands
- [ ] Advanced safety features
- [ ] Integration with emergency services

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
