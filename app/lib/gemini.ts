import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
  throw new Error('Missing Gemini API key');
}

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const systemPrompt = process.env.NEXT_PUBLIC_SYSTEM_PROMPT;

export async function getChatResponse(userMessage: string, chatHistory: { type: string; content: string }[]) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    // Format chat history for Gemini
    const formattedHistory = chatHistory
      .map(msg => `${msg.type === 'user' ? 'Human' : 'Assistant'}: ${msg.content}`)
      .join('\n');
    
    const chat = model.startChat({
      history: [`System: ${systemPrompt}`, formattedHistory],
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    const text = response.text();
    
    return text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    return "I'm having trouble connecting right now. Please try again in a moment. 🔌";
  }
}