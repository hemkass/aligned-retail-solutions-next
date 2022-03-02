import CaseData from "../json/caseStudies.json";
import Image from "next/image";
import styles from "../styles/CaseStudies.module.scss";
import Head from "next/head";

const CaseStudies = (props) => {
  const data = props.data;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aligned Retail Solutions : Case studies</title>
        <meta
          name="Case studies of supply chain"
          content="improve your supply chain, eliminate retail chargebacks, secure your carrier capacity, reduce your freight costs and make your process more efficient"
        />
      </Head>
      <div className={styles.caseStudies}>
        <div className={styles.title}>
          <h1>Case studies:</h1>
        </div>
        <div className={styles.bloc2}>
          {data.map((elem) => {
            return (
              <div key={elem.ID} className={styles.cardbox}>
                <div className={styles.imgBox}>
                  <Image
                    src={elem.Picture}
                    alt={elem.alt}
                    layout="responsive"
                    width="16"
                    height="16"
                  />
                </div>
                <div>
                  <h3>{elem.title}</h3>

                  <h6>{elem.description}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return { props: { data: CaseData } };
}

export default CaseStudies;
