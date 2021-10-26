import { ThemeProvider } from "@theme-ui/core";
import Layout from "components/layout";
import SEO from "components/seo";
import { StickyProvider } from "contexts/app/app.provider";
import IDO from "sections/ido";
import theme from "theme";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="PARACHUTES" />
          <IDO />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
