import { FC, useCallback, useEffect, useState, useMemo, useRef } from "react";
import * as Styled from "./BgTextScroller.style";
import { debounce } from "./utils/debounce";

interface IBgTextScrollerProps {
  bgColor?: string;
  fontColor1?: string;
  fontColor2?: string;
  fontSize?: string;
  speed1?: number;
  speed2?: number;
  text?: string;
  xSpacer?: number;
  ySpacer?: number;
  isVisible?: boolean;
}

const GTK_BgTextScroller: FC<IBgTextScrollerProps> = ({
  bgColor = "#ededed",
  fontColor1 = "#222222",
  fontColor2 = "#222222",
  fontSize = "1rem",
  speed1 = 20,
  speed2 = 30,
  text = "Gamer Tool Kit",
  xSpacer = 30,
  ySpacer = 2.35,
  isVisible = true
}) => {
  const [stageDimensions, setStageDimensions] = useState({ width: 0, height: 0 });
  const [wordDimensions, setWordDimensions] = useState({ width: 0, height: 0 });

  const stageRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);

  const updateDimensions = useCallback(() => {
    const word = wordRef.current;
    const stage = stageRef.current;
    if (word && stage) {
      const { width: wordWidth, height: wordHeight } = word.getBoundingClientRect();
      const { width: stageWidth, height: stageHeight } = stage.getBoundingClientRect();

      setStageDimensions({ width: stageWidth, height: stageHeight });
      setWordDimensions({ width: wordWidth, height: wordHeight });
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    const handleResize = () => {
      updateDimensions();
    };
    const debouncedResize = debounce(handleResize, 150);
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [updateDimensions]);

  const wordCount = useMemo(() => {
    return Math.ceil((stageDimensions.width * 1.5) / (wordDimensions.width + xSpacer));
  }, [stageDimensions.width, wordDimensions.width, xSpacer]);

  const lineCount = useMemo(() => {
    return Math.ceil(stageDimensions.height / (wordDimensions.height * ySpacer));
  }, [stageDimensions.height, wordDimensions.height, ySpacer]);

  return (
    <Styled.ScrollContainer ref={stageRef} bgColor={bgColor} isVisible={isVisible}>
      <Styled.SampleWord ref={wordRef} fontSize={fontSize}>
        {text}
      </Styled.SampleWord>

      {Array.from({ length: lineCount }).map((_, index) => (
        <Styled.ScrollLine
          key={index}
          fontSize={fontSize}
          posTop={index * wordDimensions.height * ySpacer}
          totalWidth={xSpacer + wordDimensions.width}
          gap={xSpacer}
          reverse={index % 2 !== 0}
          speed={index % 2 === 0 ? speed1 + "s" : speed2 + "s"}
        >
          {Array.from({ length: wordCount }).map((_, i) => (
            <div
              key={i}
              style={{
                whiteSpace: "nowrap",
                width: "fit-content",
                color: index % 2 === 0 ? fontColor1 : fontColor2
              }}
            >
              {text}
            </div>
          ))}
        </Styled.ScrollLine>
      ))}
    </Styled.ScrollContainer>
  );
};

export default GTK_BgTextScroller;
