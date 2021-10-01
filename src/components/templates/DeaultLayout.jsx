import { Footer } from "../attoms/layOut/Footer";
import { Header } from "../attoms/layOut/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
