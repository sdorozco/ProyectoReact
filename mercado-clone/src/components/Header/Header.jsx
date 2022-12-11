import React from "react";
import { WrapperHeader,ContainerHeader } from './style/index';
const Header = () => {
  return (
    <ContainerHeader>
      <WrapperHeader>
        <img
          src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.3/mercadolibre/logo__large_plus.png"
          alt="logo"
        />
      </WrapperHeader>
    </ContainerHeader>
  );
};

export default Header;
