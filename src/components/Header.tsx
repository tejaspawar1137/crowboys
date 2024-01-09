import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
function Header({ headerClass = null }) {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [scrollTop, setScrollTop] = useState(0);

  const changeImage = useCallback((themeMode = 'dark') => {
    const icon = document.querySelector('#btnSwitch img');

    if (themeMode === 'dark') {
      icon.src = 'images/icon/sun.svg';
      var images = document.querySelectorAll('img.dark');

      for (var i = 0; i < images.length; i++) {
        var oldSrc = images[i].src;
        oldSrc = oldSrc.replace('-dark.', '.');
        var oldIndex = oldSrc.lastIndexOf('.');
        var baseName = oldSrc.slice(0, oldIndex);
        var extension = oldSrc.slice(oldIndex);
        var newSrc = baseName + '-dark' + extension;
        images[i].src = newSrc;
      }
    } else {
      icon.src = 'images/icon/moon.svg';
      var images = document.querySelectorAll('img.dark');

      for (var i = 0; i < images.length; i++) {
        var oldSrc = images[i].src;
        var newSrc = oldSrc.replace('-dark.', '.');
        images[i].src = newSrc;
      }
    }
  }, []);

  const updateThemeColor = useCallback(
    (themeMode = 'dark') => {
      const colorSwitcher = document.getElementById('btnSwitch');

      document.documentElement.setAttribute('data-bs-theme', themeMode);
      localStorage.setItem('theme', themeMode);

      if (themeMode === 'dark') {
        colorSwitcher.classList.add('dark-switcher');
      } else {
        colorSwitcher.classList.remove('dark-switcher');
      }

      changeImage(themeMode);
    },
    [changeImage],
  );

  const toggleTheme = () => {
    const theme = localStorage.getItem('theme');

    if (theme && theme === 'dark') {
      updateThemeColor('dark');
    } else {
      updateThemeColor('dark');
    }
  };
  // =================== light and dark start ================== //

  function switchThemeByUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme');

    if (theme) {
      localStorage.setItem('theme', 'dark');
    }
  }

  // =================== light and dark end ================== //

  useEffect(() => {
    switchThemeByUrl();
    const theme = localStorage.getItem('theme');
    updateThemeColor(localStorage.getItem('theme'));
  }, [router.query.theme, updateThemeColor]);

  // ........header Sticky..................
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    router.events.on('routeChangeStart', removeActive);

    return () => {
      window.removeEventListener('scroll', isSticky);
      router.events.off('routeChangeStart', removeActive);
    };
  });
  useEffect(() => {
    setScrollTop(window.scrollY);
  }, [scrollTop]);

  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('header-fixed', 'fadeInUp')
      : header.classList.remove('header-fixed', 'fadeInUp');
  };

  function closeAllMenus() {
    let elements = document.querySelectorAll('.menu-item-has-children.open');
    elements.forEach((item) => {
      item.classList.remove('open');
      item.querySelector('.submenu').style.display = 'none';
    });
  }

  // ...........main menu...............
  const toggleMenu = () => {
    setMenu(!menu);
    closeAllMenus();
  };

  //............submenu...............
  function removeActive() {}

  function toggleActive(event) {
    event.preventDefault();
    const mediaQuery = window.matchMedia('(max-width: 991px)');

    if (mediaQuery.matches) {
      // submenu open
      event.currentTarget.parentElement.classList.toggle('open');
      const submenu = event.currentTarget.nextElementSibling;
      if (!submenu.style.display || submenu.style.display === 'none') {
        submenu.style.display = 'block';
      } else {
        submenu.style.display = 'none';
      }
    }
  }

  // ..............modal....................
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const substr = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) : str;
  };

  return (
    <>
      <div
        className="lightdark-switch"
        onClick={toggleTheme}
        style={{ display: 'none' }}
      >
        <span className="switch-btn" id="btnSwitch">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            src="images/icon/moon.svg"
            alt="light-dark-switchbtn"
            className="swtich-icon"
          />
        </span>
      </div>

      <header
        className={`header-section ${headerClass ? headerClass : 'bg-color-3'}`}
        onScroll={isSticky}
      >
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <Link href="/">
                  <img
                    className="dark"
                    src="/images/logo/logo.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="menu-area">
                <ul
                  id="menu"
                  className={`menu menu--style1 ${menu ? 'active' : ''}`}
                >
                  <li className="megamenu menu-item-has-children">
                    <Link scroll={false} href="/#0" onClick={toggleActive}>
                      Demos{' '}
                    </Link>

                    <ul className="submenu">
                      <li>
                        <div className="home-showcase">
                          <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                            <div className="col order-first">
                              <div className="home-showcase__item">
                                <div className="home-showcase__image">
                                  <img
                                    src="images/demo/1.png"
                                    alt="home-showcase"
                                  />
                                  <div className="home-showcase__buttons">
                                    <Link
                                      href={{
                                        pathname: '/',
                                        query: { theme: 'dark' },
                                      }}
                                      className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"
                                    >
                                      <span>Preview</span>
                                    </Link>
                                  </div>
                                </div>
                                <h3 className="home-showcase__title">
                                  <Link
                                    href={{
                                      pathname: '/',
                                      query: { theme: 'dark' },
                                    }}
                                  >
                                    Stock Trading
                                  </Link>
                                </h3>
                              </div>
                            </div>
                            <div className="col">
                              <div className="home-showcase__item">
                                <div className="home-showcase__image">
                                  <img
                                    src="images/demo/1-dark.png"
                                    alt="home-showcase"
                                  />
                                  <div className="home-showcase__buttons">
                                    <Link
                                      href={{
                                        pathname: '/',
                                        query: { theme: 'dark' },
                                      }}
                                      className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"
                                    >
                                      <span>Preview</span>
                                    </Link>
                                  </div>
                                </div>
                                <h3 className="home-showcase__title">
                                  <Link
                                    href={{
                                      pathname: '/',
                                      query: { theme: 'dark' },
                                    }}
                                  >
                                    Stock Trading Dark
                                  </Link>
                                </h3>
                              </div>
                            </div>
                            <div className="col">
                              <div className="home-showcase__item">
                                <div className="home-showcase__image">
                                  <img
                                    src="images/demo/2.png"
                                    alt="home-showcase"
                                  />
                                  <div className="home-showcase__buttons">
                                    <Link
                                      href={{
                                        pathname: '/index-2',
                                        query: { theme: 'dark' },
                                      }}
                                      className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"
                                    >
                                      <span>Preview</span>
                                    </Link>
                                  </div>
                                </div>
                                <h3 className="home-showcase__title">
                                  {' '}
                                  <Link
                                    href={{
                                      pathname: '/index-2',
                                      query: { theme: 'dark' },
                                    }}
                                  >
                                    Crypto Trading
                                  </Link>
                                </h3>
                              </div>
                            </div>
                            <div className="col">
                              <div className="home-showcase__item">
                                <div className="home-showcase__image">
                                  <img
                                    src="images/demo/2-dark.png"
                                    alt="home-showcase"
                                  />
                                  <div className="home-showcase__buttons">
                                    <Link
                                      href={{
                                        pathname: '/index-2',
                                        query: { theme: 'dark' },
                                      }}
                                      className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"
                                    >
                                      <span>Preview</span>
                                    </Link>
                                  </div>
                                </div>
                                <h3 className="home-showcase__title">
                                  {' '}
                                  <Link
                                    href={{
                                      pathname: '/index-2',
                                      query: { theme: 'dark' },
                                    }}
                                  >
                                    Crypto Trading Dark
                                  </Link>
                                </h3>
                              </div>
                            </div>
                            <div className="col">
                              <div className="home-showcase__item">
                                <div className="home-showcase__image">
                                  <img
                                    src="images/demo/3.png"
                                    alt="home-showcase"
                                  />
                                  <div className="home-showcase__buttons">
                                    <Link
                                      href={{
                                        pathname: '/index-3',
                                        query: { theme: 'dark' },
                                      }}
                                      className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"
                                    >
                                      <span>Preview</span>
                                    </Link>
                                  </div>
                                </div>
                                <h3 className="home-showcase__title">
                                  <Link
                                    href={{
                                      pathname: '/index-3',
                                      query: { theme: 'dark' },
                                    }}
                                  >
                                    Forex Trading
                                  </Link>
                                </h3>
                              </div>
                            </div>
                            <div className="col">
                              <div className="home-showcase__item">
                                <div className="home-showcase__image">
                                  <img
                                    src="images/demo/3-dark.png"
                                    alt="home-showcase"
                                  />
                                  <div className="home-showcase__buttons">
                                    <Link
                                      href={{
                                        pathname: '/index-3',
                                        query: { theme: 'dark' },
                                      }}
                                      className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"
                                    >
                                      <span>Preview</span>
                                    </Link>
                                  </div>
                                </div>
                                <h3 className="home-showcase__title">
                                  <Link
                                    href={{
                                      pathname: '/index-3',
                                      query: { theme: 'dark' },
                                    }}
                                  >
                                    Forex Trading Dark
                                  </Link>
                                </h3>
                              </div>
                            </div>
                            {/* <div className="col">
                            <div className="home-showcase__item">
                              <div className="home-showcase__image">
                                <img src="images/demo/4.png" alt="home-showcase" />
                                <div className="home-showcase__badge">
                                  <span>New</span>
                                </div>
                                <div className="home-showcase__buttons">
                                  <Link href={{
                          pathname: '/index-4',
                          query: { theme: "dark" },
                        }}
                                    className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"><span>Preview</span></Link>
                                </div>
                              </div>
                              <h3 className="home-showcase__title"><Link href={{
                          pathname: '/index-4',
                          query: { theme: "dark" },
                        }}>Day Trading</Link>
                              </h3>
                            </div>
                          </div>
                          <div className="col">
                            <div className="home-showcase__item">
                              <div className="home-showcase__image">
                                <img src="images/demo/9.png" alt="home-showcase" />
                                <div className="home-showcase__badge">
                                  <span>New</span>
                                </div>
                                <div className="home-showcase__buttons">
                                  <Link href={{
                          pathname: '/index-4',
                          query: { theme: "dark" },
                        }}
                                    className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"><span>Preview</span></Link>
                                </div>
                              </div>
                              <h3 className="home-showcase__title"><Link href={{
                          pathname: '/index-4',
                          query: { theme: "dark" },
                        }}>Day Trading Dark</Link>
                              </h3>
                            </div>
                          </div>
                          <div className="col">
                            <div className="home-showcase__item">
                              <div className="home-showcase__image">
                                <img src="images/demo/5.png" alt="home-showcase" />
                                <div className="home-showcase__badge">
                                  <span>New</span>
                                </div>
                                <div className="home-showcase__buttons">
                                  <Link href={{
                          pathname: '/index-5',
                          query: { theme: "dark" },
                        }}
                                    className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"><span>Preview</span></Link>
                                </div>
                              </div>
                              <h3 className="home-showcase__title"><Link href={{
                          pathname: '/index-5',
                          query: { theme: "dark" },
                        }}>Trading Platform</Link>
                              </h3>
                            </div>
                          </div>
                          <div className="col">
                            <div className="home-showcase__item">
                              <div className="home-showcase__image">
                                <img src="images/demo/10.png" alt="home-showcase" />
                                <div className="home-showcase__badge">
                                  <span>New</span>
                                </div>
                                <div className="home-showcase__buttons">
                                  <Link href={{
                          pathname: '/index-5',
                          query: { theme: "dark" },
                        }}
                                    className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"><span>Preview</span></Link>
                                </div>
                              </div>
                              <h3 className="home-showcase__title"><Link href={{
                          pathname: '/index-5',
                          query: { theme: "dark" },
                        }}>Trading Platform Dark</Link>
                              </h3>
                            </div>
                          </div> */}
                            <div className="col order-last">
                              <div className="home-showcase__item">
                                <div className="home-showcase__image">
                                  <img
                                    src="images/demo/new.png"
                                    alt="home-showcase"
                                  />
                                </div>
                                <h3 className="home-showcase__title">
                                  {' '}
                                  <Link scroll={false} href="/#0">
                                    New Demos
                                  </Link>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/services" onClick={toggleActive}>
                      Services
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/service-details">Services Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link scroll={false} href="/#0" onClick={toggleActive}>
                      About
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/price">Price</Link>
                      </li>
                      <li>
                        <Link href="/team">Team</Link>
                      </li>
                      <li>
                        <Link href="/team-2">Team 2</Link>
                      </li>
                      <li>
                        <Link href="/team-details">Team Details</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <Link scroll={false} href="/#0" onClick={toggleActive}>
                      Pages
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link href="blogs">Blogs</Link>
                      </li>
                      <li>
                        <Link href="blog-sidebar">Blog - Side Bar</Link>
                      </li>
                      <li>
                        <Link href="blog-details">Blog Details</Link>
                      </li>
                      <li>
                        <Link href="signup">Sign Up</Link>
                      </li>
                      <li>
                        <Link href="signup-2">Sign Up 2</Link>
                      </li>
                      <li>
                        <Link href="signin">Sign In</Link>
                      </li>
                      <li>
                        <Link href="signin-2">Sign In 2</Link>
                      </li>
                      <li>
                        <Link href="forgot-pass">Reset Password</Link>
                      </li>
                      <li>
                        <Link href="forgot-pass-2">Reset Password 2</Link>
                      </li>
                      <li>
                        <Link href="404">404 Error</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="header-action">
                <div className="menu-area">
                  <div className="header-btn">
                    <Link
                      href="signup"
                      className="trk-btn trk-btn--border trk-btn--primary"
                    >
                      <span>Connect</span>
                    </Link>
                  </div>

                  {/* <!-- toggle icons --> */}
                  <div
                    className={
                      menu
                        ? 'header-bar d-lg-none header-bar--style1 active'
                        : 'header-bar d-lg-none header-bar--style1'
                    }
                    onClick={() => toggleMenu()}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
