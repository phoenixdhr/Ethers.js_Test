// import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.esm.js";

const ethers = require("ethers")

const boton = document.getElementById("boton4");

boton.addEventListener("click", async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://goerli.infura.io/v3/fed75129378b4181b5cbb6b24066dd16"
  );

    // Se obtiene el último numero de bloque
  const lBlock = await provider.getBlockNumber();
  console.log(lBlock);

    // Se obtiene el balance de eth de una cuenta, en hexadecima 0x
  const balance = await provider.getBalance('ethers.eth')
  console.log(balance)
  console.log(balance._hex)

    // Se tranforma el json (balance) se transforma a un formato decimal
  const balanceETH = ethers.utils.formatEther(balance)
    console.log(balanceETH);
    // se transforma un numero decimal a formato json, el numero debe enviarse como string
    const numberjson = ethers.utils.parseEther('1.0')
    console.log(numberjson);

});
