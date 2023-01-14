// import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.esm.js";

const ethers = require("ethers")

const boton = document.getElementById("boton5");

boton.addEventListener("click", async () => {
  
  // Creamos el proveedor de nodos, en este caso metamasks
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // Nos logeamos con metamask, es una promesa que espera a que nos conectemos con metamask
  await provider.send("eth_requestAccounts", []);

  //Obtenemos el firmante, en este caso la address con la que se conecto metamask
  const signer = provider.getSigner();
  
  // La tx es una promesa, y se debe esperar a que se retornen los datos de la tx 
  const tx = await signer.sendTransaction({to:"0xed6C0B634a8C5Cb78f6a59eC4992D4CB1E837180", 
                                    value: ethers.utils.parseEther("0.01")})
  
  console.log(tx);
  
});
