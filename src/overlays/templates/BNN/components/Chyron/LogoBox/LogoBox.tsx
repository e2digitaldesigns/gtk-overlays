import * as React from "react";
import { useDataContext } from "../../../../../../context";
import * as Styled from "./LogoBox.styles";

interface IntLogoBox {}

const LogoBox: React.FC<IntLogoBox> = () => {
  const { logo } = useDataContext();

  return (
    <Styled.LogoBox>{logo && <img src={logo} alt="logo" />}</Styled.LogoBox>
  );
};

export default LogoBox;
