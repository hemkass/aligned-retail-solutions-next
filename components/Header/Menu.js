import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../Header/Header.module.scss";

const Menu = ({ handleScroll }) => {
  const router = useRouter();
  return (
    <>
      {router.asPath === "/" ? (
        <div className={styles.MenuDiv}>
          <div
            id="menu-2"
            onClick={(event) => {
              /*    console.log("hello", event); */
              handleScroll(event.target.id);
            }}
          >
           <h2> Our Expertise </h2>
          </div>
          <div
            id="menu-3"
            onClick={(event) => {
              handleScroll(event.target.id);
            }}
          ><h2>
            Your Results</h2>
          </div>
          <div
            id="menu-4"
            onClick={(event) => {
              handleScroll(event.target.id);
            }}
          ><h2>
            The Process</h2>
          </div>{" "}
          <div>
            <Link href="/case-studies" className={styles.link}>
              <div><h2> Case Studies</h2></div>
            </Link>
          </div>
          <div
            id="menu-5"
            onClick={(event) => {
              handleScroll(event.target.id);
            }}
          ><h2>
            About us</h2>
          </div>
          <Link href="/contact" className={styles.link}>
            <div className={styles.menuContactDiv}><h2>
              Speak to a supply chain expert </h2>
            </div>
          </Link>
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
