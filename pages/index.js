import Head from "next/head";
import Image from "next/image";

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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Maitree:wght@200;300;400;500;600;700&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.homeContainer}>
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
