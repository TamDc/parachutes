import { Grid, Box, Text, Avatar, Flex, Image } from "theme-ui";
import Arrow from "assets/swap/ArrowBottom.png";
import Eth from "assets/swap/Eth.png";
import Modal from "./swap-modal";
import banana from "assets/pricing/banana.png";
import eth from "assets/pricing/eth.png";

const tokenList = [
  {
    id: 1,
    icon: banana,
    title: "ALPACA",
    subtitle: "Alpaca",
    amount: 0.3214,
  },
  {
    id: 2,
    icon: eth,
    title: "USDT",
    subtitle: "Tether USD",
    amount: 0,
  },
  {
    id: 3,
    icon: banana,
    title: "ALPACA",
    subtitle: "Alpaca",
    amount: 0.3214,
  },
  {
    id: 4,
    icon: eth,
    title: "USDT",
    subtitle: "Tether USD",
    amount: 0,
  },
  {
    id: 14,
    icon: banana,
    title: "ALPACA",
    subtitle: "Alpaca",
    amount: 0.3214,
  },
  {
    id: 5,
    icon: eth,
    title: "USDT",
    subtitle: "Tether USD",
    amount: 0,
  },
  {
    id: 6,
    icon: banana,
    title: "ALPACA",
    subtitle: "Alpaca",
    amount: 0.3214,
  },
  {
    id: 7,
    icon: eth,
    title: "USDT",
    subtitle: "Tether USD",
    amount: 0,
  },
  {
    id: 8,
    icon: banana,
    title: "ALPACA",
    subtitle: "Alpaca",
    amount: 0.3214,
  },
  {
    id: 9,
    icon: eth,
    title: "USDT",
    subtitle: "Tether USD",
    amount: 0,
  },
  {
    id: 10,
    icon: banana,
    title: "ALPACA",
    subtitle: "Alpaca",
    amount: 0.3214,
  },
  {
    id: 11,
    icon: eth,
    title: "USDT",
    subtitle: "Tether USD",
    amount: 0,
  },
  {
    id: 12,
    icon: banana,
    title: "Alpaca",
    subtitle: "Alpaca",
    amount: 0.3214,
  },
  {
    id: 13,
    icon: eth,
    title: "USDT",
    subtitle: "Tether USD",
    amount: 0,
  },
];

export default function SwapBoxReceive() {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedToken, setSelectedToken] = React.useState("");
  const foundToken = tokenList.find((e) => e.id == selectedToken)
    ? tokenList.find((e) => e.id == selectedToken)
    : null;
  return (
    <section>
      <Box id="box-swap" sx={styles.boxSwap} bg="white">
        <Box sx={styles.boxSwap.header}>
          <Box>
            <Text sx={styles.boxSwap.header.left}>Receive</Text>
          </Box>
        </Box>
        <Box id="boxSwapContent" sx={styles.boxSwap.content}>
          <Flex>
            <Box
              sx={{
                flex: "0 0 13em",
                borderRight: "1px solid #F1E4FF",
                padding: "12px 0",
              }}
            >
              {foundToken ? (
                <Flex
                  onClick={() => setShowModal(true)}
                  sx={styles.boxSwap.content.flex}
                >
                  <Box sx={{ flex: "0 0 4em", textAlign: "right" }}>
                    <Image src={foundToken.icon}></Image>
                  </Box>
                  <Box sx={{ flex: "0 0 6em" }}>
                    <Text sx={styles.boxSwap.content.col}>
                      &nbsp;{foundToken.title}
                    </Text>
                  </Box>
                  <Box p={2} sx={{ flex: "1", textAlign: "right" }}>
                    <Image src={Arrow}></Image>
                  </Box>
                </Flex>
              ) : (
                <Flex
                  onClick={() => setShowModal(true)}
                  sx={styles.boxSwap.content.flex}
                >
                  <Box
                    p={2}
                    sx={{
                      textAlign: "right",
                      fontFamily: "Inter",
                      fontSize: "18px",
                    }}
                  >
                    Select a currency
                  </Box>
                  <Box p={2} sx={{ flex: "1 1 auto", textAlign: "right" }}>
                    <Image src={Arrow}></Image>
                  </Box>
                </Flex>
              )}
            </Box>
            <Box p={2} sx={{ flex: "1", paddingTop: "16px" }}></Box>
            <Box p={2} sx={{ flex: "0 0 150px", position: "relative" }}>
              <Text sx={styles.boxSwap.content.col3}>Price impact: ___%</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        title="Select a Token"
        selectedToken={selectedToken}
        tokenList={tokenList}
        selectToken={(id) => setSelectedToken(id)}
      >
        Hello from the modal!
      </Modal>
    </section>
  );
}

const styles = {
  boxSwap: {
    borderRadius: [15, null, 23, null, null, "6px"],
    position: "relative",
    marginTop: "20px",
    content: {
      padding: 0,
      col: {
        fontFamily: "Inter",
        fontWeight: "bold",
        fontStyle: "normal",
        fontSize: "18px",
        textAlign: "left",
        padding: "0.5em 0",
      },
      col2: {
        color: "#A6A6A6",
        fontSize: "18px",
        fontFamily: "Inter",
        height: "30px",
        borderRadius: 0,
        border: 0,
      },
      col3: {
        color: "#A6A6A6",
        fontSize: "14px",
        fontFamily: "Inter",
        position: "absolute",
        bottom: "8px",
        right: "8px",
      },
      flex: {
        "&:focus": {
          opacity: 0.5,
          cursor: "pointer",
        },
        "&:hover": {
          opacity: 0.5,
          cursor: "pointer",
        },
      },
    },
    header: {
      borderBottom: "1px solid #F1E4FF",
      padding: "12px 10px",
      left: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: "18px",
        color: "#000000",
      },
      right: {
        textAlign: "right",
        label1: {
          flex: "1 1 auto",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "18px",
          textAlign: "center",
        },
        label2: {
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "18px",
          textAlign: "center",
        },
      },
    },
  },
};
