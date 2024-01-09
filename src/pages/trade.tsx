import Link from 'next/link';

export default function Home() {
  return (
    <section className="banner banner--style1">
      <div className="banner__bg">
        <div className="banner__bg-element">
          <span className="bg-color d-lg-none"></span>
        </div>
      </div>
      <div className="container">
        <div className="banner__wrapper">
          <div className="row gy-5 gx-4">
            <div className="col-lg-6 col-md-7">
              <div
                className="banner__content"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="banner__content-coin">
                  <img src="images/banner/home1/3.png" alt="coin icon" />
                </div>
                <h1 className="banner__content-heading">
                  Invest Your Money With <span>Higher Return</span>
                </h1>
                <p className="banner__content-moto">
                  Anyone can invest money to different currency to increase
                  their earnings by the help of Bitrader through online.
                </p>
                <div className="banner__btn-group btn-group">
                  <Link
                    href="signin"
                    className="trk-btn trk-btn--primary trk-btn--arrow"
                  >
                    {`Get Started    `}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>{' '}
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className="banner__thumb"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
