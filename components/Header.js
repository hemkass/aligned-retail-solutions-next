import Menu from "./Menu";

import { useRouter } from "next/router";

import styles from "../styles/Nav.module.scss";

import { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const [_document, set_document] = useState(null);
  useEffect(() => {
    set_document(document);
  }, []);

  const handleScrollUp = (elem) => {
    if (router.asPath !== "/") {
      router.push("/");
    } else {
      if (_document) {
        if (_document.getElementById(`div-menu-1`)) {
          _document
            .getElementById(`div-menu-1`)
            .scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className={styles.header}>
      <div
        id="menu-1"
        onClick={(event) => {
          handleScrollUp(event.target.id);
        }}
        className={styles.logo}
      >
        <Image
          src="https://res.cloudinary.com/dyj84szrx/image/upload/v1645263529/ricky/logo_rqi7xe.png"
          alt="logo de Aligned retail solutions"
          width="160"
          height="70"
        />
      </div>

      <Menu />
    </div>
  );
};

export default Header;
