/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Link, Flex } from "theme-ui";

export default function Buy() {
  return (
    <section sx={styles.trade}>
      <Container>
        <Flex sx={{ flexDirection: ["column", "row", "row"] }}>
          <Box
            sx={{
              variant: "sectionHeader",
              marginBottom: "auto !important",

              marginTop: "auto",
            }}
          >
            <Heading
              as="h2"
              sx={{
                variant: "sectionHeader.title",
                color: "heading_secondary",
                textAlign: "start",
                width: "100%",
                color: "black",
                fontSize: ["20px", "24px", "24px"],
              }}
            >
              Buy a parachute for your single token exposures
            </Heading>
          </Box>
          <Link href="#" sx={styles.link}>
            Buy Now →
          </Link>
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  trade: {
    marginTop: "46px",
    marginBottom: ["50px", "100px", "183px"],
  },
  link: {
    minWidth: "200px",
    textDecoration: "none",
    marginBottom: "auto",
    marginTop: "auto",
    color: "primary",
    fontSize: ["20px", "20px", "24px"],
    fontWeight: "600",
    "&:hover": {
      textDecoration: "underline !important",
    },
  },
  line: {
    width: "100%",
    border: "1px solid #000",
    marginTop: "20px",
  },
};
