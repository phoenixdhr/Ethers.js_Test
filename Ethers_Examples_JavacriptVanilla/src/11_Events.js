const ethers =require('ethers')
require("dotenv").config()

const provider = new ethers.providers.JsonRpcProvider(process.env.API);

const addressContractLINK = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB"
const ABI_LINK =[
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
    "event Transfer(address indexed from, address indexed to, uint256 value)"
]

const daiContract = new ethers.Contract(addressContractLINK,ABI_LINK, provider)


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// Función que imprime un evento cuando ocurre cualquier tx de LINK
// Es similar a ver las ultimas tx en Etherscan
// https://goerli.etherscan.io/token/0x326c977e6efc84e512bb9c30f76e30c160ed06fb
daiContract.on("Transfer", (from, to, amount) => {
    console.log(`${ from } sent ${ ethers.utils.formatEther(amount) } to ${ to}`);
    // The event object contains the verbatim log data, the
    // EventFragment and functions to fetch the block,
    // transaction and receipt and event functions
});


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


// A filter for when a specific address receives tokens
const myAddress = "0x64604f15280eA4576Fc86CC8a5300635b32f3Ab0";
const filter = daiContract.filters.Transfer(null, null)
console.log(filter);
// {
//   address: 'dai.tokens.ethers.eth',
//   topics: [
//     '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
//     null,
//     '0x0000000000000000000000008ba1f109551bd432803012645ac136ddd64dba72'
//   ]
// }

// Se ejecuta una funcion cuando se activa un filtro de un evento
// Receive an event when that filter occurs
daiContract.on(filter, (from, to, amount) => {
    // The to will always be "address"
    console.log(`I got ${ ethers.utils.formatEther(amount) } from ${ from }.`);
});

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// Obtain the last block, then filter all the LINK transactions contained in the last 5 blocks.
async function main() {
    const block = await provider.getBlockNumber()
    const transferEvents = await daiContract.queryFilter('Transfer', block - 5, block)
    console.log(transferEvents)
    
}
main()


