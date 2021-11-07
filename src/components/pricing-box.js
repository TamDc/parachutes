import {
  Flex,
  Box,
  Text,
  Avatar,
  Heading,
  Radio,
  Label,
  Image,
} from "theme-ui";
import Vector from "assets/pricing/Vector.png";

export default function PricingBox({
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
      <Box id="box-pricing" sx={styles.boxPricing} bg="white">
        <Flex sx={styles.boxPricing.flex}>
          <Box
            p={2}
            sx={{
              borderRadius: "6px 0 0 0",
              minWidth: "68px",
              textAlign: "right",
            }}
          >
            {imgTag}
          </Box>
          <Box p={2} sx={{ flex: "1 1 auto", borderRadius: "0 6px 0 0" }}>
            <Box sx={styles.iconWrapper}>
              <Heading sx={styles.iconWrapper.title}>{title}</Heading>
              <Text sx={styles.iconWrapper.subTitle}>{subtitle}</Text>
            </Box>
          </Box>
        </Flex>
        <Box sx={styles.contentWrapper} bg="primary">
          <Box sx={{ height: "50px" }}></Box>
          <Flex sx={styles.contentWrapper.flex}>
            <Label
              sx={{
                flex: "1 1 auto",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "14px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              <Radio
                name="arrow"
                value="above"
                defaultChecked={option === "above"}
              />
              Above
            </Label>
            <Label
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "14px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              <Radio
                name="arrow"
                value="below"
                defaultChecked={option === "below"}
              />
              Below
            </Label>
          </Flex>
          <Text sx={styles.contentWrapper.text}>Expires: {expired}</Text>
          <Text sx={styles.contentWrapper.text}>
            Learn More <Image src={Vector}></Image>
          </Text>
        </Box>
        <Box sx={styles.polygonBg}>
          <Text sx={styles.polygonBg.text}>${price}</Text>
        </Box>
      </Box>
    </section>
  );
}

const styles = {
  boxPricing: {
    borderRadius: "6px",
    position: "relative",
    marginTop: "20px",
    width: ["205px", "205px", "205px", "205px", "218px"],
    flex: {
      minHeight: "114px",
    },
  },
  iconWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",

    title: {
      fontSize: [3, null, null, null, null, "18px"],
      color: "#000000",
      lineHeight: "32px",
      fontWeight: "bold",
      mb: ["3px", null, null, null, null, "3px"],
      fontFamily: "Inter",
    },

    subTitle: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "#A6A6A6",
      fontFamily: "Inter",
    },
  },
  contentWrapper: {
    borderRadius: "6px",
    flex: {
      padding: "7px 25px",
    },
    text: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "24px",
      color: "#FFFFFF",
      textAlign: "center",
      padding: "7px",
    },
  },
  polygonBg: {
    width: "100px",
    height: "100px",
    background: "#D5FAFC",
    /* Dark Shadow */
    boxShadow: "0px 10px 20px rgba(41, 41, 42, 0.07)",
    clipPath:
      "polygon(92.32051% 40%, 93.79385% 43.1596%, 94.69616% 46.52704%, 95% 50%, 94.69616% 53.47296%, 93.79385% 56.8404%, 92.32051% 60%, 79.82051% 81.65064%, 77.82089% 84.50639%, 75.35575% 86.97152%, 72.5% 88.97114%, 69.3404% 90.44449%, 65.97296% 91.34679%, 62.5% 91.65064%, 37.5% 91.65064%, 34.02704% 91.34679%, 30.6596% 90.44449%, 27.5% 88.97114%, 24.64425% 86.97152%, 22.17911% 84.50639%, 20.17949% 81.65064%, 7.67949% 60%, 6.20615% 56.8404%, 5.30384% 53.47296%, 5% 50%, 5.30384% 46.52704%, 6.20615% 43.1596%, 7.67949% 40%, 20.17949% 18.34936%, 22.17911% 15.49361%, 24.64425% 13.02848%, 27.5% 11.02886%, 30.6596% 9.55551%, 34.02704% 8.65321%, 37.5% 8.34936%, 62.5% 8.34936%, 65.97296% 8.65321%, 69.3404% 9.55551%, 72.5% 11.02886%, 75.35575% 13.02848%, 77.82089% 15.49361%, 79.82051% 18.34936%)",

    borderRadius: "16px",
    top: "66px",
    left: "27%",
    position: "absolute",
    text: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "32px",
      textAlign: "center",
      color: "#18191F",
      position: "absolute",
      top: "36px",
      left: "17%",
    },
  },
};
