import styles from "../styles/Home.module.scss";

const About = () => {
  return (
    <>
      <div className={styles.bloc}>
        <div className={styles.bloc1}>
          <h1>
            For over 20 years, we’ve solved logistics and supply chain issues
            for <span>customers of all scope and sizes</span> in North America
            and in Europe.
          </h1>
        </div>
        <div className={styles.bloc2}>
          <div>
            <div className={styles.profilBox}>
              <div className={styles.ImgBox}></div>
              <div className={styles.descBox}>
                <div>
                  <h2>Our Principal, Ricky Glass</h2>
                </div>
                <div>
                  <h4>
                    Ricky resides in Denver CO, USA with his wife, Gaëlle, and
                    their 3 kids: Simon, Daphné and Gabriel. He grew up in a
                    “freight and logistics family” – his dad, stepmom, and
                    brother all work in the industry. He’s managed multiple
                    businesses in the U.S., France and Italy that provided
                    logistics and consulting services to clients in various
                    industries. He also owns a craft beverage distribution
                    company that delivers to markets throughout Europe and in
                    the U.S..{" "}
                  </h4>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/ricky-glass-0a27a37/"
                    target="_blank"
                    title="lien vers profil Linkedin"
                    alt="lien vers profil Linkedin"
                    rel="noopener noreferrer"
                  >
                    <h6>https://www.linkedin.com/in/ricky-glass-0a27a37/</h6>
                  </a>
                </div>{" "}
                <div>
                  <h5>
                    Ricky leads each project that Aligned Retail Solutions
                    accepts, and personally engages with each client to ensure
                    that they receive the highest level of attention and service
                    that you deserve.
                  </h5>
                </div>
              </div>{" "}
            </div>
            <div className={styles.skewed}></div>
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
};

export default About;
