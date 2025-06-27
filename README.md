This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


# Content Idea Assistant (Module 1)

This is a simple AI-driven Instagram content generator built with **Next.js 14**, **OpenAI API**, and **Tailwind CSS**.

---

## Features

-  Enter a topic
-  Choose a content niche (e.g., fashion, fitness, finance)
- Uses GPT-4 or GPT-3.5 to generate:
- A reel idea
- A caption
- 5 relevant hashtags
- A strong opening hook
- API route with OpenAI completion
- Stylish and responsive UI
- Loading and ❌ error handling
- Dark mode compatible

---

## Tech Stack

- **Framework**: Next.js App Router (14+)
- **Styling**: Tailwind CSS
- **API**: OpenAI API via `openai` npm package
- **Runtime**: Edge functions (via `app/api/generate/route.ts`)

---

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/your-user/content-idea-assistant
cd content-idea-assistant
pnpm install
