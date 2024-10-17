import React from "react";
import { chatMessageParser } from "../Utils";

interface ShowMessagesProps {
  message: string;
  name: string;
  nameColor: string;
}

export const ShowMessages: React.FC<ShowMessagesProps> = ({ message, name, nameColor }) => {
  const parts = chatMessageParser(message);
  return (
    <div>
      <span style={{ fontWeight: 500, color: nameColor }}>{name}: </span>
      {parts}
    </div>
  );
};
