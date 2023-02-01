const { ethers } = require("hardhat");

async function deployContract() {
  const signersz = await ethers.getSigners();
  const [w1, w2] = [...signersz];

  console.log("signer ==>", w1.address);

  const MyToken = await ethers.getContractFactory("MyToken");

  const mytoken = await MyToken.deploy();

  mytoken.deployed();

  const nombre = await mytoken.name();

  console.log("nombre del token =>", nombre);

  console.log("address del contrato =>",mytoken.address);
}

deployContract();
