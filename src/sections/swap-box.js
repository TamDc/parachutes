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

import Modal from "./swap-modal";

export default function SwapBox({
  src,
  title,
  subtitle,
  option = "above",
  price,
  expired,
}) {
  if (src) {
    imgTag = <Avatar src={src} />;
  }
  const [showModal, setShowModal] = React.useState(false);
  return (
    <section>
      <Box id="box-swap" sx={styles.boxSwap} bg="white">
        <Box sx={styles.boxSwap.header}>
          <Grid gap={10} columns={[2, null, 2]}>
            <Box>
              <Text sx={styles.boxSwap.header.left}>Send</Text>
            </Box>
            <Box sx={styles.boxSwap.header.right}>
              <Flex>
                <Label sx={styles.boxSwap.header.right.label1}>
                  <Radio
                    name="arrow"
                    value="above"
                    defaultChecked={option === "above"}
                  />
                  Token
                </Label>
                <Label sx={styles.boxSwap.header.right.label2}>
                  <Radio
                    name="arrow"
                    value="below"
                    defaultChecked={option === "below"}
                  />
                  Parachute
                </Label>
              </Flex>
            </Box>
          </Grid>
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
              <Flex
                sx={styles.boxSwap.content.flex}
                onClick={() => setShowModal(true)}
              >
                <Box sx={{ flex: "0 0 4em", textAlign: "right" }}>
                  <Image src={Send}></Image>
                </Box>
                <Box sx={{ flex: "0 0 6em" }}>
                  <Text sx={styles.boxSwap.content.col}>&nbsp;USDT</Text>
                </Box>
                <Box p={2} sx={{ flex: "1", textAlign: "right" }}>
                  <Image src={Arrow}></Image>
                </Box>
              </Flex>
            </Box>
            <Box p={2} sx={{ flex: "1", paddingTop: "16px" }}>
              <Input
                sx={styles.boxSwap.content.col2}
                placeholder="Enter Amount"
              />
            </Box>
            <Box p={2} sx={{ flex: "0 0 150px", position: "relative" }}>
              <Text sx={styles.boxSwap.content.col3}>Balance: ____</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        title="Select a Token"
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
