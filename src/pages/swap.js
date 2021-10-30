import { ThemeProvider } from "@theme-ui/core";
import Layout from "components/layout";
import SEO from "components/seo";
import { StickyProvider } from "contexts/app/app.provider";
import Swap from "sections/swap";
import theme from "theme";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="PARACHUTES" />
          <Swap />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
