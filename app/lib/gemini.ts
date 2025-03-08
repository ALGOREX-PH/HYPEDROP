import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
  throw new Error('Gemini API key is required');
}

const systemPrompt = process.env.NEXT_PUBLIC_SYSTEM_PROMPT || '';
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

interface ChatMessage {
  type: 'user' | 'assistant';
  content: string;
}

export async function getChatResponse(userMessage: string, chatHistory: ChatMessage[] = []) {
  try {
    // Validate chat history
    if (!Array.isArray(chatHistory) || !chatHistory.every(msg => 
      msg && 
      (msg.type === 'user' || msg.type === 'assistant') && 
      typeof msg.content === 'string'
    )) {
      console.error('Invalid chat history format');
      chatHistory = [];
    }

    if (!userMessage.trim()) {
      return "Hey, what's on your mind? Let's talk sneakers and style! 🔥";
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const chat = model.startChat({
      history: [
        { role: 'user', parts: ['System: ' + systemPrompt] },
        { role: 'model', parts: ['Understood. I will act as HypeBot, the sneaker and streetwear expert.'] }
      ],
      generationConfig: { temperature: 0.7, topK: 40, topP: 0.95, maxOutputTokens: 1024 }
    });

    // Add recent chat history
    for (const msg of chatHistory
      .slice(-5)
      .filter(msg => msg.type === 'user' || msg.type === 'assistant')) {
      await chat.sendMessage(msg.content);
    }

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error('Empty response from API');
    }

    return text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    if (error instanceof Error && error.message.includes('safety')) {
      return "Yo, let's keep it clean and respectful! What else you wanna know about sneakers? 🤝";
    }
    return "Connection's lagging! Hit me with that question again in a sec. 👟";
  }
}