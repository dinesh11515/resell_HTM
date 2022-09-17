import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import Layout from "../Components/Layout/Layout";
import "../styles/globals.css";
const desiredChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}

export default MyApp;
