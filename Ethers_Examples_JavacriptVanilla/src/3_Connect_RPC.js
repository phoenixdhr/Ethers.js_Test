// import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.esm.js";

const ethers = require("ethers")

const boton = document.getElementById("boton3");

boton.addEventListener("click", ()=>{

    const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/fed75129378b4181b5cbb6b24066dd16")
    
    const signer = provider.getSigner()

    console.log(signer)

})