"use client"

import { useState, useEffect, useRef } from "react"
import { CloudLightning as Lightning, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getChatResponse } from "../lib/gemini"

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: "bot", content: "Hey! How can I help you today? 🔥" }
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
    
    setMessages(prev => [...prev, { type: "user", content: userMessage }])
    
    try {
      const response = await getChatResponse(userMessage, messages)
      setMessages(prev => [...prev, { type: "bot", content: response }])
    } catch (error) {
      setMessages(prev => [...prev, { 
        type: "bot",
        content: "Sorry, I'm having trouble connecting. Please try again. 🔌"
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600",
          "hover:scale-110 transition-transform duration-200 shadow-lg shadow-violet-500/20",
          "flex items-center justify-center p-0 z-50",
          isOpen && "scale-0"
        )}
      >
        <Lightning className="w-6 h-6 animate-[pulse_2s_ease-in-out_infinite]" />
      </Button>

      <div className={cn(
        "fixed bottom-6 right-6 w-96 bg-black border border-white/10 rounded-2xl shadow-2xl z-50",
        "transition-all duration-300 transform",
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
      )}>
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Lightning className="w-5 h-5 text-violet-500" />
            <span className="font-semibold">HYPEDROP Assistant</span>
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
                message.type === "user" && "flex-row-reverse"
              )}
            >
              <div className={cn(
                "rounded-2xl px-4 py-2 max-w-[80%]",
                message.type === "bot" ? "bg-violet-600/20 text-white" : "bg-white/10"
              )}>
                {message.content}
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
            className="flex gap-2"
          >
            <input
              disabled={isLoading}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className={cn(
                "flex-1 bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500",
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