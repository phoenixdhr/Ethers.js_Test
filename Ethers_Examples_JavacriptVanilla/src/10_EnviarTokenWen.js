// const addressDOM =document.getElementById("address")
// const botonDOM =document.querySelector("#Daitransfer")
// botonDOM.addEventListener("click", ()=>console.log(addressDOM.value) )

const ethers = require("ethers")

const provider = new ethers.providers.JsonRpcProvider(process.env.API)
const walletSEED = ethers.Wallet.fromMnemonic(process.env.KEY)
const wallet = walletSEED.connect(provider)

const addressContractLINK = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB"
const ABI_LINK =[
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
]

const contract = new ethers.Contract(addressContractLINK,ABI_LINK,provider)
const contracWithWallet = contract.connect(wallet)


const addressDOM =document.getElementById("address")
const valueDOM =document.getElementById("value")

const botonDOM =document.querySelector("#Daitransfer")

const address1 = "0x64604f15280eA4576Fc86CC8a5300635b32f3Ab0"


botonDOM.addEventListener("click", ()=>{transferLink()})


async function transferLink() {

    console.log(`Balance Inicial de address 1 es ${await contract.balanceOf(address1)}`);
    console.log(`Balance Inicial de address 2 es ${await contract.balanceOf(addressDOM.value)}`);

    tx = await contracWithWallet.transfer(addressDOM.value,ethers.utils.parseEther(valueDOM.value))
    
    await tx.wait()
    console.log(tx);

    console.log(`Balance Final de address 1 es ${await contract.balanceOf(address1)}`);
    console.log(`Balance Final de address 2 es ${await contract.balanceOf(addressDOM.value)}`);

}