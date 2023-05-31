import React from "react";
import _cloneDeep from "lodash/cloneDeep";
import * as Styled from "./Emotes.styles";
import socketServices from "../../services/socketServices";
import { RequestType } from "../../types";

interface IEmoji {
  emoji: string;
}

const Emoji: React.FC<IEmoji> = ({ emoji }) => {
  const padding = 3,
    leftMax = 97,
    speedMin = 5,
    speedMax = 8;

  const left = Math.floor(Math.random() * (leftMax - padding) + padding);
  const speed = Math.random() * (speedMax - speedMin) + speedMin;

  return (
    <Styled.EmoteDiv left={`${left}%`} speed={speed}>
      {emoji}
    </Styled.EmoteDiv>
  );
};

const MemoizedEmoji = React.memo(Emoji);

interface IEmojiWrapper {
  isDemo?: boolean;
}

interface IEmojiData {
  _id: string;
  date: Date;
  emoji: string;
}

interface IEmojiReturn {
  _id: string;
  date: Date;
  action: string;
  broadcasterName: string;
  emojis: IEmojiData[];
  channel: string;
  tid: string;
  uid: string;
}

export const EmojiWrapper: React.FC<IEmojiWrapper> = ({ isDemo = false }) => {
  const [emojiState, setEmojiState] = React.useState<IEmojiData[]>([]);

  React.useEffect(() => {
    let stillHere = true;
    const queryParams = new URLSearchParams(window.location.search);

    socketServices.subscribeOverlaysEmojis(
      (err: unknown, data: IEmojiReturn) => {
        if (data?.uid !== queryParams.get(RequestType.UserId)) return;
        if (data?.tid !== queryParams.get(RequestType.Template)) return;

        switch (data.action) {
          case "showEmoji":
            if (!stillHere) return;
            setEmojiState(prevState => [...prevState, ...data.emojis]);

            setTimeout(() => {
              if (!stillHere) return;
              setEmojiState(prevState => {
                return prevState.filter(emoji => emoji._id !== data._id);
              });
            }, 10000);
            break;
        }
      }
    );

    return () => {
      stillHere = false;
      socketServices.unSubscribeOverlaysEmojis();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddEmoji = () => {
    const newState = _cloneDeep(emojiState);
    newState.push({
      _id: Math.random().toString(),
      date: new Date(),
      emoji: "💕"
    });
    setEmojiState(newState);
  };

  const handleRemoveEmoji = () => {
    const newState = _cloneDeep(emojiState);
    const newArray = newState.slice(1);
    setEmojiState(newArray);
  };

  return (
    <Styled.EmoteWrapper>
      {isDemo && (
        <>
          <h1>Emojis: {emojiState.length}</h1>
          <button onClick={() => handleAddEmoji()}>Add Component</button>
          <button onClick={() => handleRemoveEmoji()}>Delete</button>
        </>
      )}

      {emojiState.map((data: IEmojiData, index: number) => (
        <MemoizedEmoji key={index} emoji={data.emoji} />
      ))}
    </Styled.EmoteWrapper>
  );
};
