# AdaptAble — Adaptive Workplace Communication Platform for Persons with Disabilities

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Accessibility: WCAG AAA](https://img.shields.io/badge/WCAG-AAA%20Compliant-green.svg)](#accessibility)
[![Powered by Gemini AI](https://img.shields.io/badge/AI-Google%20Gemini-orange.svg)](https://ai.google.dev/)
[![React 19](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6.svg)](https://www.typescriptlang.org/)

**AdaptAble** is an AI-powered, neurodiversity-affirming, and disability-inclusive workplace communication platform. It empowers Persons with Disabilities (PwDs)—including neurodivergent individuals (Autism, ADHD), people with speech differences (stuttering, dysarthria, apraxia), and Deaf or hard-of-hearing professionals—to build confidence, practice workplace interactions, and navigate professional environments with dignity and autonomy.

---

## 🌟 Key Features

### 🎙️ Adaptive AI Speech Coach
- **Personal Baseline Evaluation**: Measures clarity, confidence, fluency, and professional phrasing against the user's *own* baseline, rather than neurotypical standards.
- **Microphone & Typed Input**: Real-time speech transcription with instantaneous constructive feedback, strengths, and alternative phrasing.

### 🤟 Multimodal Sign Language AI Bot
- **Computer Vision Gesture Recognition**: Real-time camera snapshot classification for standard and workplace sign language (ASL/ISL/universal gestures).
- **Interactive Practice & Glossing**: Hand shape guides, visual finger position indicators, and bidirectional sign-to-text / text-to-sign translations.

### 🏢 Workplace Roleplay Simulator
- **Dynamic Scenarios**: Roleplay realistic workplace situations (job interviews, 1-on-1 manager syncs, salary negotiations, and accommodation requests).
- **Inline Communication Feedback**: Instant scores, tips on tone and clarity, and better professional phrasing alternatives.

### 🎬 Animated Social Stories Studio
- **Cognitive Clarity**: Deconstructs unwritten social rules, office politics, and unexpected events into clear, predictable, step-by-step video scenes.
- **Rich Media**: Visual scene canvases, voiceover narration, subtitles, and sensory tips.

### 📚 Accessible Workplace Vocabulary
- **De-jargonizer**: Clear explanations of corporate buzzwords, acronyms, and workplace idioms.
- **Cognitive Tools**: Syllable chunking for dyslexia, sign language gloss equivalents, and quick response templates.

### ♿ Universal WCAG AAA Accessibility
- **High-Contrast Theme**: Immediate yellow-on-black high-contrast AAA mode.
- **Dyslexia-Friendly Typography**: Enhanced letter-spacing and specialized font rendering.
- **Live Captions & Text Scaling**: Dynamic real-time caption bar, adjustable sizing (normal, large, extra-large), and full keyboard navigation.

### 🔒 Enterprise Security Vault & Dashboards
- **Client-Side Encryption**: Support for AES-GCM 256-bit encrypted data vaults.
- **Institution & Trainer Dashboards**: Progress tracking, cohort analytics, and accommodation management.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Motion (Framer Motion), Lucide React
- **Backend**: Node.js, Express, tsx
- **AI Engine**: Google Gemini API (`@google/genai`)
- **Build Tool**: Vite

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Google Gemini API Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/adaptable.git
   cd adaptable
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file from the example:
   ```bash
   cp .env.example .env
   ```
   Add your Gemini API Key:
   ```env
   GEMINI_API_KEY="your_api_key_here"
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   The application will be live at `http://localhost:3000`.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
