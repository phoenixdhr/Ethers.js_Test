// import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.esm.js";

const ethers = require("ethers")

const boton = document.getElementById("boton6");

boton.addEventListener("click", async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/fed75129378b4181b5cbb6b24066dd16")

  const priKey = 'gentle tomorrow company lion steel spread joke library wall section panel setup'

    //Se crea una wallet, con metamask, esto no es necesario porq ue metamask es la wallet
  const wallet = ethers.Wallet.fromMnemonic(priKey);

    //Se crea el firmante a partir de la wallet, con metamask el signer se crea de forma diferente
  const signer = wallet.connect(provider)
  
  const tx= await signer.sendTransaction({to:"0xed6C0B634a8C5Cb78f6a59eC4992D4CB1E837180", 
                                   value: ethers.utils.parseEther("0.01")})

  console.log("Transaccion => ",tx);


});
