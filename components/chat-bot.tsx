"use client"

import { useState, useEffect, useRef } from "react";
import { CloudLightning as Lightning, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import ReactMarkdown from 'react-markdown'
import { getChatResponse } from "@/lib/gemini";

interface ChatMessage {
  type: 'user' | 'assistant';
  content: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { type: "assistant", content: "Hey! How can I help you today? 🔥" }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return
    const userMessage = input.trim()
    setInput("")
    setIsLoading(true)
    
    const userMsg: ChatMessage = { type: 'user', content: userMessage };
    setMessages(prev => [...prev, userMsg])
    
    try {
      const response = await getChatResponse(userMessage, messages);
      const botMsg: ChatMessage = { type: 'assistant', content: response };
      setMessages(prev => [...prev, botMsg])
    } catch (error) {
      const errorMsg: ChatMessage = {
        type: 'assistant',
        content: "Sorry, I'm having trouble connecting. Please try again. 🔌"
      };
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={cn( 
          "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600",
          "hover:scale-110 transition-transform duration-200 shadow-lg shadow-violet-500/20",
          "flex items-center justify-center p-0 z-50",
          isOpen && "scale-0"
        )}
      >
        <Lightning className="w-5 h-5 sm:w-6 sm:h-6 animate-[pulse_2s_ease-in-out_infinite]" />
      </Button>

      <div className={cn(
        "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] max-w-[450px] bg-black border border-white/10 rounded-2xl shadow-2xl z-50",
        "transition-all duration-300 transform",
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
      )}>
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Lightning className="w-5 h-5 text-violet-500" />
            <span className="font-semibold hidden sm:inline">HYPEDROP Assistant</span>
            <span className="font-semibold sm:hidden">Assistant</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-white/10"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, i) => (
            <div
              key={i}
              className={cn(
                "flex gap-2 animate-fade-in",
                message.type === 'user' && "flex-row-reverse"
              )}
            >
              <div className={cn(
                "rounded-2xl px-4 py-2 max-w-[80%]",
                message.type === 'assistant' ? "bg-violet-600/20 text-white" : "bg-white/10"
              )}
            >
              {message.type === 'assistant' ? (
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal ml-4 mb-2">{children}</ol>,
                    li: ({ children }) => <li className="mb-1">{children}</li>,
                    h1: ({ children }) => <h1 className="text-xl font-bold mb-2">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-lg font-bold mb-2">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-base font-bold mb-2">{children}</h3>,
                    code: ({ children }) => (
                      <code className="bg-black/30 rounded px-1 py-0.5 text-sm">{children}</code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-black/30 rounded p-2 mb-2 overflow-x-auto">{children}</pre>
                    ),
                    a: ({ href, children }) => (
                      <a href={href} className="text-violet-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    ),
                    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                    em: ({ children }) => <em className="italic">{children}</em>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-2 border-violet-500 pl-4 my-2 italic">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              ) : (
                message.content
              )}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex gap-2 items-center"
          >
            <input
              disabled={isLoading}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className={cn(
                "flex-1 min-w-0 bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading}
              className={cn(
                "bg-violet-600 hover:bg-violet-700",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                isLoading && "animate-pulse"
              )}
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
          <div ref={messagesEndRef} />
        </div>
      </div>
    </>
  )
}