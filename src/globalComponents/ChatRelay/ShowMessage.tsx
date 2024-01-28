import React from "react";

interface ShowMessagesProps {
  message: string;
  name: string;
  twitchNameColor: string;
  useTwitchNameColor: boolean;
  defaultNameColor: string;
}

export const ShowMessages: React.FC<ShowMessagesProps> = ({
  message,
  name,
  twitchNameColor,

  useTwitchNameColor,
  defaultNameColor
}) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = message.split(urlRegex);

  const useThisNameColor = useTwitchNameColor
    ? twitchNameColor
    : defaultNameColor;

  const renderedContent = parts.map((part, index) => {
    if (part.match(urlRegex) && part.endsWith("/1.0")) {
      return (
        <img
          key={index}
          src={part}
          alt={`Emote ${index}`}
          style={{ height: "1rem" }}
        />
      );
    }

    return <span key={index}>{part}</span>;
  });

  return (
    <>
      <span style={{ fontWeight: 500, color: useThisNameColor }}>
        {name}: &nbsp;{" "}
      </span>
      {renderedContent}
    </>
  );
};
