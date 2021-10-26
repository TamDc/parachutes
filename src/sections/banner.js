/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Flex, Box, Heading, Text, Image, Button } from "theme-ui";
import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import BannerBG from "assets/bg_egg.svg";
import ParachutBlue from "assets/parachut_blue.svg";
import ParachutOrange from "assets/parachut_orange.svg";
import ParachutPink from "assets/parachut_pink.svg";
import ParachutGreen from "assets/parachut_green.svg";

import client1 from "assets/sponsor/paypal.svg";
import client2 from "assets/sponsor/google.svg";
import client3 from "assets/sponsor/dropbox.svg";
import Link from "next/link";
const data = [
  {
    id: 1,
    path: "#",
    image: client1,
    title: "paypal",
  },
  {
    id: 2,
    path: "#",
    image: client2,
    title: "google",
  },
  {
    id: 3,
    path: "#",
    image: client3,
    title: "dropbox",
  },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Don't forget to pack your parachute.
          </Heading>
          <Text as="p" variant="heroSecondary">
            We help people who are staking crypto in DeFI protect their
            downside. A better way to protect your stake is here.
          </Text>
          <Flex>
            <Link href="/ido">
              <Button variant="primary" aria-label="Get Started">
                Join IDO
              </Button>
            </Link>
            <>
              <Button
                variant="textButton"
                aria-label="Watch Video"
                onClick={handleClick}
              >
                <FaPlayCircle /> Watch Video
              </Button>
            </>
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image
            sx={{
              position: "absolute",
              top: "40px",
              left: "50px",
              width: "280px",
            }}
            src={ParachutBlue}
          />
          <Image
            sx={{
              position: "absolute",
              top: "-50px",
              left: "300px",
              width: "280px",
            }}
            src={ParachutOrange}
          />
          <Image
            sx={{
              position: "absolute",
              top: "350px",
              left: "40px",
              width: "200px",
            }}
            src={ParachutPink}
          />
          <Image
            sx={{
              position: "absolute",
              top: "300px",
              left: "230px",
              width: "380px",
            }}
            src={ParachutGreen}
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    // overflow: ["hidden", "initial", null, "hidden"],
    // backgroundImage: `url(${BannerBG})`,
    // backgroundRepeat: `no-repeat`,
    // backgroundPosition: "top left",
    // backgroundSize: "cover",
    pt: ["100px", null, null, null, null, null, "140px", "130px"],
    pb: ["50px", null, null, "110px", null, 10, "150px"],
    container: {
      display: "flex",
    },
    contentBox: {
      width: ["100%", null, "85%", "55%", "50%", "55%"],
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ["none", null, null, "block"],
      justifyContent: "center",
      ml: [0, null, null, "110px", "150px", "80px", "100px", "150px"],
      mr: [0, null, null, "-145px", "-160px", "-180px", "-220px", "-290px"],
      mt: [0, null, null, "-40px", "-65px", "-55px", "-45px"],
      mb: [0, null, null, null, "-45px", "-70px", "-70px", "-115px"],
      overflow: "hidden",
      textAlign: "right",
      width: "100%",
      backgroundColor: "#D6B1FF",
      borderBottomRightRadius: "350px",
      borderBottomLeftRadius: "350px",
      width: "610px",
      maxWidth: "50%",
      position: "relative",
    },
  },
  sponsorTitle: {
    color: "#18191F",
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ["35px", null, null, null, null, "45px"],
    flexDirection: ["column", null, "row"],
    sponsor: {
      display: "flex",
      alignItems: "center",
      "> a": {
        mr: [5, null, null, 4, 6],
        display: "flex",
        "&:last-of-type": {
          mr: 0,
        },
      },
    },
  },
};
