const ethers = require("ethers");
require("dotenv").config()

const provider = new ethers.providers.JsonRpcProvider(process.env.API);

const walletSeed = ethers.Wallet.fromMnemonic(process.env.KEY);
const walletSeed1 = ethers.Wallet.fromMnemonic(process.env.KEY,"m/44'/60'/0'/0/2");

const wallet = walletSeed.connect(provider);
const wallet1 = walletSeed1.connect(provider);

console.log(walletSeed.address);
console.log(walletSeed1.address);

const abi= [
    'function name() public view returns (string memory) ',
    'function symbol() public view returns (string memory)',
    'function balanceOf(address account) public view returns (uint256)',
]

const addressContrato ="0x99D496F10d174Aa0EaF90504D78bd2D79684Da8B"

const contrato = new ethers.Contract(addressContrato, abi, provider)


async function main() {
    const namec = await contrato.name()
    const symbolc = await contrato.symbol()
    console.log(namec);
    console.log(symbolc);

}

main()


// address del contrato desplegado del outputSolidity =>  0x99D496F10d174Aa0EaF90504D78bd2D79684Da8B
// address del contrato desplegado del outputSolidity =>  0xDb0374652121d1072DF8b91c69C0136Df9bD11B9

