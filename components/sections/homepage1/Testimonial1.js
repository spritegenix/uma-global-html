import Testimonial1Slider from '@/components/slider/Testimonial1Slider';

export default function Testimonial1() {
  return (
    <>
      <section className="section mt-50 bg-customers-say">
        <div className="container">
          <h2 className="title-favicon color-white mb-20 title-padding-left wow animate__animated animate__fadeIn">
            What Our Customers Say About Us
          </h2>
          <p className="font-lg color-white pl-55 wow animate__animated animate__fadeIn">
            Hear from businesses and individuals who trust{' '}
            <strong>UMA Global Express</strong>
            for{' '}
            <strong>
              fast, reliable, and cost-effective logistics solutions
            </strong>
            .
          </p>
        </div>
        <div className="container">
          <div className="box-slide-customers mt-50">
            <div className="box-swiper">
              <div className="swiper-container swiper-group-3-customers pb-50">
                <Testimonial1Slider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
