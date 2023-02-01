const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();

const jsonString = fs.readFileSync("./tokenTitan.json", "utf-8");
// console.log(jsonString);

const provider = new ethers.providers.JsonRpcProvider(process.env.API);

const walletSeed = ethers.Wallet.fromMnemonic(process.env.KEY);

const wallet = walletSeed.connect(provider);

const contractFactory1 = ethers.ContractFactory.fromSolidity(jsonString);

async function main() {
    
  const contractFactory2 = contractFactory1
    .attach("0x0354b02eD93BDf0c0E6D452f06700D3ec01d55Fc")
    .connect(wallet);

  console.log(contractFactory2.address);

  const name = await contractFactory2.name();
  console.log(name);

  console.log("address del contrato => ", contractFactory2.address);
}

main();
