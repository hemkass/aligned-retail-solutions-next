import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Expertise = () => {
  return (
    <div className="div2">
      <div className="div-title">
        <h1>LOGISTICS SOLUTIONS THAT STAND THE TEST OF TIME</h1>
      </div>
      <div className="bloc">
        <div className="bloc1">
          <h2>We specialize in :</h2>{" "}
        </div>
        <div className="bloc2">
          <div className="icon_bloc">
            <div className="icon_img">
              <img
                src="https://res.cloudinary.com/dyj84szrx/image/upload/v1645180732/ricky/expertise/icon_freight_bfhixe.png"
                alt="icon"
              />
            </div>
            <div>
              <h4>Freight & Logistics</h4>
            </div>
          </div>
          <div className="icon_bloc">
            <div className="icon_img">
              <img
                src="https://res.cloudinary.com/dyj84szrx/image/upload/v1645180732/ricky/expertise/compliance_ersubq.png"
                alt="icon"
              />
            </div>
            <div>
              <h4>Retail Compliance</h4>
            </div>
          </div>
          <div className="icon_bloc">
            <div className="icon_img">
              {" "}
              <img
                src="https://res.cloudinary.com/dyj84szrx/image/upload/v1645180732/ricky/expertise/icon_global-shipping_zutmea.png"
                alt="icon"
              />
            </div>

            <div>
              <h4>Global Shipping</h4>
            </div>
          </div>
          <div className="icon_bloc">
            <div className="icon_img">
              <img
                src="https://res.cloudinary.com/dyj84szrx/image/upload/v1645180732/ricky/expertise/order_to_cash_u3l4z0.png"
                alt="icon"
              />
            </div>
            <div>
              <h4>Order to Cash Process Improvement </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
