import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header/Header";
import Accueil from "../components/Accueil";
import Expertise from "../components/Expertise";
import YourResults from "../components/Results";
import Process from "../components/Process";
import About from "../components/About";

import styles from "../styles/Home.module.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faChevronLeft,
  faTimes,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faChevronRight,
  faArrowAltCircleRight,
  faChevronLeft,
  faArrowAltCircleLeft
);

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aligned Retail Solutions</title>
        <meta
          name="help with your supply chain"
          content="improve your supply chain, eliminate retail chargebacks, secure your carrier capacity, reduce your freight costs and make your process more efficient"
        />
      </Head>
      <div className={styles.homeContainer}>
        <Header></Header>
        <div id="div-menu-1" className={styles.intro}>
          <Accueil />
        </div>
        <div id="div-menu-2" className={styles.expertise}>
          <Expertise />
        </div>
        <div id="div-menu-3" className={styles.results}>
          <YourResults />
        </div>
        <div id="div-menu-4" className={styles.process}>
          <Process />
        </div>
        <div id="div-menu-5" className={styles.about}>
          <About />
        </div>
      </div>
    </>
  );
}
