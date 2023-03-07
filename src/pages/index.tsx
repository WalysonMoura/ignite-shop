import React from "react";
import { styled } from "../styles";
import * as Style from "../styles/pages/home";
import Product from "./product/[id]";
import Image from "next/image";

import camiseta1 from "../assets/1.png";
import camiseta2 from "../assets/2.png";
import camiseta3 from "../assets/3.png";

const Button = styled("button", {
  backgroundColor: "$primary",
  borderRadius: 4,
  padding: "4px 8px",
  span: {
    fontWeight: "bold",
  },

  ":hover": {
    filter: "brightness(0.8)",
  },
});

export default function Home() {
  return (
    <Style.HomeContainer>
      <Style.Product>
        <Image src={camiseta1} width={520} height={400} alt="" />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,98</span>
        </footer>
      </Style.Product>

      <Style.Product>
        <Image src={camiseta1} width={520} height={400} alt="" />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,98</span>
        </footer>
      </Style.Product>
    </Style.HomeContainer>
  );
}
