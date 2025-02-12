import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Testimonial1Slider() {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-banner',
        }}
        navigation={{
          prevEl: '.swiper-button-prev-customers',
          nextEl: '.swiper-button-next-customers',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="swiper-wrapper"
      >
        <SwiperSlide className="wow animate__animated animate__fadeIn">
          <div className="card-testimonial-grid">
            <div className="box-author mb-25">
              <Link href="#">
                <img
                  src="/assets/imgs/page/homepage1/author.png"
                  alt="Customer Testimonial"
                />
              </Link>
              <div className="author-info">
                <Link href="#">
                  <span className="font-xl-bold color-brand-2 author-name">
                    Rohit Mehta
                  </span>
                </Link>
                <span className="font-sm color-grey-500 department">
                  E-commerce Business Owner
                </span>
              </div>
            </div>
            <p className="font-md color-grey-700">
              UMA Global Express has been a game-changer for our supply chain.
              Their real-time tracking and seamless logistics network have
              ensured that our customers receive their orders on time, every
              time.
            </p>
            <div className="card-bottom-info justify-content-between">
              <div className="rating text-start">
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <br />
                <span className="font-sm color-white">
                  For supply chain solutions
                </span>
              </div>
              <span className="font-xs color-grey-500 rate-post text-end">
                Rate: 5.0 / 5
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="wow animate__animated animate__fadeIn">
          <div className="card-testimonial-grid">
            <div className="box-author mb-25">
              <Link href="#">
                <img
                  src="/assets/imgs/page/homepage1/author3.png"
                  alt="Customer Testimonial"
                />
              </Link>
              <div className="author-info">
                <Link href="#">
                  <span className="font-xl-bold color-brand-2 author-name">
                    Priya Sharma
                  </span>
                </Link>
                <span className="font-sm color-grey-500 department">
                  Retail Chain Manager
                </span>
              </div>
            </div>
            <p className="font-md color-grey-700">
              We needed a reliable and cost-effective logistics partner, and UMA
              Global Express has exceeded our expectations. Their warehouse
              management and last-mile delivery services are outstanding.
            </p>
            <div className="card-bottom-info justify-content-between">
              <div className="rating text-start">
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <br />
                <span className="font-sm color-white">
                  For warehousing & logistics
                </span>
              </div>
              <span className="font-xs color-grey-500 rate-post text-end">
                Rate: 4.95 / 5
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="wow animate__animated animate__fadeIn">
          <div className="card-testimonial-grid">
            <div className="box-author mb-25">
              <Link href="#">
                <img
                  src="/assets/imgs/page/homepage1/author2.png"
                  alt="Customer Testimonial"
                />
              </Link>
              <div className="author-info">
                <Link href="#">
                  <span className="font-xl-bold color-brand-2 author-name">
                    Arun Kumar
                  </span>
                </Link>
                <span className="font-sm color-grey-500 department">
                  Manufacturing Industry
                </span>
              </div>
            </div>
            <p className="font-md color-grey-700">
              Managing bulk shipments used to be a challenge for us, but UMA
              Global Express made it effortless. Their multimodal transport
              service ensures smooth logistics operations for our business.
            </p>
            <div className="card-bottom-info justify-content-between">
              <div className="rating text-start">
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <br />
                <span className="font-sm color-white">
                  For bulk cargo logistics
                </span>
              </div>
              <span className="font-xs color-grey-500 rate-post text-end">
                Rate: 4.9 / 5
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="wow animate__animated animate__fadeIn">
          <div className="card-testimonial-grid">
            <div className="box-author mb-25">
              <Link href="#">
                <img
                  src="/assets/imgs/page/homepage1/author3.png"
                  alt="Customer Testimonial"
                />
              </Link>
              <div className="author-info">
                <Link href="#">
                  <span className="font-xl-bold color-brand-2 author-name">
                    Neha Verma
                  </span>
                </Link>
                <span className="font-sm color-grey-500 department">
                  Startup Founder
                </span>
              </div>
            </div>
            <p className="font-md color-grey-700">
              As a startup, we needed a logistics partner that could handle our
              rapid growth. UMA Global Express’s express shipping and real-time
              tracking have been a lifesaver for our business.
            </p>
            <div className="card-bottom-info justify-content-between">
              <div className="rating text-start">
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <img src="/assets/imgs/template/icons/star.svg" alt="Rating" />
                <br />
                <span className="font-sm color-white">
                  For express shipping
                </span>
              </div>
              <span className="font-xs color-grey-500 rate-post text-end">
                Rate: 5.0 / 5
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="box-pagination-customers">
        <div className="swiper-button-prev swiper-button-prev-customers swiper-button-prev-style-1 wow animate__animated animate__fadeIn">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div className="swiper-button-next swiper-button-next-customers swiper-button-next-style-1 wow animate__animated animate__fadeIn">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
