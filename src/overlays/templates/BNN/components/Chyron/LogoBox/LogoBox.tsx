import * as React from "react";
import * as Styled from "./LogoBox.styles";

interface IntLogoBox {
  image?: string;
}

const LogoBox: React.FC<IntLogoBox> = ({ image }) => {
  return (
    <Styled.LogoBox>
      {image ? (
        <img src={`${process.env.REACT_APP_CLOUD_IMAGES_USER}${image}`} />
      ) : (
        <span>GMT</span>
      )}
    </Styled.LogoBox>
  );
};

export default LogoBox;
