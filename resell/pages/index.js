import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
  return (
    <div className="bg-black">
        <ConnectWallet accentColor="#f213a4" colorMode="light" />
        
      </div>
  );
}
