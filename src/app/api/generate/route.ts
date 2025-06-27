import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY, // openAi api key limit was exceed, so i had to use openRouter api key
});

export async function POST(req: NextRequest) {
  const { topic, niche } = await req.json();

  if (!topic || !niche) {
    return NextResponse.json(
      { error: "Missing topic or niche" },
      { status: 400 }
    );
  }

  const prompt = `
You are a content strategist. Suggest one trending Instagram reel idea for a creator in the ${niche} niche about "${topic}".
Include:
- A creative idea
- A caption
- 5 relevant hashtags
- A strong opening hook
Reply in JSON format with keys: idea, caption, hashtags, hook.
`;

  try {
    const chat = await openai.chat.completions.create({
      model: "meta-llama/llama-3-70b-instruct",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7, //creativeness
    });
    const raw = chat.choices[0].message.content || "{}";
    const json = JSON.parse(raw.match(/{[\s\S]*}/)?.[0] || "{}"); // using regex to match the json block only
    return NextResponse.json(json);
  } catch (err: unknown) {
    console.error("OpenAI Error:", err);
    return NextResponse.json({ error: "OpenAI API failed" }, { status: 500 });
  }
}
