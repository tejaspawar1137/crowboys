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
          <div
            className="row gy-2 gx-4"
            style={{ display: 'flex', alignItems: 'center' }}
          >
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
                  <span>The Future Is WILD! </span>
                </h1>
                {/* <h1 className="banner__content-heading">
                  <span> Us The Best</span>
                </h1> */}
                <h2 className="banner__content-heading">Quality & Safety</h2>

                <p style={{color:"#cccccc"}} className="banner__content-moto">
                Welcome to Crowboys Finance the frontier of decentralized crypto exchange where innovation meets the Wild West of digital assets. Saddle up for a seamless trading experience with our NFT Staking, Token Swapping, and Cross-Chain Technology that is as swift as a mustang, secure as a bank vault, and innovative as the pioneers of the blockchain prairie.
                </p>
                {/* <div className="banner__btn-group btn-group">
                  <Link
                    href="signin"
                    className="trk-btn trk-btn--primary trk-btn--arrow"
                  >
                    Start Now
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>{' '}
                  </Link>
                </div> */}
              </div>

              <div className="col-lg-6">
                <div
                  className="banner__thumb"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                ></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div
                className="trade-right-section"
                // data-aos="fade-right"
                // data-aos-duration="1000"
              >
                <div className="stacking-approve">
                  <div className="stacking-approve-field mb-5">
                    <label
                      className="form-label"
                      style={{ background: '#c3976a;' }}
                    >
                      {' '}
                      <h3> Exchange </h3>
                    </label>
                    <br />
                    <span>
                      Trade tokens with Few Clicks <br />
                    </span>
                    <div className="input-group">
                      <input
                        type="text"
                        style={{ background: 'transparent' }}
                        className="form-control"
                        aria-label="Approve Stack"
                        id="approve-stack"
                        placeholder="0.00"
                      />
                      <select
                        className="input-group-btn withdraw-btn"
                        aria-label="Select Region"
                      >
                        <option>Sol</option>
                        <option>Matic</option>
                        <option>USDT</option>
                        <option>BUSD</option>
                        <option>Eth</option>
                      </select>
                    </div>
                  </div>
                  <div className="stacking__approve-withdraw mb-5">
                    <br />

                    <div className="input-group">
                      <input
                        style={{ background: 'transparent' }}
                        type="text"
                        className="form-control"
                        aria-label="Withdraw Stack"
                        id="withdraw-stack"
                        placeholder="0.00"
                      />

                      <select
                        className="input-group-btn withdraw-btn"
                        aria-label="Select Region"
                      >
                        <option>Eth</option>
                        <option>Sol</option>
                        <option>Matic</option>
                        <option>USDT</option>
                        <option>BUSD</option>
                      </select>
                    </div>
                  </div>
                  <a href="#" className="default-btn">
                    <span>Convert Now </span>
                  </a>
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
