import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Image from "next/image";

const Process = () => {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    setDocument(document);
  }, []);
  console.log(document);

  /*  const items = document.getElementsByClassName("Process");
  
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
  }; */

  return (
    <div className="div4">
      <div className="bloc">
        {/*    <div className="prev-icon-div" onClick={handlePrev}>
          <FontAwesomeIcon className="prev-icon" icon="arrow-alt-circle-left" />
        </div>
        <div className="next-icon-div" onClick={handleNext}>
          <FontAwesomeIcon
            className="next-icon"
            icon="arrow-alt-circle-right"
          />
        </div> */}
        <div className="bloc1">
          <h2>Our Process :</h2>
        </div>
        <div className="bloc2">
          <div className="gallery">
            <div className="Process">
              <div className="title-box">
                <h3>Initial consultation</h3>
              </div>
              <div className="process-image-div">
                <img
                  className="slider"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643017480/ricky/process/Initial_consultation_lslijv.jpg"
                  alt="First meeting "
                />
              </div>
              <div>
                <p>STEP 1</p>
                <p>
                  Meeting with key decision-makers and stakeholders to
                  understand “what’s not working” and how this is negatively
                  affecting your business.
                </p>
              </div>
            </div>
            <div className="Process">
              {" "}
              <div className="title-box">
                <h3>Investigation of current supply chain process </h3>
              </div>
              <div className="process-image-div">
                <img
                  className="slider"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643017480/ricky/process/eval2_iufhuf.jpg"
                  alt="Investigation  "
                />
              </div>
              <div>
                <p>STEP 2</p>
                <p>
                  Investigation of current supply chain process with different
                  departments (logistics/distribution, purchasing,
                  sales,IT,leadership, finance/accounting, etc.)
                </p>

                <p>
                  We learn about your current process and how it’s being
                  executed.
                </p>
              </div>
            </div>
            <div className="Process">
              <div className="title-box">
                <h3>Identification and communication of solutions</h3>
              </div>
              <div className="process-image-div">
                <img
                  className="slider"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643017480/ricky/process/investiagtion_qouftm.jpg"
                  alt="communicate solutions meeting "
                />
              </div>{" "}
              <div>
                <p>STEP 3</p>
                <p>
                  Create solutions improving the supply chain to present to key
                  decision-makers for approval to implement.
                </p>
              </div>
            </div>
            <div className="Process">
              {" "}
              <div className="title-box">
                <h3>Implementation of new solutions</h3>
              </div>
              <div className="process-image-div">
                <img
                  className="slider"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643017480/ricky/process/ship_qrnjah.jpg"
                  alt="Implementation solutions "
                />
              </div>{" "}
              <div>
                <p>STEP 4</p>
                <p>
                  Generate a plan to implement new business solutions into daily
                  operations with minimal disruption.
                </p>
              </div>
            </div>
            <div className="Process">
              <div className="title-box">
                <h3>Measure success of change</h3>
              </div>
              <div className="process-image-div">
                <img
                  className="slider"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643017480/ricky/process/eval_mfiscu.jpg"
                  alt="First meeting "
                />
              </div>{" "}
              <div>
                <p>STEP 5</p>
                <p>Measure success of change against established benchmarks</p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
