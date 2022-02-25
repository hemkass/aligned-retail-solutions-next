import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../Header/Header.module.scss";
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
        <div className={styles.MenuDiv}><div>
           <h2    id="menu-2"
            onClick={(event) => {
              /*    console.log("hello", event); */
              handleScroll(event.target.id);
            }}>
            Our Expertise </h2></div>
         <div>
          <h2
            id="menu-3"
            onClick={(event) => {
              handleScroll(event.target.id);
            }}
          >
            Your Results
          </h2></div><div>
          <h2
            id="menu-4"
            onClick={(event) => {
              handleScroll(event.target.id);
            }}
          >
            The Process
          </h2>{" "}</div>
         <div> <Link href="/case-studies" className={styles.link}><h2>
            
              Case Studies
            
          </h2></Link></div><div>
          <h2
            id="menu-5"
            onClick={(event) => {
              handleScroll(event.target.id);
            }}
          >
            About us
          </h2></div>
          
            <div className={styles.menuContactDiv}><Link href="/contact" >
              <h2>Speak to a supply chain expert </h2></Link>
            </div>
          
        </div>
      ) : (
        router.asPath !== "/contact" && (
          <div className={styles.MenuDiv}>
            <Link href="/contact" className={styles.link}>
              <div className={styles.menuContactDiv}>
                Speak to a supply chain expert
              </div>
            </Link>
          </div>
        )
      )}
    </>
  );
};

export default Menu;
