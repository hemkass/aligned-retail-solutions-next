import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/Home.module.scss";

import Link from "next/link";
import Image from "next/image";

const Accueil = () => {
  return (
    <>
      <div className={styles.homeSliderDiv}>
        <div className={styles.Title}>
          <h1>NEED HELP WITH YOUR SUPPLY CHAIN?</h1>
        </div>
        <div className={styles.BackgroundImage}>
          {/*  <img
        src="https://res.cloudinary.com/dyj84szrx/image/upload/v1642417376/ricky/fatigu%C3%A92_xx7mr4.jpg"
        alt=""
      /> */}
        </div>
      </div>{" "}
      <div className={styles.contact}>
        <div className={styles.questions}>
          <div className={styles.leftQuestion}>
            <p>
              <FontAwesomeIcon
                className={styles.chevronRight}
                icon="chevron-right"
              />
              Tired of retail chargebacks?
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                className={styles.chevronRight}
                icon="chevron-right"
              />
              Too many late deliveries?
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                className={styles.chevronRight}
                icon="chevron-right"
              />
              Lack of visibility?
            </p>
          </div>
          <div>
            <p>
              {" "}
              <FontAwesomeIcon
                className={styles.chevronRight}
                icon="chevron-right"
              />
              Skyrocketing freight charges?
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                className={styles.chevronRight}
                icon="chevron-right"
              />
              Problems with damaged freight?
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                cclassName={styles.chevronRight}
                icon="chevron-right"
              />
              Need to find a new carrier/3PL?
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                className={styles.chevronRight}
                icon="chevron-right"
              />
              Frustrated with retail routing guide compliance?
            </p>
          </div>
        </div>
        <div className={styles.contactText}>
          <Link href="/contact" className={styles.link}>
            <div className={styles.contactLink}>
              <h2>Speak to a supply chain expert</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Accueil;
