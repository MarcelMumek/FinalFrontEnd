import ImagesA from "../../assets/dummy/Band Name/youtube-music-playlist.jpg";
import ImagesB from "../../assets/dummy/Band Name/music-pics-23.jpg";
import ImagesC from "../../assets/dummy/Band Name/5261_Electronics_Music_Production_pic_1 - Copy.jpg";
import Fade from "react-reveal/Fade";

export default function Choose() {
  return (
    <Fade top delay={2500}>
      <div>
        <div className="fullwidth-block why-chooseus-section">
          <div className="container">
            <h2 className="section-title">Why choose us?</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="feature">
                  <figure className="cut-corner">
                    <img src={ImagesB} alt height={230} />
                  </figure>
                  <h3 className="feature-title">
                    Similique sunt in culpa qui officia deserunt mollitia animi
                    laborum dolorum
                  </h3>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident.
                  </p>
                </div>{" "}
                {/* .feature */}
              </div>
              <div className="col-md-4">
                <div className="feature">
                  <figure className="cut-corner">
                    <img src={ImagesA} alt />
                  </figure>
                  <h3 className="feature-title">
                    Similique sunt in culpa qui officia deserunt mollitia animi
                    laborum dolorum
                  </h3>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident.
                  </p>
                </div>{" "}
                {/* .feature */}
              </div>
              <div className="col-md-4">
                <div className="feature">
                  <figure className="cut-corner">
                    <img src={ImagesC} alt />
                  </figure>
                  <h3 className="feature-title">
                    Similique sunt in culpa qui officia deserunt mollitia animi
                    laborum dolorum
                  </h3>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident.
                  </p>
                </div>{" "}
                {/* .feature */}
              </div>
            </div>
          </div>{" "}
          {/* .container */}
        </div>{" "}
        {/* .why-chooseus-section */}
      </div>
    </Fade>
  );
}
