import { useContract, useContractRead, Web3Button, useContractWrite, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {

  const {contract} = useContract("0x082aDC578725C9635F0c03D54B418eB7c0F8b200")
  const address = useAddress()

  const {data : maxNumberOfSeats} = useContractRead(contract,"maxNumberOfSeats")
  const {data : alreadyBooked} = useContractRead(contract,"bookedAlready",address)
  const {data : numberOfSeatsBooked} = useContractRead(contract,"numberOfSeatsFilled")

  console.log(maxNumberOfSeats)
  console.log(alreadyBooked)

  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "bookASeat",
  )

  const BookingButton = () => {
    if(!alreadyBooked){
      return(<>
        <p>Book Now!</p>
        <Web3Button
          contractAddress={"0x082aDC578725C9635F0c03D54B418eB7c0F8b200"}
          action={() => mutateAsync([])}>
          {"Book"}
        </Web3Button>
      </>)
    }else{
      return(
      <>
        <p>Thank You for Booking</p>
        <button>Enter the Show</button>
      </>
    )}
  }

  return (
    <div className={styles.theWholeThing}>
      <div className={styles.textPart}>
      <h1>VIRTUAL <span>CONCERT</span></h1>
        <p>_0x416B68696C_ INVITES YOU</p>
        <h2>{numberOfSeatsBooked<maxNumberOfSeats?"Bookings Open":"Bookings Closed"}!</h2>
        <p>{numberOfSeatsBooked}/{maxNumberOfSeats} Filled!</p>
      </div>
      <div className={styles.bookingContainer}>
        {BookingButton()}
      </div>
    </div>
  );
}

{/* <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
        </h1>

        <p className={styles.description}>
          Get started by configuring your desired network in{" "}
          <code className={styles.code}>pages/_app.js</code>, then modify the{" "}
          <code className={styles.code}>pages/index.js</code> file!
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.grid}>
          <a href="https://portal.thirdweb.com/" className={styles.card}>
            <h2>Portal &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              thirdweb.
            </p>
          </a>

          <a href="https://thirdweb.com/dashboard" className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a
            href="https://portal.thirdweb.com/templates"
            className={styles.card}
          >
            <h2>Templates &rarr;</h2>
            <p>
              Discover and clone template projects showcasing thirdweb features.
            </p>
          </a>
        </div>
      </main>
    </div> */}