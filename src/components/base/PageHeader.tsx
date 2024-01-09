import Link from 'next/link';
const PageHeader = ({ title, text }) => {
  return (
    <>
      <section
        className="page-header bg--cover"
        style={{ backgroundImage: `url(/images/header/1.png)` }}
      >
        <div className="container">
          <div
            className="page-header__content"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2>{title}</h2>
            <nav
              style={{
                '--bs-breadcrumb-divider': "'/'",
              }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item ">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {text}
                </li>
              </ol>
            </nav>
          </div>
          <div className="page-header__shape">
            <span className="page-header__shape-item page-header__shape-item--1">
              <img src="/images/header/2.png" alt="shape-icon" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHeader;
