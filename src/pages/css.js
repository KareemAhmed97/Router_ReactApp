import Header from '../comp/header';
import Footer from '../comp/footer';
import Main from '../comp/main';
import { Helmet } from "react-helmet-async";




const Css = () => {
  return (
    <>
    <Helmet>
        <title>CSS PAGE</title>
        <meta name="description" content="CSSSSSSSSSSSSSS" />
      </Helmet>
    <Header/>

    <Main pagename="Css Page"/>
    <Footer/>
  </>
  );
}

export default Css;
