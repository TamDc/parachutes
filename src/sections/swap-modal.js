import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Flex, Box, Close, Input, Divider, Avatar, Message } from "theme-ui";

const Modal = ({
  show,
  onClose,
  children,
  title,
  selectedToken,
  tokenList = [],
  selectToken,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [filterText, setFilter] = useState("");
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const changeToken = (id, e) => {
    e.preventDefault();
    selectToken(id);
    onClose();
  };

  const filterTokens = (e) => {
    setFilter(e.target.value);
  };
  const filtered = React.useMemo(() => {
    return tokenList.filter((token) => {
      return filterText.length > 0
        ? token.title.toLowerCase().includes(filterText.toLowerCase())
        : true;
    });
  }, [filterText, tokenList]);

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
            <Input
              placeholder="Search name or paste address"
              onChange={filterTokens}
              defaultValue={filterText}
            />
          </Box>
          <Box id="tokenList" sx={styles.tokenList}>
            {filtered && filtered.length > 0 ? (
              filtered.map((item) => (
                <Box
                  key={item.id}
                  sx={styles.tokenList.tokenItem}
                  className={`${selectedToken == item.id ? "active" : ""}`}
                >
                  <Flex onClick={(e) => changeToken(item.id, e)}>
                    <Box sx={{ flex: "1 1 auto" }}>
                      <Flex>
                        <Box p={2} sx={styles.tokenList.avatar}>
                          <Avatar src={item.icon} />
                        </Box>
                        <Box p={2} sx={styles.tokenList.name}>
                          <Box sx={styles.tokenList.name.main}>
                            {item.title}
                          </Box>
                          <Box sx={styles.tokenList.name.sub}>
                            {item.subtitle}
                          </Box>
                        </Box>
                      </Flex>
                    </Box>
                    <Box sx={styles.tokenList.amount}>{item.amount}</Box>
                  </Flex>
                </Box>
              ))
            ) : (
              <Message sx={styles.tokenList.message}>No results found.</Message>
            )}
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
      "&.active": {
        backgroundColor: "rgb(250, 249, 250)",
        opacity: 0.5,
        pointerEvents: "none",
      },
    },
    name: {
      flex: "1 1 auto",
      main: {
        fontWeight: "bold",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: "16px",
        paddingBottom: "5px",
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
    message: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSize: "18px",
      margin: "20px",
    },
  },
};

export default Modal;
