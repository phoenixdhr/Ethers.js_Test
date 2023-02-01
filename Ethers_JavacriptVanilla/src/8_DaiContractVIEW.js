const ethers = require("ethers");

// Conexion con el proveedor de nodos
const provider = new ethers.providers.JsonRpcProvider(process.env.API);

// creacion de variables: Direccion del contrato DAI / Una address cualquiera para consultar su saldo en DAI
const AddressContractDAI = "0xE68104D83e647b7c1C15a91a8D8aAD21a51B3B3E";
const myaddress = "0xed6C0B634a8C5Cb78f6a59eC4992D4CB1E837180";

// Creando el ABI, a partir de las funciones que se usaran para el proyecto
// Estas funciones se extraen del mismo contrato o de la interface del contrato, eliminando los terminos: "override" o "virtual"
const ERC20_ABI = [
    'function name() public view returns (string memory) ',
    'function symbol() public view returns (string memory)',
    'function balanceOf(address account) public view returns (uint256)',
]

// Creando una Variable que hará uso de las funciones del contrato inteligente
const contract = new ethers.Contract(AddressContractDAI, ERC20_ABI, provider);

// Manipulacion del DOM 
const botonDainame = document.querySelector(".Dainame");

let nameDOM = document.getElementById("nameDOM")
let symbolDOM = document.getElementById("symbolDOM")
let balanceofDOM = document.getElementById("balanceofDOM")

async function readDatos() {
  const name = await contract.name();
  const symbol = await contract.symbol();

  const balanceOf = await contract.balanceOf(myaddress);
  const balanceOfFormat = ethers.utils.formatEther(balanceOf)

  nameDOM.innerHTML = name
  symbolDOM.innerHTML = symbol
  balanceofDOM.innerHTML =balanceOfFormat

  console.log(name);
  console.log(symbol);
  console.log(balanceOfFormat);
}

botonDainame.addEventListener("click", () => {
  readDatos();
});

