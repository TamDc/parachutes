import { useEffect } from "react";
import Router from "next/router";
import { initGA, logPageView } from "analytics";
// Load Font typeface
// import "typeface-dm-sans";
import "typeface-montserrat";
import "typeface-montserrat-alternates";

// Load other package css file
import "react-multi-carousel/lib/styles.css";
import "react-modal-video/css/modal-video.min.css";
import "rc-drawer/assets/index.css";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);

  return <Component {...pageProps} />;
}
