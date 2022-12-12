import React from "react";
import { ContainerHero, RowHero } from "./style";


const Hero = () => {
  return (
    <ContainerHero>
      <RowHero>
        <a href="#" className="back">Volver al Listado</a>
        <a href="#">Computación</a>
        <a href="#">Accesorios para PC</a>
        <a href="#">Micrófonos</a>
        <a href="#">Red Dragon</a>
      </RowHero>
      <RowHero>
        <a href="#">Compartir</a>
        <a href="#">Vender una igual</a>
      </RowHero>
    </ContainerHero>
  );
};

export default Hero;
