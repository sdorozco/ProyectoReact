import React from "react";
import {
  ContainerSeller,
  BoxSeller,
  CardSeller,
  ClockIcon,
  LinkSeller,
  LocationIcon,
  PlatinumIcon,
  ReputationSeller,
  RowSeller,
  SuportIcon,
  TitleSeller,
} from "./style";

const InfoSellerComponent = () => {
  return (
    <ContainerSeller>
      <TitleSeller>Información del Vendedor</TitleSeller>
      <CardSeller>
        <LocationIcon />
        <div>
          <p>Ubicación</p>
          <strong>Teusaquillo Bogotá D.C.</strong>
        </div>
      </CardSeller>
      <CardSeller>
        <PlatinumIcon />
        <div>
          <p>Mercado Platinum</p>
          <strong>¡Es uno de los mejores del sitio!</strong>
        </div>
      </CardSeller>
      <ReputationSeller>
        <BoxSeller>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className="active"></li>
        </BoxSeller>
      </ReputationSeller>
      <RowSeller>
        <div>
          <strong>9452</strong>
          <span>Ventas en los ultimos 60 días</span>
        </div>
        <div>
          <strong>
            <SuportIcon />
          </strong>
          <span>Brinda Buena Atención</span>
        </div>
        <div>
          <strong>
            <ClockIcon />
          </strong>
          <span>Entrega sus pedidos a tiempo</span>
        </div>
      </RowSeller>
      <LinkSeller href="#">Ver más datos de este vendedor</LinkSeller>
    </ContainerSeller>
  );
};

export default InfoSellerComponent;
