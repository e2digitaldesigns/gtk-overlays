import React from "react";
import * as Styled from "./Button.styles";

interface ButtonProps {
  bgColor?: string;
  children: React.ReactNode;
  color?: string;
  rounded?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  bgColor = "#3c404b",
  children,
  color = "#ccc",
  rounded = false,
  onClick = () => {}
}) => {
  return (
    <Styled.Buttons
      bgColor={bgColor}
      color={color}
      rounded={rounded}
      onClick={onClick}
    >
      {children}
    </Styled.Buttons>
  );
};
