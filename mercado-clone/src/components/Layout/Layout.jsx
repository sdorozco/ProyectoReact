import React from "react";
import Header from "../Header";
import { Hero } from "../Hero";
import { Product } from "../Product";


import { Container, Wrapper } from "./style";


const Layout = () => {
  return (
      <Container>
        <Header />
        <Wrapper>
          <Hero />
          <Product />
        </Wrapper>
      </Container>
  );
};

export default Layout;
