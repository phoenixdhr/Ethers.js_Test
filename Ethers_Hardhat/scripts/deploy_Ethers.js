const { ethers } = require("hardhat");
const fs = require("fs")

const solidity = fs.readFileSync("./artifacts/contracts/token.sol/TokenBurnPausable.json", 'utf-8')

// Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
// Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/")


const wallet= new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",provider)

const contractFactory1 = ethers.ContractFactory.fromSolidity(solidity)




async function deployContarct () {

    const contracFactoryconnect = await contractFactory1.connect(wallet)
    const contratoToken = await contracFactoryconnect.deploy()
    contratoToken.deployed()

    const [signer1, signer2] = await ethers.getSigners()
    const [address1,address2] = [signer1.address, signer2.address] 

    console.log(address1);
    console.log();
    console.log("balance W1 Inicio => ", await contratoToken.balanceOf(address1));
    console.log("balance W2 Inicio => ", await contratoToken.balanceOf(address2));
    
    contratoToken.transfer(address2,50000)
    
    console.log("balance W1 Fin => ", await contratoToken.balanceOf(address1));
    console.log("balance W2 Fin=> ", await contratoToken.balanceOf(address2));
    
    // await contratoToken.balanceOf(address1)
    // await contratoToken.balanceOf(address2)

    console.log("address contrato =>", contratoToken.address);





}


deployContarct ()
    .then(()=>process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1)
    })