import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

const systemPrompt = process.env.NEXT_PUBLIC_SYSTEM_PROMPT || `You are HYPEDROP's AI assistant. You help customers with questions about streetwear, limited drops, and fashion culture. Be knowledgeable, trendy, and maintain a cool, professional tone.`;

export async function getChatResponse(userMessage: string, chatHistory: { type: string; content: string }[]) {
  try {
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      throw new Error('API key not configured');
    }
    
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
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