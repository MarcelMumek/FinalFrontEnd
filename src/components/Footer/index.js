import LogoFooter from "../../assets/dummy/logo-footer.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <img src={LogoFooter} alt="Site Name" />
        <address>
          <p>
            50, Thiruvoodal Street, Thiruvannamalai. <br />
            <a href="tel:9488487853">+91 94884 87853</a> <br />
            <a href="mailto:srikrishnacommunication55@gmail.com">
              srikrishnacommunication55@gmail.com
            </a>
          </p>
        </address>
        <form action="#" className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email to join newsletter..."
          />
          <input
            type="submit"
            className="button cut-corner"
            defaultValue="Subscribe"
          />
        </form>
        {/* .newsletter-form */}
        <div className="social-links">
          <a href="#">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-google-plus" />
          </a>
          <a href="#">
            <i className="fa fa-pinterest" />
          </a>
        </div>
        {/* .social-links */}
        <p className="copy">
          Band Name @ Copyright 2016. All right reserved. Designed by{" "}
          <a href="http://srikrishnacommunication.com/Giridesigns.html">
            Giri Designs
          </a>
        </p>
      </div>
    </footer>
  );
}
