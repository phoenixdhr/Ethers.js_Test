const ethers = require("ethers")
const keccak256 = require("keccak256")
import { Buffer } from 'buffer';

import "./1_Connect_Metamask"

const boton14 = document.getElementById("boton14");
const input14 = document.getElementById("mensaje")
let hash14=document.getElementById("hash14")

boton14.addEventListener("click", async () => {

//   // SE CONFIGURA EL PROVEEDOR DE NODO, EN ESTE CASO METAMASK
  const provider = new ethers.providers.Web3Provider(window.ethereum);

//   // LOGING CON METAMASK
//   const metamaskx = await provider.send("eth_requestAccounts", []);

//   // SE OBTIENE EL FIRMANTE COMO OBJETO
  const signer =  provider.getSigner();


    // SE OBTIENE EL HASH DEL MENSAJE
    const hash_msg= keccak256(input14.value)
    console.log(hash_msg);

    // SE OBTIENE LA FIRMA DEL MENSAJE HASHEADO
    const sing = await signer.signMessage(hash_msg)
    console.log(sing);
    hash14.innerHTML=sing


});

window.Buffer = Buffer;
