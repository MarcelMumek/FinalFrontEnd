import Fade from "react-reveal/Fade";

export default function Hero() {
  return (
    <Fade bottom delay={1000}>
      <div>
        <div className="hero">
          <div className="slider">
            <ul className="slides">
              <li className="lazy-bg" data-background="dummy/slide-1.jpg">
                <div className="container">
                  <h2 className="slide-title">Header goes here</h2>
                  <h3 className="slide-subtitle">
                    Less important text goes here
                  </h3>
                  <p className="slide-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                    <br />
                    Fugiat aliquid minus nemo sed est.
                  </p>
                  <a href="#" className="button cut-corner">
                    Read More
                  </a>
                </div>
              </li>
              <li className="lazy-bg" data-background="dummy/slide-2.jpg">
                <div className="container">
                  <h2 className="slide-title">Header goes here</h2>
                  <h3 className="slide-subtitle">
                    Less important text goes here
                  </h3>
                  <p className="slide-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                    <br />
                    Fugiat aliquid minus nemo sed est.
                  </p>
                  <a href="#" className="button cut-corner">
                    Read More
                  </a>
                </div>
              </li>
              <li className="lazy-bg" data-background="dummy/slide-3.jpg">
                <div className="container">
                  <h2 className="slide-title">Header goes here</h2>
                  <h3 className="slide-subtitle">
                    Less important text goes here
                  </h3>
                  <p className="slide-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                    <br />
                    Fugiat aliquid minus nemo sed est.
                  </p>
                  <a href="#" className="button cut-corner">
                    Read More
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fade>
  );
}
