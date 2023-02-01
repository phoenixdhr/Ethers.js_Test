const ethers =require('ethers')

import { Web3Auth } from "@web3auth/modal";

//Initialize within your constructor
const web3auth = new Web3Auth({
  clientId: "BDVL0rc4vRn3cYtTCh6dQjuUBueTjCi9eZZHbaEDe42XJccF4gdFJK1LibOcnRHM8_b3SLb0reHC-GApV_aMf3I", // Get your Client ID from Web3Auth Dashboard
  chainConfig: {
    chainNamespace: "eip155",
    chainId: "0x1",
  },
});

await web3auth.initModal();