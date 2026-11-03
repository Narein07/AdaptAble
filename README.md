<div align="center">

# 🌟 AdaptAble

---

### **Adaptive Workplace Communication Platform for Persons with Disabilities**

**Real-time Adaptive Speech Scoring | Multimodal Sign Vision | Workplace Roleplay Simulations**

### [View in AI Studio](https://ais-pre-eoqjw2nstdjrzwlk7gxbwc-793037711970.asia-southeast1.run.app)

---

</div>

## 🚀 Overview

AdaptAble is a state-of-the-art workplace communication and assistive coaching platform designed specifically for Persons with Disabilities (PwDs). It doesn't just evaluate communication against arbitrary standards; it empowers neurodivergent professionals, individuals with speech differences, and Deaf employees by analyzing communication against their **own personal adaptive baseline** rather than neurotypical expectations.

---

## ✨ Core Features

* 🎙️ **Adaptive Speech Coach**: Real-time voice and text analysis measuring clarity, confidence, fluency, and workplace assertiveness against your personal baseline rather than neurotypical cadence.
* 🤟 **AI Sign Vision Scanner**: Live camera-driven multimodal computer vision that identifies 16+ workplace sign language gestures (ASL/ISL/Universal), checks handshapes, and translates bidirectional Sign Gloss in real time.
* 🏢 **Workplace Roleplay Simulator**: Interactive branching scenarios (salary negotiations, accommodation requests under the ADA, managing overload, 1-on-1 manager syncs) with turn-by-turn communication feedback.
* 🎬 **Animated Social Stories Studio**: Deconstructs unspoken corporate norms, office dynamics, and unexpected changes into 4-stage predictable visual scenes with synchronized captions and voiceovers.
* 📚 **Workplace De-Jargonizer**: Demystifies corporate buzzwords with dyslexia phonetic syllable chunking (`DE - LIV - ER - A - BLE`), sign gloss equivalents, and copy-paste email templates.
* ♿ **WCAG 2.2 AAA Universal Engine**: Instant one-click toggle for high-contrast mode (21:1 yellow-on-black), OpenDyslexic typography, variable font scaling, and a persistent live caption bar.
* 🔒 **Cryptographic Security Vault**: Client-side AES-GCM 256-bit encryption ensuring baseline profiles and practice recordings remain private to the user.

---

## 🧠 The Adaptive Algorithm

AdaptAble uses an affirmative, disability-aware evaluation system:

$$\text{Adaptive Growth Score} = (\text{MessageClarity} \times 0.40) + (\text{Assertiveness} \times 0.30) + (\text{BaselineFluency} \times 0.30) - (\text{PunitiveNormBias} \times 0.00)$$

* **Message Clarity ($0.40$)**: Semantic coherence, core takeaway structure, and goal alignment.
* **Workplace Assertiveness ($0.30$)**: Professional ownership, constructive boundary-setting, and intent delivery.
* **Baseline Fluency ($0.30$)**: Rhythm and cadence calibrated strictly to the user's calibrated speech pace (honoring natural stuttering, pauses, or AAC delay).
* **Punitive Norm Bias ($0.00$)**: Zero penalty for non-standard cadence, neurodivergent phrasing, or vocal repetition.

---

## 🛠️ Tech Stack

* **Frontend**: React 19, TypeScript, Vite, Tailwind CSS 4
* **Animations**: Motion (formerly Framer Motion), Lucide React
* **Artificial Intelligence**: Google Gemini 3.6 Flash (`@google/genai` SDK)
* **Vision & Audio**: HTML5 MediaDevices (Webcam), Web Speech Recognition API, Web Audio Synthesis
* **Backend**: Node.js + Express (Vite Middleware Mode / tsx Runtime)
* **Security & Cryptography**: Web Crypto API (AES-GCM 256-bit client-side data vault)

---

## 📦 Local Setup

### Prerequisites
* Node.js (v18+)
* Google Gemini API Key ([Get one at Google AI Studio](https://aistudio.google.com/))

### Clone & Install:
```bash
git clone https://github.com/your-username/adaptable.git
cd adaptable
npm install
