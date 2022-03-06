import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
const Process = () => {
  const [_document, set_document] = useState(null);

  useEffect(() => {
    set_document(document);
  }, []);

  if (_document) {
    const items = _document.getElementsByClassName(`${styles.Process}`);
    console.log(items);
  }

  let count = 0;
  const handleNext = (event) => {
    console.log(count);
    console.log("items", [Number(count) + 1]);
    if (count < items.length - 1) {
      items[Number(count) + 1].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      count++;
    } else {
      count = 0;
      items[0].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  const handlePrev = (event) => {
    if (count > 0) {
      count--;
      items[count].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      console.log("test", items.length);
      count = items.length - 1;
      items[items.length - 1].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <>
      <h1>The Process :</h1>
      <div className={styles.bloc}>
        <div onClick={handlePrev}>
          <FontAwesomeIcon
            className={styles.prevIcon}
            icon="arrow-alt-circle-left"
          />
        </div>
        <div onClick={handleNext}>
          <FontAwesomeIcon
            className={styles.nextIcon}
            icon="arrow-alt-circle-right"
          />
        </div>
        <div className={styles.bloc1}></div>
        <div className={styles.bloc2}>
          <div className={styles.gallery}>
            <div className={styles.Process}>
              <div className={styles.titleBox}>
                <h2>Initial consultation</h2>
              </div>
              <div className={styles.imgDiv}>
                <Image
                  id="slider-1"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643017480/ricky/process/Initial_consultation_lslijv.jpg"
                  alt="First meeting "
                  layout="responsive"
                  width="16"
                  height="6"
                />
              </div>
              <div>
                <h3>STEP 1</h3>
                <h4>
                  Meeting with key decision-makers and stakeholders to
                  understand “what’s not working” and how this is negatively
                  affecting your business.
                </h4>
              </div>
            </div>
            <div className={styles.Process}>
              <div className={styles.titleBox}>
                <h2>Investigation of current supply chain process </h2>
              </div>
              <div className={styles.imgDiv}>
                <Image
                  id="slider-2"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643017480/ricky/process/eval2_iufhuf.jpg"
                  alt="Investigation  "
                  layout="responsive"
                  width="16"
                  height="6"
                />
              </div>
              <div>
                <h3>STEP 2</h3>
                <h4>
                  Investigation of current supply chain process with different
                  departments (logistics/distribution, purchasing, sales, IT,
                  leadership, finance/accounting, etc.)
                </h4>

                <h4>
                  We learn about your current process and how it’s being
                  executed.
                </h4>
              </div>
            </div>
            <div className={styles.Process}>
              <div className={styles.titleBox}>
                <h2>communication the solution</h2>
              </div>
              <div className={styles.imgDiv}>
                <Image
                  id="slider-3"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643017480/ricky/process/investiagtion_qouftm.jpg"
                  alt="communicate solutions meeting "
                  layout="responsive"
                  width="16"
                  height="6"
                />
              </div>{" "}
              <div>
                <h3>STEP 3</h3>
                <h4>
                  Create solutions improving the supply chain to present to key
                  decision-makers for approval to implement.
                </h4>
              </div>
            </div>
            <div className={styles.Process}>
              <div className={styles.titleBox}>
                <h2>Implementation of new solutions</h2>
              </div>
              <div className={styles.imgDiv}>
                <Image
                  layout="responsive"
                  width="16"
                  height="6"
                  id="slider-4"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643017480/ricky/process/ship_qrnjah.jpg"
                  alt="Implementation solutions "
                />
              </div>{" "}
              <div>
                <h3>STEP 4</h3>
                <h4>
                  Generate a plan to implement new business solutions into daily
                  operations with minimal disruption.
                </h4>
              </div>
            </div>
            <div className={styles.Process}>
              <div className={styles.titleBox}>
                <h2>Measure success of change</h2>
              </div>
              <div className={styles.imgDiv}>
                <Image
                  id="slider-5"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643017480/ricky/process/eval_mfiscu.jpg"
                  alt="First meeting "
                  layout="responsive"
                  width="16"
                  height="6"
                />
              </div>{" "}
              <div>
                <h3>STEP 5</h3>
                <h4>
                  Measure success of change against established benchmarks
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
