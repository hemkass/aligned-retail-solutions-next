import Image from "next/image";
import styles from "../styles/Home.module.scss";
const YourResults = () => {
  return (
    <>
      <div>
        <h1>Your Results :</h1>{" "}
      </div>{" "}
      <div className={styles.bloc}>
        <div className={styles.cardBox}>
          <div className={styles.imgBox}>
            <Image
              src="https://res.cloudinary.com/dyj84szrx/image/upload/v1645606694/ricky/result/savingpetit_mpqbcl.jpg"
              alt="saving money illustration"
              width="9"
              height="11"
              layout="responsive"
            ></Image>
          </div>
          <div>
            <h2>Eliminate Retail Chargebacks,Fines & Penalties</h2>
          </div>
        </div>
        <div className={styles.cardBox}>
          <div className={styles.imgBox}>
            <Image
              src="https://res.cloudinary.com/dyj84szrx/image/upload/v1645606706/ricky/studies%20case/ontime_n7bnwn.jpg"
              alt="delivery on-time illustration"
              width="9"
              height="11"
              layout="responsive"
            ></Image>
          </div>
          <div>
            <h2>Improve On Time Delivery</h2>
          </div>
        </div>
        <div className={styles.cardBox}>
          <div className={styles.imgBox}>
            <Image
              src="https://res.cloudinary.com/dyj84szrx/image/upload/v1645606695/ricky/result/entrepot_n7uemv.jpg"
              alt="warehouse"
              width="9"
              height="11"
              layout="responsive"
            ></Image>
          </div>
          <div>
            <h2>Secure Carrier Capacity</h2>
          </div>
        </div>
        <div className={styles.cardBox}>
          <div className={styles.imgBox}>
            <Image
              src="https://res.cloudinary.com/dyj84szrx/image/upload/v1645606694/ricky/result/cargopetit_cxk5rr.jpg"
              alt="cargo"
              width="9"
              height="11"
              layout="responsive"
            ></Image>
          </div>
          <div>
            <h2>Reduce Freight & Shipping Costs </h2>
          </div>
        </div>
        <div className={styles.cardBox}>
          <div className={styles.imgBox}>
            <Image
              src="https://res.cloudinary.com/dyj84szrx/image/upload/v1645606694/ricky/result/plan_roumu3.jpg"
              alt="process"
              width="9"
              height="11"
              layout="responsive"
            ></Image>
          </div>
          <div>
            <h2>More Order Process Efficient Internal</h2>
          </div>
        </div>
        ▪
      </div>
      {/*  <div className={styles.skewed2}></div> */}
      <div className={styles.skewed}></div>
    </>
  );
};

export default YourResults;
