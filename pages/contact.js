import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Contact.module.scss";
import axios from "axios";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [mess, setMess] = useState("");
  const [response, setResponse] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://alignedretailsolutions-back.herokuapp.com/form",
      {
        email: `${email}`,
        firstname: `${firstname}`,
        lastname: `${lastname}`,
        telephone: `${tel}`,
        message: `${mess}`,
      }
    );
    console.log(response.status);
    if (response.status === 200) {
      setResponse(true);
    }
  };

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Aligned Retail Solutions</title>
      </Head>
      <div className={styles.contact}>
        <div className={styles.formLeft}>
          <h1>NEED HELP WITH YOUR SUPPLY CHAIN?</h1>{" "}
        </div>{" "}
        {response ? (
          <div className={styles.response}>
            <p>Message sent,</p>
            <p>We will contact you as soon as possible</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={styles.dataDiv}>
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
            <div>
              <div className={styles.dataDiv}>
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
            </div>
            <textarea
              className={styles.messageBox}
              required="required"
              onChange={(event) => setMess(event.target.value)}
              type="text"
              placeholder="Your Message"
              value={mess}
            ></textarea>
            <div className={styles.submitButton}>
              <button>Send message</button>
            </div>
            <div className={styles.submitButton}></div>
          </form>
        )}
      </div>
    </>
  );
};

export default Contact;
