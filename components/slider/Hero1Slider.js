import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Hero1Slider() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-banner',
        }}
        className="swiper-wrapper"
      >
        <SwiperSlide>
          <div
            className="banner-1"
            style={{
              backgroundImage: 'url(assets/imgs/page/homepage1/banner.png)',
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <p
                    className="font-md color-white mb-15 wow animate__animated animate__fadeIn"
                    data-wow-delay=".0s"
                  >
                    Global Logistics & Transportation
                  </p>
                  <h1
                    className="color-white mb-25 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".0s"
                  >
                    Fast & Reliable Cargo Solutions
                    <br className="d-none d-lg-block" /> Across the Globe
                  </h1>
                  <div className="row">
                    <div className="col-lg-6">
                      <p
                        className="font-md color-white mb-20 wow animate__animated animate__fadeInUp"
                        data-wow-delay=".0s"
                      >
                        Our cutting-edge air freight services ensure rapid and
                        secure cargo transportation. Whether it's urgent
                        shipments or bulk deliveries, UMA Global Express
                        guarantees on-time delivery with seamless end-to-end
                        logistics.
                      </p>
                    </div>
                  </div>
                  <div className="box-button mt-30">
                    <Link
                      className="btn btn-brand-1-big hover-up mr-40 wow animate__animated animate__fadeInUp"
                      href="#contact"
                    >
                      Contact Us
                    </Link>
                    {/* <a
                      className="btn btn-play popup-youtube hover-up wow animate__animated animate__fadeInUp"
                      onClick={() => setOpen(true)}
                    >
                      <img
                        className="wow animate__animated animate__fadeInUp"
                        src="/assets/imgs/template/icons/play.svg"
                        alt=""
                      />
                      How It Works?
                    </a> */}
                  </div>
                </div>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="vfhzo499OeA"
                  onClose={() => setOpen(false)}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="banner-1"
            style={{
              backgroundImage: 'url(assets/imgs/page/homepage1/banner-2.png)',
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <p
                    className="font-md color-white mb-15 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".0s"
                  >
                    Efficient & Eco-Friendly Logistics
                  </p>
                  <h1
                    className="color-white mb-25 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".0s"
                  >
                    Smart Transport Solutions
                    <br className="d-none d-lg-block" /> Tailored for Your
                    Business
                  </h1>
                  <div className="row">
                    <div className="col-lg-6">
                      <p
                        className="font-md color-white mb-20 wow animate__animated animate__fadeInUp"
                        data-wow-delay=".0s"
                      >
                        Leverage our Pan-India Rail Freight & Multimodal
                        Transport Services to ensure cost-effective and scalable
                        cargo movement. We integrate Air, Rail & Surface
                        Transport for optimized logistics efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="box-button mt-30">
                    <Link
                      className="btn btn-brand-1-big hover-up mr-40 wow animate__animated animate__fadeInUp"
                      href="#contact"
                    >
                      Contact Us
                    </Link>
                    {/* <a
                      className="btn btn-play popup-youtube hover-up wow animate__animated animate__fadeInUp"
                      onClick={() => setOpen(true)}
                    >
                      <img
                        className="wow animate__animated animate__fadeInUp"
                        src="/assets/imgs/template/icons/play.svg"
                        alt=""
                      />
                      How It Works?
                    </a> */}
                  </div>
                </div>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="vfhzo499OeA"
                  onClose={() => setOpen(false)}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination swiper-pagination-banner" />
    </>
  );
}
