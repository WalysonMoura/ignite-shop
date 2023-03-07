import { styled } from "..";

export const HomeContainer = styled("main", {
  maxWidth: "calc(100vw - 1180) / 2",
  minHeight: 656,

  height: "100vh",
  width: "100%",

  display: "flex",
  gap: "3rem",

  marginLeft: "auto",
});

export const Product = styled("a", {
  // background: ,
  borderRadius: 0,
  padding: "0.25rem",
  cursor: "pointer",
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0,0,0,0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",
    overFlow: "hidden",

    strong: {
      fontSize: "$xl",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green500",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
