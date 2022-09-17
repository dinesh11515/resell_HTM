import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import "../styles/globals.css";
const desiredChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
