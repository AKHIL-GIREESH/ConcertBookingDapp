const { ethers } = require("hardhat");

async function main() {
  const concertBookingContract = await ethers.getContractFactory("concertBooking");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
