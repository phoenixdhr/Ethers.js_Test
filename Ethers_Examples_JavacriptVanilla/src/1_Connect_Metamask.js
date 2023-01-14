// import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.esm.js";

const ethers = require("ethers")

const boton = document.getElementById("boton1");

boton.addEventListener("click", async () => {

  // SE CONFIGURA EL PROVEEDOR DE NODO, EN ESTE CASO METAMASK
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // LOGING CON METAMASK
  await provider.send("eth_requestAccounts", []);

  // SE OBTIENE EL FIRMANTE COMO OBJETO
  const signer =  provider.getSigner();
  // SE OBTIENE LA DIRECCION QUE ESTA CONECTADA
  const address = await signer.getAddress()

  console.log("signer => ", signer);
  console.log("address => ", address );
  console.log("provider => ", provider);

});