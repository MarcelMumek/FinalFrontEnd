import Logo from "../../assets/dummy/logo.png";
import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <Fade top delay={5}>
      <header className="site-header">
        <div className="container">
          <a href="index.html" id="branding">
            <img src={Logo} alt="Site Title" />
            <small className="site-description">Only Music</small>
          </a>
          {/* #branding */}
          <nav className="main-navigation">
            <button type="button" className="toggle-menu">
              <i className="fa fa-bars" />
            </button>
            <ul className="menu">
              <li className="menu-item current-menu-item">
                <a href="index.html">Home</a>
              </li>
              <li className="menu-item">
                <a href="about.html">About</a>
              </li>
              <li className="menu-item">
                <a href="gallery.html">Gallery</a>
              </li>
              <li className="menu-item">
                <a href="download.html">Download</a>
              </li>
              <li className="menu-item">
                <a href="blog.html">Blog</a>
              </li>
              <li className="menu-item">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            {/* .menu */}
          </nav>
          {/* .main-navigation */}
          <div className="mobile-menu" />
        </div>
      </header>
    </Fade>
  );
}
