const ethers = require("ethers")
require("dotenv").config()


const provider = new ethers.providers.JsonRpcProvider(process.env.API);

const account1 = "0x64604f15280eA4576Fc86CC8a5300635b32f3Ab0"
const account2 = "0xed6C0B634a8C5Cb78f6a59eC4992D4CB1E837180"


const walletSEED = ethers.Wallet.fromMnemonic(process.env.KEY);

const wallet = walletSEED.connect(provider)
// const wallet = new ethers.Wallet(process.env.KEY,provider)


const ABI_LINK = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
]

const addressContracLINK ="0x326C977E6efc84E512bB9C30f76E30c160eD06FB"
const contract = new ethers.Contract(addressContracLINK,ABI_LINK,provider);
const contractWithWallet = contract.connect(wallet);

console.log("la direccion del contrato es => ",contract.address);



async function main (){
    
    const balanceSender1 = await contract.balanceOf(account1)
    const balanceOfReciever1 = await contract.balanceOf(account2)
   
    console.log(`\nReading from ${account1}\n`)
    console.log(`Balance of sender 1: ${balanceSender1}\n`)
    console.log(`Balance of reciever 1: ${balanceOfReciever1}\n`)

    const value = ethers.utils.parseEther("0.1")

    const tx = await contractWithWallet.transfer(account2,value)
    await tx.wait()

    console.log(tx)

    const balanceOfSender2 = await contract.balanceOf(account1)
    const balanceOfReciever2 = await contract.balanceOf(account2)

    console.log(`\nBalance of sender2: ${balanceOfSender2}`)
    console.log(`Balance of reciever2: ${balanceOfReciever2}\n`)
}
main()

