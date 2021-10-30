import { Link } from "@theme-ui/components";
import { Container, Flex, Box, Text, Button, Grid, Image } from "theme-ui";
import PricingBox from "sections/pricing-box";
import Arrow from "assets/pricing/arrowbottom.png";
import banana from "assets/pricing/banana.png";
import eth from "assets/pricing/eth.png";

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

export default function Pricing() {
  return (
    <section>
      <Container sx={styles.container}>
        <Flex sx={{ flexDirection: "column" }}>
          <Flex sx={{ flexDirection: ["row"] }}>
            <Box sx={{ flex: 1, textAlign: "center" }}>
              <Button
                variant="whiteButton"
                sx={{
                  width: "197.7px",
                  border: "1px solid #8C30F5",
                  height: "46px",
                  fontFamily: "Inter",
                  fontSize: ["14px", "16px", "14px"],
                  color: "#8C30F5",
                }}
              >
                Trade
              </Button>
              <Button
                variant="primary"
                sx={{
                  height: "46px",
                  width: "197.7px",
                  fontFamily: "Inter",
                  fontSize: ["14px", "16px", "14px"],
                  marginLeft: "-18px",
                }}
              >
                Pack a Parachute
              </Button>
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
                <Box sx={styles.boxWrapper.wrapperTop.rectagle2}></Box>
                <Text sx={styles.boxWrapper.wrapperTop.rectagleText}>
                  Deposited Vaults
                </Text>
                <Text sx={styles.boxWrapper.wrapperTop.headline}>
                  Pack a Parachute
                </Text>
                <Text sx={styles.boxWrapper.wrapperTop.headlineText}>
                  Platform: &nbsp;
                  <Link
                    sx={{
                      textDecorationLine: "underline",
                      color: "#18191F",
                    }}
                    href="/"
                  >
                    ApeSwap
                  </Link>
                  &nbsp;
                  <Link>
                    <Image src={Arrow}></Image>
                  </Link>
                </Text>
              </Box>
              <Grid
                id="grid-pricing"
                gap={6}
                sx={styles.grid}
                width={[128, null, 192]}
              >
                {data.map((item) => (
                  <PricingBox
                    key={item.id}
                    src={item.icon}
                    subtitle={item.subtitle}
                    title={item.title}
                    price={item.price}
                    option={item.option}
                    expired={item.expired}
                  />
                ))}
              </Grid>
              <Box
                sx={{
                  marginTop: [50, 50, 70],
                  marginBottom: [30, 30, 30],
                  textAlign: "center",
                }}
              >
                <Button sx={styles.moreBtn} bg="primary">
                  See More
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
      height: "120px",
      margin: "auto",
      width: "715px",
      rectagle2: {
        width: "10px",
        height: "10px",
        border: "1px solid #000000",
        boxSizing: "border-box",
        right: "123px",
        top: "31px",
        position: "absolute",
      },
      rectagleText: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "20px",
        textAlign: "center",
        fontFeatureSettings: "'salt' on, 'liga' off",
        color: "#000000",
        right: 0,
        top: "26px",
        position: "absolute",
      },
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
        position: "absolute",
        top: "34px",
        left: 0,
      },
      headlineText: {
        position: "absolute",
        right: "0",
        top: "64px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
  },
  rectagle: {
    position: "absolute",
    left: "calc(50% - 24px/2 + 97px)",
    top: "202.8px",
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
    fontSize: ["14px", "16px", "18px"],
  },
};
