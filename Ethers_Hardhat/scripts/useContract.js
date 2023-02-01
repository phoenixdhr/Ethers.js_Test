// balance W1 Inicio =>  BigNumber { value: "1000000000000000000000000" }
// balance W2 Inicio =>  BigNumber { value: "0" }
// balance W1 Fin =>  BigNumber { value: "1000000000000000000000000" }
// balance W2 Fin=>  BigNumber { value: "50000" }
// address contrato => 0xf5059a5D33d5853360D16C683c16e67980206f36

const { ethers } = require("hardhat");

async function main() {
  const [signer1, signer2] = await ethers.getSigners();
  const [address1, address2] = [signer1.address, signer2.address];

  const contractFactory = await ethers.getContractFactory("TokenBurnPausable");
  const contract = contractFactory.attach(
    "0xf5059a5D33d5853360D16C683c16e67980206f36"
  );

  const balanceBig1 = await contract.balanceOf(address1);
  const balance1 = ethers.utils.formatUnits(balanceBig1, 18);

  const balanceBig2 = await contract.balanceOf(address2);
  const balance2 = ethers.utils.formatUnits(balanceBig2, 18);

  console.log("balance1", balance1);
  console.log("balance2", balance2);

  const value = ethers.utils.parseUnits("10", 18);

  const tx = await contract.transfer(address2, value);

  await tx.wait();

  const bbalanceBig1 = await contract.balanceOf(address1);
  const bbalance1 = ethers.utils.formatUnits(bbalanceBig1, 18);

  const bbalanceBig2 = await contract.balanceOf(address2);
  const bbalance2 = ethers.utils.formatUnits(bbalanceBig2, 18);
  console.log("balance1", bbalance1);
  console.log("balance2", bbalance2);

  console.log(
    await ethers.Signer.isSigner("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
  );
  console.log("Ether s1", ethers.utils.formatEther(await signer1.getBalance()));
  console.log("Ether s2", ethers.utils.formatEther(await signer2.getBalance()));

  const tx2 = await signer1.sendTransaction({
    to: address2,
    value: ethers.utils.parseEther("1591"),
  });

  await tx2.wait();
  console.log("Ether s1", ethers.utils.formatEther(await signer1.getBalance()));
  console.log("Ether s2", ethers.utils.formatEther(await signer2.getBalance()));
}

main();
