import React from "react";
import InformationComponent from "./components/InformationComponent/InformationComponent";
import {
  ContainerProduct,
  ColumnProduct,
  GaleryProduct,
  PanelProduct,
} from "./style";

const Product = () => {
  return (
    <ContainerProduct>
      <PanelProduct>
        <ColumnProduct>
          <GaleryProduct>
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_687026-CBT51465454621_092022-O.webp"
              alt="product"
            />
          </GaleryProduct>
          <InformationComponent />
        </ColumnProduct>
        <ColumnProduct>
          {/* <ProductSale/>
          <InfoSeller />
          <Galery/> */}
        </ColumnProduct>
      </PanelProduct>
    </ContainerProduct>
  );
};

export default Product;
