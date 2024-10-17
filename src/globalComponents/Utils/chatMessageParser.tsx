export const chatMessageParser = (message: string) => {
  const imgRegex = /<img\s+src="([^"]+)"\s+alt="([^"]+)"\s*\/?>/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = imgRegex.exec(message)) !== null) {
    if (lastIndex < match.index) {
      const text = message.slice(lastIndex, match.index).trim();
      if (text) {
        parts.push(<span key={lastIndex}>{text}</span>);
      }
    }

    parts.push(<img key={match.index} src={match[1]} alt={match[2]} style={{ margin: "0 5px" }} />);

    lastIndex = imgRegex.lastIndex;
  }

  if (lastIndex < message.length) {
    const remainingText = message.slice(lastIndex).trim();
    if (remainingText) {
      parts.push(<span key={lastIndex}>{remainingText}</span>);
    }
  }

  return parts;
};
