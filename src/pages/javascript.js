import Header from "../comp/header";
import Footer from "../comp/footer";
import Main from "../comp/main";
import { Helmet } from "react-helmet-async";

const Javascript = () => {
  return (
    <>
    <Helmet>
        <title>JAVASCRIPT PAGE</title>
        <meta name="description" content="lavaaaaaaaaaa" />
      </Helmet>
      <Header />

      <Main pagename="Javascript Page" />

      <Footer />
    </>
  );
};

export default Javascript;
