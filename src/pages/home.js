import Header from "../comp/header";
import Footer from "../comp/footer";
import Main from "../comp/main";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
    <Helmet>
        <title>HOME PAGE</title>
        <meta name="description" content="HOMEEEEEEEEEEE" />
      </Helmet>
      <Header />

      <Main pagename="Home page 'Designed By Kareem Ahmed' " />

      <Footer />
    </>
  );
};

export default Home;
