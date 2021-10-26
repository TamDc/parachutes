/** @jsx jsx */
import { jsx, Container, Text, Button } from "theme-ui";
import { keyframes } from "@emotion/core";
import Logo from "components/logo";
import LogoDark from "assets/logo-dark.svg";
import LogoWhite from "assets/logo.svg";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import Link from "next/link";

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Link href="/">
            <Text sx={styles.brand}>PARACHUTES</Text>
          </Link>
          <Button sx={styles.btn} variant="primary" aria-label="Get Started">
            Launch App
          </Button>

          {/* <MobileDrawer /> */}
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "white",
    fontWeight: "normal",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.5s ease",
    animation: `${positionAnim} 0.4s ease`,
    boxShadow: "0 1px 2px rgb(0 0 0 / 6%);",
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
      ".donate__btn": {
        borderColor: "primary",
        color: "primary",
        "&:hover": {
          boxShadow: "rgba(31, 62, 118, 0.57) 0px 9px 20px -5px",
          backgroundColor: "primary",
          color: "white",
        },
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    fontFamily: "Montserrat Alternates",
    fontWeight: "bold",
    fontSize: ["14px", "16px", "18px"],
    lineHeight: "20px",
    color: "#000",
    textAlign: "center",
    letterSpacing: "6px",
    cursor: "pointer",
  },
  btn: {
    color: "primary",
    backgroundColor: "#F1E4FF",
    marginLeft: "auto",
    "&:hover": {
      color: "white",
      backgroundColor: "primary",
    },
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: "16px",
      fontWeight: "400",
      px: 25,
      cursor: "pointer",
      lineHeight: "1.2",
      "&.active": {
        color: "secondary",
      },
    },
  },
};
