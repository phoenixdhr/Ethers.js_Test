const ethers = require("ethers");
const fs = require('fs');
require("dotenv").config()


const jsonString = fs.readFileSync("./tokenTitan.json", 'utf-8');
// console.log(jsonString);

const provider = new ethers.providers.JsonRpcProvider(process.env.API);

const walletSeed = ethers.Wallet.fromMnemonic(process.env.KEY);


const wallet = walletSeed.connect(provider);

const contractFactory1 = ethers.ContractFactory.fromSolidity(jsonString)
// console.log("contractFactory=>",contractFactory);   

async function main() {
    
    const contractFactory2 = contractFactory1.connect( wallet )
    const contactDeployed = await contractFactory2.deploy("TitanPE","TNT")
     
    contactDeployed.deployed()
    const tx = await contactDeployed.deployTransaction.wait()


    console.log("address del contrato desplegado => ", contactDeployed.address);
    console.log("TRANSACCION ====>",tx)


}


main()