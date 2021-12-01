import Fade from "react-reveal/Fade";

export default function Quotes() {
  return (
    <Fade left delay={1500}>
      <div>
        <main className="main-content">
          <div className="fullwidth-block testimonial-section">
            <div className="container">
              <div className="quote-slider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>
                        "Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium totam rem
                        aperiam eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo"
                      </p>
                      <cite>Giri Dharan</cite>
                      <span>Designer</span>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>
                        "Iste natus error sit voluptatem accusantium doloremque
                        laudantium totam rem aperiam eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo"
                      </p>
                      <cite>Giri Dharan</cite>
                      <span>Designer</span>
                    </blockquote>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* .testimonial-section */}
        </main>
      </div>
    </Fade>
  );
}
