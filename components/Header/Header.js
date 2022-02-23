import Menu from "./Menu";
import { useRouter } from "next/router";

import styles from "../Header/Header.module.scss";

const Header = ({ handleScroll }) => {
  const router = useRouter();
  const handleScrollUp = (elem) => {
    router.push("/");
    if (document.getElementById(`div-${elem}`)) {
      document
        .getElementById(`div-${elem}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.header}>
      <div
        id="menu-1"
        onClick={(event) => {
          /*    console.log("hello", event); */
          handleScrollUp(event.target.id);
        }}
        className={styles.logo}
      >
        <img
          src="https://res.cloudinary.com/dyj84szrx/image/upload/v1645263529/ricky/logo_rqi7xe.png"
          alt="logo de Aligned retail solutions"
        />
      </div>
      {/*  {location.pathname === "/" && */}{" "}
      <Menu handleScroll={handleScroll} />
    </div>
  );
};

export default Header;
