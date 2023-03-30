const { ethers } = require("hardhat");

async function main() {
  const concertBookingContract = await ethers.getContractFactory("concertBooking")
  const deployedconcertBookingContract = await concertBookingContract.deploy(10)
  await deployedconcertBookingContract.deployed()
  console.log("Address :",deployedconcertBookingContract.address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});