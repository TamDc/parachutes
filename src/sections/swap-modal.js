import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Flex, Box, Close, Input, Divider, Avatar } from "theme-ui";
import banana from "assets/pricing/banana.png";
import eth from "assets/pricing/eth.png";

const tokenList = [
  {
    id: 1,
    icon: banana,
    title: "Alpaca",
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
    id: 1,
    icon: banana,
    title: "Alpaca",
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
    id: 1,
    icon: banana,
    title: "Alpaca",
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
    id: 1,
    icon: banana,
    title: "Alpaca",
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
    id: 1,
    icon: banana,
    title: "Alpaca",
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
    id: 1,
    icon: banana,
    title: "Alpaca",
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
    id: 1,
    icon: banana,
    title: "Alpaca",
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
];

const Modal = ({ show, onClose, children: [], title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <Flex sx={styles.header}>
          <Box p={2} sx={styles.header.title}>
            {title}
          </Box>
          <Box p={2}>
            <Close onClick={handleCloseClick} sx={styles.header.icon} />
          </Box>
        </Flex>
        <Divider />
        <StyledModalBody>
          <Box id="searchBox" sx={styles.searchBox}>
            <Input placeholder="Search name or paste address" />
          </Box>
          <Box id="tokenList" sx={styles.tokenList}>
            {tokenList.map((item) => (
              <Box key={item.id} sx={styles.tokenList.tokenItem}>
                <Flex>
                  <Box sx={{ flex: "1 1 auto" }}>
                    <Flex>
                      <Box p={2} sx={styles.tokenList.avatar}>
                        <Avatar src={item.icon} />
                      </Box>
                      <Box p={2} sx={styles.tokenList.name}>
                        <Box sx={styles.tokenList.name.main}>{item.title}</Box>
                        <Box sx={styles.tokenList.name.sub}>
                          {item.subtitle}
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                  <Box sx={styles.tokenList.amount}>{item.amount}</Box>
                </Flex>
              </Box>
            ))}
          </Box>
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModal = styled.div`
  background: white;
  width: 450px;
  height: 600px;
  border-radius: 6px;
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
`;

const styles = {
  header: {
    paddingTop: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    title: {
      flex: "1 1 auto",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "18px",
      fontWeight: "700",
    },
    icon: {
      color: "#8C30F5",
      "&:hover": {
        cursor: "pointer",
        opacity: 0.5,
      },
    },
  },
  searchBox: {
    paddingBottom: "10px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  tokenList: {
    height: "400px",
    overflow: "auto",
    avatar: {},
    tokenItem: {
      "&:hover": {
        backgroundColor: "rgb(250, 249, 250)",
      },
      "&:focus": {
        backgroundColor: "rgb(250, 249, 250)",
      },
      paddingLeft: "13px",
      paddingRight: "13px",
    },
    name: {
      flex: "1 1 auto",
      main: {
        fontWeight: "bold",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: "16px",
        paddingBottom: "5px",
        textTransform: "uppercase",
      },
      sub: {
        color: "#A6A6A6",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: "16px",
      },
    },
    amount: {
      paddingTop: "20px",
      fontWeight: "700",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "16px",
    },
  },
};

export default Modal;
