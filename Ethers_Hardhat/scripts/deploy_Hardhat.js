const { ethers } = require("hardhat");



async function deployContarct () {

    const contracFactory = await ethers.getContractFactory("TokenBurnPausable")
    const contratoToken = await contracFactory.deploy()
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


    console.log(signer1);


}


deployContarct ()
    .then(()=>process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1)
    })