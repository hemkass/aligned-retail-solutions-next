import Header from "../Header/Header";
const Container = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Container;
