## 💡 Problem Statement (AIML-01 – KLEOS 3.0)

E-commerce platforms are plagued with **manipulated product reviews**, which mislead customers and erode brand trust. Manual moderation is **insufficient and unreliable**. The need of the hour is an intelligent, scalable, and **automated review analysis tool** that can accurately distinguish **genuine** reviews from **suspicious or fake** ones.

**🎯 Objective**:  
To build a production-ready ML system that flags reviews as **"Likely Genuine"** or **"Suspicious"** using sentiment, behavioral, image, and purchase-based signals — restoring credibility to online platforms.

## 🧠 Team Details

- **👨‍💻 Team Name**: COSMIC COMPILERS
- **👑 Team Leader**: Nishant Dakua  
- **🧑‍🤝‍🧑 Team Members**: Parth Sawant,Pranjali Sangavekar,Chetan Shende
- **🧪 Domain**: Artificial Intelligence / Machine Learning (AIML)  
- **📌 Problem Statement**: AIML-01 – Detecting Fake and Manipulated E-Commerce Reviews

## 🌟 Project Name: Genuscan  
> **Genu**ine + **Scan** → *“Scans for Truth in Reviews”*

## 🚀 Key Features

### ✅ 1. SMART PURCHASE VERIFICATION – *Your Best Weapon*
- Detects **verified buyers** using platform metadata.
- Confirms purchases and assigns a **confidence score (0.95+)**.
- **Auto-marks** verified reviews as genuine, even if **negative or brief**.
- **No false flags** for real customers – preserving **customer trust**.

### ❌ 2. ADVANCED FRAUD DETECTION FOR NON-BUYERS
- Flags **non-purchasers** with a suspicious confidence score (0.10–0.20).
- Detection tags: `"no_purchase_record"`, `"unverified_reviewer"`.

### 🖼 3. IMAGE-BASED INTELLIGENCE
- Detects:
  - **Product mismatch**
  - **Fake stock photos**
  - **Sentiment-image contradiction**
- **Authenticity classifier** distinguishes real-life photos from manipulated ones.

### 🧠 4. NLP + ML POWERED REVIEW ANALYSIS
- Multi-signal scoring system:
```javascript
{
  "sentimentScore": 0.75,
  "authenticityScore": 0.85,
  "productRelevanceScore": 0.80,
  "purchaseVerificationScore": 0.95,
  "overallRiskScore": 0.20
}
```

### 📊 5. FRAUD FLAGGING ENGINE
- Text flags: `"generic_language"`, `"copy_paste_indicators"`, `"promotional_content"`, etc.
- Image flags: `"image_mismatch"`, `"sentiment_image_mismatch"`, `"stock_photo"`.
- Behavior flags: `"bot_like_patterns"`, `"timeline_suspicious"`.

### 🛡 6. AI-PATTERN INTELLIGENCE
- **Coordinated attack detection**
- **Batch fake review recognition**
- **Bot-like language + behavioral spotting**

## 📈 Business Intelligence Dashboard

Live metrics include:
```javascript
{
  "trustScore": "87%",
  "genuineCount": 1234,
  "suspiciousCount": 45,
  "flaggedForManualReview": 12,
  "analysisCoverage": "94%",
  "avgConfidence": "0.876",
  "avgSentiment": "0.782",
  "avgAuthenticity": "0.854"
}
```

## 🔍 Analysis Modes

| Mode | Description |
|------|-------------|
| `analyzeReview()` | Single text-only review |
| `batchAnalyzeReviews()` | Batch processing for large datasets |
| `analyzeReviewWithImage()` | Text + image co-analysis for fraud signals |

## 📦 Enhancements Beyond Guidelines

✅ Integrated **Gemini 2.0 Flash-Powered Core**  
✅ Custom-built review scoring system  
✅ Advanced fraud flag taxonomy  
✅ Real-time business dashboard  
✅ No low-code tools used – 100% original implementation  
✅ Supports API + Admin Dashboard

## 📜 Sample API Usage

```javascript
await analyzeReview({
  comment: "Great sound quality, loved it!",
  rating: 5,
  hasPurchased: true,
  productName: "Wireless Headphones"
});
```

```javascript
await analyzeReviewWithImage(reviewData, imageData);
```

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **AI/ML**: Python (Sklearn, NLTK, Transformers), Gemini API
- **Image Processing**: OpenCV, PIL, TensorFlow
- **Database**: MongoDB
- **Deployment**: Render + GitHub CI

## 🔒 Compliance & Ethics

- No censorship of genuine customer voices  
- Transparent fraud flagging  
- No personal data stored or shared  
- AI outputs are explainable and human-auditable  

