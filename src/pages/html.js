import Header from "../comp/header";
import Footer from '../comp/footer';
import Main from "../comp/main";
import { Helmet } from 'react-helmet-async';

const Html = () => {
  return (
    <>
      <Helmet>
        <title>HTML PAGE</title>
        <meta name="description" content="HTMLLLLLLLLL" />
      </Helmet>
      <Header />

      <Main pagename="Html Page" />

      <Footer />
    </>
  );
};

export default Html;
