import {
  Grid,
  Box,
  Text,
  Avatar,
  Flex,
  Radio,
  Label,
  Image,
  Input,
} from "theme-ui";
import Send from "assets/swap/Send.png";
import Arrow from "assets/swap/ArrowBottom.png";
import Eth from "assets/swap/Eth.png";

export default function SwapBoxReceive({
  src,
  title,
  subtitle,
  option = "above",
  price,
  expired,
}) {
  let imgTag;
  if (src) {
    imgTag = <Avatar src={src} />;
  }
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
              <Flex>
                <Box sx={{ flex: "0 0 4em", textAlign: "right" }}>
                  <Image src={Eth}></Image>
                </Box>
                <Box sx={{ flex: "0 0 6em" }}>
                  <Text sx={styles.boxSwap.content.col}>&nbsp;ParaEthAbv</Text>
                </Box>
                <Box p={2} sx={{ flex: "1", textAlign: "right" }}>
                  <Image src={Arrow}></Image>
                </Box>
              </Flex>
            </Box>
            <Box p={2} sx={{ flex: "1", paddingTop: "16px" }}></Box>
            <Box p={2} sx={{ flex: "0 0 150px", position: "relative" }}>
              <Text sx={styles.boxSwap.content.col3}>Price impact: ___%</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
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
