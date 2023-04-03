import * as React from "react";
import { useDataContext } from "../../../../../../context";
import * as Styled from "./LogoBox.styles";

interface IntLogoBox {}

const LogoBox: React.FC<IntLogoBox> = () => {
  const { logo } = useDataContext();

  return (
    <Styled.LogoBox>
      {logo && <img src={process.env.REACT_APP_CLOUD_IMAGES_USER + logo} />}
    </Styled.LogoBox>
  );
};

export default LogoBox;
