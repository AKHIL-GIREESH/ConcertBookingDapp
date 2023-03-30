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
    <div>
      <h1>Concert</h1>
      <p>Lorem ipsum dolor sit amet. Est corporis sint et architecto voluptatem sit voluptas cupiditate ut sunt placeat eum dignissimos saepe a explicabo accusamus id dolore sint? Aut ipsa facere aut officia atque est perferendis quia ab sapiente obcaecati.
      Et iste repudiandae est mollitia voluptas ad mollitia minus et harum earum At voluptatem enim. Eos provident animi eum beatae omnis est temporibus molestias eum illo animi. Et quam consequatur ut Quis inventore et autem magni qui laboriosam adipisci qui placeat aperiam quo ipsam ratione eum saepe alias. Ut quisquam consectetur rem consequatur explicabo est unde similique.</p>
      <h2>Bookings Open</h2>
      <p>{numberOfSeatsBooked}/{maxNumberOfSeats} Filled!</p>
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