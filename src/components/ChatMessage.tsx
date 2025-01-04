import React from "react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isBot?: boolean;
}

const ChatMessage = ({ message, isBot = false }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full mb-4 animate-message-appear",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2 text-chat-text",
          isBot ? "bg-chat-bot rounded-tl-sm" : "bg-chat-user rounded-tr-sm"
        )}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;