const ethers = require("ethers");
require("dotenv").config()

const provider = new ethers.providers.JsonRpcProvider(process.env.API);

const walletSeed = ethers.Wallet.fromMnemonic(process.env.KEY);

const wallet = walletSeed.connect(provider);

const abi= [
    'function name() public view returns (string memory) ',
    'function symbol() public view returns (string memory)',
    'function balanceOf(address account) public view returns (uint256)',
]

const addressContrato ="0x56e4b7aD48C0B7d1089920fEC928fF994AA6Bde8"

const contrato = new ethers.Contract(addressContrato, abi, provider)


async function main() {
    const namec = await contrato.name()
    const symbolc = await contrato.symbol()
    console.log(namec);
    console.log(symbolc);
}

main()


// address del contrato desplegado bytecode =>  0x31893e2F590B6D646bA686C5bCC204d6Ff29D793
// address del contrato desplegado bytecode modificado =>  0xbB9451C6258829A9897BC6046BDB3478ED0Dc73c
// address del contrato desplegado con bytecode =>  0x22Fe02d20628d957aC0636C30b9a97FA5b2E44C9
// address del contrato desplegado con deployedBytecode =>  0x8eeaC30ed41540a0BeB5910e3B12729a654Be135
// address del contrato desplegado con deployedBytecode modificado =>  0x4e452c027336e1340A203E49d28b90a16eA1d8A7
// address del contrato desplegado bytecode =>  0x56e4b7aD48C0B7d1089920fEC928fF994AA6Bde8

