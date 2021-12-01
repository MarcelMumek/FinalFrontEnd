import "../assets/style.css";
import "../assets/fonts/font-awesome.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Events from "../components/Events";
import Choose from "../components/Choose";
import Hero from "../components/Hero";
import Quotes from "../components/Quotes";

export default function Homepage() {
  return (
    <div>
      <Header />
      <div id="site-content">
        {/* .site-header */}
        <Hero />
        <Quotes />
        <Events />
        <Choose />
      </div>
      {/* .main-content */}
      <Footer />
    </div>
  );
}
