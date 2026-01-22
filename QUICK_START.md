# ⚡ Quick Start: ChatGPT API Integration

## 🎯 3-Minute Setup

### 1️⃣ Get Your API Key (2 minutes)

```
1. Visit: https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Copy the key (starts with sk-proj-...)
```

### 2️⃣ Add to .env File (30 seconds)

Open `.env` and paste your key:

```env
VITE_OPENAI_API_KEY=sk-proj-your-actual-key-here
```

### 3️⃣ Start the App (30 seconds)

```bash
npm run dev
```

That's it! 🎉

---

## ✅ What's Different from Gemini?

| Feature         | Gemini           | OpenAI (Now)     |
| --------------- | ---------------- | ---------------- |
| Model           | gemini-2.0-flash | gpt-3.5-turbo    |
| Free Tier       | 1,500 req/day    | $5 credits       |
| Rate Limits     | 15 req/min       | 3 req/min (free) |
| Image Analysis  | ✅ Built-in      | ✅ GPT-4 Vision  |
| Bengali Support | ✅ Excellent     | ✅ Excellent     |
| Cost            | Free (limited)   | Pay-as-you-go    |

---

## 🧪 Test Your Setup

Open the app and try:

1. **Bengali Question**: "মাথা ব্যথার জন্য কি করব?"
2. **English Question**: "What are symptoms of fever?"
3. **Image Upload**: Upload a prescription

If you get responses, you're all set! ✨

---

## 💰 Cost Estimate

For typical development/testing:

- **100 conversations** (~$0.10)
- **1,000 messages** (~$1.00)
- **10,000 messages** (~$10.00)

Your $5 free credits = ~5,000 messages

---

## 🚨 Common Issues

### "Incorrect API key"

- Did you copy the full key?
- Check for extra spaces
- Restart: `npm run dev`

### "You exceeded your quota"

- Add payment: https://platform.openai.com/billing
- Or wait for free credits

### No response

- Check browser console (F12)
- Verify `.env` has correct key
- Check OpenAI status page

---

## 📖 Full Documentation

See [OPENAI_MIGRATION_GUIDE.md](OPENAI_MIGRATION_GUIDE.md) for:

- Detailed pricing
- Security best practices
- Production deployment
- Cost optimization tips

---

**Need Help?** Check the browser console (F12) for error messages.

**All set?** Start chatting with your AI health assistant! 🏥
