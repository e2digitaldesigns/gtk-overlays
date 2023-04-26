import React from "react";

interface MessageParserProps {
  message: string;
}

export const MessageParser: React.FC<MessageParserProps> = ({ message }) => {
  if (!message) return null;
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = message.split(urlRegex);

  const renderedContent = parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return <img key={index} src={part} alt={`Image ${index}`} />;
    }

    return <span key={index}>{part}</span>;
  });

  return <span>{renderedContent}</span>;
};
