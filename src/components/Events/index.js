import Fade from "react-reveal/Fade";

export default function Events() {
  return (
    <Fade right delay={2000}>
      <div>
        <div
          className="fullwidth-block upcoming-event-section"
          data-bg-color="#191919"
        >
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Upcoming events</h2>
              <div className="event-nav">
                <a className="prev" id="event-prev" href="#">
                  <i className="fa fa-caret-left" />
                </a>
                <a className="next" id="event-next" href="#">
                  <i className="fa fa-caret-right" />
                </a>
              </div>{" "}
              {/* .event-nav */}
            </header>{" "}
            {/* .section-header */}
            <div className="event-carousel">
              <div className="event">
                <div className="entry-date">
                  <div className="date">23</div>
                  <span className="month">Jun</span>
                </div>
                <h2 className="entry-title">
                  <a href="#">Sed et persipiatis unde omnis iste natus</a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid temporibus quos aspernatur
                </p>
              </div>{" "}
              {/* .event */}
              <div className="event">
                <div className="entry-date">
                  <div className="date">23</div>
                  <span className="month">Jun</span>
                </div>
                <h2 className="entry-title">
                  <a href="#">Sed et persipiatis unde omnis iste natus</a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid temporibus quos aspernatur
                </p>
              </div>{" "}
              {/* .event */}
              <div className="event">
                <div className="entry-date">
                  <div className="date">23</div>
                  <span className="month">Jun</span>
                </div>
                <h2 className="entry-title">
                  <a href="#">Sed et persipiatis unde omnis iste natus</a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid temporibus quos aspernatur
                </p>
              </div>{" "}
              {/* .event */}
              <div className="event">
                <div className="entry-date">
                  <div className="date">23</div>
                  <span className="month">Jun</span>
                </div>
                <h2 className="entry-title">
                  <a href="#">Sed et persipiatis unde omnis iste natus</a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid temporibus quos aspernatur{" "}
                </p>
              </div>{" "}
              {/* .event */}
              <div className="event">
                <div className="entry-date">
                  <div className="date">23</div>
                  <span className="month">Jun</span>
                </div>
                <h2 className="entry-title">
                  <a href="#">Sed et persipiatis unde omnis iste natus</a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid temporibus quos aspernatur{" "}
                </p>
              </div>{" "}
              {/* .event */}
            </div>{" "}
            {/* .event-carousel */}
          </div>{" "}
          {/* .container */}
        </div>{" "}
        {/* .upcoming-event-section */}
      </div>
    </Fade>
  );
}
