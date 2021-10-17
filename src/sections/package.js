/** @jsx jsx */
import { jsx, Container, Flex, Box, Heading } from "theme-ui";
import FunctitonCard from "components/card";
import SectionHeader from "components/section-header";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import PatternBG from "assets/patternBG.png";
import CheckIcon from "assets/check-icon.jpg";
import Secure from "assets/core-feature/secure.svg";

const data = {
  subTitle: "Core features",
  title: "Smart Jackpots that you may love this anytime & anywhere",
  features: [
    {
      id: 1,
      imgSrc: CheckIcon,
      altText: "Pack a parachute",
      title: "Pack a parachute",
      text: "Protect against a coin you are staking from going down in value. Earn APY without the fear your staked coin will drop 50% or more overnight. Fully collateralized and reliable.",
    },
    {
      id: 2,
      imgSrc: CheckIcon,
      altText: "Sell a parachute",
      title: "Sell a parachute",
      text: "Go long your favorite coin and get paid even if it goes down! If you sell a parachute for ETH down 40% and ETH goes down 39%, you get paid. Arbitrage opportunities and long exposure to crypto assets",
    },
  ],
};

export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <Box sx={{ variant: "sectionHeader" }}>
          <Heading
            as="h2"
            sx={{
              variant: "sectionHeader.title",
              color: "heading_secondary",
              textAlign: "start",
            }}
          >
            APYs aren't as advertised if the token you're staking skydives in
            value.
          </Heading>
        </Box>
        <Flex
          sx={{
            justifyContent: "center",
            flexWrap: ["wrap", null, null, "nowrap"],
          }}
        >
          {data.features.map((item) => (
            <FunctitonCard key={item.id} item={item} />
          ))}
        </Flex>
        <div sx={styles.circle} />
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    pt: ["50px", "100px", "120px"],
    pb: ["50px", "100px", "120px"],
    position: "relative",
  },
  title: {
    fontWeight: "800",
    fontSize: "48px",
    lineHeight: "64px",
  },
  circle: {
    display: ["none", null, "block"],
    position: "absolute",
    width: [null, null, "360px", "480px", "540px"],
    height: [null, null, "360px", "480px", "540px"],
    left: "65px",
    top: [null, null, "20px", "20px", "0"],
    zIndex: "-9999",
    background: "#F1E4FF",
    borderRadius: "50%",
  },
};
