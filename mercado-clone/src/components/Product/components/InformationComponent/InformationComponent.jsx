import React from "react";
import { Description } from "./style";

const InformationComponent = () => {
  return(
  <Description>
    <h4>Descripción</h4>
    <p>
      <span>Categoría de producto: chaqueta</span> <br />
      <span>Estilo: Movimiento</span> <br />
      <span>Tipo de collar: collar de soporte</span> <br />
      <span>Tipo de edición: suelto Yeso: placa decorativa con cremallera</span> <br />
      <span>Si lleva capucha: sin capucha</span> <br /> 
      <span>Rango de error: 1 - 3 cm</span> <br /> 
      <span>Nombre de la tela: poliéster</span> <br /> 
      <span>COLOR: gris, negro, azul oscuro, verde militar</span> <br /> 
      <span>Talla : G, XL, 2xl, 3xl, 4xl, 5xl</span> <br />
    </p>
    <hr />
  </Description>
  )
};

export default InformationComponent;
