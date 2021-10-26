/** @jsx jsx */
import { jsx, Heading, Box, Container, Text, Flex, Link } from "theme-ui";
import Image from "components/image";
import Insta from "assets/social_insta.svg";
import Tele from "assets/social_tele.svg";
import Twitter from "assets/social_twitter.svg";
import Youtube from "assets/social_youtube.svg";

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: ["column", "row", "row"],
        }}
      >
        <Text sx={styles.footer.copyright}>
          © 2021 Parachutes. All rights reserved
        </Text>
        <Text sx={styles.footer.brand}>PARACHUTES</Text>
        <Box sx={styles.footer.socials}>
          <Link href="#">
            <Image src={Insta} alt="instagram" />
          </Link>
          <Link href="#">
            <Image src={Tele} alt="telegram" />
          </Link>
          <Link href="#">
            <Image src={Twitter} alt="twitter" />
          </Link>
          <Link href="#">
            <Image src={Youtube} alt="youtube" />
          </Link>
        </Box>
      </Flex>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#18191F",
    "& > div > div": {
      width: ["100%", "33.3%", "33.3%"],
    },
    brand: {
      fontFamily: "Montserrat Alternates",
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "20px",
      color: "#fff",
      textAlign: "center",
      letterSpacing: "6px",
    },
    copyright: {
      fontSize: ["14px", null, 1],
      textAlign: "center",
      p: ["20px 20px"],
      backgroundColor: "#18191F",
      color: "#D9DBE1",
    },
    socials: {
      textAlign: "center",
      marginTop: ["20px", 0, 0],
      a: {
        marginLeft: "5px",
        cursor: "pointer",
      },
    },
  },
};
