import React from 'react';

const Newsletter = () => {
  return (
    <section className="cta cta--style2">
      <div className="container">
        <div className="cta__wrapper">
          <div className="cta__newsletter justify-content-center">
            <div
              className="cta__newsletter-inner cta__newsletter-inner--style2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="cta__thumb">
                <img src="/images/cta/3.png" alt="cta-thumb" />
              </div>
              <div className="cta__subscribe">
                <h2 className="mb-0">
                  {' '}
                  <span>Subscribe</span> our news
                </h2>
                <p>
                  Hey! Are you tired of missing out on our updates? Subscribe to
                  our news now and stay in the loop!
                </p>
                <form
                  className="cta-form cta-form--style2 form-subscribe"
                  action="#"
                >
                  <div className="cta-form__inner d-sm-flex align-items-center">
                    <input
                      type="email"
                      className="form-control form-control--style2 mb-3 mb-sm-0"
                      placeholder="Email Address"
                    />
                    <button
                      className="trk-btn  trk-btn--large trk-btn--secondary2"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
