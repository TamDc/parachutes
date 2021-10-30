import { Link } from "@theme-ui/components";
import { jsx, Container, Flex, Box, Text } from "theme-ui";

export default function IDO() {
  return (
    <section>
      <Container sx={styles.container}>
        <Flex sx={{ flexDirection: "column" }}>
          <Flex sx={{ flexDirection: ["column", "row"] }}>
            <Box sx={{ flex: 1, textAlign: "center" }}>
              <Box
                sx={{
                  height: 200,
                  width: 200,
                  borderRadius: "50%",
                  backgroundColor: "#F1E4FF",
                  marginRight: "auto",
                  marginLeft: "auto",
                  position: "relative",
                }}
              >
                <Text
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: 800,
                    fontSize: "40px",
                    lineHeight: "54px",
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                    top: "50%",
                    left: "50%",
                  }}
                >
                  PARAeth
                </Text>
              </Box>
            </Box>
            <Box sx={{ flex: 3, position: "relative" }}>
              <Text
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "40px",
                  lineHeight: "54px",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  top: "50%",
                  left: "50%",
                  width: "100%",
                  paddingLeft: "20px",
                  marginTop: [50, 0, 0],
                }}
              >
                ETH parachute below (USDT)
              </Text>
            </Box>
          </Flex>

          <Flex
            sx={{
              marginTop: 70,
              flexDirection: ["column", "row"],
            }}
          >
            <Box sx={styles.linkWrapper}>
              <Link href="#" sx={styles.link}>
                Overview →
              </Link>
              <Link href="/pricing" sx={styles.link}>
                Buy Parachutes →
              </Link>
            </Box>
            <Box sx={{ flex: 3 }}>
              <Box sx={styles.paragraph1}>
                <h5>Why consider PARAeth?</h5>
                <ul>
                  <li>
                    Parachutes provide downside protection on the underlying
                    instrument with which stakers are generating APY. Via binary
                    options, Parachutes creates different price levels below
                    which Stakers will be protected
                  </li>
                  <li>
                    Parachutes works via an AMM mechanism that is fully
                    decentralized, removing counterparty and custodial risk, as
                    well removing having to worry about liquidity problems
                  </li>
                  <li>
                    Parachutes provides a framework to use binary options as a
                    simple and liquid mechanism to hedge impermanent loss for
                    liquidity providers.
                  </li>
                </ul>
              </Box>
              <Box sx={styles.paragraph2}>
                <h5>OBJECTIVE</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </Box>
            </Box>
          </Flex>

          <Flex
            sx={{ marginTop: [50, 50, 70], flexDirection: ["column", "row"] }}
          >
            <Box sx={styles.pricing}>
              <span>Percentage of tokens hedged</span>
            </Box>
            <Box sx={styles.table}>
              <h1>Number of tokens to hedge _____</h1>
              <p>Percentage price movement</p>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>25%</th>
                    <th>50%</th>
                    <th>75%</th>
                    <th>100%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>60%</th>
                    <td>$XX</td>
                    <td>$XX</td>
                    <td>$XX</td>
                    <td>$XX</td>
                  </tr>
                  <tr>
                    <th>80%</th>
                    <td>$XX</td>
                    <td>$XX</td>
                    <td>$XX</td>
                    <td>$XX</td>
                  </tr>
                  <tr>
                    <th>100%</th>
                    <td>$XX</td>
                    <td>$XX</td>
                    <td>$XX</td>
                    <td>$XX</td>
                  </tr>
                  <tr>
                    <th>120%</th>
                    <td>$XX</td>
                    <td>$XX</td>
                    <td>$XX</td>
                    <td>$XX</td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  container: {
    paddingTop: "110px",
  },
  linkWrapper: {
    marginBottom: [30, 0, 0],
    flex: 1,
    "& > a": {
      display: "block",
      marginRight: [0, 30, 70],
      textAlign: "end",
      marginTop: 30,
      color: "#8C30F5",
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "32px",
      textDecoration: "none",
    },
  },
  paragraph1: {
    backgroundColor: "#8C30F5",
    p: [20, 25, 30],
    "& > h5": {
      color: "white",
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "32px",
      margin: 0,
    },
    "& li": {
      color: "white",
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
      margin: 0,
    },
  },
  paragraph2: {
    backgroundColor: "#F1E4FF",
    p: [20, 25, 30],
    "& > h5": {
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "32px",
      margin: 0,
    },
    "& p": {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
      margin: 0,
    },
  },

  pricing: {
    flex: 1,
    position: "relative",
    "& > span": {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "30px",
      fontStyle: "italic",
      position: ["relative", "absolute", "absolute"],
      top: "30%",
      width: "30%",
      right: [0, "50px", "50px"],
      textAlign: "center",
    },
  },
  table: {
    marginBottom: ["50px", "70px", "100px"],
    flex: 3,
    "& table": {
      border: "1px solid #F1E4FF",
      borderCollapse: "collapse",
    },
    "& th": {
      border: "1px solid #F1E4FF",
      backgroundColor: "#F1E4FF",
      borderCollapse: "collapse",
      height: "50px",
      width: "100px",
    },
    "& td": {
      border: "1px solid #F1E4FF",
      borderCollapse: "collapse",
      height: "50px",
      textAlign: "center",
    },
  },
};
