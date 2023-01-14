// import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.esm.js";

const ethers = require("ethers");

// require('dotenv').config()
// import * as dotenv from 'https://unpkg.com/dotenv@9.0.2/lib/main.js' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()

const boton = document.getElementById("boton7");

boton.addEventListener("click", async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/fed75129378b4181b5cbb6b24066dd16");

  const wallet = ethers.Wallet.fromMnemonic(process.env.KEY);

  const signer = wallet.connect(provider);

  const tx = await signer.sendTransaction({
    to: "0xed6C0B634a8C5Cb78f6a59eC4992D4CB1E837180",
    value: ethers.utils.parseEther("0.01"),
  });

  console.log(tx);
});
