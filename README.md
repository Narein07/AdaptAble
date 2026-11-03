# AdaptAble — Adaptive Workplace Communication Platform for Persons with Disabilities

<div align="center">

[![Open in Google AI Studio](https://img.shields.io/badge/Open%20in-Google%20AI%20Studio-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ais-pre-eoqjw2nstdjrzwlk7gxbwc-793037711970.asia-southeast1.run.app)
[![WCAG Level](https://img.shields.io/badge/WCAG-2.2%20AAA%20Compliant-10B981?style=for-the-badge&logo=w3c&logoColor=white)](#-accessibility-compliance-wcag-22-aaa)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/AI-Google%20Gemini-EA4335?style=for-the-badge&logo=google-gemini&logoColor=white)](https://ai.google.dev/)

**An AI-powered, neurodiversity-affirming workplace communication platform built to empower Persons with Disabilities (PwDs) with adaptive speech coaching, computer vision sign language recognition, workplace simulations, and enterprise accessibility.**

[🚀 Explore Live Demo](https://ais-pre-eoqjw2nstdjrzwlk7gxbwc-793037711970.asia-southeast1.run.app) • [📖 Features](#-core-features--modules) • [🛠️ Architecture](#%EF%B8%8F-system-architecture) • [⚡ Quickstart](#-getting-started) • [♿ Accessibility](#-accessibility-compliance-wcag-22-aaa)

</div>

---

## 🌐 Live Access & Deployment

| Environment | Link | Purpose |
| :--- | :--- | :--- |
| **🚀 Shared Application (Production Preview)** | [View in AI Studio App](https://ais-pre-eoqjw2nstdjrzwlk7gxbwc-793037711970.asia-southeast1.run.app) | Full interactive demo for users, evaluators, and test sessions |
| **🛠️ Development Server** | [Development Instance](https://ais-dev-eoqjw2nstdjrzwlk7gxbwc-793037711970.asia-southeast1.run.app) | Live dev server running in Google AI Studio Cloud Run environment |

---

## 💡 The Problem & The Adaptive Baseline Philosophy

Traditional workplace communication tools, interview prep platforms, and corporate training software measure users against rigid, **neurotypical and able-bodied speech standards**. 

This traditional approach causes significant harm:
- Individuals with stuttering, dysarthria, or apraxia are penalized for natural pauses or uneven cadence.
- Autistic and neurodivergent professionals are judged for straightforward tone or atypical eye contact and social scripting.
- Deaf and hard-of-hearing professionals lack real-time computer vision tools bridging hand gestures and corporate chat.

### 🌟 The AdaptAble Paradigm Shift
**AdaptAble evaluates every user against their OWN personal baseline** rather than neurotypical norms:
- **Baseline Calibration**: During onboarding, users set their disability context, comfortable pace, and communication preferences.
- **Dignity-First Feedback**: Suggestions focus on communicative intent, clarity of ideas, and workplace assertiveness—never "curing" or masking authentic speech patterns.
- **Accommodation Readiness**: Built-in scripts and templates to help employees request accommodations under the ADA / Rights of Persons with Disabilities Acts.

---

## ✨ Core Features & Modules

### 1. 🎙️ Adaptive AI Speech Coach
- **Dual Input Modes**: Speech-to-text via browser Web Speech Recognition API or direct keyboard/AAC typing.
- **Personalized Scoring**: Evaluates clarity, confidence, fluency, and workplace appropriateness against calibrated personal baselines.
- **Alternative Professional Phrasing**: Provides polished, assertive workplace phrasing without erasing individual identity.
- **Actionable Growth Steps**: Concrete suggestions such as anchor words, structured pause placement, and framing main ideas first.

### 2. 🤟 Multimodal Vision Sign Language AI Bot
- **Camera-Driven Computer Vision**: Real-time camera feed analysis using Google Gemini multimodal vision.
- **No Generic Defaults**: High-precision handshape lexicon distinguishing between thumbs-up (AGREE/YES), flat palm at chin (THANK YOU), chest circle (PLEASE), wrist tap (WORK/TIME), and open hand waves.
- **Bidirectional Glossing**: Translates natural English into Sign Language Gloss (e.g., `MEET - TEAM - DISCUSS`) and converts user hand gestures back to speech and text.
- **Interactive Practice Mode**: Step-by-step target sign drills with real-time feedback on finger positioning and palm orientation.

### 3. 🏢 Workplace Roleplay Simulator
- **Dynamic Branching Scenarios**:
  - Requesting Reasonable Workplace Accommodations
  - Performance Review & Salary Discussions
  - Managing Overload & Setting Boundaries with Managers
  - Cross-functional Project Syncs & Team Disagreements
- **Live AI Roleplay**: Conversational responses powered by Gemini with real-time feedback, communication scoring, and alternative phrases.

### 4. 🎬 Animated Social Stories Video Studio
- **Unspoken Norm Deconstruction**: Deconstructs ambiguous corporate norms (coffee room banter, handling unscheduled meetings, responding to critical feedback) into predictable steps.
- **Integrated Video Player**: Multi-scene visual slide deck with animated avatars, scene transitions, synchronized subtitles, and audio narration.
- **Sensory & Boundary Tips**: Practical recommendations for managing sensory overload and visual boundaries at work.

### 5. 📚 Workplace Vocabulary De-Jargonizer
- **Corporate Buzzword Decoder**: Clarifies complex jargon (e.g., *Bandwidth*, *Deliverable*, *Touch Base*, *Action Item*).
- **Dyslexia Syllabification**: Phonetic breakdowns and visual syllable chunking (`DE - LIV - ER - A - BLE`).
- **Sign Language Equivalents**: Gloss notation for corporate terminology.
- **Copy-Paste Templates**: Instant response templates for Slack, Teams, and email.

### 6. ♿ Universal Accessibility Engine (WCAG 2.2 AAA)
- **High-Contrast Theme**: Instant toggle for ultra-high-contrast mode (yellow-on-black).
- **Dyslexia-Optimized Typography**: Font rendering adjustments with expanded character tracking.
- **Dynamic Text Scaling**: Support for Normal, Large, and Extra Large typography across all screens.
- **Persistent Live Caption Bar**: Real-time captioning engine for all voiceovers and feedback.

### 7. 🔒 Enterprise Security Vault & Dashboards
- **Client-Side AES-GCM 256-bit Encryption**: Personal baseline configurations and audio transcripts can be encrypted in the client-side data vault.
- **Trainer & Institution Portals**: Enterprise metrics for vocational trainers, inclusion officers, and enterprise accessibility champions.

---

## 🏗️ System Architecture
