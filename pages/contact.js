import { useState } from "react";
import Head from "next/head";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [mess, setMess] = useState("");

  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Aligned Retail Solutions</title>
    
      </Head>
      <div className="form-div">
        <div className="form-left-div">
          <h1>NEED HELP WITH YOUR SUPPLY CHAIN?</h1>{" "}
        </div>
        <form>
          <div className="form-data-div">
            <input
              onChange={(event) => setFirstname(event.target.value)}
              type="text"
              placeholder="Firstname"
              value={firstname}
            ></input>{" "}
            <input
              onChange={(event) => setLastname(event.target.value)}
              type="text"
              placeholder="Lastname"
              value={lastname}
            ></input>
          </div>
          <div className="info">
            {" "}
            <input
              required="required"
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Email"
              value={email}
            ></input>
            <input
              onChange={(event) => setTel(event.target.value)}
              type="text"
              placeholder="Your phone"
              value={tel}
            ></input>
          </div>
          <textarea
            className="form-message"
            required="required"
            onChange={(event) => setMess(event.target.value)}
            type="text"
            placeholder="Your Message"
            value={mess}
          ></textarea>
          <div className="submit-button">
            <button>Send message</button>
          </div>
          <div className="submit-button"></div>
        </form>
      </div>
    </>
  );
};

export default Contact;
