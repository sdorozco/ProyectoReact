import React from "react";
import { SectionWarranty } from "./style";

const WarrantyComponent = () => {
  return (

    <SectionWarranty>
      <h5>Garantia</h5>
      <div>
        <span>
          <p className="title">Compra Protegida con Mercado Pago</p>
          <p className="description">Recibe el producto que esperas o te devolvemos tu dinero</p>
        </span>
        <span>
          <p>Garantía del Vendedor</p>
          <p>Garantía del vendedor: 6 Meses</p>
        </span>
      </div>
    </SectionWarranty>
  );
};

export default WarrantyComponent;
