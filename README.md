# PrepWise (MockAi) — AI-Powered Voice Mock Interview Platform

<p align="center">
  <img src="public/logo.svg" alt="PrepWise Logo" width="100" height="100" />
</p>

<h3 align="center">PrepWise</h3>

<p align="center">
  A premium, interactive AI job interview preparation platform powered by real-time voice agents and automated evaluation metrics.
</p>

---

## 🤖 Introduction

**PrepWise (MockAi)** is an intelligent web application designed to help job seekers practice, refine, and master their interview skills in a realistic conversational environment.

By integrating **Vapi AI Voice Agents**, users participate in real-time, spoken-voice mock interviews. The platform leverages **Google Gemini 2.0 Flash** to dynamically generate custom interview questions tailored to any role, experience level, or tech stack. Following the interview, Gemini evaluates the spoken transcript, scoring the candidate's performance across critical vectors to deliver actionable feedback and guidance.

---

## 🚀 Key Features

*   🗣️ **Real-Time Voice Assistant (Vapi)**: Practice like a real interview by speaking to a custom AI interviewer. Built with Deepgram for transcription and ElevenLabs (Sarah voice) for natural text-to-speech.
*   🧠 **Dynamic Interview Generation (Gemini 2.0 Flash)**: Customize your practice sessions by configuring the job role, experience level, tech stack, question focus (behavioral, technical, or mixed), and question count.
*   💬 **Live Transcript Feed**: Watch transcription update in real-time as both you and the AI interviewer speak.
*   📊 **Granular AI Evaluation**: Receives a strict, automated performance score (0-100) across 5 core categories:
    *   *Communication Skills* (clarity, structure, articulation)
    *   *Technical Knowledge* (role-relevant concept accuracy)
    *   *Problem Solving* (analytical capabilities)
    *   *Cultural Fit* (alignment with professional expectations)
    *   *Confidence and Clarity* (vocal presence and engagement)
*   💡 **Detailed Feedback Reports**: Highlights specific strengths, clear areas for improvement, and a final written assessment.
*   🔒 **Secure Authentication**: Features Firebase email/password sign-in and session management.
*   📈 **Dashboard History**: Keep track of all your past interviews, review previous feedback, and explore other community interviews.

---

## ⚙️ Tech Stack

*   **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
*   **Speech & Voice Agents**: [Vapi AI Web SDK](https://vapi.ai/), [Deepgram](https://deepgram.com/), [ElevenLabs](https://elevenlabs.io/)
*   **LLM & Generation Engine**: [Google Gemini 2.0 Flash](https://deepmind.google/technologies/gemini/) (via `@ai-sdk/google` & Vercel `ai` SDK)
*   **Database & Authentication**: [Firebase Client SDK](https://firebase.google.com/) & [Firebase Admin SDK](https://firebase.google.com/)
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
*   **Forms & Validation**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)

---

## 🛠️ Getting Started & Local Setup

Follow these steps to configure and run PrepWise locally on your machine.

### Prerequisites

Ensure you have the following installed:
*   [Node.js (v18 or higher)](https://nodejs.org/)
*   [Git](https://git-scm.com/)
*   [npm](https://www.npmjs.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/anumalaakhil18/ai-mock-interview-main.git
cd ai-mock-interview-main
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root of the project:
```env
# Vapi Configuration
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id

# Google Gemini API Key
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key

# Base URL (e.g., http://localhost:3000 in dev)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Firebase Client SDK Credentials
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Firebase Admin SDK Credentials (for Server Actions)
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```
> **Note**: For the `FIREBASE_PRIVATE_KEY`, ensure you format newlines correctly using `\n` in the environment variable.

### 4. Running the Project Locally
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🖥️ How It Works (System Architecture)

```mermaid
flowchart TD
    A[User Sign-in / Firebase Auth] --> B[Configure Job Role, Tech & Level]
    B --> C[Google Gemini Generates Questions]
    C --> D[Save Interview Setup in Firestore]
    D --> E[Start Call via Vapi Web SDK]
    E --> F[Vapi Assistant Speaks Questions via ElevenLabs]
    F --> G[User Responds via Voice -> Deepgram Transcribes]
    G --> H[End Call -> Store Full Transcript]
    H --> I[Gemini Evaluates Transcript & Scores Performance]
    I --> J[Save Feedback & View Report in Dashboard]
```

1.  **Authentication**: Users sign in securely using Firebase Auth.
2.  **Configuration**: Candidates enter the target role, tech stack, level, and count of questions.
3.  **Generation**: A server endpoint calls the Google Gemini API to structure a valid list of questions.
4.  **Voice Agent Call**: The user launches the call. The Vapi assistant runs, presenting the Gemini-generated questions to the voice agent prompt.
5.  **Interactive Conversation**: The candidate talks, and the assistant responds dynamically, listening for answers, acknowledging, and asking follow-ups.
6.  **AI Assessment**: Once ended, the full transcript is passed to Gemini, which computes scores using structured outputs and outputs strengths, weaknesses, and reviews.
7.  **Feedback Dashboard**: The feedback is written to Firestore and displayed to the user instantly.

---

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## 🔗 Project Links
*   **GitHub Repository**: [anumalaakhil18/ai-mock-interview-main](https://github.com/anumalaakhil18/ai-mock-interview-main)

---
*Developed with ❤️ to make job interview preparation accessible and automated.*
