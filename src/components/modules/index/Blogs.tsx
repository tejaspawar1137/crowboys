/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper';
import { useRef } from 'react';
import Link from 'next/link';
const BlogData = [
  {
    img: '/images/Carriage.png',
    alt: 'blog image',
    tag: 'Forex trading',
    title: 'Swing Trading Definition',
    description:
      "Our platform is not only about trading—it's also a hub for knowledge and learning. We provide resources.",
    author: 'Vasha Gueye',
    authorimg: '/images/blog/author/1.png',
    date: '20/6/2024',
  },
  {
    img: '/images/Tumbleweed.png',
    alt: 'blog image',
    tag: 'Trading market',
    title: 'hedge funds work?',
    description:
      'To cater to your individual trading preferences, we offer a variety of order types, including market.',
    author: 'Abhivibha Kanmani',
    authorimg: '/images/blog/author/2.png',
    date: '30/5/2024',
  },
  {
    img: '/images/horse 2.png',
    alt: ' blog image',
    tag: 'Investment',
    title: 'Options Trading business?',
    description:
      ' Security is our top priority, and we employ robust measures to ensure the safety of your funds.',
    author: 'Hulya Aydin',
    authorimg: '/images/blog/author/3.png',
    date: '12/07/2024',
  },
  {
    img: '/images/Crowboy (2).png',
    alt: 'blog image',
    tag: 'Forex trading',
    title: 'Swing Trading Definition',
    description:
      "Our platform is not only about trading—it's also a hub for knowledge and learning. We provide resources.",
    author: 'Vasha Gueye',
    authorimg: '/images/blog/author/1.png',
    date: '20/6/2024',
  },
  {
    img: '/images/Crowboy (1).png',
    alt: 'blog image',
    tag: 'Trading market',
    title: 'hedge funds work?',
    description:
      'To cater to your individual trading preferences, we offer a variety of order types, including market.',
    author: 'Abhivibha Kanmani',
    authorimg: '/images/blog/author/2.png',
    date: '30/5/2024',
  },
  {
    img: '/images/crowboy (7).png',
    alt: ' blog image',
    tag: 'Investment',
    title: 'Options Trading business?',
    description:
      ' Security is our top priority, and we employ robust measures to ensure the safety of your funds.',
    author: 'Hulya Aydin',
    authorimg: '/images/blog/author/3.png',
    date: '12/07/2024',
  },
  {
    img: '/images/Whisky.png',
    alt: 'blog image',
    tag: 'Forex trading',
    title: 'Swing Trading Definition',
    description:
      "Our platform is not only about trading—it's also a hub for knowledge and learning. We provide resources.",
    author: 'Vasha Gueye',
    authorimg: '/images/blog/author/1.png',
    date: '20/6/2024',
  },
  {
    img: '/images/Bank.png',
    alt: 'blog image',
    tag: 'Trading market',
    title: 'hedge funds work?',
    description:
      'To cater to your individual trading preferences, we offer a variety of order types, including market.',
    author: 'Abhivibha Kanmani',
    authorimg: '/images/blog/author/2.png',
    date: '30/5/2024',
  },
  {
    img: '/images/crowboy.png',
    alt: ' blog image',
    tag: 'Investment',
    title: 'Options Trading business?',
    description:
      ' Security is our top priority, and we employ robust measures to ensure the safety of your funds.',
    author: 'Hulya Aydin',
    authorimg: '/images/blog/author/3.png',
    date: '12/07/2024',
  },
];
const Blog = () => {
  const swiperRef = useRef();

  const breakpoints = {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  };
  return (
    <section className="blog padding-top padding-bottom">
      <div className="container">
        <div className="section-header d-md-flex align-items-center justify-content-between">
          <div className="section-header__content">
            <h2 className="mb-15">
              <span>articles</span> for pro traders
            </h2>
            <p className="mb-0">
              Hey there pro traders, check out these articles with tips to take
              your trading game to the next level!
            </p>
          </div>
          <div className="section-header__action">
            <div className="swiper-nav swiper-nav--style1">
              <button
                className="swiper-nav__btn blog__slider-prev active"
                onClick={() => swiperRef.current.slidePrev()}
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button
                className="swiper-nav__btn blog__slider-next active"
                onClick={() => swiperRef.current.slideNext()}
              >
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          className="blog__wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="blog__slider swiper">
            <div className="swiper-wrapper">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                spaceBetween={24}
                slidesPerView={1}
                speed={500}
                autoplay={true}
                grabCursor={true}
                loop={true}
                modules={[Navigation, Pagination, A11y]}
                breakpoints={breakpoints}
              >
                {BlogData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-slide">
                      <div className="blog__item blog__item--style2">
                        <div className="blog__item-inner">
                          <div className="blog__thumb">
                            <img src={item.img} alt="blog Images" />
                          </div>

                          <div className="blog__content">
                            <div className="blog__meta">
                              <span className="blog__meta-tag blog__meta-tag--style1">
                                {item.tag}
                              </span>
                            </div>
                            <h5 className="10">
                              <Link href="blog-details">{item.title}</Link>
                            </h5>

                            <p className="mb-15">{item.description}</p>

                            <div className="blog__writer">
                              <div className="blog__writer-thumb">
                                <img src={item.authorimg} alt="writer" />
                              </div>
                              <div className="blog__writer-designation">
                                <h6 className="mb-0">{item.author}</h6>
                                <span>{item.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            href="blogs"
            className="trk-btn trk-btn--border trk-btn--primary mt-40"
          >
            View more
          </Link>
        </div>
      </div>
      <div className="blog__shape">
        <span className="blog__shape-item blog__shape-item--1">
          <span></span>
        </span>
      </div>
    </section>
  );
};
export default Blog;
