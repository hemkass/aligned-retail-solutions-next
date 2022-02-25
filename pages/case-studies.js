import CaseData from "../json/caseStudies.json";
import Image from "next/image";
import styles from "../styles/CaseStudies.module.scss";

const CaseStudies = () => {
  return (
    <div className={styles.caseStudies}>
      <div className={styles.title}>
        <h1>Case studies:</h1>
      </div>
      <div className={styles.bloc2}>
        {CaseData.map((elem) => {
          return (
            <div key={elem.ID} className={styles.cardbox}>
              <div className={styles.imgBox}>
                <Image
                  src={elem.Picture}
                  alt={elem.title}
                  layout="responsive"
                  width="16"
                  height="16"
                />
              </div>
              <p>
                <h3>{elem.title}</h3>

                <h6>{elem.description}</h6>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudies;
