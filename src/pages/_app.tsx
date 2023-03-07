import React from "react";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";
import logoImg from "../assets/logoImg.svg";
import Image from "next/image";

globalStyles();
export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt=""/>
      </Header>
      <Component {...pageProps} />;
    </Container>
  );
}
