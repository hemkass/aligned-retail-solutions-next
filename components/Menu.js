import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Nav.module.scss";

import { useEffect, useState } from "react";
const Menu = () => {
  const [_document, set_document] = useState(null);
  useEffect(() => {
    set_document(document);
  }, []);

  const handleScroll = (elem) => {
    if (_document) {
      console.log("mon elem", elem);
      if (_document.getElementById(`div-${elem}`)) {
        document
          .getElementById(`div-${elem}`)
          .scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const router = useRouter();
  return (
    <>
      {router.asPath === "/" ? (
        <div className={styles.menuDiv}>
          <div>
            <h2
              id="menu-2"
              onClick={(event) => {
                /*    console.log("hello", event); */
                handleScroll(event.target.id);
              }}
            >
              Our Expertise{" "}
            </h2>
          </div>
          <div>
            <h2
              id="menu-3"
              onClick={(event) => {
                handleScroll(event.target.id);
              }}
            >
              Your Results
            </h2>
          </div>
          <div>
            <h2
              id="menu-4"
              onClick={(event) => {
                handleScroll(event.target.id);
              }}
            >
              The Process
            </h2>{" "}
          </div>
          <div>
            <Link href="/case-studies" className={styles.link}>
              <h2>Case Studies</h2>
            </Link>
          </div>
          <div>
            <h2
              id="menu-5"
              onClick={(event) => {
                handleScroll(event.target.id);
              }}
            >
              About us
            </h2>
          </div>

          <div className={styles.menuContactDiv}>
            <Link href="/contact">
              <h2>Speak to a supply chain expert </h2>
            </Link>
          </div>
        </div>
      ) : router.asPath === "/contact" ? (
        <div className={styles.menuDiv}>
          <div className={styles.otherMenu}>
            <div className={styles.mobileLogo}>
              {" "}
              <Link href="/" className={styles.link}>
                <Image
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1645263529/ricky/logo_rqi7xe.png"
                  alt="logo de Aligned retail solutions"
                  layout="responsive"
                  width="16"
                  height="9"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.MobileCaseStudies}>
          {" "}
          <div className={styles.mobileLogo}>
            {" "}
            <Link href="/" className={styles.link}>
              <Image
                src="https://res.cloudinary.com/dyj84szrx/image/upload/v1645263529/ricky/logo_rqi7xe.png"
                alt="logo de Aligned retail solutions"
                layout="responsive"
                width="16"
                height="9"
              />
            </Link>
          </div>
          <div className={styles.contact}>
            <Link href="/contact" className={styles.link}>
              <h2> Speak to a supply chain expert</h2>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
