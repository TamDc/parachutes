import { Link } from "@theme-ui/components";
import { Container, Flex, Box, Text, Button, Grid, Image } from "theme-ui";
import SwapBox from "sections/swap-box";
import SwapBoxReceive from "sections/swap-box-receive";
import banana from "assets/pricing/banana.png";
import eth from "assets/pricing/eth.png";
import Vector from "assets/swap/Vector.png";

const data = [
  {
    id: 1,
    icon: banana,
    title: "BANANA",
    subtitle: "Uses.Apeswap",
    price: "1.00",
    option: "above",
    expired: "03/22/21",
  },
  {
    id: 2,
    icon: banana,
    title: "BANANA",
    subtitle: "Uses.Apeswap",
    price: "2.00",
    option: "above",
    expired: "03/22/21",
  },
  {
    id: 3,
    icon: banana,
    title: "BANANA",
    subtitle: "Uses.Apeswap",
    price: "3.00",
    option: "above",
    expired: "03/22/21",
  },
  {
    id: 4,
    icon: eth,
    title: "ETH",
    subtitle: "Uses.Apeswap",
    price: "4.00",
    option: "below",
    expired: "03/22/21",
  },
  {
    id: 5,
    icon: null,
    title: "ETH",
    subtitle: "Uses.Apeswap",
    price: "3.00",
    option: "below",
    expired: "03/22/21",
  },
  {
    id: 6,
    icon: null,
    title: "ETH",
    subtitle: "Uses.Apeswap",
    price: "3.00",
    option: "below",
    expired: "03/22/21",
  },
];

export default function Swap() {
  return (
    <section>
      <Container sx={styles.container}>
        <Flex sx={{ flexDirection: "column" }}>
          <Flex sx={{ flexDirection: ["row"] }}>
            <Box sx={{ flex: 1, textAlign: "center" }}>
              <Link href="/swap" sx={styles.linkPrimary}>
                Trade
              </Link>
              <Link href="/pricing" sx={styles.linkWhite}>
                Pack a Parachute
              </Link>
            </Box>
          </Flex>

          <Flex
            sx={{
              marginTop: 50,
              flexDirection: ["row"],
            }}
          >
            <Box id="rectagle" sx={styles.rectagle}></Box>
            <Box id="boxWrapper" sx={styles.boxWrapper}>
              <Box sx={styles.boxWrapper.wrapperTop}>
                <Text sx={styles.boxWrapper.wrapperTop.headline}>Trade</Text>
              </Box>
              <Box sx={styles.boxWrapper.wrapperBottom}>
                <SwapBox />
                <SwapBoxReceive />
              </Box>
              <Box
                sx={{
                  marginTop: [20, 20, 20],
                  marginBottom: [30, 30, 30],
                  textAlign: "center",
                }}
              >
                <Button sx={styles.moreBtn} bg="primary">
                  Preview Trade &nbsp;
                  <Image src={Vector}></Image>
                </Button>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  linkPrimary: {
    padding: "20px",
    backgroundColor: "#8C30F5",
    border: "1px solid #8C30F5",
    color: "#ffffff",
    padding: "14px 80px",
    borderRadius: "6px",
    zIndex: 99,
    position: "relative",
    textDecoration: "none",
    fontFamily: "Inter",
    fontSize: ["14px", "16px", "14px"],
  },
  linkWhite: {
    padding: "20px",
    backgroundColor: "#ffffff",
    border: "1px solid #8C30F5",
    color: "#8C30F5",
    padding: "14px 44px",
    borderRadius: "6px",
    zIndex: 1,
    position: "relative",
    marginLeft: "-18px",
    textDecoration: "none",
    fontFamily: "Inter",
    fontSize: ["14px", "16px", "14px"],
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        bg: "text",
      },
    },
    whiteButton: {
      color: "background",
      bg: "secondary",
    },
  },
  container: {
    paddingTop: "110px",
  },
  boxWrapper: {
    marginBottom: [30, 0, 60],
    width: "854px",
    background: "#F1E4FF",
    boxShadow: "3px 4px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    margin: "auto",
    wrapperTop: {
      position: "relative",
      margin: "auto",
      width: "715px",
      padding: "40px 0",
      headline: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "28px",
        lineHeight: "40px",
        /* identical to box height, or 143% */
        fontFeatureSettings: "'salt' on, 'liga' off",
        /* Text / Gray 900 */
        color: "#18191F",
      },
    },
    wrapperBottom: {
      margin: "auto",
      width: "715px",
    },
  },
  rectagle: {
    position: "absolute",
    left: "calc(50% - 24px/2 - 101px)",
    top: "174.8px",
    width: "24px",
    height: "14.8px",
    background: "#F1E4FF",
    clipPath: "polygon(50% 0%, 0 100%, 100% 100%)",
  },
  grid: {
    width: ["715px", "715px", "715px"],
    mx: "auto",
  },
  moreBtn: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: ["14px", "16px", "24px"],
    padding: 0,
  },
};
