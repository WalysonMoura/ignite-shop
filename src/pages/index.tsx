import React from "react";
import { styled } from "../styles";

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
  return <h1>Hello Wolrd</h1>;
}
