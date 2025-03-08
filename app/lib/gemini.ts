import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
  console.error('Gemini API key not configured');
  throw new Error('Gemini API key is required');
}

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

type Role = 'user' | 'model';

interface ChatMessage {
  type: string;
  content: string;
}

function formatHistory(messages: ChatMessage[]) {
  return messages.map(msg => ({
    role: msg.type === 'user' ? 'user' : 'assistant',
    parts: [{ text: msg.content }]
  }));
}

export async function getChatResponse(userMessage: string, chatHistory: ChatMessage[]) {
  console.log('Chat History:', chatHistory);
  console.log('System Prompt:', process.env.NEXT_PUBLIC_SYSTEM_PROMPT);
  try {
    if (!userMessage.trim()) {
      return "Hey, what's on your mind? Let's talk sneakers and style! 🔥";
    }

    // Create a fresh chat for each request
    const chat = model.startChat({
      history: formatHistory(chatHistory.slice(-5)),
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    });

    // Send the system prompt first if it exists
    if (process.env.NEXT_PUBLIC_SYSTEM_PROMPT) {
      await chat.sendMessage({
        role: "system",
        parts: [{ text: process.env.NEXT_PUBLIC_SYSTEM_PROMPT }]
      });
    }

    // Send the user's message
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
    return "Server's taking a quick breather! Drop that question again in a sec. 🔄";
  }
}