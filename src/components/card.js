import { Box, Card, Text, Flex, Heading, Button } from "theme-ui";
import React from "react";
import List from "./list";
import Image from "components/image";

export default function FunctionCard({ item }) {
  return (
    <Box sx={styles.card} key={item.id}>
      <Box sx={styles.wrapper}>
        <Flex>
          <Image src={item.imgSrc} alt={item.altText} sx={styles.img} />

          <Heading sx={styles.wrapper.title}>{item.title}</Heading>
        </Flex>
        <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  pricingBox: {
    flex: [
      "0 1 100%",
      null,
      null,
      "0 1 50%",
      "0 1 45%",
      "0 1 40%",
      "0 1 38.5%",
    ],
    background: "#2F5392",
    borderRadius: 10,
    ml: [0, null, null, 5],
    position: "relative",
    mt: ["40px", null, null, 0],
    p: [
      "50px 15px 50px",
      null,
      "62px 25px 50px 25px",
      null,
      "62px 70px 50px 40px",
    ],
    "@media screen and (min-width: 420px) and (max-width: 767px)": {
      maxWidth: "380px",
    },
    "&:first-of-type": {
      ml: 0,
      mt: 0,
    },
    "&.active": {
      backgroundColor: "white",
      ".package__name": {
        color: "heading_secondary",
      },
      ".package__price > span": {
        color: "text",
      },
      ".open": {
        color: "text",
      },
      ".closed": {
        color: "text",
        opacity: 0.6,
      },
    },
  },
  header: {
    height: ["28px", null, null, null, "32px"],
    backgroundColor: "#EF9E48",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFFFF",
    position: "absolute",
    top: [3, null, 4],
    letterSpacing: "-.14px",
    px: "10px",
  },

  heading: {
    fontWeight: "bold",
    fontSize: [4, null, null, null, 5],
    lineHeight: "23px",
    color: "#ffffff",
    marginBottom: [1, null, "12px"],
  },
  pricingHeader: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: ["35px", null, null, null, null, "50px"],
  },
  price: {
    fontWeight: "bold",
    fontSize: [4, null, 5, null, "26px"],
    lineHeight: 1,
    display: "flex",
    letterSpacing: "-0.5px",
    color: "#0F2137",
    marginBottom: 0,
    flexWrap: "wrap",
    flexDirection: "column",
    textAlign: "right",
    mt: ["-3px", null, "2px"],
    "> span": {
      fontWeight: "body",
      fontSize: [1, 2],
      lineHeight: 1.25,
      display: "block",
      marginBottom: "10px",
      color: "white",
    },
    "> .price": {
      marginBottom: 0,
      color: "secondary",
      "> sub": {
        position: "relative",
        bottom: "6px",
      },
    },
  },
  card: {
    display: "flex",
    boxShadow: "3px 10px 20px rgba(41, 41, 42, 0.25)",
    borderRadius: "8px",
    alignItems: "flex-start",
    p: [
      "20px 17px 20px",
      null,
      null,
      "20px 20px 20px",
      "20px 15px 17px",
      "40px 40px 40px",
      "40px 40px 40px",
      "40px 40px 40px",
    ],
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    backgroundColor: "white",
    borderRadius: "10px",
    transition: "all 0.3s",
    width: ["100%", "85%", null, "100%"],
    mx: "auto",
  },

  listItem: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: [1, null, null, null, 2],
    lineHeight: [1.7, null, 1.65],
    marginBottom: [3, "22px"],
    alignItems: "flex-start",
    color: "white",
    pr: [2, null, null, null, 0, 6],
    "&.closed": {
      opacity: 0.55,
      button: {
        color: "#788FB5",
      },
    },
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
      marginBottom: "auto !important",
      marginTop: "auto !important",
      width: "100%",
      // textAlign: "center",
      fontSize: ["20px", "24px", "28px"],
      lineHeight: "40px",
    },

    subTitle: {
      marginTop: ["20px", "25px", "30px"],
      fontSize: ["16px", "16px", "18px"],
      fontWeight: 500,
      lineHeight: [1.8, null, 1.85],
      // textAlign: "center",
    },
  },
  img: {
    width: ["30px", null, "40px"],
    objectFit: "contain",
    flexShrink: 0,
    mr: [3, 4],
  },
};
