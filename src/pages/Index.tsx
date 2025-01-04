import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import LoadingDots from "@/components/LoadingDots";

const Index = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm here to listen and help. How are you feeling today?", isBot: true },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    // Add user message
    setMessages((prev) => [...prev, { text: message, isBot: false }]);
    setIsLoading(true);

    // Simulate bot response (replace with actual API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you for sharing. I understand how you're feeling. Would you like to tell me more about it?",
          isBot: true,
        },
      ]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-chat-background">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isBot={message.isBot}
          />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-chat-bot rounded-2xl rounded-tl-sm">
              <LoadingDots />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  );
};

export default Index;