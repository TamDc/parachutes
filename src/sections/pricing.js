// import { Link } from "@theme-ui/components";
import { Container, Flex, Box, Text, Button, Grid, Image } from "theme-ui";
import PricingBox from "components/pricing-box";
import Arrow from "assets/pricing/arrowbottom.png";
import banana from "assets/pricing/banana.png";
import eth from "assets/pricing/eth.png";
import rectangle168 from "assets/pricing/Rectangle_168.png";
import Link from "next/link";

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
    <section style={{ minHeight: "calc(100vh - 57px)" }}>
      <Container sx={styles.container}>
        <Flex sx={{ flexDirection: "column" }}>
          <Flex sx={{ flexDirection: ["row"] }}>
            <Box sx={{ flex: 1, textAlign: "center" }}>
              <Link href="/swap">
                <Button sx={styles.linkWhite}>Trade</Button>
              </Link>
              <Link href="/pricing">
                <Button sx={styles.linkPrimary}>Pack a Parachute</Button>
              </Link>
            </Box>
          </Flex>

          <Flex
            sx={{
              margin: ["50px 0", "50px 0", "50px 0 0 0"],
              flexDirection: ["row"],
            }}
          >
            <Box id="rectagle" sx={styles.rectagle}></Box>
            <Box
              id="box-wrapper"
              sx={styles.boxWrapper}
              p={[4, 10, 30, 30, 50]}
            >
              <Box id="box-wrapper-top" sx={styles.boxWrapper.wrapperTop}>
                <Grid columns={[1, 2, 2]}>
                  <Box>
                    <Text sx={styles.boxWrapper.wrapperTop.headline}>
                      Pack a Parachute
                    </Text>
                  </Box>
                  <Box sx={{ textAlign: "right" }}>
                    <Text sx={styles.boxWrapper.wrapperTop.rectagleText}>
                      <Image src={rectangle168}></Image>
                      &nbsp; Deposited Vaults
                    </Text>

                    <Text sx={styles.boxWrapper.wrapperTop.headlineText}>
                      Platform: &nbsp;
                      <Link
                        sx={{
                          textDecorationLine: "underline",
                          color: "#18191F",
                        }}
                        href="#"
                      >
                        ApeSwap
                      </Link>
                      &nbsp;
                      <Link href="#">
                        <Image src={Arrow}></Image>
                      </Link>
                    </Text>
                  </Box>
                </Grid>
              </Box>
              <Grid
                id="grid-pricing"
                gap={[1, 1, 1, 2, 6]}
                sx={styles.grid}
                columns={[1, 2, 2, 3]}
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
  linkPrimary: {
    padding: "20px",
    backgroundColor: "#8C30F5",
    border: "1px solid #8C30F5",
    color: "#ffffff",
    padding: ["14px 25px", "14px 25px", "14px 25px", "14px 40px"],
    borderRadius: "6px",
    zIndex: 99,
    position: "relative",
    textDecoration: "none",
    fontFamily: "Inter",
    fontSize: ["14px", "16px", "14px"],
    marginLeft: "-18px",
  },
  linkWhite: {
    padding: "20px",
    backgroundColor: "#ffffff",
    border: "1px solid #8C30F5",
    color: "#8C30F5",
    padding: ["14px 60px", "14px 60px", "14px 60px", "14px 80px"],
    borderRadius: "6px",
    zIndex: 1,
    position: "relative",
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
      paddingBottom: "40px",
      rectagleText: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "20px",
        fontFeatureSettings: "'salt' on, 'liga' off",
        color: "#000000",
        marginBottom: "20px",
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
      },
      headlineText: {
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
    top: "174.8px",
    width: "24px",
    height: "14.8px",
    background: "#F1E4FF",
    clipPath: "polygon(50% 0%, 0 100%, 100% 100%)",
  },
  grid: {
    mx: "auto",
    "@media screen and (max-width:414px)": {
      width: "205px",
    },
  },
  moreBtn: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: ["14px", "16px", "18px"],
  },
};
