import { useRouter } from "next/router";
import Header from "../Header/Header";
const Container = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {router.asPath !== "/" && <Header />}
      {children}
    </>
  );
};

export default Container;
