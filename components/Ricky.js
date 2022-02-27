import styles from "../styles/Home.module.scss";
const Ricky = () => {
  return (
    <>
      <div className={styles.profilBox}>
        <div className={styles.titleBox}>
          <div className={styles.ImgBox}></div>{" "}
          <div>
            <h2>Our Principal, Ricky Glass</h2>
          </div>
        </div>
        <div className={styles.descBox}>
          <h4>
            Ricky resides in Denver CO, USA with his wife, Gaëlle, and their 3
            kids: Simon, Daphné and Gabriel. He grew up in a “freight and
            logistics family” – his dad, stepmom, and brother all work in the
            industry. He’s managed multiple businesses in the U.S., France and
            Italy that provided logistics and consulting services to clients in
            various industries. He also owns a craft beverage distribution
            company that delivers to markets throughout Europe and in the U.S..{" "}
          </h4>

          <a
            href="https://www.linkedin.com/in/ricky-glass-0a27a37/"
            target="_blank"
            title="lien vers profil Linkedin"
            alt="lien vers profil Linkedin"
            rel="noopener noreferrer"
          >
            <h6>https://www.linkedin.com/in/ricky-glass-0a27a37/</h6>
          </a>

          <h5>
            Ricky leads each project that Aligned Retail Solutions accepts, and
            personally engages with each client to ensure that they receive the
            highest level of attention and service that you deserve.
          </h5>
        </div>
      </div>
      <div className={styles.skewed}></div>
    </>
  );
};

export default Ricky;
