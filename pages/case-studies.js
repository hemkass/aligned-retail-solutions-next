import CaseData from "../json/caseStudies.json";
const CaseStudies = () => {
  return (
    <div>
      <div className="div6">
        {" "}
        <div className="title">
          <h1>Case studies:</h1>
        </div>
        <div className="bloc2">
          {CaseData.map((elem) => {
            return (
              <div key={elem.ID} className="case-study-box">
                <div></div>
                <div>
                  <h3>{elem.title}</h3>
                </div>
                <div>
                  <p>{elem.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    /* </div> */
  );
};

export default CaseStudies;
